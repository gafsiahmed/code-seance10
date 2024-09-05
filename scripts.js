// console.log('Hello, world!');


// let title = document.querySelector('.test');
// let darkLightMode = document.querySelector('.darkLightMode')
// let body = document.body

// console.log(darkLightMode);


// // darkLightMode.addEventListener("click",function(){

// //     // body.classList.toggle('dark')
// //     if(!body.classList.contains('dark')){
// //         body.classList.add('dark')
// //         darkLightMode.textContent = '🌞'
// //     }
// //     else{
// //         body.classList.remove('dark')
// //         darkLightMode.textContent = '🌚'
// //     }

// // })


// darkLightMode.onclick = function(){
//      // body.classList.toggle('dark')
//      if(!body.classList.contains('dark')){
//         body.classList.add('dark')
//         darkLightMode.textContent = '🌞'
//     }
//     else{
//         body.classList.remove('dark')
//         darkLightMode.textContent = '🌚'
//     }
   
// }



// let form = document.querySelector('.form')
// let nameInput = document.querySelector('.name')
// let emailInput = document.querySelector('.email')
// let passwordInput = document.querySelector('.password')

// form.onsubmit = function(event){
//     event.preventDefault()
//     if(nameInput.value != '' && emailInput.value != '')
//     {
//         passwordInput.removeAttribute('disabled')
//     }
// }


// // function multiply(number1,number2){
// //     return number1*number2
// // }


// const multiply = (number1,number2) => number1*number2

// console.log(multiply(2,3));

// const square = number1 => number1*number1

// console.log(square(3));




// user = {
//     name: 'Seif',
//     age: 61,
//     email: 'jhon@gmail.com',
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     }
// }



// message = `Hello, my name is ${user.name} and I am ${user.age} years old. I work as a ${user.job.title} at ${user.job.company}`



// console.log(message);



// if(user.age > 18){
//     console.log('You are an adult');
// }
// else{
//     console.log('You are a child');
// }


// user.age < 18 ? console.log('You are an child') : user.age >=18 && user.age < 60 ? console.log('You are an adult') : console.log('You are an old person')




// localStorage.getItem() : get the value of a key
// localStorage.setItem()  : set the value of a key
// localStorage.removeItem() : remove a key
// localStorage.clear() : remove all keys



// let value = JSON.stringify(user)

// localStorage.setItem('user',value)

// let userFromLocal = localStorage.getItem('user')

// let userObject = JSON.parse(userFromLocal)

// console.log(userObject.age);


data = [
    {
            name: 'Seif',
            lasname : 'gharbi',
            age: 36,
            city: 'Tunis',
            image: 'images/1.avif'
    },
    {
            name : 'Mohamed',
            lasname : 'Ali',
            age:21,
            city: 'Sfax',
            image: 'images/2.webp'

    },
    {
        name : "Yassmine",
        lasname : 'Ben Ali',
        age: 25,
        city: 'Sousse',
        image : 'images/3.webp'
    },
    {
        name : 'Ahmed',
        lasname : 'Ben Salah',
        age: 45,
        city: 'Tunis',
        image : 'images/4.jpg'
    },
    {
        name : 'Nour',
        lasname : 'Ben Amor',
        age: 30,
        city: 'mahdia',
        image : 'images/5.jpg'
    },{
        name : 'Wassim',
        lasname : 'Riahi',
        age : 16,
        city : 'Rawed',
        image : 'images/6.avif',
    }

]


let dataString  = JSON.stringify(data)

localStorage.setItem('data',dataString)


let dataFromLocal = localStorage.getItem('data')


let dataObject = JSON.parse(dataFromLocal)


// console.log(dataObject);

console.log(dataObject);



// array.forEach(element => {
    
// });

function createUserCard(userInfo){
    let card = document.createElement('div')
    let infos = document.createElement('div')
    card.classList.add('card')
    let fullName = document.createElement('h3')
    let age = document.createElement('p')
    let city = document.createElement('p')
    let image = document.createElement('img')

    fullName.textContent= `${userInfo.name} ${userInfo.lasname}`
    age.textContent = `Age : ${userInfo.age}`
    city.textContent = `City : ${userInfo.city}`
    image.src = userInfo.image
    infos.appendChild(fullName)
    infos.appendChild(age)
    infos.appendChild(city)
    card.appendChild(infos)
    card.appendChild(image)
    return card
}

data.map((item)=> {
    item.age = item.age + 1
})

localStorage.setItem('data',JSON.stringify(data))

let newData = JSON.parse(localStorage.getItem('data'))

newData.forEach(function(item){
    let card = createUserCard(item)
    // console.log(card);
    document.body.appendChild(card)
    
})

let array = [1,2,3,4,5,6,7,8,9,10]




let mappedArray = array.map((item)=>{
   return  item = item-1
   
    
})


let filtredArray  = array.filter((item)=>{
    return item >8}
)

console.log(array);

console.log(mappedArray);
console.log(filtredArray);



