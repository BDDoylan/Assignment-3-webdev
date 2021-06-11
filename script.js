let colorSelected; 

//Adds a row
function addR() {

    // Accessing the table element using the DOM
    let grid = document.getElementById("grid");

    // Create a <tr> inside of the grid
    let row = grid.insertRow(0);

    // Insert a cell in the 0th position of the row in the grid
    row.insertCell(0);

    // Accessing the last row of the grid to see how many columns
    // the new added row will need to match
    let numOfColumns = grid.rows[grid.rows.length-1].cells.length-1;

    // Checks if there needs to be extra columns in the new rows
    if(numOfColumns >= 1)
    {   
        // Loops through the amount of times needed adding the extra cells
        for(let i = 0; i < numOfColumns; ++i)
        {
            row.insertCell(0);
        }
    }

    console.log("Clicked Add Row")
}

//Adds a column
function addC() {

    // Accessing the table element using the DOM
    let grid = document.getElementById("grid");

    // Node list of all the rows in the table
    let allRows = document.querySelectorAll("tr");

    // Iterating through each row to add a cell
    for(let i = 0; i < allRows.length; i++)
    {

        // Accessing the current row
        let currentRow = allRows[i];

        currentRow.insertCell(0);
    }

    // Checks if there are no rows so that add column works without any rows to start
    if(allRows.length < 1)
    {
        let row = grid.insertRow(0);
        row.insertCell(0);
    }

    console.log("Clicked Add Col")
}

//Removes a row
function removeR() {

    // Deleting a row on click
    document.getElementById("grid").deleteRow(0);

    console.log("Clicked Remove Row")
}

//Remove a column
function removeC() {

    // Node list of all the rows in the table
    let allRows = document.querySelectorAll("tr");

    // Iterating through each row to remove one cell
    for(let i = 0; i < allRows.length; i++)
    {
    
        // Accessing the current row
        let currentRow = allRows[i];
        
        currentRow.deleteCell(0);
    }

    //  Checks if when clicking remove column there is nothing left so it can 
    // delete all previous added rows so it does not create a bug for when next 
    // creating a column
    if(allRows[0].cells.length === 0){

        // Iterates through rows to delete them one by one
        for(let j = 0; j < allRows.length; j++)
        {
            document.getElementById("grid").deleteRow(0);
        }
    }

    console.log("Clicked Remove Col")
}

//sets global var for selected color
function selected(){

    // Accessing value from the selectedID 
    colorSelected = document.getElementById("selectedID").value;

    // Function used in event listener to change specific selected box to desired color
    function selectedChange(event)
    {
        // The condition that the listener bases on when clicked to determine which cell needs to be changed
        if(event.target.nodeName.toLowerCase() === "td")
        {
            // Changes background to the selected color
            event.target.style.backgroundColor = colorSelected;
        }
    }

    // Accesses grid to add the event listener
    document.getElementById("grid").addEventListener("click", selectedChange);

    console.log(colorSelected);
}

// Fills every cell with the selected color
function fill(){

    // Goes through every cell one by one and changes the color based on the value of selectedID
    document.querySelectorAll('td').forEach(td => td.style.backgroundColor = document.getElementById("selectedID").value);

    console.log("Clicked Fill All")
}

// Resets every cell to its initial color value
function clearAll(){

    // Goes through every cell one by one and changes the color to white
    document.querySelectorAll('td').forEach(td => td.style.backgroundColor = "white");

    console.log("Clicked Clear All")
}

function fillU(){
    console.log("Clicked Fill All Uncolored")
}
