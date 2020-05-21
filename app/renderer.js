const { ipcRenderer, remote, shell } = require("electron")
const { generateShortcuts, execCommand } = require('./scripts/lib')
const search = document.getElementById('search');
const matchList = document.getElementById('match-list')

let allShortcuts;
let currentAppShorcuts;
var index;
var liSelected;
let systemShortcuts = []
let currentAppName = ''
const NO_ELEMENTS_PER_PAGE = 12;
//We can dynamically update this later
let systemName = "MacOS"

ipcRenderer.on("initialize", (event) => {
  currentAppShorcuts = [];
  index = -1;
  search.value = '',
  currentAppName = ''
})

ipcRenderer.on("updateData", (event, shortcuts) => {
  allShortcuts = Object.assign({}, shortcuts)
  systemShortcuts = [...shortcuts[systemName]]
})

ipcRenderer.on("appShortcuts", (event, appName) => {
  //Make the cursor automatically enter the search bar
  search.focus()
  currentAppName = appName
  //Display the applications shortcuts
  if(appName in allShortcuts) {
    generateShortcuts(allShortcuts, appName)
    .then(shortcuts => {
    //initial render here
      currentAppShorcuts = Object.assign({}, shortcuts);
      outputHTML(shortcuts)
    })
  }
  //One Still Wants to output MacOS Shortcuts
  else {
    outputHTML({})
  }
  
})


//TODO: Change styling for the case when app is not supported
ipcRenderer.on("error", (event, error) => {
  const errorHtml = `
            <div class="shortcut-container" style="align-items : center">
            <p class= "shortcut-description">${error.msg}</h5>
            </div>
        `
    matchList.innerHTML = errorHtml

})

//search the shortcuts and filter it

const searchShortcuts = async searchText => {
  index = -1;
//Get Matches to ciurrent text input
    let matches = {}
    Object.keys(currentAppShorcuts).forEach(header => {
      let filteredData = []
      let headerData = currentAppShorcuts[header]
      filteredData = headerData.filter(item => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return item.text.match(regex) || item.shortcut.match(regex) || (item.tags?item.tags.match(regex):false ) || header.match(regex)
      })
      if(filteredData.length !== 0)
        matches[header] = [...filteredData]
    })
    if(searchText.length === 0){
        //need to change this to include top 5/10 shortcuts
        matches = Object.assign({}, currentAppShorcuts);
    }
   outputHTML(matches);
};

const outputHTML = matches => {
    
  /*
    Needed because of division by header
    Object structure is:
    {
        Google Chrome: [...chrome shortcuts],
        docs.google.com: [...docs.google.com shortcuts]
    }
  */
    
    let matchesWithSystem = {...matches}
    matchesWithSystem[systemName] = systemShortcuts
    const matchKeys = Object.keys(matchesWithSystem)
    let html = ''
    if(matchKeys.length > 0) {
      matchKeys.forEach(header => {
        //On line 81 we are printing the header, (Google Chrome, docs.googel.com etc)
        //But it would be nice if we can create sections. like a google chrome header, then all the results for it
        //then a docs.google.com header and all results for it etc...
        //If we go with that then we'll need to print it all out before line 77 (matches[header].forEach)
        //else we can let it be where it is (on line 81 ) but will probably need to add a different styling to it
        matchesWithSystem[header].forEach(match => {
          html += `
            <ul class="entry-styling">
                <div class="shortcut-container">
                  <p class="shortcut-description">${match.text}</p>
                  <p class="shortcut">${match.shortcut}</p> 
                </div>
                <p class="app-name">${header}</p>
              <p class="shortcut-cmd">${match.command};${match.app_name}</p>
            </ul>
          `
        })
      })
    }
    else {
      html = `
        <div class="card card-body mb-1">
        <h5>No shortcuts match your search</h5>
        </div>
      `
    }
    matchList.innerHTML = html
}
search.addEventListener('input', ()=> searchShortcuts(search.value))


//Arrow key functionality case event.which == 13 is when enter is pressed 

document.addEventListener('keydown', function(event) {
  var ul = document.getElementById('match-list');
  var len = ul.getElementsByTagName('ul').length-1;
  if(len >= 0){
    //Key Press Down
    if(event.which === 40) {
      index++;
      if (liSelected) {
          search.blur()
          removeClass(liSelected, 'selected');
          next = ul.getElementsByTagName('ul')[index];
          if(typeof next !== undefined && index <= len) {
            liSelected = next;
          } 
          else{
            index = 0;
            liSelected = ul.getElementsByTagName('ul')[0];
          }
          addClass(liSelected, 'selected');
        }
      else {
        index = 0;
        liSelected = ul.getElementsByTagName('ul')[0];
        addClass(liSelected, 'selected');
      }
    }
    //Key Press Enter 
    else if (event.which == 13) {
      if(liSelected) {
        const metadata = liSelected.getElementsByClassName('shortcut-cmd')[0].innerHTML
        const [command, appName] = metadata.split(';')
        console.log(metadata);
        execCommand.execCommand(currentAppName, command)
      }
  }
  else if (event.which === 38) {
    //Key Press Up
      if (liSelected) {
        search.blur()
        removeClass(liSelected, 'selected');
        index--;
        next = ul.getElementsByTagName('ul')[index];
        if(typeof next !== undefined && index >= 0) {
                  liSelected = next;
              } else {
                  index = len;
                  liSelected = ul.getElementsByTagName('ul')[len];
              }
              addClass(liSelected, 'selected');
      }
      else if(index < -1){
        index = 0;
      }
      else {
        index = 0;
        liSelected = ul.getElementsByTagName('ul')[len];
        addClass(liSelected, 'selected');
      }
    }
    else{
      search.focus()
    }
  }
}, false);

function removeClass(el, className) {    
    if(el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};
function returnOffsetY(el){
  var bodyRect = document.body.getBoundingClientRect();
  var elemRect = el.getBoundingClientRect();
  console.log((elemRect.bottom - bodyRect.top));
  return (elemRect.bottom - bodyRect.top);
}

function scrollToTargetAdjusted(el){
  var headerOffset = 45;
  var elementPosition = el.getBoundingClientRect();
  var offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}

function addClass(el, className) {
  if(returnOffsetY(el) > 325 || returnOffsetY(el) < 55){
    el.scrollIntoView(false);
    //offset
    if(returnOffsetY(el) > 55)
      window.scrollBy({top:108})
  }
  if(el.classList) {
      el.classList.add(className);
    } 
  else {
      el.className += ' ' + className;
  }
};