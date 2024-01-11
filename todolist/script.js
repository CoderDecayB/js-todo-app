let input = document.getElementById('input-id');
let listContainer = document.getElementById('list-container');

function addList(){
  if(input.value ===''){
    input.style.color ="#000000";
    input.style.backgroundColor="red";
  }
  else{
    input.style.color ="black";
    input.style.backgroundColor="#Ffffff";
     let li = document.createElement('li');
     li.innerHTML= input.value;
     listContainer.appendChild(li);
     let span = document.createElement("span");
     span.textContent='\u274C';
     li.appendChild(span);
  }
  input.value='';
  saveData();
  
}
listContainer.addEventListener("click",function(e){
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
  saveData();
  }
},false);

