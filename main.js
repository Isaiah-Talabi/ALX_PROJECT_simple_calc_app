const button = document.querySelectorAll('button');
 const input = document.querySelector('input');
for(let i = 0; i < button.length; i++){
  button[i].addEventListener('click', function(e){
    if(button[i].innerText == '='){
      const result = eval(input.value)
      input.value = result;
    } else {
      input.value += button[i].innerHTML;
      if(button[i].innerText == 'C'){
        input.value = "";
      }
    }
  })
}
