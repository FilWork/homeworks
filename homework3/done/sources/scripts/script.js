mainPage.onmouseover = mainPage.onmouseout = handler;
var milanId = document.getElementById("milan");
var holidaysId = document.getElementById("holidays");
var logo = document.getElementById("logo");

function handler(event) {
  
  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  } 
  console.log("event" + str(event.target))
  if(str(event.target) == "Picture" | str(event.target) == "hoverBlock" | str(event.target) == "logotext"){
    
    if (event.type == 'mouseover') { 
      milanId.style.color =  "#c5531d"
      holidaysId.style.color =  "#c5531d"
      logo.src = "sources/img/logoOrange.png"
    }
    if (event.type == 'mouseout') {
      milanId.style.color = 'white'
      holidaysId.style.color =  'white'
      logo.src = "sources/img/logo.png"
    }
  }
}
