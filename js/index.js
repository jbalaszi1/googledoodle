
// self invoking function to isolate Greensock
(  function(){
  // Your Awesomeness
  TweenMax.from('#vcd', 3, {
   x: 200,
   //rotation: 360,
   //scale: 10,
   delay: 4,
   opacity: 0,
   ease: Bounce.easeOut,
  });
  TweenMax.from('#r', 3, {
    delay: 4,
    opacity: 0,
  });
  
  TweenMax.to('#google', 3, { 
    left: 200,
    opacity: 0,
    scale: 1,
    
  });
  
  
  
  
  
  
  
// Do NOT DElETE  
}());