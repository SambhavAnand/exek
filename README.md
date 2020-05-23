# Exek - A Shortcut Power Tool
You demand the best for your editor. Why not use all your programs like a power user. Exek, a search bar activated on **Ctrl + k** allows you to find and execute shortcuts for all your applications and websites quickly. Download [here](https://storage.googleapis.com/exek/exek-1.0.0.dmg "Title").
NOTE: Because we currently don't have an apple developer account, you may face some sercurity/verification issues while trying to install this. Please bare with us and check out the steps to work around the issues at the bottom of this page. 

## The Tool
If you are reading this, you are probably a friend of mine (Arman) or Sambhav. **Exek** is a "spotlight" search for shortcuts. As programmers and general power users of our computers, there are always a number of shortcuts we remember. A handful at most, but given the high frequency of use they save time, reduce frustration, and make using the software easier, faster, and more enjoyable. The purpose of this tool is to expand the number of shortcuts one uses and speed up the process of executing shortcuts.  

**Exek** is pulled up with a with **Ctrl-K** or via the menu bar icon which appears in the top right. The tool detects the programs running in the foreground and loads relevant shortcuts in the search bar. We use  __fuzzy__ searching to match the search to shortcuts and their tags (we intend to improve this in the future). The user can navigate through the bar using arrow keys and also execute shortcut by pressing the return (enter) key. **Ctrl-K** toggles the window in and out of the view.

![README-Demo](https://user-images.githubusercontent.com/58370547/82637180-ddf69500-9c21-11ea-99d1-ef4f55686e13.gif)

## Current Apps/Website Support
Currently the following are supported: 
1. MacOS System 
2. Google Chrome Browser 
3. GSuite : Gmail, Docs, Excel, Calendar, Youtube
4. Microsoft: Word, PPT 
5. Sublime Text 
6. Notion
7. Airtable 
8. Safari
9. Finder
10. Apple Calendar
11. github.com
12. Atom
13. Mail (Mac App)

If you find yourself using this tool for a program or site where we don't have shortcuts supported - let us know and either Sambhav or I will add it ASAP. 

# Note to Friends/Early Users
Thanks a bunch for using this and giving us feedback. Over the course of the next weekc(s) Sambhav and I will be in touch with you to get your feedback. Nothing like an email detailing your criticisms/ideas/what you enjoyed. Anything to make this tool better and turn it into something you would enjoy using is much appreciated! Please let us know if there are any bugs/isssues.

Contact:
@ arman.jindal@columbia.edu 
@ sambhav182@gmail.com 

### Technical Details 
* The is an application built with the Electron framework which wraps around Javascript, CSS, and HTML
* The backend is a simple express server hosted on heroku. It's backed by a simple level-db database in order to dynamically server the user new shortcuts without an application update. The backend will also add an api endpoint in the future which allows users to add and define their own shortcuts.

### Features for Next Version
* Improved search and ranking of shortcuts.
    * ML autosuggestion
    * Temporality and Locality to "cache" likely shortcuts
* Menu bar organizes all shortcuts - like the iMessage contact list
* Links to documentation for shortcuts easily accessible

### Common Questions and Solutions
#### The search bar shows up, the shortcuts show up, but the command doesn't run when I hit return/enter
This is probably happening because you forgot to give the app the permissions to execute commands on your behalf when prompted. 
To fix this problem, on your mac go to:
* System Preferences -> Security and Privacy -> Privacy and then scroll down to the Accessibility tab. 
* Click on the Lock to on the bottom left to make changes. 
* Toggle the check box next to **Exek**.
Note: if the box was already checked, and you're facing the problem, try to uncheck the box, and then checking it again. We faced this error
during testing and rechecking the box fixed the issue.
If you can't find **Exek** in the Accessibility tab, go to the Automation Tab within Privacy and re-check the box next to "System Events" under
***Exek**

#### I am getting an unverfied developer error when I open **Exek**
We know this looks suss. We are working on getting a verified developer account but the process takes some time and we wanted to get this out there
before. 
In order to fix this error, on your mac go to:
* System Preferences -> Security and Privacy -> General
* You'll see a prompt which says Apple blocked an app from an unverified developer. Click on the lock to make changes, and then click on open anyways. 
* You should be able to install the app now. 
* As usual, to activate the search bar, hit **Ctrl-K** on your keyboard. 

#### I've installed the app successfully but how do I run this. 
Pull up your preview bar (Command + Space) and type **Exek**. Select the application and hit enter. The app will now start running in the background. 
You should see a logo pop up on the top right of your menu bar. You can now pull up the search bar at any point by hitting **Ctrl-K**
The first time you open up the bar, you might be asked to grant the app permissions to execute commands on your behalf. 

#### I'm facing some other issue
Please reach out to Arman or me (Sambhav) detailing the problems you are facing. As always, don't hesitate to be brutally honest with any feedback/suggestions
you might have. 
