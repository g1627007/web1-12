for(var i = 1; i < 100; i++){
  var li =document.createElement('li');
   i;
  document.getElementById('list').appendChild(li);
 
    if(i%15 == 0) {
  　  li.textContent = "FizzBuzz";
    }
    else if(i%3 == 0) {
      li.textContent = "Fizz";
    }
    else if(i%5 == 0) {
      li.textContent = "Buzz";
    }
    else {
      li.textContent =i + " ";
    }
}

document.getElementById('from').onsubmit = function(){
  window.alert(document.getElementById('from').word.value);
}
