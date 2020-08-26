// JS funcitonality for Disbug
//Author : thivin ( thivinanadh@gmail.com  )


////////// ---------- USER DEFINED PROPERTIES ---------------- //////////////////////////

//SECTION -1  IMAGES  User Defined properties for Setting up the Translation motion on Scroll
var min_Anim_Height = 800;  // The maximum height of scroll above which the animation does not takes place upon scrolling
var max_Translation = 80;  // The maximum Amount of translation for the images to move out upon Scrolling.
var max_Rotation    = 10;  // xxxx --- Deprecated --- xxxxx // The maximum Amount of Rotation for the images to move out. 
var min_Opacity     = 0.7;  // The minimum Opacity that the image mush fade into upon Scrolling


// SECTION -1 - Try Demo and the Add to chrome button
var s1_btn_start_pos    = 50; //px
var s1_btn_end_pos      = 550; //px
var s1_btn_transY_max   = 230; //px

///////////////// END OF  - USER DEFINED PROPERTIES ////////////////


///////// --- GLOBAL VARIABLES DECLARATION ----- /////////
var isMobile    =   false   ;   // To Detect Mobile Interface
var st                      ;   // To Determine the Height of the top of Current Viewport on scroll in pixels        



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
}).fadeIn(200);


/////////////////////////////////////////////////////////////////////////////////
/////////////                    SECTION - 1                 ///////////////////
/////////////////////////////////////////////////////////////////////////////////

//Section 1 - Buttons on hover Event
$(".disbug-btn").hover( function()
{
    $(this).children("#s1_button_1").attr("src" ,"./asserts/1_Bug_Close.svg")
}
,function()
{
    $(this).children("#s1_button_1").attr("src" ,"./asserts/1_Bug_Open.svg")

}).delay(300).fadeIn(200);

//Section 1 button 2 

$(".demo-btn").hover( function()
{
    $(this).children("#s1_button_2").attr("src" ,"./asserts/1_Try_Demo_Closed.svg")

}
,function()
{
    $(this).children("#s1_button_2").attr("src" ,"./asserts/1_Try_Demo_Open.svg")
}).delay(300).fadeIn(200);



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
        console.log("St : ", st, " val : " , val);
        console.log("Opacity val : ", opacityVal, " val : " , val);
        
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


/////////////////////////////////////////////////////////////////////////////////
/////////////               FLOAT BUTTONS                       ///////////////////
/////////////////////////////////////////////////////////////////////////////////

if(!isMobile)
{
    $(window).scroll(function() {
        var h = $(window).scrollTop();

        if( h >= s1_btn_end_pos)
        {
            $(".float").css( 'opacity',1);
        }

        else
        {
            $(".float").css( 'opacity',0);
        }
    });

    $("#float_div_1").hover( function()
    {
        $(this).children("#float_text_1").html("Add to Chrome")
        $(this).children("#float_button_1").attr("src" ,"./asserts/1_Bug_Close.svg")

        }
        ,function()
        {
            $(this).children("#float_text_1").html("")
            $(this).children("#float_button_1").attr("src" ,"./asserts/1_Bug_Open.svg")
    }).delay(300).fadeIn(200);

    $("#float_div_2").hover( function()
    {
        $(this).children("#float_text_2").html("Try Demo")
        $(this).children("#float_button_2").attr("src" ,"./asserts/1_Try_Demo_Closed.svg")

        }
        ,function()
        {
            $(this).children("#float_text_2").html("")
            $(this).children("#float_button_2").attr("src" ,"./asserts/1_Try_Demo_Open.svg")
    }).delay(300).fadeIn(200);

}

