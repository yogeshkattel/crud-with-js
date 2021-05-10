// // const obj1 ={
// //     name:"yogesh kattel",
// //     age:"17",
// //     school:"Dhulabari secondary school",
// // }

// // // document.write(obj1.name)
// // // document.write(obj1.name.split(""))

// // document.write(`my name is ${obj1.name}. I am ${obj1.age}years old. I study in ${obj1.school}.`)

// console.log("yogesh"+11)

const div = document.querySelector('#header');
const add = document.querySelector('#add')
const sub = document.querySelector('#sub');
const divi = document.querySelector('#div');
const mul = document.querySelector('#mul');
const output = document.querySelector('#out')
var a,b;

const valuecaller=()=>{
    a = Number(document.querySelector('#field1').value);
    b = Number(document.querySelector('#field2').value);
    

}

add.addEventListener('click',()=>{
    

    // const a = Number(document.querySelector('#field1').value);
    // const b = Number(document.querySelector('#field2').value);
    valuecaller();
    output.innerHTML= a+b
    // div.appendChild(c)
    
})
sub.addEventListener('click',()=>{
    // var a = Number(document.querySelector('#field1').value);
    // var b =Number(document.querySelector('#field2').value);
    valuecaller();
    output.innerHTML = a - b 
    // var c = document.createElement('p');
    // c.innerHTML= a-b
    // div.appendChild(c)
})

// sub.addEventListener('click', function(){

//     valuecaller();
//     output.innerHTML = a - b 

// })

divi.addEventListener('click', ()=>{
    // var a = Number(document.querySelector('#field1').value);
    // var b = Number(document.querySelector('#field2').value);
    valuecaller();
    output.innerHTML =  a / b
    // var c = document.createElement('p');
    // c.innerHTML = a / b
    // div.appendChild(c)
})
mul.addEventListener('click', ()=>{
    // var a =Number(document.querySelector('#field1').value);
    // var b = Number(document.querySelector('#field2').value);
    valuecaller();
    output.innerHTML = a * b 
    // var c = document.createElement('p')
    // c.innerHTML= a*b
    // div.append(c)
})

//array


var array = ['yaman','kabish','lord']

//delete first item of array
// array.shift()
//add item to first of array
// array.unshift('yaman boko')

// deletes last item of array
// array.pop()
//adds items at last of array
// document.write(array.push('boka'))
//finding the index 
var lord = array.indexOf('kabish')
// removing specific item from array
// array.splice(1,1)
array[lord]= 'kabisha chai bokai ho hai gays'
document.write(array)
document.write(lord)


const a = [{name:"MunaMandan",price:100},{name:"MunaMandan",price:100},]



