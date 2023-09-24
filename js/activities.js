
let moreActivities = document.getElementById('more-activities')
let numbers = document.getElementById('numbers')
// let prev = document.getElementById('prev');

let next = document.getElementById("nextBtn")
const paginationItem = document.querySelectorAll('.pagination-item')
console.log(paginationItem)
let paginationLimit = 3;
let currentPage = 1;
let storeData = [] // store data in this var
let dataActivite = document.getElementById("data_activite");
let nextBtn = false;
 body = document.querySelector(".body")

let PaginteNum = 1;
//  here we created a FUNCTION TAKE API from JSON 👍
async function displayData(PaginteNum){

  let date =  await fetch(`http://localhost:3000/post?_page=${PaginteNum}`);
  const reso =  await date.json()
  storeData = reso;
 dataTeble(storeData) 
}
 
displayData(PaginteNum)


function hendelActiviePaginte() {
  displayData()
 paginationItem.forEach((item) => 
  item.addEventListener("click", (e) => {
     e.preventDefault();
     removeAtivePaginte()
    e.target.classList.add("active")
    PaginteNum = e.target.textContent
    
   displayData(PaginteNum)
    // e.target.item
   console.log(PaginteNum)

  })
 );
 }
 hendelActiviePaginte() 

function removeAtivePaginte()  {
 paginationItem.forEach((item) => {
    item.classList.remove("active")

  })
}

function dataTeble(storeData) {

  storeData.forEach((element) => {

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






