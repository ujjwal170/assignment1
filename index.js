var rev
function myfun(box)  //  here box is equivalent to document.querySelector(".box1")
 {
     boxImg=box.querySelector("img");
     prev.src=boxImg.src;
     container2.querySelector("p").innerHTML=boxImg.title;
     if(rev!=undefined)
     {
         rev.style.background="white";
         rev.style.color="black"
     }
     rev=box;
     box.style.background="rgb(23, 121, 233)";
     box.style.color="white"
 }
 window.addEventListener("keydown",changeImage)
 function changeImage(e)
 { 
     if(rev!=undefined)
     {
         index=parseInt(rev.getAttribute("id")) // getting the integer value for id
         if(e.keyCode=="38")  // up key pressed
         {e.preventDefault()
           cd=5-(6-index)%5;
             box=document.getElementById(cd)
             myfun(box)
         }
         else if(e.keyCode=="40")  // down key pressed
         {e.preventDefault()
           cd=(index)%5+1;
             box=document.getElementById(cd)
             myfun(box)
         }
     }
 }