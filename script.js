//1. refrence html element in js
const formtask = document.querySelector(".form-task");

//2. menambahkan event listener ke dalam form
formtask.addEventListener("submit", (event) => {
    event.preventDefault();

    // 3. refrence html input
    const inputform =document.querySelector(".input-form");
    console.log(inputform.value);

    //4. refrence html element ul / wrapper list
    const wrapperlist = document.querySelector(".task-list-wrapper");

    // 5. create <li> using js
    const tasklist = document.createElement("li");

    //6. masukan input ke value <li>
    tasklist.innerHTML = inputform.value;
    
    wrapperlist.append(tasklist);
});