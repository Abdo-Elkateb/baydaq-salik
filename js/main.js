//  start js 
// hello world

// ASO 
AOS.init({
    duration:1500
})

//  control nevber & makes it fixed using  -- scroll 

var main = document.getElementById("nav__main");

window.onscroll =  () => {
  if (scrollY > 250) {
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

// readystatus 0 

let card = new XMLHttpRequest() 

// readystatus 1
card.open(
  'GET', './js/card.json', true
);

// readystats 2

card.send();


card.onreadystatechange  = () => {
// console.log(JSON.parse(card.response))
// console.log(card.readyState)
if(card.readyState === 4 && card.status === 200) {
  let product = JSON.parse(this.responseText)
  let output = ""

  //  now o have to loop 

  for(let item of product) {
    output += `
         <div class="active_card"data-aos="fade-up">
        <div class="card_img">
         <img class="image-click" src="./img/leren-4.jpg" alt=""> 
        </div>


        <div class="card_title">
          <h4>
            التعاون مع الجمعية الليبية للشطرنج في تنظيم بطولة الفصول الأربعة الشتوية

          </h4>
          <p>
            مكان النشاط:
            <span> مجمع ذات العماد – مدينة طرابلس</span>
          </p>
          <p>
            تاريخ النشاط
            <span>
              من 2018/2/5
              إلي 2018/2/12
            </span>
          </p>
          <p>
            مدة النشاط:
            <span>
              ثمانية أيام
            </span>
          </p>

        </div>
      </div>
    
    `;
  }


}

}



