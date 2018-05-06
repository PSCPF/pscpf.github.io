function cwm() {
  setTimeout(function(){document.getElementById('cwm').innerHTML = 'You cannot resist.';}, 4000)
  setTimeout(function(){document.getElementById('cwm').style.display = 'none';}, 4500)
}
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
