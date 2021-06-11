// for the questions
var answer1 = "greenland";
var respuesta = "Greenland";
var answer2 = "nile";
var respuesta2 = "Nile";
var answer3 = "india";
var respuesta3 = "India";
var answer4 = 1979;
var answer5 = 1989;
var answer6 = 1999;

///primera pregunta
function Primera() {
    var maybe = document.getElementById("classic").value;
    if(maybe==answer1) {
    alert("You are Right!!!")
    } else if(maybe==respuesta) {
        alert("You are Right!!!");
    } else {
        alert("You are SO WRONG")
    }
}

///segunda pregunta
function Segunda() {
    var talvez = document.getElementById("Rios").value;
    if(talvez==answer2) {
        alert("CORRECT!! You are on a roll!!");
    }else if(talvez==respuesta2) {
        alert("Good Job!");
    } else {
        alert("WRONG!!");
    }
}

//tercera pregunta
function Tercer() {
    var puedo = document.getElementById("carrera").value;
    if(puedo==answer3) {
       alert("Congrats!!!");
    }else if(puedo==respuesta3) {
       alert("Very Good!!");
    } else {
       alert("Please Try Again.......");
    }
}

//cuarta pregunta
function Cuarta() {
    var penny = document.getElementById("inglaterra").value;
    if(penny==answer4) {
        alert("You are SUPER SMART!");
    }else {
        alert("Terrible....Try Again..");
    }
}

//quinta pregunta
function Quinta() {
    var valor = document.getElementById("frio").value;
    if(valor==answer5) {
        alert("CORRECT!!!");
    } else {
        alert("WRONG!!");
    }
}

//sestima pregunta
function Seis() {
    var ultima = document.getElementById("dinero").value;
    if(ultima==answer6) {
        alert("AWESOME..YOU PASSED!!");
    } else {
        alert("KEEP TRYING");
    }
}


















//for the seccion

var questions = document.querySelectorAll(".seccion");
var plug = document.querySelector("#Jarden");
var plug2 = document.querySelector("#buhari");
var position = 0;



//clear all images
function Eliminar() {
for(var x = 0;x<questions.length;x++) {
       questions[x].style.display = "none";
}

   }

//shows the first image only
function Show() {
    Eliminar();
    questions[0].style.display = "block";
}

/// para el boton - before
function Before() {
    Eliminar();
    questions[position - 1].style.display = "block";
    position--;
}

/// to execute the left boton
plug.addEventListener("click", function() {
    if(position === 0) {
        position = questions.length;
    }
    Before();
})


// para el boton - next
function Next() {
    Eliminar();
    questions[position + 1].style.display = "block";
    position++;
}

// to execute the right boton
plug2.addEventListener("click", function() {
    if(position === questions.length-1) {
        position = -1;
    }
    Next();
})



Show();