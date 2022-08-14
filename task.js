let btn1 =document.querySelector(".right1")
let value =document.querySelector(".rightcontainer")
let task = document.querySelector(".datacontainer1")
let btn2 =document.querySelector(".red1")
let complete = document.querySelector(".completebtn")

/////////////////////////// initail function ///////////////////////////

btn1.addEventListener("click",()=>{

value.classList.toggle("hidden")
   


})

/////////////////////////////////////// submit /////////////////////////////////////
let task4=value.value
complete.addEventListener("click",()=>{
    
    if(task4.length>=1){
        
    
    let elements =document.createElement("div")
    elements.classList.add("datacontainer")
    task.append(elements)
    
    
    let heading =document.createElement("aside")
    heading.classList.add("redheading")
    elements.append(heading)
    
    
    let input =document.createElement("input")
    input.classList.add("input")
    heading.append(input)
    input.type="text"
    
    let button =document.createElement("div")
    button.classList.add("buttons")
    elements.append(button)
    
    
    let checkbox =document.createElement("button")
    checkbox.classList.add("check")
    button.append(checkbox)
    checkbox.innerText="\u{2713}"
    
    let edit =document.createElement("button")
    edit.classList.add("edit")
    button.append(edit)
    edit.innerText="\u{1F589}"
    
    
    let del =document.createElement("button")
    del.classList.add("delete")
    button.append(del)
    del.innerText="\u{1F5D1}"
    
    
    let colorflipper =document.createElement("button")
    colorflipper.classList.add("colorflipper")
    button.append(colorflipper)
    colorflipper.innerText="\u{2625}"
    
    
    let lock =document.createElement("button")
    lock.classList.add("lock")
    button.append(lock)
    lock.innerHTML= "<img src='./img/lock-icon-11.jpg' alt=''style='width:30px ;height: 30px;' >"
    } 
}


)

    




