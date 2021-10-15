// Create three variables that hold references to the input, button, and list elements using const.
const buttonRef = document.querySelector("#btn");
const listRef = document.querySelector("#ourlist");

buttonRef.addEventListener("click", function() {
    const inputRef = document.getElementById("favchap").value;
    console.log(inputRef);

    if (inputRef !== "") {
        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "\u274C";

        let listItem = document.createElement("li");
        listItem.textContent = inputRef;
        listItem.setAttribute("id", inputRef); // add an id in order to target the item when deleting it. 

        listRef.appendChild(listItem);
        listItem.appendChild(deleteBtn);

        // create the input after the user click on the button add
        document.getElementById("favchap").value = "";
        
        // set the focus to the input 
        document.getElementById("favchap").focus();


        deleteBtn.addEventListener("click", function() {
            // remove the li item with the right id.
            listRef.removeChild(document.getElementById(inputRef));

            // after you click the delete button, set the focus to the input 
            document.getElementById("favchap").focus();
        })
    }
})
