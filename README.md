# Shortcut Power Tool
First release. (TO-ADD) Link to download. Mac only for now...

## The Tool
If you are reading this, you are probably a friend of mine (Arman) or Sambhav. This tool (yet to be named) is a "spotlight" search for shorcuts. As programmers and general powerusers of our computers, there are always a number of shortcut we remeber. A handful at most, but given the high frequency of use they save time, redeuce frustration, and make using software easier, faster and more enjoyable. The purpose of this tool is to expand the number of shortcuts one uses and speed up the process of executing shortcuts.  

The tool - search bar - is pulled up with a with **Ctrl-K** or via the menu bar icon which appears in the top right. The tool detects the programs running in the foreground and loads relevant shorcuts in the search bar. Search is  __fuzzy__ using simple RegularExpression to match the search to shortcuts and their tags (we inted to improve this in the future). Using the key arrows up and down you can navigate the shortcuts and the enter keypress the shortcut is executed (see exmaple below). **Ctrl-K** toggles the window into view. The window can be dragged anywhere in the screen. 

<img src=https://imgflip.com/gif/42eku1> 

## Current Apps/Website Support
Currently the following are supported: 
1. MacOS System 
2. Google Chrome Browser 
3. GSuite : Gmail, Docs, Excel, Calendar, Youtube
4. Microsoft: Word, PPT 
5. (TODO) Sublime Text 
6. Notion
7. Airtable 

If you find yourself using this tool for a program or site where we don't have shortcuts supported - let us know and either Sambhav or I will add it ASAP. 

# Note to Friends/Early Users
Thanks a bunch for using this and giving us feedback. Over the course of the next week(s) Sambhav and I will be in touch with you to get your feedback. Nothing like an email detailing your criticisms/ideas/what you enjoyed. Anything to make this tool better and turn it into something you would enjoy using is much appreciated! Please let us know if there are any bugs/isssues.

Email @ arman.jindal@columbia.edu 

### Technical Details 
* The is application built with the electron framework which wraps around Javascrip, CSS, and HTML
* Backend is a remote server for the backend to make our database of shortcuts updatable without requiring users to update the app/host the files locally. This design decison is impleted anticipating an API for user to add shortcuts. 
