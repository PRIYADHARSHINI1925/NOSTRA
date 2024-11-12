var closeid=document.querySelector(".closeid")
document.getElementById("close").addEventListener("click",function(){
    closeid.style.display="none"
})
var sliderright = document.getElementById("sliderright");
var sliderleft = document.getElementById("sliderleft");
var slider = document.querySelector(".slider");
var slidermargin = 0;

sliderright.addEventListener("click", function() {
    slidermargin += 100;  // This moves by 100% of the image width.
    if (slidermargin > (slider.children.length - 1) * 100) { // Prevent overflow
        slidermargin = 0;  // Reset to the first image
    }
    slider.style.marginLeft = "-" + slidermargin + "%";
});

sliderleft.addEventListener("click", function() {
    slidermargin -= 100;  // Move left by 100% of the image width
    if (slidermargin < 0) {
        slidermargin = (slider.children.length - 1) * 100; // Go to the last image
    }
    slider.style.marginLeft = "-" + slidermargin + "%";
});
window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})
