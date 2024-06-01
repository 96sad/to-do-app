

const input =document.getElementById("input_text");
const button =document.querySelector("button");
const list = document.getElementById("list_items");

function addTask(){
    if (input.value === ''){
        alert('Wright Something Here');
    }
    else{
        let li =document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        input.value = '';
        let span = document.createElement('span');
        span.innerHTML = "x";
        li.appendChild(span);
    }
    saveData();
}
list.addEventListener("click",(e)=>{
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});
button.addEventListener("click",addTask);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    const saveData = localStorage.getItem("data");
    if(saveData){
        list.innerHTML = saveData;
    }
}
window.addEventListener("load",showTask);

// const inputBox = document.getElementById("input-box");
// const button = document.querySelector("button");
// const list = document.getElementById("list-container");


// function addTask(){
//     if(inputBox.value === ''){
//         alert("you must write something!");
//     }else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         list.appendChild(li);
//         inputBox.value = '';
//         let span = document.createElement("span");
//         span.innerHTML = "x";
//         li.appendChild(span);
//     }
//     saveData();
// }
// list.addEventListener("click", (e)=>{
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// });

// button.addEventListener("click", addTask);

// function saveData(){
//     localStorage.setItem("data", list.innerHTML);
// }
// function showTask(){
//     const savedData = localStorage.getItem("data");
//     if(savedData){
//         list.innerHTML = savedData;
//     }
// }
// window.addEventListener("load", showTask);

