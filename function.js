// JS funcitonality for Disbug
//Author : thivin ( thivinanadh@gmail.com  )


////////// USER DEFINED PROPERTIES //////////////////////////

//User Defined properties for Setting up the Translation motion.
var min_Anim_Height = 800;  // The maximum height of scroll above which the animation does not takes place
var max_Translation = 80;  // The maximum Amount of translation for the images to move out.
var max_Rotation    = 10;   // The maximum Amount of Rotation for the images to move out.
var min_Opacity     = 0.7;  // The minimum Opacity that the image mush fade into






///////////////// END OF  - USER DEFINED PROPERTIES ////////////////





///////////////////// SECTION - 1  ///////////////////////
//Section 1 - Buttons on hover Event
$(".disbug-btn").hover( function()
{
    $(this).children("#s1_button_1").attr("src" ,"./asserts/1_Bug_Close.svg")
    $(this).children("#s1_button_1").attr("src" ,"./asserts/1_Bug_Close.svg")
}
,function()
{
    $(this).children("#s1_button_1").attr("src" ,"./asserts/1_Bug_Open.svg")
    $(this).children("#s1_button_1").attr("src" ,"./asserts/1_Bug_Open.svg")
}).delay(300).fadeIn(200);

//Section 1 button 2 

$(".demo-btn").hover( function()
{
    $(this).children("#s1_button_2").attr("src" ,"./asserts/1_Try_Demo_Closed.svg")
    $(this).children("#s1_button_2").attr("src" ,"./asserts/1_Try_Demo_Closed.svg")
}
,function()
{
    $(this).children("#s1_button_2").attr("src" ,"./asserts/1_Try_Demo_Open.svg")
    $(this).children("#s1_button_2").attr("src" ,"./asserts/1_Try_Demo_Open.svg")
}).delay(300).fadeIn(200);





// Section 1 display images - Translate on scroll
var trans_per_scroll_len = min_Anim_Height/max_Translation;
var rotate_per_scroll_len = min_Anim_Height/max_Rotation;
var opacity_per_scroll  = 1.0/min_Anim_Height  ;

var lastScrollTop = 0;
var val;
var rotateVal;
var opacityVal;
$(window).scroll(function() {
    var st = $(window).scrollTop();
    
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
            // $(".sec1-img1-animate").css( 'transform','rotate(-' + rotateVal + 'deg)',
            //                        '-webkit-transform','rotate(-' + rotateVal + 'deg)',
            //                         '-ms-transform','rotate(-' + rotateVal + 'deg)');
            // $(".sec1-img1-animate").css( 'transform','rotate(' + rotateVal + 'deg)',
            //                         '-webkit-transform','rotate(' + rotateVal + 'deg)',
            //                          '-ms-transform','rotate(' + rotateVal + 'deg)');
            
        } else {
            $(".sec1-img1-animate").css( 'transform','translateX(-' + val + 'px)',
                                        '-webkit-transform','translateX(-' + val + 'px)',
                                        '-ms-transform','translateX(-' + val + 'px)');
            $(".sec1-img2-animate").css( 'transform','translateX(' + val + 'px)',
                                        '-webki t-transform','translateX(' + val + 'px)',
                                        '-ms-transform','translateX(' + val + 'px)');
            $(".sec1-img1-animate").css( 'opacity',opacityVal);
            $(".sec1-img2-animate").css( 'opacity',opacityVal);
            // $(".sec1-img2-animate").css( 'transform','rotate(-' + rotateVal + 'deg)',
            //                             '-webkit-transform','rotate(-' + rotateVal + 'deg)',
            //                             '-ms-transform','rotate(-' + rotateVal + 'deg)');
        }

    }



    lastScrollTop = st;
});