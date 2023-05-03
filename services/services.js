import { RABBITS, SANCTUARY } from "../rabbitArrays.js";

export function changeRoutes() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  // let idx = "bio-${i}";
  // console.log(idx.replace("bio-", " "));

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data" + data);
      $("#app").html(data);
      $("html, body").animate({ scrollTop: "0px" }, 0);
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
        <div class="bioButton" id="rabbit" onclick="rabbitInfo">
          View My Bio
        </div>
      </div>
    </div>`);

    rabbitInfo();
  }
}
function rabbitInfo() {
  // let i = 0; i < RABBITS.length; i++
  // let rabbit = RABBITS[i]
  $('.bioButton').click(function(e) {
    console.log(e)
    let profile = e.currentTarget.id
    console.log('clicked' + profile);
    $("#adopt").html(`<div class="profile">
      <div class="left">
        <h3>${RABBITS[profile].name}</h3>
        <img src="${RABBITS.image}" alt="${RABBITS.name}'s Profile Picture">
        <div class="info">
          <p><span>Breed:</span> ${RABBITS.breed}</p>
          <p><span>Sex:</span> ${RABBITS.sex}</p>
          <p><span>Age:</span> ${RABBITS.age}</p>
          <p><span>Weight:</span> ${RABBITS.weight}</p>
        </div>
  
      </div>
      <div class="right">
        <div class="bio">
        <div class="special">
          <p>${RABBITS.bonded}</p>
          <p>${RABBITS.RAC}</p>
        </div>
          <p>${RABBITS.bio}</p>
        </div>
        <div class="backBtn" onclick="closeWindow()">Go Back</div>
      </div>
    </div>`);
  })
}

export function sanctuaryLoop() {
  for (let i = 0; i < SANCTUARY.length; i++) {
    let rabbit = SANCTUARY[i];
    // console.log(i);
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
          <a href="#bio-${i}" id="bioButton"><span>View My Bio!</span></a>
        </div>
      </div>
    </div>`);
  }
}

export function closeWindow() {
  console.log("Window Closed");
  $("#adopt").html(``);
  adoptableLoop();
}
