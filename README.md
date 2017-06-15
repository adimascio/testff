With firefox 54, there seems to be a conflict between synchronous
ajax queries performed on `window.unload` and `PrivacyBadger`. When
the user clicks on a link, the url changes in the URL navigation bar
but the page content doesn't update. The user has to reload the page
manually.

Although synchronous ajax queries are a very bad idea, and hooking
on `unload` event is probably bad too, it happens to break navigation 
on some websites (e.g. https://www.logilab.org/).

**NOTE: This is specific to firefox**

This bug was observed in the following environment:

- PrivacyBadger version: 2016.6.13.1
- Firefox version: 54.0 (64 bits)
- Debian package version: 54.0-1
- Debian Version: Stretch

Steps to reproduce the bug: 
```
 $ git clone https://github.com/adimascio/testff.git
 $ cd testff
 $ npm install
 $ node server.js
 ```

Now, open your browser on `http://locahost:3000` and try to follow `page1` and `page2` links.
