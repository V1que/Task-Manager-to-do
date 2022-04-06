let form = document.getElementById("form");
let textInput = document.getElementById("textInput")
let msg = document.getElementById("msg");
let dateInput= document.getElementById("dateInput");
let textarea= document.getElementById("textarea");
let tasks= document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    formValidation();
    
});

let formValidation = () => {
    if (textInput.value === "" ){
    console.log("failure");
    msg.innerHTML="Task cannot be blank";
    }
    else{
        console.log("success");
        msg.innerHTML="";

        acceptData();

        add.setAttribute("data-bs-dismiss","modal");
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss","") 
        })();}
    };

    let data = []

    let acceptData = () =>{
        data.push({
            text:textInput.value,
            date: dateInput.value,
            description: textarea.value,
    
        });
        localStorage.setItem("data",JSON.stringify(data))

console.log(data)
        createTasks();
         
           };

     let createTasks = () => {
        tasks.innerHTML="";
         data.map((x,y) => {
             return ( tasks.innerHTML += ` 
            <div id = ${y}>
            <span class="fw-bold">${x.text}</span>      
            <span class="small text-secondary">Due Date<br> ${x.date}</span>
            <p>${x.description}</p> 
            <span>
            <label for="status" id ="status">status:</label>
            <select  id="complete" onchange="statusValidation();">
            <option value="" >select</option>
            <option value="1">Pending</option>
            <option value="2">Ongoing</option>
            <option value="3">Completed </option>
           </select>
           <span id="st-msg"></span>
           </span>
            <span class="options">
                <i onClick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                <i onClick = "deleteTask(this); createTasks()" class="fas fa-trash-alt"></i>
            </span>
        </div>`
        );
         });
            
    
        resetForm();
        
    };


    let deleteTask = (e)=>{
        e.parentElement.parentElement.remove();
        data.splice(e.parentElement.parentElement.id, 1);
        localStorage.setItem("data",JSON.stringify(data));
        console.log(data );
    }

    let editTask =(e) =>{
        let selectedTask = e.parentElement.parentElement;
        
            textInput.value =selectedTask.children[0].innerHTML;
            dateInput.value =selectedTask.children[1].innerHTML;
            textarea.value =selectedTask.children[2].innerHTML;
        
            deleteTask (e)
        };

        let resetForm =() =>{
            textInput.value ="";
            dateInput.value ="";
            textarea.value ="";
        };

        (() =>{
            data = JSON.parse(localStorage.getItem("data")) || [];
            createTasks()
            console.log(data);
        })();
        
        const dateElement = document.getElementById("date");
        const options = {weekday : "long", day:"numeric", month:"short",year:"numeric"};
        const today = new Date();
        let st_msg=  document.getElementById('st-msg');

       function statusValidation(){
           let x =document.getElementById("complete").value 
           if(x=='1'){
          st_msg.innerHTML="You can do this!";}
          else if(x=='2'){
            st_msg.innerHTML="You are almost there!";}
            else if(x=='3'){
                st_msg.innerHTML="Welldone, you completed this task on " + today.toLocaleDateString("en-GB", options);}
              
            else{st_msg.innerHTML=""}
            localStorage.setItem("statusValidation",JSON.stringify(x))
            }
       

        (() =>{
            x =JSON.parse( localStorage.getItem("statusValidation"));
            
        })();
          
       
           