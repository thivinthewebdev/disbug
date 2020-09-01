// THIS FILE CONTAINS ALL THE UNNECESSARY ANIMATION FILES REMOVED FROM THE MAIN FUNCTION.JS FILE

// Section 1 - change source of the button.

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







// Wrapping up text for Section 3 Header
var wraptext = document.querySelector('.s3_heading .letters'); 
wraptext.innerHTML = wraptext.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: false})
  .add({
    targets: '.s3_heading .letter',
    translateY: ["0.2em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
