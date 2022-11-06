/**
 * notetaker.js implements the functionality of the note taker application:
 * - Tracks an array with the current notes
 * - Displays the notes on the web page
 * - Adds notes entered by the user
 * - Removes notes selected by the user 
 */

 let operands = [];

 updatePageContent();

document.getElementById('add').addEventListener('click', addOperand);
document.getElementById('remove').addEventListener('click', removeOperand)

/**
 * Updates the displayed 
 */
 function updatePageContent() {

    if (operands.length == 0) {
        document.getElementById('display-notes').classList.add('display-none');
        document.getElementById('delete-note').classList.add('display-none');
    } else {
        updateOperation();
        updateDropdownBox();
    }
}

function updateOperation() {
    var item = document.getElementById("notelist").value;
    document.getElementById("notelist").innerHTML = "<li> " + item + " </li>";

    var item = document.getElementById("noteselection").value;
    document.getElementById("noteselection").innerHTML = "<option>" + item + "<option>";
}

    function updatePageContent() {
        return this.notelist + " " + this.noteselection
}

