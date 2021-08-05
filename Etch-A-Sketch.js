//VARIABLES 
var COLOR="black"
var remove=document.getElementById("eraser")
var rainbow=document.getElementById("rainbow")
var clearAll=document.getElementById("clear")
var pickColor=document.getElementById("Selection")
var gridReload=document.getElementById("reload")
var isClicked= false;
var container = document.querySelector('.display');
var squares=document.querySelectorAll(`.cell`)


//GRID DISPLAY "sets up the container for the grid"


var content = document.createElement('div');
content.classList.add('grid');
container.appendChild(content);
var grid = document.querySelector('.grid');

function eventListenerSetup() {
squares=document.querySelectorAll(`.cell`)


//On a single click fill in only one box


squares.forEach(cell =>{
    cell.addEventListener("mousedown",()=>{
        if(isClicked==false){
            while(pickColor.value!=COLOR){
                COLOR=pickColor.value
                }
            cell.style.backgroundColor=COLOR
            isClicked=true
        }
    })
})


//if clicked and dragged fill in on hover


squares.forEach(cell =>{
    cell.addEventListener("mouseover",()=>{
        if(isClicked==true){
            while(pickColor.value!=COLOR){
                COLOR=pickColor.value
                }
            cell.style.backgroundColor=COLOR
        }
    })
})
//when click is released stop fill in on hover


squares.forEach(cell =>{
    cell.addEventListener("mouseup",()=>{
        if(isClicked==true){
            isClicked=false
        }
    })
})
}

//Color changer for random #TAKEN FROM STACKOVERFLOW


function RAINBOW() {
    return("#"+Math.floor(Math.random()*16777215).toString(16))
}
    
//Sets up the display for the grid


function createGrid(number) {
    console.log('done')
    var size=number**2
    grid.style.gridTemplateColumns = `repeat(${number}, 30px)`
    grid.style.gridTemplateRows = `repeat(${number}, 30px)`

//FOR LOOP CREATES NEW COLUMS AND ROWS


for( i=0;i<size ;i++){
    const rowsAndCollums = document.createElement('div');
    rowsAndCollums.classList.add('cell');
    rowsAndCollums.textContent = ' ';
    grid.appendChild(rowsAndCollums);
    eventListenerSetup()
}
}

createGrid(10)

//BUTTON LISTENER FOR GRID RESIZING


gridReload.addEventListener("click",function(){
    squares=document.querySelectorAll(`.cell`)
    squares.forEach(cell =>{
        cell.style.backgroundColor="white"
    })
    var userInput;
    userInput=prompt("enter the grid size less than or equal to 16")
while(userInput>16){
    userInput=prompt("try again! enter the grid size less than or equal to 16")
}
createGrid(userInput)
})

//ALLOWS FOR NEW COLOR TO BE PICKED


pickColor.addEventListener("click",function(){
    selection="pickColor"
    caseList("pickColor")
})

//ALLOWS FOR COLOR TO ERASE


remove.addEventListener("click",function(){
    pickColor.value="#FFFFFF"
})

//CHANGES THE SET COLOR TO A RANDOM COLOR


rainbow.addEventListener("click",function(){
    pickColor.value=RAINBOW()
})

//SETS ENTIRE BOARD TO CLEAR


clear.addEventListener("click",function(){
    squares.forEach(cell =>{
        cell.style.backgroundColor="white"
    })
})