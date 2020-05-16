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
    let matches = currentShortcuts.filter( state => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return state.text.match(regex) || state.shortcut.match(regex); 
    });

    if(searchText.length === 0){
        //need to change this to include top 5/10 shortcuts
        matches = [];
    }
    outputHTML(matches);
};

const outputHTML = matches => {
    if(matches.length > 0){
        const html = matches.map(match => `
            <div class="card card-body mb-1">
            <h5> Chrome </h5>
            <h4>${match.text} (${match.shortcut}) <span class="text-primary"></h4>
            </div>
        `).join('');
        matchList.innerHTML = html;
    }
}
search.addEventListener('input', ()=> searchShortcuts(search.value))