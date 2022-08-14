let btn1 =document.querySelector(".right1")
let container =document.querySelector(".rightcontainer")
let task = document.querySelector(".datacontainer1")
let btn2 =document.querySelector(".red1")
let complete = document.querySelector(".completebtn")

let btn3 =document.querySelector(".yellow1")
let btn4 =document.querySelector(".blue1")
let btn5 =document.querySelector(".black1")

let textarea = document.querySelector(".textarea1")

////////////////////////////////////// top buttons ////////////////////////

let all = document.querySelector(".all")
let red = document.querySelector(".red")
let blue = document.querySelector(".blue")
let black = document.querySelector(".black")

let icon1 = document.querySelector(".icon1")
/////////////////////////// initail function ///////////////////////////

btn1.addEventListener("click",()=>{

container.classList.toggle("hidden")
   


})

/////////////////////////////////////// submit /////////////////////////////////////



    
    btn2.addEventListener("click",()=>{



        let elements =document.createElement("div")
        elements.classList.add("datacontainer")
        task.append(elements)
        
        
        let heading =document.createElement("aside")
        heading.classList.add("redheading")
        elements.append(heading)
        
        
        let input =document.createElement("input")
        input.classList.add("input")
    elements.append(input)
        input.type="text"
        input.value=document.querySelector(".textarea1").value
        
        let button =document.createElement("div")
        button.classList.add("buttons")
        elements.append(button)
        
        
        let checkbox =document.createElement("button")
        checkbox.classList.add("check")
      elements.append(checkbox)
        checkbox.innerText="\u{2713}"
        
        let edit =document.createElement("button")
        edit.classList.add("edit")
        elements.append(edit)
        edit.innerText="\u{1F589}"
        
        
        let del =document.createElement("button")
        del.classList.add("delete")
    elements.append(del)
        del.innerText="\u{1F5D1}"
        
        
        let colorflipper =document.createElement("button")
        colorflipper.classList.add("colorflipper")
        elements.append(colorflipper)
        colorflipper.innerText="\u{2625}"
        
        
        let lock =document.createElement("button")
        lock.classList.add("lock")
      elements.append(lock)
        lock.innerHTML= "<img src='./img/lock-icon-11.jpg' alt=''style='width:30px ;height: 30px;' >"
      
    })



 
    btn3.addEventListener("click",()=>{
        let elements =document.createElement("div")
        elements.classList.add("datacontainery")
        task.append(elements)
        
        
        let heading =document.createElement("aside")
        heading.classList.add("yellowheading")
        elements.append(heading)
        
        
        let input =document.createElement("input")
        input.classList.add("input")
       elements.append(input)
        input.type="text"
        input.value=document.querySelector(".textarea1").value
        
        
        let button =document.createElement("div")
        button.classList.add("buttons")
        elements.append(button)
        
        
        let checkbox =document.createElement("button")
        checkbox.classList.add("check")
      elements.append(checkbox)
        checkbox.innerText="\u{2713}"
        
        let edit =document.createElement("button")
        edit.classList.add("edit")
        elements.append(edit)
        edit.innerText="\u{1F589}"
        
        
        let del =document.createElement("button")
        del.classList.add("delete")
    elements.append(del)
        del.innerText="\u{1F5D1}"
        
        
        let colorflipper =document.createElement("button")
        colorflipper.classList.add("colorflipper")
        elements.append(colorflipper)
        colorflipper.innerText="\u{2625}"
        
        
        let lock =document.createElement("button")
        lock.classList.add("lock")
      elements.append(lock)
        lock.innerHTML= "<img src='./img/lock-icon-11.jpg' alt=''style='width:30px ;height: 30px;' >"
      
    })


    btn4.addEventListener("click",()=>{
        let elements =document.createElement("div")
        elements.classList.add("datacontainerb")
        task.append(elements)
        
        
        let heading =document.createElement("aside")
        
        heading.classList.add("blueheading")
        elements.append(heading)
        
        
        let input =document.createElement("input")
        input.classList.add("input")
        elements.append(input)
        input.type="text"
        input.value=document.querySelector(".textarea1").value
        
        
        let button =document.createElement("div")
        button.classList.add("buttons")
        elements.append(button)
        
        
        let checkbox =document.createElement("button")
        checkbox.classList.add("check")
      elements.append(checkbox)
        checkbox.innerText="\u{2713}"
        
        let edit =document.createElement("button")
        edit.classList.add("edit")
        elements.append(edit)
        edit.innerText="\u{1F589}"
        
        
        let del =document.createElement("button")
        del.classList.add("delete")
    elements.append(del)
        del.innerText="\u{1F5D1}"
        
        
        let colorflipper =document.createElement("button")
        colorflipper.classList.add("colorflipper")
        elements.append(colorflipper)
        colorflipper.innerText="\u{2625}"
        
        
        let lock =document.createElement("button")
        lock.classList.add("lock")
      elements.append(lock)
        lock.innerHTML= "<img src='./img/lock-icon-11.jpg' alt=''style='width:30px ;height: 30px;' >"
      
    })

    
    btn5.addEventListener("click",()=>{
        let elements =document.createElement("div")
        elements.classList.add("datacontainerk")
        task.append(elements)
        
        
        let heading =document.createElement("aside")
        heading.classList.add("blackheading")
        elements.append(heading)
        
        
        let input =document.createElement("input")
        input.classList.add("input")
        elements.append(input)
        input.type="text"
        input.value=document.querySelector(".textarea1").value
        
       
        
        
        let button =document.createElement("div")
        button.classList.add("buttons")
        elements.append(button)
        
        
        let checkbox =document.createElement("button")
        checkbox.classList.add("check")
      elements.append(checkbox)
        checkbox.innerText="\u{2713}"
        
        let edit =document.createElement("button")
        edit.classList.add("edit")
        elements.append(edit)
        edit.innerText="\u{1F589}"
        
        
        let del =document.createElement("button")
        del.classList.add("delete")
    elements.append(del)
        del.innerText="\u{1F5D1}"
        
        
        let colorflipper =document.createElement("button")
        colorflipper.classList.add("colorflipper")
        elements.append(colorflipper)
        colorflipper.innerText="\u{2625}"
        
        
        let lock =document.createElement("button")
        lock.classList.add("lock")
      elements.append(lock)
        lock.innerHTML= "<img src='./img/lock-icon-11.jpg' alt=''style='width:15px ;height: 15px;' >"
      
    })


red.addEventListener("click",()=>{
    // task.innerHTML=""
    let data1=document.querySelector(".datacontainer")
    let data2=document.querySelector(".datacontainery")
    let data3=document.querySelector(".datacontainerb")
    let data4=document.querySelector(".datacontainerk")

    task.append(data1)
    task.removeChild(data2)
    task.removeChild(data3)
    task.removeChild(data4)
   
    
})


