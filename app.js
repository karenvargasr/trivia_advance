

//MOSTRAR SOLO INICIO- comienzo de la trivia//
document.getElementById("inicio").style.display = "block";
document.getElementById("bienvenida").style.display = "none";
document.getElementById("questionsSeries").style.display = "none";
document.getElementById("questionsMovies").style.display = "none";

//MOSTRAR CATEGORÍAS (botón volver a categorías)
function backToCategories() {
  document.getElementById('bienvenida').style.display = 'block'
  document.getElementById("questionsSeries").style.display = "none";
  document.getElementById("questionsMovies").style.display = "none";
}

//Mostrar Categoría SERIES
function catSeries(){
  document.getElementById("questionsSeries").style.display = "block";
  document.getElementById("bienvenida").style.display = "none";
}

//Mostrar categoría Peliculas
function catMovies(){
  document.getElementById("questionsMovies").style.display = "block";
  document.getElementById("bienvenida").style.display = "none";
}


//obtener nombre de usuario//
function getName() {
  let name = document.getElementById('username').value;
  //validación de nombre//
  if( name == null || name.length == 0 || /^\s+$/.test(name) ){
    alert('Debes ingresar tu nombre para jugar');
    return false;
  }

  document.getElementById("inicio").style.display = "none";
  document.getElementById("bienvenida").style.display = "block";
  document.getElementById('nombre-usuario').innerHTML = name;

}


// Validar respuestas SERIES
function checkSeries(){
	let question1serie = document.quizSeries.question1serie.value;
	let question2serie = document.quizSeries.question2serie.value;
	let question3serie = document.quizSeries.question3serie.value;
	let correct = 0;

	if (question1serie == "JackKate") {
		correct++;
}
	if (question2serie == "Emily") {
		correct++;
}
	if (question3serie == "Metanfetamina") {
		correct++;
	}

//Mostrar Resultado SERIES

	let pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	let messages = ["¡Excelente!", "Estuviste bien", "De verdad pudiste hacerlo mejor"];
	let score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("afterSubmit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("numberCorrect").innerHTML = "Obtuviste " + correct + " respuestas correctas.";
	document.getElementById("picture").src = pictures[score];
	}


// Validar respuestas Peliculas
  function checkMovies(){

  	var question1movies = document.quiz.question1movies.value;
  	var question2movies = document.quiz.question2movies.value;
  	var question3movies = document.quiz.question3movies.value;
  	var correct = 0;


  	if (question1movies == "Monstropolis") {
  		correct++;
  }
  	if (question2movies == "Cualquiera") {
  		correct++;
  }
  	if (question3movies == "Payaso") {
  		correct++;
  	}

    let pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
  	let messages = ["¡Excelente!", "Estuviste bien", "De verdad pudiste hacerlo mejor"];
  	let score;

  	if (correct == 0) {
  		score = 2;
  	}

  	if (correct > 0 && correct < 3) {
  		score = 1;
  	}

  	if (correct == 3) {
  		score = 0;
  	}

  	document.getElementById("afterSubmitMovies").style.visibility = "visible";

  	document.getElementById("messageMovies").innerHTML = messages[score];
  	document.getElementById("numberCorrectMovies").innerHTML = "Obtiviste " + correct + " respuestas correctas.";
  	document.getElementById("pictureMovie").src = pictures[score];
  	}
