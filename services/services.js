
export function changeRoutes() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
  
    if (pageID != "") {
      $.get(`pages/${pageID}.html`, function (data) {
        // console.log("data" + data);
        $("#app").html(data);
      });
    } else {
      $.get("home.html", function (data) {
        // console.log("data" + data);
        $("#app").html(data);
      });
    }
  }