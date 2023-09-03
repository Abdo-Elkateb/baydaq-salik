// js -- for a activite page 

let moreActivities = document.getElementById('more-activities')
moreActivities = false;


fetchNewsData()

let mainActivite = document.getElementById("main_activite");
function fetchNewsData() {
   let res = fetch("../card.json").then(res => {
    return res.json()
   })
     .then (data => {
     for(i = 0; i < data.length; i++){

        mainActivite.innerHTML += ` 
    
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
     }
      
    
    })
   
 
    .catch(error => {
      console.log(error);
    }); 
}

// moreActivities.addEventListener("click", ()=> {
//   // showMore = !showMore;
//   // mainActivite.replaceChildren();
// //   showMoreData.innerHTML = "";
// fetchNewsData()
// //   console.log(showMore);

// });




