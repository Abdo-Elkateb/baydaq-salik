//  start js 
// hello world

let avtiveBox = document.getElementById("avtive_box");
let avtiveBoxItem = document.getElementById("avtive_box_item");
let right = document.getElementById("right")
let left = document.getElementById("left")
let close = document.getElementById("close");
let imgs = Array.from(document.getElementsByClassName("image-click"));
let imagsIndex = 0;
let activeCard = document.getElementById("active_card");
// let showMoreData = document.querySelector(".show-more-data");
let showMoreData = document.getElementById("show-more-data");
let showMore = false;
let lineMenu = document.querySelector(".lineMenu");
let mainNever = document.querySelector(".main_never");
 console.log(mainNever);
let body = document.querySelector("body");




// ASO 
AOS.init({
  duration: 1500
})

//  control nevber & makes it fixed using  -- scroll 
function scrollNevber() {
  window.onscroll = () => {
    if (scrollY > 250) {
      mainNever.classList.add("nav_fixed");
      scroll;
    } else {
      mainNever.classList.remove("nav_fixed");
    }
  };
}
scrollNevber()
console.log(imgs)


//  when you click the image it show you the big image,
//  allow you to press the right, left, and close the image



// click image 
imgs.forEach(element => {
  element.addEventListener("click", (eventInfo) => {
    avtiveBox.style.display = "flex"
    imagsIndex = imgs.indexOf(eventInfo.target)
    console.log(imagsIndex)
    var imageSrc = eventInfo.target.src
    avtiveBoxItem.style.backgroundImage = `url(${imageSrc})`
  })
});



avtiveBoxItem.addEventListener("click", function (e) {
  // close  image using if
  if (e.target === close) {
    avtiveBox.style.display = "none"
  }
  if (e.target === right) {
    imagsIndex++
    console.log(imgs[imagsIndex].src);
    if (imagsIndex == imgs.length) {
      imagsIndex++
    }
    imageSrc = imgs[imagsIndex].src
    avtiveBoxItem.style.backgroundImage = `url(${imageSrc})`;
  }


  if (e.target === left) {
    imagsIndex++
    console.log(imgs[imagsIndex].src);
    if (imagsIndex == imgs.length) {
      imagsIndex--
    }
    imageSrc = imgs[imagsIndex].src
    avtiveBoxItem.style.backgroundImage = `url(${imageSrc})`;
  }
})

// fetchNewsData


let mainContainer = document.getElementById("active_main");
function fetchNewsData(){
  let response = fetch("./js/card.json").then(response => {
    return response.json()
  })
    .then (data => {
      for(let i = 0; i < 3; i++ ) {
        mainContainer.innerHTML += `
    
          <div id="active_card" class="active_card"data-aos="fade-up">
                <div class="card_img">
                <img id="image-click" class="image-click" src="${data[i].picture}" alt="">
      
                </div>
                <div class="card_title">
                  <h4>${data[i].name} </h4>
                  <p>${data[i].address}</p>
                  <p>
                  ${data[i].date}
                  </p>
                  <p>
                 ${data[i].timer}
                  </p>
        
                </div>
              </div>
        `
        // if(showMore == false && i > 1) {
        //   break;
        // }else {
        //   showMoreData.innerHTML = "عرض القليل من البطولات"
        //   continue;
        // }
      }
    
    })
    .catch(error => {
      console.log(error);
    });  
}
fetchNewsData()
// let nextBtn = document.getElementById("nextBtn")
// let pervBtn = document.getElementById("pervBtn")


 
  lineMenu.addEventListener("click", ()=> {
    mainNever.classList.add("active");
  })
  body.addEventListener("click", e => {
    let clikedElem = e.target;
    if (!clikedElem.classList.contains("lineMenu") && !clikedElem.classList.contains("mainNever")) {
      mainNever.classList.remove("active");
  
    }
  })


// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 2000); // (*)

// }).then(function(result) { // (**)

//   console.log(result); // 1
//   return result * 2;

// }).then(function(result) { // (***)

//   console.log(result); // 2
//   return result * 2;

// }).then(function(result) {

//   console.log(result); // 4
//   return result * 2;

// });
// we assume this code runs at top level, inside a module
