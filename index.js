let counter = 0;
let memory = 0;
let random = 0;
let randommin = 0;
let randommax = 0;

document.getElementById("DecHunBtn").onclick = function(){
    counter -= 100;
    document.getElementById("CountLbl").innerHTML = counter;

};

document.getElementById("DecTenBtn").onclick = function(){
    counter -= 10;
    document.getElementById("CountLbl").innerHTML = counter;
};

document.getElementById("DecBtn").onclick = function(){
    counter -= 1;
    document.getElementById("CountLbl").innerHTML = counter;
};

document.getElementById("ResBtn").onclick = function(){
    counter = 0;
    document.getElementById("CountLbl").innerHTML = counter;
};

document.getElementById("IncBtn").onclick = function(){
    counter += 1;
    document.getElementById("CountLbl").innerHTML = counter;
};

document.getElementById("IncTenBtn").onclick = function(){
    counter += 10;
    document.getElementById("CountLbl").innerHTML = counter;
};   

document.getElementById("IncHunBtn").onclick = function(){
    counter += 100;
    document.getElementById("CountLbl").innerHTML = counter;
};

document.getElementById("AddMemBtn").onclick = function(){
    counter += memory
    document.getElementById("CountLbl").innerHTML = counter;
};   

document.getElementById("MemBtn").onclick = function(){
    memory = counter
    document.getElementById("MemLbl").innerHTML = "Number stored in memory: " + counter;
};

document.getElementById("MemClrBtn").onclick = function(){
    memory = 0
    document.getElementById("MemLbl").innerHTML = "Number stored in memory: ";
};

document.getElementById("RngBtn").onclick = function(){
    randommin = Number(document.getElementById("RngInpMin").value);
    randommax = Number(document.getElementById("RngInpMax").value);

    if (randommin == 0 && randommax == 0) {
        random = Math.floor(Math.random() * 99999) + 1;
    }else{
        random = Math.floor(Math.random() * (randommax - randommin + 1)) + randommin;
    } 
        document.getElementById("RngLbl").innerHTML = random;
    };

    document.getElementById("AddRngBtn").onclick = function(){
        counter += random;
        document.getElementById("CountLbl").innerHTML = counter;
    };   