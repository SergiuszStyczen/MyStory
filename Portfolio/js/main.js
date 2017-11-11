window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);
    loaderApp.init();
},false);

var loader = document.getElementById("loader");
var loaderApp = {
  init: function() {
    if(loader){
      setTimeout(function(){
          loader.style.display = "none";
         }
        , 4000);
    }
  },
};

window.addEventListener("wheel", showLoader);

function showLoader(){
  loader.style.display = "block";
  setTimeout(function(){
    loader.style.display = "none";
  }
  ,2000);
}
