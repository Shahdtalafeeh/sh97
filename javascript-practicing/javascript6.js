// let url="https://jsonplaceholder.typicode.com/users"
// const t = document.getElementById('TableA');
// t.border = '2';

// let tableHead=document.getElementById('thead')
// let row_1 = document.createElement('tr');

// let heading_1 = document.createElement('th');
// heading_1.innerHTML ='name';
// let heading_2 = document.createElement('th');
// heading_2.innerHTML ='Email';
// let heading_3 = document.createElement('th');
// heading_3.innerHTML ='adress';
// heading_3.colSpan=2

// let heading_31 = document.createElement('th');
// heading_31.innerHTML ='street';
// let heading_32 = document.createElement('th');
// heading_32.innerHTML ='city';
// let heading_4 = document.createElement('th');
// heading_4.innerHTML ='phone';



// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
// row_1.appendChild(heading_4);
// heading_3.appendChild(heading_31)
// heading_3.appendChild(heading_32)
// tableHead.appendChild(row_1);


// fetch(url).then(response => response.json())
// .then(result=>{
//     console.log(result)
//     let placeholder = document.querySelector("#data-output");
//    let out = "";
//    for(let user of result){
//       out += `
//          <tr>
//             <td> ${user.name}</td>
//             <td>${user.email}</td>
//             <td>${user.address.street}</td>
//             <td>${user.address.city}</td>
//             <td>${user.phone}</td>
//          </tr>
//       `;

// }

// placeholder.innerHTML = out;
// })
// .catch(err => console.error(err));


// fetch(url).then(response=>response.json()).then(data=>{
//     let btn=document.getElementById('btn')

//     btn.addEventListener('click',happens)
//     function happens(){
//         console.log(data)
//     }

// })
// document.getElementById('button').addEventListener("keydown", (e)=> {
//     if(e.keyCode === 13){
//         alert("You clicked me");
//     }
    
// });
// let track=document.getElementById('track')
// track.addEventListener('mousemove',e=>{
//     let fakeConsole=document.getElementById('fake-console')
//     fakeConsole.innerText=`screen X:${e.screenX}
//     screen Y:${e.screenY}`
// })

