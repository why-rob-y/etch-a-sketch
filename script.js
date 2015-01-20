$(document).ready(function() {


/** $('body').append("<p>I'm a paragraph!</p>");  **/   /** TEST LINE **/

var x=0;
var y=0;
var newDiv=document.createElement("div");
var newRow = document.createElement("div");
var numPerSide=16;
var cellWidthPercent = 100 / numPerSide;
var newNum=16;

function drawGrid(numBoxes){

cellWidthPercent = 100 / numBoxes;

y=0;
for (y=0; y<numBoxes; y++) {
newRow = document.createElement("div");
newRow.id = "y"+y;
newRow.className = "gridRow";
document.getElementById("myContainer").appendChild(newRow);
document.getElementById("y"+y).style.height=cellWidthPercent + "%";
x=0;
	for (x=0; x<numBoxes; x++) {
	newDiv=document.createElement("div");
	newDiv.id = "x" +x +"y" +y;
	newDiv.className = "gridSquare";
	document.getElementById("y"+y).appendChild(newDiv);
	document.getElementById("x"+x+"y"+y).style.width=(cellWidthPercent) + "%"; 
	}

}


$(".gridSquare").mouseenter(function(){
$(this).css("background-color","black");

});

}

drawGrid(numPerSide);


$("#topButton").click(function(){
newNum=prompt("How many squares across would you like?", numPerSide);
while (document.getElementById("myContainer").hasChildNodes()) {
    document.getElementById("myContainer").removeChild(document.getElementById("myContainer").lastChild);
}
document.getElementById("myContainer").innerHTML = ""
drawGrid(newNum);
});





});