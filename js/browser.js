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
    //alert(browserName.toString());
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


function parseVersion() 
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    version = urlParams.get("ver")
    cardType = urlParams.get("type")

    if ( version == null ) {
        version = "harshita";
    }

    if( version != 'nitin' ) {
        version = "harshita";
    }

    if( cardType != "enagement_only" ) {
        cardType = "default"
    }

    console.log("Rendering for ", version)
    console.log("Card Type: ", cardType)
    
    if( version == "harshita") {
        document.getElementById("wedding_main_heading").innerHTML = "Shri. Suresh Chand Pal & Smt. Maya Pal"
        document.getElementById("engagement_main_heading").innerHTML = "Shri. Suresh Chand Pal & Smt. Maya Pal"
        document.getElementById("wedding_message").innerHTML = "Request your gracious presence at the wedding ceremony of their beloved daughter."
        document.getElementById("engagement_message").innerHTML = "Request your gracious presence at the engagement ceremony of their beloved daughter."
        
        document.getElementById("engagement_photo_parents_left").innerHTML = "Suresh & Maya Pal"
        document.getElementById("engagement_photo_parents_child_left").innerHTML = "Daughter of"

        document.getElementById("engagement_photo_parents_right").innerHTML = "Lalit & Manju Pal"
        document.getElementById("engagement_photo_parents_child_right").innerHTML = "Son of"
        document.getElementById("engagement_photo_left").src = "./assets/images/cewe.png"
        document.getElementById("engagement_photo_right").src = "./assets/images/cowo.png"

        document.getElementById("engagement_photo_name_left").innerHTML = "Harshita"
        document.getElementById("engagement_photo_name_right").innerHTML = "Nitin"



        document.getElementById("wedding_photo_parents_left").innerHTML = "Suresh & Maya Pal"
        document.getElementById("wedding_photo_parents_child_left").innerHTML = "Daughter of"

        document.getElementById("wedding_photo_parents_right").innerHTML = "Lalit & Manju Pal"
        document.getElementById("wedding_photo_parents_child_right").innerHTML = "Son of"
        document.getElementById("wedding_photo_left").src = "./assets/images/cewe.png"
        document.getElementById("wedding_photo_right").src = "./assets/images/cowo.png"

        document.getElementById("wedding_photo_name_left").innerHTML = "Harshita"
        document.getElementById("wedding_photo_name_right").innerHTML = "Nitin"

        document.getElementById("message_img1_src").src = "assets/images/lakshay.jpeg"
        document.getElementById("message_img2_src").src = "assets/images/khawish.jpg"
        document.getElementById("message_img3_src").src = "assets/images/pravi.jpeg"

        document.getElementById("message_img1_name").innerHTML = "Lakshay"
        document.getElementById("message_img2_name").innerHTML = "Khwaish"
        document.getElementById("message_img3_name").innerHTML = "Paravi"
        document.getElementById("welcome_page_name").innerHTML = "Harshita & Nitin"
        document.getElementById("landing_page_name").innerHTML = "Harshita & Nitin"
        
    }
    else {
        document.getElementById("wedding_main_heading").innerHTML = "Shri. Lalit Kumar & Smt. Manju Pal"
        document.getElementById("engagement_main_heading").innerHTML = "Shri. Lalit Kumar & Smt. Manju Pal"
        document.getElementById("wedding_message").innerHTML = "Request your gracious presence at the wedding ceremony of their son."
        document.getElementById("engagement_message").innerHTML = "Request your gracious presence at the engagement ceremony of their son."
        
        document.getElementById("engagement_photo_parents_left").innerHTML = "Lalit & Manju Pal"
        document.getElementById("engagement_photo_parents_child_left").innerHTML = "Son of"

        document.getElementById("engagement_photo_parents_right").innerHTML = "Suresh & Maya Pal"
        document.getElementById("engagement_photo_parents_child_right").innerHTML = "Daughter of"
        document.getElementById("engagement_photo_left").src = "./assets/images/cowo.png"
        document.getElementById("engagement_photo_right").src = "./assets/images/cewe.png"

        document.getElementById("engagement_photo_name_left").innerHTML = "Nitin"
        document.getElementById("engagement_photo_name_right").innerHTML = "Harshita"


        document.getElementById("wedding_photo_parents_left").innerHTML = "Lalit & Manju Pal"
        document.getElementById("wedding_photo_parents_child_left").innerHTML = "Son of"

        document.getElementById("wedding_photo_parents_right").innerHTML = "Suresh & Maya Pal"
        document.getElementById("wedding_photo_parents_child_right").innerHTML = "Daughter of"
        document.getElementById("wedding_photo_left").src = "./assets/images/cowo.png"
        document.getElementById("wedding_photo_right").src = "./assets/images/cewe.png"

        document.getElementById("wedding_photo_name_left").innerHTML = "Nitin"
        document.getElementById("wedding_photo_name_right").innerHTML = "Harshita"

        document.getElementById("message_img1_src").src = "assets/images/mayank.jpeg"
        document.getElementById("message_img2_src").src = "assets/images/mayank.jpeg"
        document.getElementById("message_img3_src").src = "assets/images/mayank.jpeg"

        document.getElementById("message_img1_name").innerHTML = "TBA"
        document.getElementById("message_img2_name").innerHTML = "TBA"
        document.getElementById("message_img3_name").innerHTML = "TBA"

        document.getElementById("welcome_page_name").innerHTML = "Nitin & Harshita"
        document.getElementById("landing_page_name").innerHTML = "Nitin & Harshita"

    }

    /* Enagagement only card */
    if( cardType != 'default' ) {
        document.getElementById("tanggal").style = "display:none;";
        document.getElementById("post_wedding_wave_svg").style.display = "none";
        document.getElementById("messages_section").className = "light-section"
        
        document.getElementById("post_message_wave").setAttribute('d', "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z")
        document.getElementById("post_message_wave").style.fill = "#FFF0DB"
        
        document.getElementById("ucapan").className = "dark-section"
        document.getElementById("post_timer_wave_svg").style.fill = '#FFF0DB'
        document.getElementById("post_timer_wave").setAttribute('d', "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z")
        //document.getElementById("post_timer_wave_div").style.fill = '#FFF0DB'

        const list = document.getElementById("wedding_nav")
        const childToRemove = list.children[2];
        if( childToRemove ) {
            list.removeChild(childToRemove);
        }

    } else {
        document.getElementById("post_timer_wave_svg").style.fill = 'white'
    }
    
}