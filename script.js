(function(){ //syntax to run code automatically on load
  function populateDynamicElement() {
    var dynamicElement = document.getElementById('dynamic')
    dynamicElement.innerHTML = 'This came from JavaScript';
    dynamicElement.innerHTML = 'The time is ' + Date().toLocaleString();
  }

  // Add your JS here
  window.addEventListener('load', function(){
    //alert("hello!");
    populateDynamicElement();
  });
})(); // syntax to run code automatically on load
