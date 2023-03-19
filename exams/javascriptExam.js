let array=[{  userid : 1,
    firstname :  "Krish" ,
    lastname :  "Lee " ,
    phonenumber :  "123456 " ,
    emailaddress :  "krish.lee@learningcontainer.com " },
 { userid : 2,
    firstname :  "racks " ,
    lastname : " jacson " ,
    phonenumber :  "123456 " ,
    emailaddress : " racks.jacson@learningcontainer.com " },{
    userid : 3,
    firstname :  "denial " ,
    lastname :  "roast " ,
    phonenumber :  "21312312  ",
    emailaddress :  "denial.roast@learningcontainer.com " },
 { userid : 4,
    firstname :  "devid  ",
    lastname : " neo " ,
    phonenumber :  "8975343 " ,
    emailaddress :  "devid.neo@learningcontainer.com " 
 },
 { userid : 5,
    firstname : " jone " ,
    lastname :  "mac " ,
    phonenumber :  "3254667  ",
    emailaddress : " jone.mac@learningcontainer.com  "
 }
]

function returnUseridf(array){
    let name=0;
    array.forEach(e=>{
        if(e.firstname==="racks "){
            name= e.userid
        }
            
        
    })
return name
}
console.log(returnUseridf(array))

function returnUseridl(array){
    let name=[]
    array.forEach(e=>{
        if(e.lastname==="roast "){
            name.push(e.userid)
        }
            
        
    })
return name
}
console.log(returnUseridl(array))

function phone(array){
    let name=[]
    array.forEach(e=>{
        if(e.phonenumber==="8975343 "){
            name.push(e.firstname+''+e.lastname)
        }
            
        
    })
return name
}
console.log(phone(array))











 let array1=[
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
      address: " Irbid ",
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
      address: "Amman",
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
  ];

  
  function ageUpper25(array1){
    let upper25=array1.filter(ele=>ele.age > 25 )
       

    return upper25;
  }

console.log(ageUpper25(array1))


function ageLower25(array1){
    let lower25=[]
    array1.forEach(el=>{
        if(el.age<25){
            lower25.push(el)
        }
    })

    return lower25
  }

console.log(ageLower25(array1))


function salaryandtax(array1){
    let allusers=array1.map(p=>{
        let user=[]
        let tax=0.7*(p.jobDescription.salary)
        let salaryAfter=p.jobDescription.salary-tax
        let fullName=p.firstName+' '+p.lastName
        user.push(fullName)
        user.push(tax)
        user.push(p.jobDescription.title)
        user.push(salaryAfter)
        return user;
    
    })
    return allusers;
       
}
console.log(salaryandtax(array1))



function returnByadress(array1,adress){
    let userAr=array1.filter(u=>{
        if(adress===u.address){
           
            return u
        }
    })

return userAr


}
console.log(returnByadress(array1,"Amman"))



function children(array1){
let children1=array1.filter(e=>e.childreen.length>2)

return children1
}


console.log(children(array1))





function add(array1){
 let user=[]
    array1.forEach(r=>{
        if(r.jobDescription.salary < 1500){
          r.jobDescription.salary=r.jobDescription.salary+0.05
            
           user.push(r)
        }
    }
    )
    return user
    
}
console.log(add(array1))



console.log('shahd Altalafeeh')
