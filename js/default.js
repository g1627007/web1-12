for(var i = 1; i < 101; i++){
  var li =document.createElement('li');
  li.textContent = i;
  document.getElementById('list').appendChild(li);
 
    if(i%15 == 0) {
  　  System.out.print("FizzBuzz ");}
    else if(i%3 == 0) {
	  System.out.print("Fizz ");}
	else if(i%5 == 0) {
	  System.out.print("Buzz ");}
	else {
	  System.out.print(i + " ");}
}

document.getElementById('from').onsubmit = function(){
  window.alert(document.getElementById('from').word.value);
}
