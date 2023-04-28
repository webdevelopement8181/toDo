document.addEventListener('DOMContentLoaded', function() {
console.log('JavaScript file loaded');
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const addButton=document.querySelector("button");
//const placeholder = inputBox.getAttribute("placeholder");
function addTask(){
    console.log('addTask function called'); // Check if function is called
    if(inputBox.value===''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        console.log(li)
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
inputBox.value='';
saveData();
}
addButton.addEventListener('click',addTask);
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);//save data when ever we reload the site
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
function removeInput(){
   // console.log("is it working?");
inputBox.placeholder='';
}
function addInput(){
    inputBox.placeholder='add your text';
}
function enterKey(event){
    console.log("enter key is called")
    if(event.keyCode===13){
event.preventDefault();
addTask();
    }

}

inputBox.addEventListener('click',removeInput);
inputBox.addEventListener("blur",addInput);
inputBox.addEventListener("keydown",enterKey);
});


