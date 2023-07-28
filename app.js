const btn = document.querySelector("#yourFavBtn");
const tbody = document.querySelector("tbody");
const inputs = document.querySelectorAll(".inputs")


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const newTr = document.createElement("tr");
    tbody.appendChild(newTr);
    for(let i = 0; i<3 ; i++){
        let newTd = document.createElement("td");
        newTd.innerText =document.querySelectorAll(".inputs")[i].value;
        newTr.appendChild(newTd);
        document.querySelectorAll(".inputs")[i].value = "";
    }
    
})

