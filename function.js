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
/////////////                   HEADER                       ///////////////////
/////////////////////////////////////////////////////////////////////////////////
$(".logo").hover( function()
{
    $("#logo-disbug-img").attr("src" ,"./asserts/0_Bug_Closed.svg")
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
setTimeout(animateNumber(document.getElementById("NumPercent"),incrementNum,durationNum,endValue),600); 



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
// {
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
    duration: 2000,loop:true,
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


// Section 2 - Parallax Scrolling Effect - Title Text

var rellax =  new Rellax('.rellax');



/////////////////////////////////////////////////////////////////////////////////
/////////////                    SECTION - 3                ///////////////////
/////////////////////////////////////////////////////////////////////////////////


  // end