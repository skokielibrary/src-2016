window.onscroll = function(e) {
  var imgReplace = document.getElementsByClassName("banner_image")[0];
  vertical_position = this.scrollY;
  if (170 < vertical_position && vertical_position < 475) {
    imgReplace.src = "custom/assets/img/2019/header-lights-on.png";
  } else {
    imgReplace.src = "custom/assets/img/2019/header.png";
  }
}
