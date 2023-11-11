let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let ansValue = 0;
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML.trim().toLowerCase();

    if (buttonText === 'enter') {
      string = eval(string);
      input.value = string;
    } else if (buttonText === 'clear') {
      string = "";
      input.value = string;
    } else if (buttonText === 'del') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    else if(buttonText === '%'){
      string = eval(string) / 100;
      input.value = string;
    } else {
      string += buttonText;
      input.value = string;
    }
  })
})
