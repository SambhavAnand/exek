const { ipcRenderer, remote, shell } = require("electron")

const { generateShortcuts, execCommand } = require('./scripts/lib')

const search = document.getElementById('search');
const matchList = document.getElementById('match-list')

let allShortcuts;
var index;
var liSelected;

ipcRenderer.on("initialize", (event) => {
  allShortcuts = [];
  index = -1;
})

ipcRenderer.on("appShortcuts", (event, appName) => {
  //Make the cursor automatically enter the search bar
  search.focus()
  generateShortcuts(appName)
  .then(shortcuts => {
    //initial render here
    outputHTML(shortcuts)
    allShortcuts = Object.assign({}, shortcuts);
  })
})


//TODO: Change styling for the case when app is not supported
ipcRenderer.on("noAppShortcuts", (event, error) => {
  const errorHtml = `
            <div class="card card-body mb-1">
            <li class= "bar-text">${error.msg}</li>
            </div>
        `
    matchList.innerHTML = errorHtml

})

//search the shortcuts and filter it

const searchShortcuts = async searchText => {
//Get Matches to ciurrent text input
    let matches = {}
    Object.keys(allShortcuts).forEach(header => {
      let filteredData = []
      let headerData = allShortcuts[header]
      filteredData = headerData.filter(state => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return state.text.match(regex) || state.shortcut.match(regex); 
      })
      if(filteredData.length !== 0)
        matches[header] = [...filteredData]
    })
    if(searchText.length === 0){
        //need to change this to include top 5/10 shortcuts
        matches = Object.assign({}, allShortcuts);
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
          <div class="card card-body mb-1">
          <h5>${header}</h5>
          <li class="bar-text">${match.text} ${match.shortcut}</li>
          </div>
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
  var len = ul.getElementsByTagName('li').length-1;
  console.log(len)
  if(event.which === 40) {
    index++;
    console.log(index)
  //down 
  if (liSelected) {
			removeClass(liSelected, 'selected');
      next = ul.getElementsByTagName('li')[index];
      console.log(next.classList)
      if(typeof next !== undefined && index <= len) {
                console.log('MADE IT HERE')
                liSelected = next;
            } else {
                console.log('in the Sub Else')
             	  index = 0;
                liSelected = ul.getElementsByTagName('li')[0];
            }
            addClass(liSelected, 'selected');
            console.log(index);
    }
    else {
      index = 0;
   	  liSelected = ul.getElementsByTagName('li')[0];
			addClass(liSelected, 'selected');
    }
  }
  //case when enter is hit - execute the Apple Script
  else if (event.which === 38) {
  //up
    if (liSelected) {
			removeClass(liSelected, 'selected');
      index--;
      console.log(index);
      next = ul.getElementsByTagName('li')[index];
      if(typeof next !== undefined && index >= 0) {
                liSelected = next;
            } else {
            		index = len;
                 liSelected = ul.getElementsByTagName('li')[len];
            }
            addClass(liSelected, 'selected');
    }
    else {
      index = 0;
   	  liSelected = ul.getElementsByTagName('li')[len];
			addClass(liSelected, 'selected');
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
    console.log("in the Add Class")
    if(el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
    console.log(el.className)

};