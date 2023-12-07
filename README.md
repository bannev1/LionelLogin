# LionelLogin

Essentially a quick password manager as a web browser extension *(works on Chrome and Firefox)* for [Lionel2](lionel2.kgv.edu.hk/), with the added feature of directly signing in instantly upon loading the sign-in page of [Lionel2](lionel2.kgv.edu.hk/).  

## Contents

- [LionelLogin](#lionellogin)
	- [Contents](#contents)
	- [What it Does](#what-it-does)
	- [How it Works](#how-it-works)
	- [Safety Concerns](#safety-concerns)
	- [Bugs](#bugs)
	- [Installation](#installation)
		- [Google Chrome Installation](#google-chrome-installation)
			- [Direct Download](#direct-download)
			- [Download with Git](#download-with-git)
		- [Firefox Installation](#firefox-installation)
	- [Browser Information](#browser-information)

## What it Does

LionelLogin will automatically login to [Lionel2](lionel2.kgv.edu.hk/), given that you have inputted your credentials into its password manager, which is safely stored on [Chrome’s storage API](https://developer.chrome.com/docs/extensions/reference/storage/) or *(for Firefox users)* within the [browser's storage API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage). It will also be automatically sent to all devices already synced to your browser's account.  
  
*All data is deleted upon removing the extension.*

## How it Works

If you need instructions on how to install the LionelLogin extension, look at [LionelLogin Instructions - Installation](https://docs.google.com/presentation/d/1VIXn9FJb83H6CQwr-JYIFJgz-z2UQoDg9Y4QCHWtGL0/edit?usp=sharing).  
If you want a better understanding of how to use the LionelLogin extension/want to use its extra features, look at [LionelLogin Instructions - Extra Steps](https://docs.google.com/presentation/d/1zxJBjksXeMD_YpHr4Lra-ENlIJDXK2RNx7RqnclwwDQ/edit?usp=sharing).

## Safety Concerns

All the code for this extension is open-sourced, on [Github](https://github.com/realhuman101/LionelLogin) for you to access.  
Your password is not recorded anywhere, and is using [Chrome's](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)/[your browser's official storage API](https://developer.chrome.com/docs/extensions/reference/storage/) to store your password. This means that the password is being stored into your browser's account, and cannot be accessed by anyone without access to this account - including me.  
  
*If you feel like you found a security flaw within my program, please create a new issue on [Github](https://github.com/realhuman101/LionelLogin/issues/new).*

## Bugs

If you locate any bugs or dangerous glitches, please report them by creating a new issue on [Github](https://github.com/realhuman101/LionelLogin/issues/new) with details on reproducing, what it effects, and what version you found it on.

## Installation

### Google Chrome Installation

There are two methods of installation for **Chrome**, either through [Git](https://github.com/realhuman101/LionelLogin#download-with-git) or by downloading the compressed file from [Google Drive](https://github.com/realhuman101/LionelLogin#direct-download).  
The recommended method for installation would be to simply follow the instructions at [LionelLogin Instructions - Chrome Direct Installation](https://github.com/realhuman101/projectDocs/tree/master/LionelLogin/installation/chrome/direct#lionellogin---chrome-direct-installation-instructions).

#### Direct Download

To download the files directly, visit [this Google Drive folder](https://drive.google.com/drive/folders/1Fdvf5XMKoZpoxU-0YezVKRM6Ve97YVmN?usp=drive_link), select one of the folders named `LionelLogin v_._._` (where the `_`/underscores are actual version numbers), right-click the folder/version you wish to install, and download the folder/file. *Please note that version `1.0.0` of the LionelLogin extension (for Chrome) is no longer made publicly accessible due to **dangerous security flaws***. For a more detailed tutorial on installation, feel free to look through the tutorial [here](https://github.com/realhuman101/projectDocs/tree/master/LionelLogin/installation/chrome/direct#lionellogin---chrome-direct-installation-instructions)

#### Download with Git

Run the command `git clone https://github.com/realhuman101/LionelLogin.git`

### Firefox Installation

To install the extension on Firefox, follow the instructions below: 
1. Download [this file](https://drive.google.com/file/d/1QDiiDNkbuauu81x0RrBhl8oWOhEM4Vxn/view?usp=drive_link).
2. Go to `about:addons` in Firefox. (Open this page on a new tab)
3. Open the `Extensions` tab by clicking it on the sidebar on the left
4. Press the settings button in the top-right corner of the page
5. Press `Install addons from file...`
6. Select the recently installed file. (The file installed from step 1)
Done!

## Browser Information

Currently only two browsers have been tested and work with LionelLogin, Chrome *(best support)* and Firefox.
