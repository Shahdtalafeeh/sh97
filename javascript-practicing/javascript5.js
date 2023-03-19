
function addItemTolist(number){
    let list = document.getElementById("myList");

    for(let i=1;i<=number;i++){
        let li = document.createElement('li')
        li.innerText = 'item'+i;
       list.appendChild(li); 

    }
    return list;
}
addItemTolist(5)


