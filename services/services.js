import { RABBITS, SANCTUARY } from "../rabbitArrays.js";

export function changeRoutes() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data" + data);
      $("#app").html(data);
      $('html, body').animate({scrollTop: '0px'}, 0);
      if (pageID == "adoptables") {
        adoptableLoop();
      }
      if (pageID == "sanctuary") {
        sanctuaryLoop();
      }
    });
  } else {
    $.get("pages/home.html", function (data) {
      // console.log("data" + data);
      $("#app").html(data);
    });
  }
}

export function adoptSelector(){

}

export function adoptableLoop() {
  for (let i = 0; i < RABBITS.length; i++) {
    let rabbit = RABBITS[i];
    // console.log(rabbit.name);
    $("#adopt").append(`<div class="profile">
      <div class="left">
        <h3>${rabbit.name}</h3>
        <img src="${rabbit.image}" alt="${rabbit.name}'s Profile Picture">
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

export function sanctuaryLoop() {
  for (let i = 0; i < SANCTUARY.length; i++) {
    let rabbit = SANCTUARY[i];
    console.log(i);
    $("#sanctuary").append(`<div class="profile">
      <div class="left">
        <h3>${rabbit.name}</h3>
        <img src="${rabbit.image}" alt="${rabbit.name}'s Profile Picture">
        <div class="info">
          <p><span>Breed:</span> ${rabbit.breed}</p>
          <p><span>Sex:</span> ${rabbit.sex}</p>
          <p><span>Age:</span> ${rabbit.age}</p>
          <p><span>Weight:</span> ${rabbit.weight}</p>
        </div>
  
      </div>
      <div class="right">
        <div class="bio">
          <p>${rabbit.bio}</p>
        </div>
        <div class="bioButton" id="bioButton">
          <a href="#bio${i}"><span>View My Bio!</span></a>
        </div>
      </div>
    </div>`);
  }
}
