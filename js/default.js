document.getElementById('from').onsubmit = function(){
  window.alert(document.getElementById('from').word.value);
};


for(var i = 1; i < 101; i++){
    var li =document.createElement('li');
  li.textContent = i;
  document.getElementById('list').appendChild(li);

}

 
