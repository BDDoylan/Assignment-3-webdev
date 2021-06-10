let numRows = 0;
let numCols = 0;
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
    console.log("Clicked Remove Col")
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    console.log("Clicked Fill All")
}

function clearAll(){
    console.log("Clicked Clear All")
}

function fillU(){
    console.log("Clicked Fill All Uncolored")
}
