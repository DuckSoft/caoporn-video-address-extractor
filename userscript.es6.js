// ==UserScript==
// @name         CaoPorn Video Address Extractor
// @namespace    http://github.com/DuckSoft
// @version      0.1
// @description  Double-click to get the video address!
// @author       DuckSoft
// @match        *://www.caoporn.com/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('dblclick', ()=>{
        /* eslint-disable no-undef */
        let sources = jwplayer('player').getPlaylist();
        if (!sources) alert("No video source found");
        else window.location = sources[0].file;
    });
})();
