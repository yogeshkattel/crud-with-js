const submit = document.querySelector('#submit');
var book,price;
var divi =document.querySelector('#out');
const fields=()=>{
    book = document.querySelector('#book').value;
    price= Number(document.querySelector('#price').value);



    
}
submit.addEventListener('click',()=>{
    fields();
    var items = document.createElement('p');
    var delbtn = document.createElement('button')
    var edit = document.createElement('button')
    delbtn.id = 'delete'
    edit.id='edit'
    edit.innerHTML='edit'
    
    delbtn.innerHTML = 'delete'
    
    items.innerHTML= book+'<br><br>'+'Rs'+price;
    
    divi.appendChild(items);
    divi.appendChild(delbtn);
    divi.appendChild(edit)

    
    
})

