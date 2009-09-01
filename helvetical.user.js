// ==UserScript==
// @name        Helvetical
// @namespace   http://fluidapp.com
// @description Google Calendar userstyle based on Helvetireader by Jon Hicks
// @include     *
// @author      Ad Taylor
// ==/UserScript==

(function () {
    if (window.fluid) {
        // ==UserScript==
        // @name        Helvetical
        // @description Google Calendar userstyle based on Helvetireader by Jon Hicks
        // @include     https://*.google.com/calendar/render/*
        // @include     http://*.google.com/calendar/render/*
        // @include     htt*://*.google.*/calendar/render*
        // @author      Ad Taylor
        // ==/UserScript==



        var cssNode = document.createElement('link');
        cssNode.type = 'text/css';
        cssNode.rel = 'stylesheet';
        cssNode.href = 'http://www.iamadtaylor.com/userscripts/helveticalRELEASE/googleCal.css';
        cssNode.media = 'screen';
        cssNode.title = 'dynamicLoadedSheet';
        document.getElementsByTagName("head")[0].appendChild(cssNode);
    }
})();