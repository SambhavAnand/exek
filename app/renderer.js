const { ipcRenderer, remote, shell } = require("electron")

const { generateShortcuts, execCommand } = require('./scripts/lib')

const search = document.getElementById('search');
const matchList = document.getElementById('match-list')

let allShortcuts;
let currentAppShorcuts;
var index;
var liSelected;

ipcRenderer.on("initialize", (event) => {
  currentAppShorcuts = [];
  index = -1;
  search.value = ''
})

ipcRenderer.on("checkForUpdates", (event, shortcuts) => {
  allShortcuts = Object.assign({}, shortcuts)
})

ipcRenderer.on("appShortcuts", (event, appName) => {
  //Make the cursor automatically enter the search bar
  search.focus()
  generateShortcuts(allShortcuts, appName)
  .then(shortcuts => {
    //initial render here
    outputHTML(shortcuts)
    currentAppShorcuts = Object.assign({}, shortcuts);
  })
})


//TODO: Change styling for the case when app is not supported
ipcRenderer.on("error", (event, error) => {
  const errorHtml = `
            <div class="card card-body mb-1">
            <h5 class= "bar-text">${error.msg}</h5>
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
        return item.text.match(regex) || item.shortcut.match(regex) || (item.tags?item.tags.match(regex):false )
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
    
    const matchKeys = Object.keys(matches)
    let html = ''
    if(matchKeys.length > 0) {
      matchKeys.forEach(header => {
        //On line 81 we are printing the header, (Google Chrome, docs.googel.com etc)
        //But it would be nice if we can create sections. like a google chrome header, then all the results for it
        //then a docs.google.com header and all results for it etc...
        //If we go with that then we'll need to print it all out before line 77 (matches[header].forEach)
        //else we can let it be where it is (on line 81 ) but will probably need to add a different styling to it
        matches[header].forEach(match => {
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
    if(event.which === 40) {
      index++;
    //down 
    if (liSelected) {
        search.blur()
        liSelected.scrollIntoView({
          //behavior: 'smooth'
        });
        removeClass(liSelected, 'selected');
        next = ul.getElementsByTagName('ul')[index];
        if(typeof next !== undefined && index <= len) {
                  liSelected = next;
              } else {
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
    //case when enter is hit - execute the Apple Script
    else if (event.which == 13) {
      if(liSelected) {
        const metadata = liSelected.getElementsByClassName('shortcut-cmd')[0].innerHTML
        const [command, appName] = metadata.split(';')
        execCommand.execCommand(appName, command)
      }
    }
    else if (event.which === 38) {
    //up
      if (liSelected) {
        search.blur()
        removeClass(liSelected, 'selected');
        index--;
        next = ul.getElementsByTagName('ul')[index];
        next.scrollIntoView({
          //behavior: 'smooth'
        });
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

function addClass(el, className) {
    if(el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};