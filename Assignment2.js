// qno1

 function addNo(x) {
    return function (y){
        return (x+y);     
    }
}
let no2=addNo(5);
console.log(no2(5));
console.log(no2(10));

// qno2

function arraySearch(arrayFound, arrayValue) {
  if (arrayFound.includes(arrayValue)) {
    return true;
  } else if (arrayFound.length === 0) {
    return false;
  } else {
    return arraySearch(arrayFound.slice(1), arrayValue);
  }
}
  let array = [1, 2, 3, 4, 5];
console.log(arraySearch(array, 3));
console.log(arraySearch(array, 6));

// qno3

function addParaAtBootom(para){
let addPara = document.createElement("p");
let text= document.createTextNode(para);
addPara.appendChild(text);
document.body.appendChild(addPara);
}
addParaAtBootom("this is added paragraph");

// qno4

function addedList(list) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = list;
  ul.appendChild(li);
}
addedList('this is  new added list');

//qno5

 function changeColor() {
    let ul = document.querySelector('ul');
    ul.style.backgroundColor= "green";
 }
  changeColor();

// qno6

function objectData(name,student) {
  localStorage.setItem(name, JSON.stringify(student));
}
let student = { name: "ali", RollNo: 12345 };
objectData("studentKey", student);

// qno7

function getStoredObject(keyValue) {
  const storedObject = localStorage.getItem("studentKey");
  return JSON.parse(storedObject);
}
getStoredObject();
