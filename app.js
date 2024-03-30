let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;


    let dltBtn=document.createElement("button");
    dltBtn.innerText="delete";
    dltBtn.classList.add("delete");
   
    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value=""
});
ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let=itemList=event.target.parentElement;
        itemList.remove();
    }
})
// let dltBtns=document.querySelectorAll(".delete");
// for(dltBtn of dltBtns){
//     dltBtn.addEventListener("click", function(){
//         // console.log("element deleted");
//         let par=this.parentElement;
//         par.remove();
//     });
// }