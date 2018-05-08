function cwm() {
  setTimeout(function(){document.getElementById('cwm').innerHTML = 'You cannot resist.';}, 4100)
  setTimeout(function(){document.getElementById('cwm').style.display = 'none';}, 4600)
}
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function construction() {
  alert("This website is undergoing construction, and most of what you currently see are the earliest footprints for the site.")
}
