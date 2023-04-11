// 1 Question

function createClosure(num){
    return function(num1){
        return num1 + num;
    }
}

const addNumber = createClosure(5);
console.log(addNumber(5));
console.log(addNumber(10));



// 2 Question

const myArray = [1,2,3,4,5,6,7,8,9,10]


function searchArray(arr,val){
    if (arr.length === 0){
        return false;
    }

    let first = arr[0];
    let rest = arr.slice(1);

    if(first === val){
        return true;
    }
    else{
        return searchArray(rest,val)
    }
}

console.log(searchArray(myArray, 20));


// 3 Question

function addParagraph(content) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = content;
    
    document.body.appendChild(newParagraph);
  }
  
addParagraph('This is a new paragraph added using javascript function');


// 4 Question

function addListItem(content) {
    const list = document.querySelector('ul');
    const newListItem = document.createElement('li');
    newListItem.textContent = content;
    
    list.appendChild(newListItem);
  }
  
addListItem('This is a new list item added using javascript function');


// 5 Question

function changeBackgroundColor(element, color){
    element.style.backgroundColor = color;
}

const myElement = document.getElementById('example');
changeBackgroundColor(myElement, 'green');


// 6 Question

const student = {
    name : "Umar",
    age : 23,
    gender : "male",
    profession : "Developer" 
  }

  let stringify = JSON.stringify(student)
  localStorage.setItem("student", stringify)
  
  



