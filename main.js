let put = document.querySelector('#mainPut');
let clicky = document.querySelector('.clicky');
let upper = document.querySelector('#upper');
let number = document.querySelector('#numbers');
let symbol = document.querySelector('#symbols');
let lower = document.querySelector('#lower');
let gen = document.querySelector('#generate');
let len = document.querySelector('#leng');
clicky.addEventListener('click', function(){

  if(!put.value){
    return;
  }
  
  copyText();
});

gen.addEventListener('click', function(){
  getData();
})

function copyText(){
  /* Select the text field */
  put.select();
  put.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(put.value);

  /* Alert the copied text */
  alert("Copied the password: " + put.value);
}

const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const b = 'abcdefghijklmnopqrstuvwxyz';
const c = '1234567890';
const d = '!@#$%^&*()_+-=';

function getUpper(){
  return a[Math.floor(Math.random() * a.length)];
}

function getLower(){
  return b[Math.floor(Math.random() * b.length)];

}

function getNumber(){
  return c[Math.floor(Math.random() * c.length)];

}

function getSymbol(){
  return d[Math.floor(Math.random() * d.length)];

}

function getData(){
  let ohayo = '';
  let val = len.value; 
  for(let i=0; i< val; i++){
    const x = generate();
    if(!x){
      return;
    }
    ohayo += x;
  }

  put.value = ohayo;
}

function generate(){
  let store = []; 

  if(upper.checked){
    store.push(getUpper());
  }

  if(lower.checked){
    store.push(getLower());
  }

  if(number.checked){
    store.push(getNumber());
  }

  if(symbol.checked){
    store.push(getSymbol());
  }

  return store[Math.floor(Math.random() * store.length)];
}
