//  start js 
// hello world

var avtive_box = document.getElementById("avtive_box");
var avtive_box_item = document.getElementById("avtive_box_item");
var right = document.getElementById("right")
var left = document.getElementById("left")
var close = document.getElementById("close");
var imgs = Array.from(document.getElementsByClassName("image-click"));
var imagsIndex = 0;

// ASO 
AOS.init({
  duration: 1500
})

//  control nevber & makes it fixed using  -- scroll 
function scrollNevber() {
  var main = document.getElementById("nav__main");
  window.onscroll = () => {
    if (scrollY > 250) {
      main.classList.add("nav_fixed");
      scroll;
    } else {
      main.classList.remove("nav_fixed");
    }
  };
}
scrollNevber()



//  when you click the image it show you the big image,
//  allow you to press the right, left, and close the image



// click image 
imgs.forEach(element => {
  element.addEventListener("click", (eventInfo) => {
    avtive_box.style.display = "flex"
    imagsIndex = imgs.indexOf(eventInfo.target)
    console.log(imagsIndex)
    var imageSrc = eventInfo.target.src
    avtive_box_item.style.backgroundImage = `url(${imageSrc})`
  })
});




avtive_box_item.addEventListener("click", function (e) {
  // close  image using if
if(e.target === close) {
  avtive_box.style.display = "none"
}
if(e.target === right) {
  imagsIndex++
  //  console.log(imgs[imagsIndex].src);
  if (imagsIndex == imgs.length) {
    imagsIndex = 0
  }
  imageSrc = imgs[imagsIndex].src
  avtive_box_item.style.backgroundImage = `url(${imageSrc})`;
}
})



// next image 
// right.addEventListener("click", () => {
//   imagsIndex++
//   //  console.log(imgs[imagsIndex].src);
//   if (imagsIndex == imgs.length) {
//     imagsIndex = 0
//   }
//   imageSrc = imgs[imagsIndex].src
//   avtive_box_item.style.backgroundImage = `url(${imageSrc})`;

// })
left.addEventListener("click", () => {
  imagsIndex++;
  //  console.log(imgs[imagsIndex].src);
  if (imagsIndex == imgs.length) {
    imagsIndex = 0;
  }
  imageSrc = imgs[imagsIndex].src
  avtive_box_item.style.backgroundImage = `url(${imageSrc})`;

});





