var mode = document.querySelector("html");
var modedark= document.getElementById("theme-toggle-button")
modedark.addEventListener("click",function(){
  if(mode.classList.contains("dark")){
    mode.classList.remove("dark")
    mode.classList.add("light")
  }
  else{
    mode.classList.remove("light")

    mode.classList.add("dark")
  }
})


var settingstoggle = document.getElementById("settings-toggle");
var settingssidebar = document.getElementById("settings-sidebar")

settingstoggle.addEventListener("click",function(){
  settingssidebar.classList.toggle("translate-x-full")
  settingstoggle.classList.toggle("show")


})


var allFonts=document.querySelectorAll(".myFonts button")

for(let i=0 ; i<allFonts.length ; i++){
  allFonts[i].addEventListener("click",function(){

    for(let x=0 ; x<allFonts.length ; x++){
      allFonts[x].classList.remove("active")
    }
    allFonts[i].classList.add("active")
    if(allFonts[i].getAttribute("data-font")=="alexandria"){
      document.body.classList.add("font-alexandria")
      document.body.classList.remove("font-tajawal")
      document.body.classList.remove("font-cairo")
    }
    else if(allFonts[i].getAttribute("data-font")=="tajawal"){
      document.body.classList.add("font-tajawal")
      document.body.classList.remove("font-cairo")
      document.body.classList.remove("font-alexandria")

    }
    else if(allFonts[i].getAttribute("data-font")=="cairo"){
      document.body.classList.add("font-cairo")
      document.body.classList.remove("font-tajawal")
      document.body.classList.remove("font-alexandria")


    }


  })
}






















let allButtons = document.querySelectorAll("#portfolio-filters button")

for(let i=0 ; i<allButtons.length ; i++){


  
  allButtons[i].addEventListener("click",function(){
    var allCards= document.querySelectorAll(".portfolio-item")
    var categ=allButtons[i].getAttribute("data-filter")

    for(let x=0 ; x<allButtons.length ; x++){
      allButtons[x].classList.remove("active", "bg-linear-to-r", "from-primary", "to-secondary")
    }
    allButtons[i].classList.add("active", "bg-linear-to-r", "from-primary", "to-secondary")

    //
    for(let i=0 ; i<allCards.length ; i++){
    allCards[i].style.transition="opacity 0.3s, transform 0.3s; "
    allCards[i].style.opacity="0"
    allCards[i].style.transform="scale (0.8)"

    setTimeout(function(){
      allCards[i].style.display="none"

    },400)

    setTimeout(function(){
      if(allCards[i].getAttribute("data-category")==categ){
        allCards[i].style.display="block"
        setTimeout(function(){
          allCards[i].style.transition="opacity 0.3s, transform 0.3s; "
      allCards[i].style.opacity="1"
      allCards[i].style.transform="scale (1)"
        },100)
  

      }

     
    }, 400);
    }
  })



 
}

































var widthard=document.querySelector(".testimonial-card").offsetWidth
var index=0;
document.getElementById("next-testimonial").addEventListener("click",function(){
  index++
  if(index==4){
    index=0
  }
  update()
})



document.getElementById("prev-testimonial").addEventListener("click",function(){
  index--
  if(index<0){
    index=3
  }
  update()
})

function update(){
  document.getElementById("testimonials-carousel").style.transform=`translateX(${widthard*index}px)`


}







var indicators=document.querySelectorAll(".carousel-indicator");
console.log(indicators)
for(let i=0 ; i<indicators.length;i++){
  indicators[i].addEventListener("click",function(){
    index=i
    update()
  })

}






var scrollBtn=document.getElementById("scroll-to-top");
scrollBtn.addEventListener("click", function(){
  window.scrollTo({
    top:0,behavior:"smooth"
  })
})




