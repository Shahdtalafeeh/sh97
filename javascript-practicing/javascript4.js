// function printPattern(range){
//     for(let i=range ; i>=1 ; i--){
//         let result='';
//         for(let x=1; x<=i ; x++){
//             result +='*'+'';
        
//         }
//         console.log(result);
//     }


// }
// printPattern(10)

// let array=[12, 22, 54, 54, 54, 58, 66, 89, 90, 90, 134, 124, 87, 87 ]

// function dupicateElements(array){
//     let dupicate=[]
//     for (let i=0; i < array.length; i++){
//     if(array.indexOf(array[i])!=i && dupicate.indexOf(array[i])==-1){
//         dupicate.push(array[i])
//     }
// }
//     return dupicate;

//     }
//     console.log(dupicateElements(array))

// let name=['shahd','awatef','saeda','laith','awatef']
// console.log(name.lastIndexOf('h',-3))
// console.log(name.push('mohammad'))
// console.log(name)
// console.log(name.splice(1,3))
// console.log(name)
// console.log(name.filter(ele=>ele==='awatef'))
// console.log(name.slice(1,3))


// let array=[12,2,3,56,78,12,44,90,13,4,3,]
// function bigestNum(array){
//     let bigestNum=array[0];
//     for(let i=1; i<array.length; i++){
//     if(bigestNum < array[i]){
//     bigestNum=array[i];
//     }

//     }
//     return bigestNum;

// }
// console.log(bigestNum(array));

// let string= 'shahd is studying on laptop';

// function uppercase(string){

//     for (let i=0; i<=string.length; i++){
//         string.charAt(i).toUpperCase();
        

//     }
//     return string;
// }
// console.log(uppercase(string))


// let mySentence = "freeCodeCamp is an awesome resource";
// let words = mySentence.split(" ");

// function uppercase(words){

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }

// return words.join(" ");

// }

// console.log(uppercase(words))

// let mySentence = "freeCodeCamp is an awesomenesslove resource";
// let words = mySentence.split(" ");
// function longestword(words){
//     let longestword=words[0];
//     for(i=1; i<words.length; i++){
//         if(longestword.length<words[i].length){
//             longestword=words[i];

//         }
//     }
//     return longestword;

// }
// console.log(longestword(words))

//  let array=[12,-15,-16,19,20,54,-100,0];
//  function possitiveandnegative(array){
//     let positive=[];
//      let negative=[];
//      array.forEach((element)=>{
//         if(element >= 0){
//             positive.push(element);
//         }else{
//             negative.push(element)
//         }  
//        })
     
//      };

// let string='hflj  hjuhgvl uguglygyf yguygliug';
// function uniqueChar(string){
//     let unique="";

//     for(let i=0; i<string.length; i++){
//         if(unique.indexOf(string.charAt(i))== -1){
//             unique=unique+string[i];
//         }
    
//     }
//     return unique;
// }
// console.log(uniqueChar(string));

// let array='hello';
// function reverse0(array){
//     let reverse1="";
//     for(let i=array.length-1; i>=0;i--){
//         reverse1 += array[i]

//     }
//     return reverse1;
// }
// console.log(reverse0(array));
    
// let numbers=[23,1,2,35,6,7];
// function tostring(numbers){
//     let string0=[]
//     for(let i=0; i<numbers.length ; i++){
//         string=numbers[i]+'2';
//         string0.push(typeof(string));
//     }
//     return string0;
    
// }
// console.log(tostring(numbers));

// let names="";
// console.log(names.push('shahd','saeda','awatef','mohammad'));
// console.log(names.pop())
// console.log(names.shift())
// console.log(names.unshift('ana'))
// console.log(names.splice(0,1,'layth'))
// console.log(names.slice(0,2))
// console.log(names)

// if(names){
//     console.log('tru')

// }else{
//     console.log('fals')
// }
// let arr = [3, 4, 5, 6];

// let modifiedArr = arr.map(element=>element *3
// );

// console.log(modifiedArr);

// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element;
// }, 80);

// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
// 	console.log(this) 
// }, 80);

// function mmo(number){

//     for(let i=number; i>=1;i--){
//         let result=''


//         for(let x=1; x<=i; x++){
//             result+= x +' '

//         }
//         console.log(result)

//     }
// }

// console.log(mmo(8))

// let array=[1,45,65,34,34,6,7,0,87,112,5,6,97]
//  function largestNum(array){
//     let bigNum=array[0]
//     for(let i=1; i<array.length;i++){
//         if(array[i]>bigNum){
//             bigNum=array[i]
//         }
//     }
//     return bigNum;
//  }
//  console.log(largestNum(array))

//  function duplicateNum(array){
//     let duplicate=[]
//     for(let i=1;i<array.length;i++){

//         for(let x=0;x<i;x++){
//             if(array[x]==array[i]){
//                 duplicate.push(array[x])
//             }
//         }

//     }
//     return duplicate;

//  }
//  console.log(duplicateNum(array))

// function fac(num){
//     let result=1;
//     for(let i=2; i<=num; i++){
//         result *=i;
//     }
//     return result;
// }
// console.log(fac(6));

let users=[
    {

        firstName: "Hussam",
        lastName: "Bawwab",
        age: 28,
        address: "Irbid",
        phoneNumber: "7981323312",
        jobDescription: {
          title: "Frontend",
          salary: 132123,
        },
        childreen: [
          {
            firstName: "Samer",
            lastName: "Bawwab",
            age: 3,
          },
          {
            firstName: "Bilal",
            lastName: "Bawwab",
            age: 6,
          },
          {
            firstName: "Mariam",
            lastName: "Bawwab",
            age: 8,
          },
        ],
      },
      {

        firstName: "Sara",
        lastName: "Lobani",
        age: 22,
        address: "jerash",
        phoneNumber: "7213454654",
        jobDescription: {
          title: "Frontend",
          salary: 2133,
        },
    
        childreen: [
          {
            firstName: "Ail",
            lastName: "Lobani",
            age: 13,
          },
    
          {
            firstName: "Lobna",
            lastName: "Lobani",
            age: 16,
          },
    
          {
            firstName: "Zaid",
            lastName: "Lobani",
            age: 1,
          },
        ],
    
      },
      {
        firstName: "Ezz",
        lastName: "Ashore",
        age: 25,
        address: "Ajloun",
        phoneNumber: "79823216",
        jobDescription: {
          title: "Frontend",
          salary: 2133,
        },
        childreen: [
          {
            firstName: "Rami",
            lastName: "Lobani",
            age: 20,
          },
    
          {
            firstName: "Omar",
            lastName: "Lobani",
            age: 9,
          },
    
        ],
    
      },
      {

        firstName: "Mohammad",
        lastName: "Damra",
        age: 30,
        address: "Amman",
        phoneNumber: "79898798465",
        jobDescription: {
          title: "Frontend",
          salary: 1133,
        },
        childreen: [
          {
            firstName: "Laith",
            lastName: "Damra",
            age: 1,
          },
    
          {
            firstName: "Ahmad",
            lastName: "Damra",
            age: 8,
          },
    
        ],
    
      },
]



// function fromAmman(users){
//     let ammanPeople=[]
// users.forEach(element => {
//     if(element.address==="Amman"){
//        ammanPeople.push(element.firstName) 
//     }else{
//         return "false"
//     }
    
// });
// return ammanPeople;


// }
// console.log(fromAmman(users))

// function forloop(users){
//   let array1=[]

//   for(let i=0;i<users.length;i++){
//     let tax=(users[i].salary) * 0.075
//     array1.push(tax)
//     array1.push(users[i].firstName+' '+ users[i].lastName)
//     array1.push(users[i].age)
//     let SalaryAfter=users[i].salary-tax
//     array1.push(SalaryAfter)

//   }
//   return array1
// }
// console.log(forloop(users))



// function childAge(users){
//     let childNAmeyoung=[]
//     let childNameOld=[]
// users.forEach(element => {
//     element.childreen.forEach(i=>{
//         if(i.age<10){
//             childNAmeyoung.push(i.firstName+i.lastName)

//         }else{
//             childNameOld.push(i.firstName+i.lastName)
//         }
//     })
    
// });
// console.log(childNAmeyoung)
// console.log(childNameOld)

// }
// childAge(users)


// function phoneNum(users){
// let evenNum=[]
// users.forEach(element=>{

//     if(element.phoneNumber[element.phoneNumber.length-1]%2==0){
//         evenNum.push(element.phoneNumber)
//     }})
    
//     return evenNum;
// }
// console.log(phoneNum(users))


function returns(users){
let user=users.map(element=>{
            let full=[];
            let tax=0.075*(element.jobDescription.salary);
            full.push(tax);
            full.push(element.firstName+' '+element.lastName);
            full.push(element.age);
            full.push(element.jobDescription.salary);
            let SalaryAfter=element.jobDescription.salary-tax;
            full.push(SalaryAfter);

            

            return full; 
        }) 
        return user;
       
    }
console.log(returns(users));






let arr = [
    {
    title: "Harry Potter",
    categories: [
    {
    id: 39,
    name: "Popular Books"
    },
    {
    id: 3,
    name: "Kids"
    },
    {
    id: 79,
    name: "All Books"
    }
    ]
    },
    
    
    {
    title: "Pride and Prejudice",
    categories: [
    {
    id: 36,
    name: "Classic Books"
    },
    {
    id: 3,
    name: "Woman"
    },
    {
    id: 79,
    name: "All Books"
    }
    ]
    }
    ]

    // console.log(arr.filter(i => i.categories.some(j => j.name === "Kids")).map(k => k.title));
    
    // function findKidsBook(arr,name){
    //     for(let i=0;i<arr.length;i++){
    //       for(let x=0;x<arr[i].categories.length;x++){
            
    //             if(arr[i].categories[x].name===name){
    //                 console.log(arr[i][x])
    //             }else{
    //                 console.log('false')
    //             }
           
    //       }  
    //     }
    // }
    // findKidsBook(arr,"Kids");


    // let find = function(arr) {
    //     let books=[]
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = 0; j < arr[i].categories.length; j++) {
    //             if (arr[i].categories[j].name === "Kids") {

    //                 books.push(arr[i].title);
                
    //             }
                
    //         }
    //     }
    //     return books;
    // }
    
    // console.log(find(arr))


//     let students = [
//         { firstName: "John", lastName: "Doe", graduationYear : 2022 },
//         { firstName: "Stephen", lastName: "Matt", graduationYear : 2023 },
//         { firstName: "Abigail", lastName: "Susu", graduationYear : 2022 }
//     ];
    
//     let currentYear = 2022;
//     function graduatingStudents(students){
//  let graduates=[]
        
//         students.filter((element) => {
//         if (element.graduationYear === currentYear) {
            
//             let student=element.firstName+' '+element.lastName;
//             graduates.push(student);
//         }

//     })
// return graduates;
// };
      
    // console.log(graduatingStudents(students));

    let students = [
        { firstName: "John", lastName: "Doe", grduationYear: 2022 },
        { firstName: "Stephen", lastName: "Matt", grduationYear: 2023 },
        { firstName: "Abigail", lastName: "Susu", grduationYear: 2022 }
    ];
      
    // let graduatingStudents = students
    //     .filter((element) => element.grduationYear === new Date().getFullYear())
    //     .map((item) => {
    //       return item.firstName+' '+item.lastName;
    // });
   

    // let add="Mth101"
    // console.log(add.indexOf('h'))

//     let sciCourses = ["Mth101", "Chm201", "Bio301", "Mth203", "Mth205"];
// function checkCourses(courseArray, searchText) {
//     return courseArray.filter(function (item) {
//         console.log(searchText.toLowerCase())
//         console.log(item.toLowerCase().indexOf(searchText.toLowerCase()))
//         return item.indexOf(searchText) !== -1;
//     });
// }
// console.log(checkCourses(sciCourses, "Mth"));


let parentArray = [[
    {
       key: 123,
       value: 'India'
    }, {
       key: 124,
       value: 'USA'
    }, {
       key: 125,
       value: 'Japan'
    }, {
       key: 126,
       value: 'Denmark'
    }, {
          key: 127,
       value: 'Austria'
    },
 ], [
    {
       key: 124,
       value: 'Kenya'
    }, {
       key: 126,
       value: 'UK'
    }, {
       key: 123,
       value: 'Germany'
    }, {
       key: 127,
       value: 'Spain'
    }, {
       key: 125,
       value: 'Portugal'
    },
 ]];

// function findGermany(parentArray){
//     let arr=[]
//     parentArray.forEach(element => {
//         element.forEach(i=>{
//             if(i.key==123){
//                 arr.push(i.value)
//             }
//         })
        
//     });
//     return arr;
// }
// console.log(findGermany(parentArray));
// let map = {};
// parentArray.forEach(arr => {
//    arr.forEach(obj => {
//       let { key, value } = obj;
//       if(map[key]){
//         map[key].push(value);
//       }else{
//        map[key] = [value]
//       }
//    })
// });
// console.log(map);

// let string="you should study hard to get full mark"

// function upperCase(string){
//     let seperation=string.split(' ')
//     console.log(seperation=string.split(' '))


//     for(let i=0;i<seperation.length;i++){
//    seperation[i]=seperation[i][0].toUpperCase()+seperation[i].slice(1)


// };
// return seperation.join(' ')
 

// }
// console.log(upperCase(string))

// let array=[-3,-5,-111,-34,65,4,33,45,1,2,3,98]

// function largest(array){
// let Pos=array.filter(Element=>Element >=0)
// let Neg=array.filter(Element=>Element<0)

// let largePos=Pos[0]
// let largeNeg=Neg[0]

// Pos.forEach(element => {
//   if(element>largePos){
//     largePos=element
//   }
  
// });
// Neg.forEach(element=>{
//   if(element>largeNeg){
//     largeNeg=element
//   }
// })

// return ('large positive='+largePos +' large Negative='+ largeNeg)



// }
// console.log(largest(array))

// let stri='krhgkfrgr lrhgadjgn slihksj gllkkgkgd lgkh'

// function uniqueChar(stri){
// let unique=""
// for(let i=0;i<stri.length;i++){
//   if(unique.indexOf(stri[i])==-1){
//     unique +=stri[i]
//   }
  
// }
// return unique;
// }
// console.log(uniqueChar(stri))

// function uppercase(y){
// let z=[]
// let f=y.split(" ")
// console.log(f)
// for(let i=0;i<f.length;i++)
// {
//   z.push(f[i].charAt(0).toUpperCase() +f[i].slice(1))
// }
// let s= z.join(" ")
// return s;

// }
// console.log(uppercase("hussam start new javascript"))

// let st='fkjshgkja afkjgakfg'

// function reverse(st){
// let newstr=""
// let d=st.length-1
// for(let i=d;i>=0;i--){
// newstr +=st[i]
// }
// return newstr
// }
// console.log(reverse(st))
