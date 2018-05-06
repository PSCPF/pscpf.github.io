function cwm() {
  document.getElementById('cwm').innerHTML = 'You cannot resist.';
  setTimeout(function(){document.getElementById('cwm').style.display = 'none';}, 1000)
}
function clicked() {
  alert("Thank you for freeing me!");
  document.getElementById('hover').style.display = 'none';
}
function over() {
  document.getElementById('hover').innerHTML = "Please :(";
}
function out() {
  document.getElementById('hover').innerHTML = "Click me!";
}
