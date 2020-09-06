// JS funcitonality for Disbug
//Author : thivin ( thivinanadh@gmail.com  )


////////// ---------- USER DEFINED PROPERTIES ---------------- //////////////////////////

//-------------------------SECTION -1  ---------------------------- // 

//Sec-1  IMAGES  User Defined properties for Setting up the Translation motion on Scroll
var min_Anim_Height = 800;  // The maximum height of scroll above which the animation does not takes place upon scrolling
var max_Translation = 30;  // The maximum Amount of translation for the images to move out upon Scrolling.
var max_Rotation    = 10;  // xxxx --- Deprecated --- xxxxx // The maximum Amount of Rotation for the images to move out. 
var min_Opacity     = 0.7;  // The minimum Opacity that the image mush fade into upon Scrolling


//Sec-1  -  Try Demo and the Add to chrome button - Translate in Scroll
var s1_btn_start_pos    = 50; //px
var s1_btn_end_pos      = 550; //px
var s1_btn_transY_max   = 80; //px


// Sec-1 - Percentage Animation
endValue = 60;
startValue = 1;
incrementNum = 1;
durationNum = 300;




// ----------------------- SECTION 2 --------------------------------- //
// Images Animation timings ( Enter in Milli Seconds )

var s2_svg_time_path = 500;   // PATH ANIMATION TIME
var s2_svg_popup     = 1000;   // POP up Animation time 
var s2_svg_man_img   = 500;


// IMage Scroll on Animation Setting
var s2_svg_scroll_startAdjustment = -230;   //the lower the value, the earlier the animation will start
var s2_svg_scroll_endAdjustment = -200;        // the higher the value, the later the animation will end
var s2_svg_animation_speedUp = 2.2;       // Speed up value for animation -- Default value should be 1.0
var s2_svg_withANDwithout_ratio = 1.3;    // How fast with disbug should run compared to without disbug ( value should be greater than 1.0)




///////////////// END OF  - USER DEFINED PROPERTIES ////////////////


///////// --- GLOBAL VARIABLES DECLARATION ----- /////////
var isMobile    =   false   ;   // To Detect Mobile Interface
var st                      ;   // To Determine the Height of the top of Current Viewport on scroll in pixels        


/////////// ------ LIBRARY FUNCTIONS DECLARATIONS -------------- ////////////

ScrollOut({
    threshold: .6
})



///// ------- ONLOAD DOM FUNCTIONS  --- ///////
document.addEventListener("DOMContentLoaded", function() {
    orientationDetectFunction();

   
  });

//Function to detect the device being mobile/Desktop Device. 
function orientationDetectFunction()
{
    if (window.innerHeight > window.innerWidth*0.8)   // Some kind of potrait mode 
    {
        // alert("Device is in Potrait mode, Please change it to landscape mode");
        isMobile  = true;       
    }   
    else{
        isMobile = false;
    }
}   

/////////////////////////////////////////////////////////////////////////////////
/////////////              PRE LOADER                       ///////////////////
/////////////////////////////////////////////////////////////////////////////////

    // Preloading SVG
setTimeout(function(){   
    $(document).ready(function() {
        //Preloader
        var preloaderFadeOutTime = 700;
        function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
     });
    },  1500 ); // Preload SVG delay time
    
    // Delay for Loading Html
    $(document).ready(function() {
        $("#html").delay(4000);
        $("html").delay(4000);
        $("#mybody").delay(4000);
    });

/////////////////////////////////////////////////////////////////////////////////
/////////////                   HEADER                       ///////////////////
/////////////////////////////////////////////////////////////////////////////////
$(".logo").hover( function()
{
    $("#logo-disbug-img").attr("src" ,"./asserts/Bug_anim.svg")
}
,function()
{
    $("#logo-disbug-img").attr("src" ,"./asserts/0_Bug_Open.svg")
}).delay(300).fadeIn(200);


/////////////////////////////////////////////////////////////////////////////////
/////////////                    SECTION - 1                 ///////////////////
/////////////////////////////////////////////////////////////////////////////////

//Section 1 - Buttons on hover Event


// ------  Section 1 display images - Translate on scroll --------- // 
// --- Only for Desktop  --------// 
var trans_per_scroll_len = min_Anim_Height/max_Translation;
var rotate_per_scroll_len = min_Anim_Height/max_Rotation;
var opacity_per_scroll  = 1.0/min_Anim_Height  ;

var lastScrollTop = 0;
var val;
var rotateVal;
var opacityVal;

if(!isMobile)
{
    $(window).scroll(function() {
        st = $(window).scrollTop();
        
        var lastScrollTop = 0; 
        if(max_Translation) 
            val = st/trans_per_scroll_len; 
        else val = 0;
        if(max_Rotation) 
            rotateVal = st/rotate_per_scroll_len;  
        else rotateVal = 0;
    
        if( st - min_Anim_Height  > 1.0) opacityVal = 1.0;
        else 
            opacityVal = (min_Anim_Height - st)*opacity_per_scroll
        if(opacityVal < min_Opacity) opacityVal = min_Opacity;
        // console.log("St : ", st, " val : " , val);
        // console.log("Opacity val : ", opacityVal, " val : " , val);
        
        if(st <= min_Anim_Height)
        {
        //Scroll Down
            if (st > lastScrollTop){
                $(".sec1-img1-animate").css( 'transform','translateX(-' + val + 'px)',
                                        '-webkit-transform','translateX(-' + val + 'px)',
                                        '-ms-transform','translateX(-' + val + 'px)');
                $(".sec1-img2-animate").css( 'transform','translateX(' + val + 'px)',
                                        '-webkit-transform','translateX(' + val + 'px)',
                                        '-ms-transform','translateX(' + val + 'px)');
                $(".sec1-img1-animate").css( 'opacity',opacityVal);
                $(".sec1-img2-animate").css( 'opacity',opacityVal);
    
                
            } else {
                $(".sec1-img1-animate").css( 'transform','translateX(-' + val + 'px)',
                                            '-webkit-transform','translateX(-' + val + 'px)',
                                            '-ms-transform','translateX(-' + val + 'px)');
                $(".sec1-img2-animate").css( 'transform','translateX(' + val + 'px)',
                                            '-webki t-transform','translateX(' + val + 'px)',
                                            '-ms-transform','translateX(' + val + 'px)');
                $(".sec1-img1-animate").css( 'opacity',opacityVal);
                $(".sec1-img2-animate").css( 'opacity',opacityVal);
    
            }
    
        }
    
    
    
        lastScrollTop = st;
    });
}




// ------- Section 1 - Scroll the Add to chrome button and Try Demo Button - Scroll down ------- //
if(!isMobile)
{
    $(window).scroll(function() {
        var h = $(window).scrollTop();
        var s1_btn_trans_per_scroll = s1_btn_transY_max / ( s1_btn_end_pos - s1_btn_start_pos ) ;
        
        if ( h >=  s1_btn_start_pos && h <= s1_btn_end_pos )
        {
            var val1 = (h - s1_btn_start_pos) *  s1_btn_trans_per_scroll;
            $(".disbug-btn").css( 'transform','translateY(' + val1 + 'px)',
                                '-webkit-transform','translateY(' + val1 + 'px)',
                                '-ms-transform','translateY(' + val1 + 'px)');
            
            $(".demo-btn").css( 'transform','translateY(' + val1 + 'px)',
                                '-webkit-transform','translateY(' + val1 + 'px)',
                                '-ms-transform','translateY(' + val1 + 'px)');
                                
            $(".disbug-btn").css( 'opacity',1);
            $(".demo-btn").css( 'opacity',1);

        }

        else if ( h >= s1_btn_end_pos) 
        {
            $(".disbug-btn").css( 'opacity',0);
            $(".demo-btn").css( 'opacity',0);
        }
        else
        {
            $(".disbug-btn").css( 'transform','translateY(' + 0 + 'px)',
                                '-webkit-transform','translateY(' + 0 + 'px)',
                                '-ms-transform','translateY(' + 0 + 'px)'); 

            $(".demo-btn").css( 'transform','translateY(' + 0 + 'px)',
                                '-webkit-transform','translateY(' + 0 + 'px)',
                                '-ms-transform','translateY(' + 0 + 'px)'); 

                                
            $(".disbug-btn").css( 'opacity',1);
            $(".demo-btn").css( 'opacity',1);
        }

    });
}


// Section 1 - NUmbers Percentage Animation
//Delayed for 1200 s for the top heading animation to finish
setTimeout(animateNumber(document.getElementById("NumPercent"),incrementNum,durationNum,endValue),200); 



function  animateNumber(element,incrementNum,durationNum,endValue)
{
    anime(
        {
            targets: element,
            textContent: endValue,
            round: incrementNum ? 1/incrementNum : 1/5,
            easing: 'easeInOutQuad',
            duration: durationNum ? durationNum : 4000,
        }
    )
}


/////////////////////////////////////////////////////////////////////////////////
/////////////               FLOAT BUTTONS                     ///////////////////
/////////////////////////////////////////////////////////////////////////////////

// if(!isMobile)
// {s2_svg_startScroll
//     $(window).scroll(function() {
//         var h = $(window).scrollTop();

//         if( h >= s1_btn_end_pos)
//         {
//             $(".float").css( 'opacity',1);
//         }

//         else
//         {
//             $(".float").css( 'opacity',0);
//         }
//     });

//     $("#float_div_1").hover( function()
//     {
//         $(this).children("#float_text_1").html("Add to Chrome")
//         $(this).children("#float_button_1").attr("src" ,"./asserts/1_Bug_Close.svg")

//         }
//         ,function()
//         {
//             $(this).children("#float_text_1").html("")
//             $(this).children("#float_button_1").attr("src" ,"./asserts/1_Bug_Open.svg")
//     }).delay(300).fadeIn(200);

//     $("#float_div_2").hover( function()
//     {
//         $(this).children("#float_text_2").html("Try Demo")
//         $(this).children("#float_button_2").attr("src" ,"./asserts/1_Try_Demo_Closed.svg")

//         }
//         ,function()
//         {
//             $(this).children("#float_text_2").html("")
//             $(this).children("#float_button_2").attr("src" ,"./asserts/1_Try_Demo_Open.svg")
//     }).delay(300).fadeIn(200);

// }




/////////////////////////////////////////////////////////////////////////////////
/////////////               SECTION 2                         ///////////////////
/////////////////////////////////////////////////////////////////////////////////

// Section 2 - With Disbug image animation - Anime.js

var timeline_with_Disbug = anime.timeline({
    easing: 'linear',
    duration: 2000,loop:false,autoplay: false
  });


  timeline_with_Disbug
  //Man - 1
  .add({
    targets: "#man1",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_man_img,
    direction: 'forward',
    delay: 1000
})
//Path - 1 - Stroke Fill
.add({
    targets: "#s2_withdis_path1",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})

//Block1 Description - text 
.add({
    targets: "#s2_svg2_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg2_Dev_Questions").textContent = "Find a Bug";
      }
})

// Block 1 - Outer Stroke
.add({
    targets: "#block1",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    strokeWidth: 2,
     easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

// Block - 1 - background opacity turn 0
.add({
    targets: "#block1-back",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 5,
    direction: 'forward'
})

// Block - 1 - Zoom out 
.add({
    targets: "#block1",
    keyframes: [
        {scale: 1,opacity: 0.2},
        {scale: 1.1, opacity: 1,translateX: '0.2vw'},
        {scale: 1, opacity: 1, translateX: '0vw'}
      ],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_popup,
    direction: 'forward'
})

// Path 2 - Animation
.add({
    targets: "#s2_withdis_path2",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})

//Block2 Description 
.add({
    targets: "#s2_svg2_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg2_Dev_Questions").textContent = "Disbug it";
      }
})


// Block 2 - Outer Stroke
.add({
    targets: "#block2",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

// Block - 2 - background opacity turn 0
.add({
    targets: "#block2-back",
    opacity: 0,
    easing: 'easeOutExpo',
    duration: 10,
    direction: 'forward'
})

// Block - 2 - Zoom out 
.add({
    targets: "#block2",
    keyframes: [
        {scale: 1,opacity: 0.2},
        {scale: 1.1, opacity: 1,translateX: '0.2vw'},
        {scale: 1, opacity: 1, translateX: '0vw'}
      ],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_popup,
    direction: 'forward'
})

// Path 3 - Animation
.add({
    targets: "#s2_withdis_path3",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})

//Block3 Description 
.add({
    targets: "#s2_svg2_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg2_Dev_Questions").textContent = "Bug Fixed";
      }
})

// Block 2 - Outer Stroke
.add({
    targets: "#block3",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

// Block - 3 - background opacity turn 0
.add({
    targets: "#block3-back",
    opacity: 0,
    easing: 'easeOutExpo',
    duration: 10,
    direction: 'forward'
})

// Block - 3 - Zoom out 
.add({
    targets: "#block3",
    keyframes: [
        {scale: 1,opacity: 0.2},
        {scale: 1.1, opacity: 1,translateX: '0.2vw'},
        {scale: 1, opacity: 1, translateX: '0vw'}
      ],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_popup,
    direction: 'forward'
})


//Block3 Description  - Disaperar
.add({
    targets: "#s2_svg2_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg2_Dev_Questions").textContent = "";
      }
})

// Path 4 - Animation
.add({
    targets: "#s2_withdis_path4",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 800,
    direction: 'forward'
})


  .add({
    targets: "#man2",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 200,
    direction: 'forward'
})

.add({
    targets: "#thumbvector",
    d: "M317.43 373C313.5 373.18 311.97 371.66 306.64 372.1C301.09 372.55 255.91 365.19 255.17 366.1C254.43 367.01 245.7 367.65 242 366.92C238.3 366.19 237.16 358.18 236.79 357.06C236.5 356.16 241.24 355.06 245.34 354.79C245.511 354.731 245.663 354.626 245.779 354.486C245.896 354.347 245.972 354.179 246 354C245.833 352.821 245.752 351.631 245.76 350.44C245.76 349.6 247.65 346.57 248.23 346.85C249.11 347.27 247.77 351.15 248.61 353.18C248.834 353.816 249.173 354.406 249.61 354.92C253.03 356.02 250.41 358.86 255.16 359.29C260.33 359.75 290.24 357.53 297.62 357.72C302.434 357.946 307.171 359.008 311.62 360.86C311.62 360.86 310.33 360.67 314.76 359.99C319.19 359.31 320.38 359.28 320.38 359.28",
    easing: 'easeInOutQuad',
    duration: 500,
    direction: 'forward',
})


.add({
    targets: "#Flicks",
    opacity: 1,
    easing: 'easeInOutQuad',
    duration: 100,
    direction: 'forward',
})

.add({
    targets: "#Tick",
    opacity: 1,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 500,
    direction: 'forward',
    delay: 50
})

.add({
    targets: "#s2_with_mouth",
    d: "M78.77 307.29C78.77 307.29 75.2601 310.29 71.5501 309.29C67.8401 308.29 63.71 311.87 63.71 311.87C63.71 311.87 66.27 312.79 69.92 316.28C72.62 318.87 75.1 318.64 75.1 318.64C74.53 321.34 72.6901 326.14 71.1501 326.52C69.7801 326.86 68.59 325.91 63.87 322.66C60.74 320.5 56.3201 318.87 54.6301 316.16C52.6301 312.97 52.3 308.09 52.3 308.09",
    easing: 'easeInOutQuad',
    duration: 500,
    direction: 'forward',
    delay: 500
})
;

// get the parameters for start and end of Scroll
// Start scroll is triggered by var rect = document.getElementById("s2_heading_text").getBoundingClientRect();
 // Section 2 Animation Properties
 var rect = $("#s2_heading_text1").offset();
console.log(rect.top);
 var s2_svg_startScroll = rect.top;
 s2_svg_startScroll += s2_svg_scroll_startAdjustment;

 var rect2 = $("#sec3_header_main").offset();
 var s2_svg_endScroll = rect2.top;
 s2_svg_endScroll += s2_svg_scroll_endAdjustment;

 var s2_svg_animDuration = timeline_with_Disbug.duration;
 var s2_svg_scrollLen  = s2_svg_endScroll - s2_svg_startScroll;

 var s2_animPerScroll = s2_svg_animDuration/s2_svg_scrollLen;


console.log(" start : ", s2_svg_startScroll , " end: " , s2_svg_endScroll , " scrol len : ", s2_svg_scrollLen , " anim scrol : " , s2_animPerScroll);



// Sec 2 - IMage 1 anime.js

var timeline_without_Disbug = anime.timeline({
    easing: 'linear',
    duration: 2000,loop:false,autoplay: false,
  });


timeline_without_Disbug
//Man - 1
.add({
targets: "#man1_wod",
strokeDashoffset: [anime.setDashoffset, 0],
opacity: 1,
easing: 'cubicBezier(.5, .05, .1, .3)',
duration: s2_svg_man_img,
direction: 'forward',
delay: 1000
})
//Path - 1 - Stroke Fill
.add({
    targets: "#s2_withoutdis_path1",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})

//Block1 Description - text 
.add({
    targets: "#s2_svg_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg_Dev_Questions").textContent = "Identify a Bug";
      }
})

// Block 1 - Outer Stroke
.add({
    targets: "#block1_wod",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    strokeWidth: 2,
     easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

// Block - 1 - background opacity turn 0
.add({
    targets: "#block1_back_wod",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 5,
    direction: 'forward'
})

// Block - 1 - Zoom out 
.add({
    targets: "#block1_wod",
    keyframes: [
        {scale: 1,opacity: 0.2},
        {scale: 1.1, opacity: 1,translateX: '0.2vw'},
        {scale: 1, opacity: 1, translateX: '0vw'}
      ],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_popup,
    direction: 'forward'
})

//Path - 2 Stroke Fill
.add({
    targets: "#s2_withoutdis_path2",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})


//Block2 Description - text 
.add({
    targets: "#s2_svg_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg_Dev_Questions").textContent = "Take Screenshot";
      }
}) 

// Block 2 - Outer Stroke
.add({
    targets: "#block1_wod",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    strokeWidth: 2,
     easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

// Block - 2 - background opacity turn 0
.add({
    targets: "#block2_back_wod",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 5,
    direction: 'forward'
})

// Block - 2 - Zoom out 
.add({
    targets: "#block2_wod",
    keyframes: [
        {scale: 1,opacity: 0.2},
        {scale: 1.1, opacity: 1,translateX: '0.2vw'},
        {scale: 1, opacity: 1, translateX: '0vw'}
      ],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_popup,
    direction: 'forward'
})


//pATH 3 ------------
//Path - 2 Stroke Fill
.add({
    targets: "#s2_withoutdis_path3",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})

//Block3 Description - text 
.add({
    targets: "#s2_svg_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg_Dev_Questions").textContent = "Record Screen";
      }
})

// Block 2 - Outer Stroke
.add({
    targets: "#block3_wod",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    strokeWidth: 2,
     easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

// Block - 2 - background opacity turn 0
.add({
    targets: "#block3_back_wod",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 5,
    direction: 'forward'
})

// Block - 3 - Zoom out 
.add({
    targets: "#block3_wod",
    keyframes: [
        {scale: 1,opacity: 0.2},
        {scale: 1.1, opacity: 1,translateX: '0.2vw'},
        {scale: 1, opacity: 1, translateX: '0vw'}
      ],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_popup,
    direction: 'forward'
})


//path 4 ----

//Path - 4 Stroke Fill
.add({
    targets: "#s2_withoutdis_path4",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})

//Block4 Description - text 
.add({
    targets: "#s2_svg_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg_Dev_Questions").textContent = "Update Trello";
      }
})

// Block 2 - Outer Stroke
.add({
    targets: "#block4_wod",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    strokeWidth: 2,
     easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

// Block - 2 - background opacity turn 0
.add({
    targets: "#block4_back_wod",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 5,
    direction: 'forward'
})

// Block - 2 - Zoom out 
.add({
    targets: "#block4_wod",
    keyframes: [
        {scale: 1,opacity: 0.2},
        {scale: 1.1, opacity: 1,translateX: '0.2vw'},
        {scale: 1, opacity: 1, translateX: '0vw'}
      ],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_popup,
    direction: 'forward'
})


//path 5 ----

//Path - 5 Stroke Fill
.add({
    targets: "#s2_withoutdis_path5",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})


//Block5 Description - text 
.add({
    targets: "#s2_svg_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg_Dev_Questions").textContent = "Steps to Reproduce";
      }
})

// Block 5 - Outer Stroke
.add({
    targets: "#block5_wod",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    strokeWidth: 2,
     easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

// Block - 2 - background opacity turn 0
.add({
    targets: "#block5_back_wod",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 5,
    direction: 'forward'
})

// Block - 2 - Zoom out 
.add({
    targets: "#block5_wod",
    keyframes: [
        {scale: 1,opacity: 0.2},
        {scale: 1.1, opacity: 1,translateX: '0.2vw'},
        {scale: 1, opacity: 1, translateX: '0vw'}
      ],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_popup,
    direction: 'forward'
})


//path 6 ----

//Path - 2 Stroke Fill
.add({
    targets: "#s2_withoutdis_path6",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})

//Block6 Description - text 
.add({
    targets: "#s2_svg_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg_Dev_Questions").textContent = "Sometext here";
      }
})


// Block 2 - Outer Stroke
.add({
    targets: "#block6_wod",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    strokeWidth: 2,
     easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

// Block - 2 - background opacity turn 0
.add({
    targets: "#block6_back_wod",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 5,
    direction: 'forward'
})

// Block - 2 - Zoom out 
.add({
    targets: "#block6_wod",
    keyframes: [
        {scale: 1,opacity: 0.2},
        {scale: 1.1, opacity: 1,translateX: '0.2vw'},
        {scale: 1, opacity: 1, translateX: '0vw'}
      ],
    opacity: 1,
    strokeWidth: 2,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_popup,
    direction: 'forward'
})

//Block6 Description - text DISAAPEARR
.add({
    targets: "#s2_svg_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg_Dev_Questions").textContent = "Dev Clarifications";
      }
})


//path 7 ----

//Path - 2 Stroke Fill
.add({
    targets: "#s2_withoutdis_path7",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward'
})
//Man 2
.add({
    targets: "#man2_wod",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 200,
    direction: 'forward'
})

//man2 mouth open
.add({
    targets: "#Mouth_Close",
    d: "M366.42 365.45C366.42 365.45 356.98 335.45 347.35 340.63C338.72 345.25 324.5 353.33 323.27 352.71C322.04 352.09 318.81 346.24 318.81 346.24C318.81 346.24 321.87 347.9 323.19 346.5C324.51 345.1 325.81 338.88 318.11 337.04L318.28 332.84C316.41 332.132 314.577 331.327 312.79 330.43C311.79 329.66 323.2 320.02 323.2 320.02",
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 200,
    direction: 'forward'
})

//chat2 icon appear
.add({
    targets: "#chat2",
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 800,
    direction: 'forward'
})

//chat2 -- Dissappear

.add({
    targets: "#chat2",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 100,
    direction: 'forward'
})

//man2- mouth close
.add({
    targets: "#Mouth_Close",
    d: "M366.42 365.69C366.42 365.69 356.98 335.69 347.35 340.87C338.72 345.48 323.56 346.82 322.35 346.21C321.14 345.6 317.88 339.73 317.88 339.73C317.88 339.73 325.82 339.12 318.12 337.28L318.29 333.08C316.42 332.372 314.587 331.567 312.8 330.67C311.8 329.9 323.21 320.26 323.21 320.26C311.79 329.66 323.2 320.02 323.2 320.02",
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 200,
    direction: 'forward'
})

//Block6 Description - text 
.add({
    targets: "#s2_svg_Dev_Questions",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: s2_svg_time_path,
    direction: 'forward',
    duration: 100,
    update: function() {
          document.getElementById("s2_svg_Dev_Questions").textContent = "";
      }
})

//Man1- questionMark
.add({
    targets: "#Question",
    opacity: 1,
    translateX: '-1vw',
    translateY: '1vh',
    scale:1.1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})


//chat1 -- Appear

.add({
    targets: "#chat1",
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 800,
    direction: 'forward'
})

//Man1 Exclamation - Spiral

.add({
    targets: "#Spiral",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

//chat1 -- DisAppear

.add({
    targets: "#chat1",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 200,
    direction: 'forward'
})

//----- Chat 2

//man2 mouth open
.add({
    targets: "#Mouth_Close",
    d: "M366.42 365.45C366.42 365.45 356.98 335.45 347.35 340.63C338.72 345.25 324.5 353.33 323.27 352.71C322.04 352.09 318.81 346.24 318.81 346.24C318.81 346.24 321.87 347.9 323.19 346.5C324.51 345.1 325.81 338.88 318.11 337.04L318.28 332.84C316.41 332.132 314.577 331.327 312.79 330.43C311.79 329.66 323.2 320.02 323.2 320.02",
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 200,
    direction: 'forward'
})

//chat2 icon appear
.add({
    targets: "#chat4",
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 800,
    direction: 'forward'
})

//chat2 -- Dissappear

.add({
    targets: "#chat4",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 100,
    direction: 'forward'
})

//man2- mouth close
.add({
    targets: "#Mouth_Close",
    d: "M366.42 365.69C366.42 365.69 356.98 335.69 347.35 340.87C338.72 345.48 323.56 346.82 322.35 346.21C321.14 345.6 317.88 339.73 317.88 339.73C317.88 339.73 325.82 339.12 318.12 337.28L318.29 333.08C316.42 332.372 314.587 331.567 312.8 330.67C311.8 329.9 323.21 320.26 323.21 320.26C311.79 329.66 323.2 320.02 323.2 320.02",
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 200,
    direction: 'forward'
})



//Man1- questionMark
.add({
    targets: "#Question",
    opacity: 1,
    translateX: '-1vw',
    translateY: '-1vh',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})


//chat1 -- Appear

.add({
    targets: "#chat3",
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 800,
    direction: 'forward'
})

//Man1 Exclamation - Spiral

.add({
    targets: "#Spiral",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 400,
    direction: 'forward'
})

//chat1 -- DisAppear

.add({
    targets: "#chat3",
    opacity: 0,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 200,
    direction: 'forward'
})
;


var s2_animPerScroll_wod = timeline_without_Disbug.duration/s2_svg_scrollLen;

var animationPlayed = false;
// Animate on Scroll -- Disabled 
if(!isMobile)
{
    $(window).scroll(function() {
        var h = $(window).scrollTop();
        console.log("hhh" , h, "scrolltop : ",s2_svg_startScroll )
        if(s2_svg_startScroll >= h && !animationPlayed)
        {
            timeline_with_Disbug.play()
            timeline_without_Disbug.play()
            animationPlayed = true;

        }
        
    });
}



// if(!isMobile)
// {
//     $(window).scroll(function() {
//         var h = $(window).scrollTop();
//         var disp = h - s2_svg_startScroll  ;
//         console.log(" h : " , h , " start scroll : ", s2_svg_startScroll , " disp : ", disp, " end: " , s2_svg_endScroll , " scrol len : ", s2_svg_scrollLen , " anim scrol : " , s2_animPerScroll);

//         if(disp >= 1 && disp < s2_svg_scrollLen )
//         {
//             timeline_with_Disbug.seek(s2_animPerScroll*disp*s2_svg_animation_speedUp)
//             timeline_without_Disbug.seek(s2_animPerScroll_wod*disp*s2_svg_animation_speedUp / s2_svg_withANDwithout_ratio)
//         }
//         else
//         {
//             timeline_with_Disbug.seek(0)
//         }
        
//     });
// }


// Section 2 - Parallax Scrolling Effect - Title Text

var rellax =  new Rellax('.rellax');



/////////////////////////////////////////////////////////////////////////////////
/////////////                    SECTION - 3                ///////////////////
/////////////////////////////////////////////////////////////////////////////////


  // endfalse,autoplay: false