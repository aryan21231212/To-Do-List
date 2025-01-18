let button = document.querySelector("#add")
let input = document.querySelector("#inp")
let text = document.querySelector("#newelements")




button.addEventListener('click',()=>{
    if(input.value === ""){
        alert("value to daal bsdk!");
    }else{
        let newele = document.createElement("ul");
        newele.innerHTML = `${input.value} <i class="fa-regular fa-trash-can"></i>`;
        text.appendChild(newele);
        input.value = "";
        newele.querySelector("i").addEventListener('click',remove);
        function remove(){
            newele.remove();
        }
 }
}); 

