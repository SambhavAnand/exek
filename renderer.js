const { ipcRenderer, remote, shell } = require("electron")

const { generateShortcuts, execCommand } = require('./scripts/lib')

const search = document.getElementById('search');
const matchList = document.getElementById('match-list')

let currentShortcuts = [];

ipcRenderer.on("appShortcuts", (event, appName) => {
  //Make the cursor automatically enter the search bar
  search.focus()
  generateShortcuts(appName)
  .then(shortcuts => {
    //initial render here
    outputHTML(shortcuts)
    currentShortcuts = shortcuts;
  })
})


//TODO: Change styling for the case when app is not supported
ipcRenderer.on("noAppShortcuts", (event, error) => {
  const errorHtml = `
            <div class="card card-body mb-1">
            <h4>${error.msg}<span class="text-primary"></h4>
            </div>
        `
    matchList.innerHTML = errorHtml

})

//search the shortcuts and filter it

const searchShortcuts = async searchText => {
//Get Matches to ciurrent text input
    console.log(searchText)
    let matches = {}
    Object.keys(currentShortcuts).forEach(header => {
      let filteredData = []
      let headerData = currentShortcuts[header]
      filteredData = headerData.filter(state => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return state.text.match(regex) || state.shortcut.match(regex); 
      })
      if(filteredData.length !== 0)
        matches[header] = [...filteredData]
    })
    console.log(matches)
    if(searchText.length === 0){
        //need to change this to include top 5/10 shortcuts
        matches = [];
    }
   //outputHTML(matches);
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
        //One line 81 we are printing the header, (Google Chrome, docs.googel.com etc)
        //But it would be nice if we can create sections. like a google chrome header, then all the results for it
        //then a docs.google.com header and all results for it etc...
        //If we go with that then we'll need to print it all out before line 77 (matches[header].forEach)
        //else we can let it be where it is (on line 81 ) but will probably need to add a different styling to it
        matches[header].forEach(match => {
          html += `
          <div class="card card-body mb-1">
          <h5>${header}</h5>
          <h4>${match.text} (${match.shortcut}) <span class="text-primary"></h4>
          </div>
          `
        })
      })
      matchList.innerHTML = html
    }

    // if(matches.length > 0){
    //     const html = matches.map(match => `
    //         <div class="card card-body mb-1">
    //         <h5> Chrome </h5>
    //         <h4>${match.text} (${match.shortcut}) <span class="text-primary"></h4>
    //         </div>
    //     `).join('');
    //     matchList.innerHTML = html;
    // }
}
search.addEventListener('input', ()=> searchShortcuts(search.value))