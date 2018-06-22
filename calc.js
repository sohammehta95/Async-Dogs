var btn = document.querySelector("#button");
var img = document.querySelector("#resize");

//listen for clicks
btn.addEventListener("click", function(){
  //make the request
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).message;
      img.style.backgroundImage = "url('" + url + "')";
    }
  }
  
  XHR.open("GET","https://dog.ceo/api/breeds/image/random");
  XHR.send();
})