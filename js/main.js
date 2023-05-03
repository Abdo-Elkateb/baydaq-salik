//  start js 

// ASO 
AOS.init({
    duration:1500
})

//  control nevber & makes it fixed using  -- scroll 

var main = document.getElementById("nav__main");

window.onscroll =  () => {
  if (scrollY > 250) {git
    main.classList.add("nav_fixed");
    scroll;
  } else {
    main.classList.remove("nav_fixed");
  
  }

};


//  when you click the image it show you the big image,
//  allow you to press the right, left, and close the image

var avtive_box = document.getElementById("avtive_box");
var avtive_box_item = document.getElementById("avtive_box_item");
var right = document.getElementById("right")
var left = document.getElementById("left")
var close = document.getElementById("close");
var imgs = Array.from(document.getElementsByClassName("image-click"));
var imagsIndex = 0;

// click image 

for(var i = 0; i < imgs.length; i++) {

  imgs[i].addEventListener("click", (eventInfo) => {
  avtive_box.style.display = "flex"
  // click to get src image 
  console.log("its working")

  // this is a  number index from images, click not right or left
  imagsIndex = imgs.indexOf(eventInfo.target)
  console.log(imagsIndex)
  var imageSrc = eventInfo.target.src
  avtive_box_item.style.backgroundImage = `url(${imageSrc})`
  })
}


// close  image 
close.addEventListener("click", () => {
    avtive_box.style.display = "none"

})

// next image 
right.addEventListener("click", () => {
 imagsIndex++
//  console.log(imgs[imagsIndex].src);
if(imagsIndex == imgs.length) {
   imagsIndex = 0
}
 imageSrc = imgs[imagsIndex].src
  avtive_box_item.style.backgroundImage = `url(${imageSrc})`;

})
left.addEventListener("click", () => {
  imagsIndex++;
  //  console.log(imgs[imagsIndex].src);
  if (imagsIndex == imgs.length) {
    imagsIndex = 0;
  }
  imageSrc = imgs[imagsIndex].src
  avtive_box_item.style.backgroundImage = `url(${imageSrc})`;

});

document.addEventListener("click", () => {

  
});



let card = new XMLHttpRequest()

card.open(
  'get', './js/card.json', true
);

card.send();
console.log(card)

card.onreadystatechange = function () {
  if(this.readyState === 4 && this.status === 200) {
    console.log(this.responseText)
  }
  let output = "";

  for(let item of active) {
    output += `
    
    <div>
    
    </div>

    
    `
  }

}






