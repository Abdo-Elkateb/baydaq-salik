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

console.log(showMore);
fetchNewsData()
let mainContainer = document.getElementById("active_main");
function fetchNewsData(){
  let response = fetch("../card.json").then(response => {
    return response.json()
  })
    .then (data => {
      for(let i = 0; i < data.length; i++ ) {
        // showMoreData.innerHTML = "عرض المزيد من البطولات"
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
// showMoreData.addEventListener("click", ()=> {
//   showMore = !showMore;
//   mainContainer.replaceChildren();
//   showMoreData.innerHTML = "";
//   fetchNewsData();
//   console.log(showMore);
// });
 
//  
// let nextBtn = document.getElementById("nextBtn")
// let pervBtn = document.getElementById("pervBtn")


while (count <= 10) {
    total += count;
  count += 1; }
  console.log(total);
  console.log("hi")