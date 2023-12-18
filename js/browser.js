function getBrowserName() {
    var browserName = '';
    var userAgent = navigator.userAgent;
    (typeof InstallTrigger !== 'undefined') && (browserName = 'Firefox');
    ( /* @cc_on!@*/ false || !!document.documentMode) && (browserName = 'IE');
    (!!window.chrome && userAgent.match(/OPR/)) && (browserName = 'Opera');
    (!!window.chrome && userAgent.match(/Edge/)) && (browserName = 'Edge');
    (!!window.chrome && !userAgent.match(/(OPR|Edge)/)) && (browserName = 'Chrome');
  
    /**
     * Expected returns
     * Firefox, Opera, Edge, Chrome
     */
    console.log(browserName)
    /* Not Safari */
    if (browserName != '' && browserName != "Chrome") {
        alert("Please download chrome browser.");
        window.stop()
    }
    console.log("Check for safari")
    if(browserName == '') {
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if( isSafari != true ) {
            alert("Browser detection failed.");
        }
    }

    return browserName;
}