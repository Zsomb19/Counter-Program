let counter = 0;
let memory = 0;

document.getElementById("DecTenBtn").onclick = function(){
    counter -= 10;
    document.getElementById("CountLbl").innerHTML = counter;
}

document.getElementById("DecBtn").onclick = function(){
    counter -= 1;
    document.getElementById("CountLbl").innerHTML = counter;
}

document.getElementById("ResBtn").onclick = function(){
    counter = 0;
    document.getElementById("CountLbl").innerHTML = counter;
}

document.getElementById("IncBtn").onclick = function(){
    counter += 1;
    document.getElementById("CountLbl").innerHTML = counter;
}

document.getElementById("IncTenBtn").onclick = function(){
    counter += 10;
    document.getElementById("CountLbl").innerHTML = counter;
}   

document.getElementById("AddMemBtn").onclick = function(){
    counter += memory
    document.getElementById("CountLbl").innerHTML = counter;
}   

document.getElementById("MemBtn").onclick = function(){
    memory = counter
    document.getElementById("MemLbl").innerHTML = "Number stored in memory: " + counter;
}   

document.getElementById("MemClrBtn").onclick = function(){
    memory = 0
    document.getElementById("MemLbl").innerHTML = "Number stored in memory: ";
}   