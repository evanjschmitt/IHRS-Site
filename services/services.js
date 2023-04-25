import { RABBITS } from "../hugeArray.js";

export function changeRoutes() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data" + data);
      $("#app").html(data);
      if (pageID == "adoptables") {
        loop();
      }
    });
  } else {
    $.get("home.html", function (data) {
      // console.log("data" + data);
      $("#app").html(data);
    });
  }
}

export function loop() {
  for (let i = 0; i < RABBITS.length; i++) {
    let rabbit = RABBITS[i];
    console.log(rabbit.name);
    $("#adopt").append(`<div class="profile">
      <div class="left">
        <h3>${rabbit.name}</h3>
        <img src="${rabbit.image}" alt="">
        <div class="info">
          <p><span>Breed:</span> ${rabbit.breed}</p>
          <p><span>Sex:</span> ${rabbit.sex}</p>
          <p><span>Age:</span> ${rabbit.age}</p>
          <p><span>Weight:</span> ${rabbit.weight}</p>
        </div>
  
      </div>
      <div class="right">
        <div class="bio">
        <div class="special">
          <p>${rabbit.bonded}</p>
          <p>${rabbit.RAC}</p>
        </div>
          <p>${rabbit.bio}</p>
        </div>
        <div class="bioButton">
          <a href="#rabbitBio"><span>View My Bio!</span></a>
        </div>
      </div>
    </div>`);
  }
}
