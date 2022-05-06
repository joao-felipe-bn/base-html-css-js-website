window.onload = (function() {
  alert('Welcome to page!');

  document.getElementById("header").onclick = function(){
    alert('you click in header!');
  }

  document.getElementById("article").onclick = function(){
    alert('you click in article!');
  }

  document.getElementById("nav").onclick = function(){
    alert('you click in nav!');
  }

  document.getElementById("aside").onclick = function(){
    alert('you click in aside!');
  }

  document.getElementById("footer").onclick = function(){
    alert('you click in footer!');
  }
  
});

