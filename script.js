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

    console.log("Clicked Add Row")
}
//Adds a column
function addC() {
    //let grid = document.getElementById("grid");
    let rows = document.querySelectorAll("tr");

    for(let i = 0; i < rows.length; ++i)
    {
        let currentRow = rows[i];

        currentRow.insertCell(-1);
    }

    console.log("Clicked Add Col")
}

//Removes a row
function removeR() {
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
