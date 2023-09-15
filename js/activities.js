

let moreActivities = document.getElementById('more-activities')
let numbers = document.getElementById('numbers')
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
const paginationItem = document.querySelectorAll('.pagination-item')
console.log(paginationItem)

let paginationLimit = 3;
let currentPage = 1;
let storeData = [] // store data in this var
let dataActivite = document.getElementById("data_activite");

function hendelActiviePaginte() {
 paginationItem.forEach((item) => 
  item.addEventListener("click", (e) => {
     removeAtivePaginte()
    e.target.classList.add("active")
   
  })
 );
 }
 hendelActiviePaginte() 

function removeAtivePaginte()  {
 paginationItem.forEach((item) => {
    item.classList.remove("active")
   
  })
}



//  here we created a FUNCTION TAKE API from JSON 👍
async function displayData(){
  let date =  await fetch("../card.json");
  const reso =  await date.json()
  storeData = reso

}
displayData()


async function dataTeble() {
  await displayData()
  console.log(storeData)
    const pages = []
  for(let i = 0; i<=  Math.ceil(storeData.length / paginationLimit); i++) {
    pages.push(i)
  }
  const indexOfLestPage = currentPage * paginationLimit;
  const indexOfFirstPage = indexOfLestPage - paginationLimit;
  const currentItem = storeData.slice(indexOfFirstPage,indexOfLestPage)
currentItem.forEach((element) => {
 
      dataActivite.innerHTML += `
    
          <div id="active_card" class="active_card"data-aos="fade-up">
                <div class="card_img">
                <img id="image-click" class="image-click" src="${element.picture}" alt="">
      
                </div>
                <div class="card_title">
                  <h4>${element.name} </h4>
                  <p>${element.address}</p>
                  <p>
                  ${element.date}
                  </p>
                  <p>
                 ${element.timer}
                  </p>
        
                </div>
              </div>
        `
  
});
}
dataTeble() 
const pervBtn  = ()=> {
  if((currentPage - 1) * paginationLimit ) {
    currentPage--
   dataTeble()
      console.log(storeData.length)
  }
}
const nextBtn  = ()=> {
  if((currentPage * paginationLimit) / storeData.length ) {
    currentPage++
    dataTeble()
    console.log(storeData.length)
  }
}
// document.getElementById('prev').addEventListener("click",pervBtn,false)
// document.getElementById('next').addEventListener("click",nextBtn,false)










