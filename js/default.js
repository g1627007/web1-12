
for(var i = 1; i < 101; i++){
  var li =document.createElement('li');
  li.textContent = i;
  document.getElementById('list').appendChild(li);
  
  if(i%3 = 0){
    li.textContent = Fizz;
  }
  else if(i%5 = 0){
    li.textContent = Buzz;
  }
  else if(i%15 = 0){
    li.textContent = FizzBuzz;
  }
  else(){
    li.textContent = i;
  }
  
}


document.getElementById('from').onsubmit = function(){
  window.alert(document.getElementById('from').word.value);
};

