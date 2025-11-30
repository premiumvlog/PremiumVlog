// paste into script.js
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('menuBtn');
  var nav = document.querySelector('.navLinks');
  btn && btn.addEventListener('click', function(){
    nav.classList.toggle('show');
  });
});
