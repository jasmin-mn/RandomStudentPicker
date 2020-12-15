

const imageUrls = [

    'https://media.giphy.com/media/COYGe9rZvfiaQ/giphy.gif',
    'https://media.giphy.com/media/I9BrUZDq5hksw/source.gif',
    'https://media.giphy.com/media/B37cYPCruqwwg/source.gif',
    'https://media.giphy.com/media/hHuOmWidPXwCk/source.gif',
    'https://media.giphy.com/media/18hKuycmFuwaQ/source.gif',
    'https://media.giphy.com/media/3oFzma9FGIblOf6Wk0/source.gif',
    'https://media.giphy.com/media/7QxZfWnBLdGI8/source.gif',
    'https://media.giphy.com/media/KmTnUKop0AfFm/source.gif',
    'https://media.giphy.com/media/UseBZDm3O00hy/source.gif',
    'https://media.giphy.com/media/l0HlMWkHJKvyjftKM/source.gif',
    'https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif',
    'https://media.giphy.com/media/PzQvWAhgfUipW/source.gif',
    'https://media.giphy.com/media/3q3RzbSNRugy0mH6LQ/giphy.gif',
    'https://media.giphy.com/media/2gG2xiMTtFwsg/source.gif',
    'https://media.giphy.com/media/YrD1PQldGsstG/source.gif',
    'https://media.giphy.com/media/uHox9Jm5TyTPa/giphy.gif',
    'https://media.giphy.com/media/gLQjUikb8nQnS/source.gif',
    'https://media.giphy.com/media/B6G2MYBmtnGYU/source.gif',
    'https://media.giphy.com/media/gE6IUBRWZd744/source.gif',
    'https://media.giphy.com/media/cO39srN2EUIRaVqaVq/source.gif'
];


const students = ['Af', 'Alex', 'Carmen', 'Célia', 'David', 'Dominik', 'Edwin', 'Gülcin', 'Ishita', 'Jasmin', 'Mahmoud', 'Marzena', 'Max', 'Najeeb', 'Nicole', 'Osama', 'Prem', 'Rami', 'Saeed', 'Zaher'];

function getrandomname(array){
    const randomIndex=Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function updateHTML(){
    // const imageElement=document.createElement("img");
    // document.body.appendChild(imageElement)
//   imageElement.setAttribute('src',getrandomname(imageUrls))
let intervalcounter = 0;

const interval = setInterval(() => {
    const backgroundBlue=document.getElementById("img_background")
    const images = document.getElementById("imgtag")
    images.setAttribute('src',getrandomname(imageUrls))
 
    const random = getrandomname(students);

    const header = document.getElementById("heading");
    header.textContent=random;
     intervalcounter +=1;

     const btn =document.querySelector('#button');
     btn.style.backgroundColor="red"
     btn.innerHTML="wait"
     btn.disabled = true;
     if(intervalcounter>5){
         clearInterval(interval);
         const btn =document.querySelector('#button');
         btn.style.backgroundColor="blue"
         btn.innerHTML="GO"
         btn.disabled=false;

     }
     backgroundBlue.style.background="blue"
     backgroundBlue.style.width=600+"px"
     backgroundBlue.style.height=600+"px"
     backgroundBlue.style.position="absolute"
     backgroundBlue.style.top="300"+"px"
     images.style.position="absolute"
     images.style.top=60+"px"
     images.style.left=100+"px"

//      const bodyHeight =document.body.clientHeight;
//     const bodyWidth=document.body.clientWidth;
//     const imageHeight =images.clientHeight;
//     const imageWidth = images.clientWidth;
//     const centerY = (bodyHeight/2) ;
//     const centerX = (bodyWidth/2);

//     images.style.position = 'absolute';
//     images.style.top =centerY + 'px';
//     images.style.left = centerX + 'px';



   
//     const imageHeight2 = backgroundBlue.clientHeight;
//     const imageWidth2 = backgroundBlue.clientWidth;
//     // const centerY = (bodyHeight/2) ;
//     // const centerX = (bodyWidth/2);

//     backgroundBlue.style.position = 'absolute';
//     // backgroundBlue.style.top =centerY1 + 'px';
//     // backgroundBlue.style.left = centerX1 + 'px';

     
   
 },2000);
}



// // setTimeout(()=>{
// //     clearTimeout(interval)
// // },3000)


