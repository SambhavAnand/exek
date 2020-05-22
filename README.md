# Shortcut Power Tool
First release. (TO-ADD) Link to download. Mac only for now...

## The Tool
If you are reading this, you are probably a friend of mine (Arman) or Sambhav. This tool (yet to be named) is a "spotlight" search for shortcuts. As programmers and general power users of our computers, there are always a number of shortcuts we remember. A handful at most, but given the high frequency of use they save time, reduce frustration, and make using the software easier, faster, and more enjoyable. The purpose of this tool is to expand the number of shortcuts one uses and speed up the process of executing shortcuts.  

The tool - search bar - is pulled up with a with **Ctrl-K** or via the menu bar icon which appears in the top right. The tool detects the programs running in the foreground and loads relevant shortcuts in the search bar. Search is  __fuzzy__ using simple RegularExpression to match the search to shortcuts and their tags (we intend to improve this in the future). Using the key arrows up and down you can navigate the shortcuts and the enter keypress the shortcut is executed (see example below). **Ctrl-K** toggles the window into view. The window can be dragged anywhere on the screen. 

![README-Demo](https://user-images.githubusercontent.com/58370547/82637180-ddf69500-9c21-11ea-99d1-ef4f55686e13.gif)


## Current Apps/Website Support
Currently, the following are supported: 
1. MacOS System 
2. Google Chrome Browser 
3. GSuite : Gmail, Docs, Excel, Calendar, Youtube
4. Microsoft: Word, PPT 
5. (TODO) Sublime Text 
6. Notion
7. Airtable 

If you find yourself using this tool for a program or site where we don't have shortcuts supported - let us know and either Sambhav or I will add it ASAP. 

# Note to Friends/Early Users
Thanks a bunch for using this and giving us feedback. Over the course of the next week(s) Sambhav and I will be in touch with you to get your feedback. We wanted to build something and get it fast so that we can improve it in the next version. Nothing like an email detailing your criticisms/ideas/what you enjoyed. Anything to make this tool better and turn it into something you would enjoy using is much appreciated! Please let us know if there are any bugs/issues.

Email @ arman.jindal@columbia.edu 

### Technical Details 
* The is an application built with the Electron framework which wraps around Javascript, CSS, and HTML
* Backend is a remote server for the backend to make our database of shortcuts updatable without requiring users to update the app/host the files locally. This design decision is implemented anticipating an API for users to add shortcuts (after some basic validation that they work). 

### Features for Next Version
* Improved search and ranking of shortcuts.
  * ML autosuggestion
  * Temporality and Locality to "cache" likely shortcuts
* Menu bar organizes all shortcuts - like the iMessage contact list
* Links to documentation for shortcuts easily accessible
