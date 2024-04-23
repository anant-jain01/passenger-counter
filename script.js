let saveEl=document.getElementById("save-el");
let countEl=document.getElementById("count-el");
let count=0;
function increment(){
    count+=1;
    document.getElementById("count-el").innerText=count;
}
function save(){
    let countStr=count+' '+'-';
    saveEl.innerText+=' '+countStr;
    countEl.textContent=0;
    count=0
}