//variables a utilizar
let selectedQuestion;
let score;
let selectedCategory;
let quantityOfQuestions;
let listadoPreguntasAUtilizar;


//hacer preguntas en objeto
let questionsSeries = [
	{
		question: "¿Quiénes formaban la pareja protagonista de las primeras temporadas de la serie Lost?", 
		answer1: "Jack y Kate",
		answer2: "Jack y Juliet",
		answer3: "Kate y Charlie",
		correctAnswer: "Jack y Kate"
	},

	{	question: "¿Con qué novia llegó a ir al altar Ross en 'Friends'?", 
		answer1: "Emily",
		answer2: "Rachel",
		answer3: "Julie",
		correctAnswer: "Emily"
	},
	{	question: "¿Qué droga cocinan Walter White y Jesse Pinkman en 'Breaking Bad'?", 
		answer1: "Dopamina",
		answer2: "Metanfetamina",
		answer3: "Cocaína",
		correctAnswer: "Metanfetamina"
	}
]

let questionsMovies = [
	{
		question: "¿Cómo se llama el lugar donde viven los monstruos de Monster INC?", 
		answer1: "Monster Town",
		answer2: "Monstrópolis",
		answer3: "Villa Monstruo",
		correctAnswer: "Monstrópolis"
	},

	{	question: "¿Cuál es el nombre del libro del chef Gusteau en Ratatouille?", 
		answer1: "Cómo aprender a cocinar",
		answer2: "Cualquiera puede Cocinar",
		answer3: "Cocina para tontos",
		correctAnswer: "Cualquiera puede Cocinar"
	},
	{	question: "¿Que tipo de pez es Nemo?", 
		answer1: "Pez Payaso",
		answer2: "Pez Anguila",
		answer3: "Pez Mariposa",
		correctAnswer: "Pez Payaso"
	}
]


//MOSTRAR SOLO INICIO- comienzo de la trivia//
//document.getElementById("inicio").style.display = "block";
//document.getElementById("bienvenida").style.display = "none";
// document.getElementById("questionsSeries").style.display = "none";
// document.getElementById("questionsMovies").style.display = "none";

//MOSTRAR CATEGORÍAS (botón volver a categorías)
// function backToCategories() {
//   document.getElementById('bienvenida').style.display = 'block'
//    document.getElementById("questionsSeries").style.display = "none";
//    document.getElementById("questionsMovies").style.display = "none";
// }

//Mostrar Categoría SERIES
// function catSeries(){
//   document.getElementById("questionsSeries").style.display = "block";
//   document.getElementById("bienvenida").style.display = "none";
// }

// //Mostrar categoría Peliculas
// function catMovies(){
//   document.getElementById("questionsMovies").style.display = "block";
//   document.getElementById("bienvenida").style.display = "none";
// }


//obtener nombre de usuario//
function getName() {
  let name = document.getElementById('username').value;
  //validación de nombre//
  if( name == null || name.length == 0 || /^\s+$/.test(name) ){
    alert('Debes ingresar tu nombre para jugar');
    return false;
  }
  document.getElementById('nombre-usuario').innerHTML = name;
  inicio.style='display:none'
  bienvenida.style = 'display: block'
//   document.getElementById("inicio").style.display = "none";
//   document.getElementById("bienvenida").style.display = "block";
 

}


// Validar respuestas SERIES
// function checkSeries(){
// 	let question1serie = document.quizSeries.question1serie.value;
// 	let question2serie = document.quizSeries.question2serie.value;
// 	let question3serie = document.quizSeries.question3serie.value;
// 	let correct = 0;

// 	if (question1serie == "JackKate") {
// 		correct++;
// }
// 	if (question2serie == "Emily") {
// 		correct++;
// }
// 	if (question3serie == "Metanfetamina") {
// 		correct++;
// 	}

//Mostrar Resultado SERIES

// 	let pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
// 	let messages = ["¡Excelente!", "Estuviste bien", "De verdad pudiste hacerlo mejor"];
// 	let score;

// 	if (correct == 0) {
// 		score = 2;
// 	}

// 	if (correct > 0 && correct < 3) {
// 		score = 1;
// 	}

// 	if (correct == 3) {
// 		score = 0;
// 	}

// 	document.getElementById("afterSubmit").style.visibility = "visible";

// 	document.getElementById("message").innerHTML = messages[score];
// 	document.getElementById("numberCorrect").innerHTML = "Obtuviste " + correct + " respuestas correctas.";
// 	document.getElementById("picture").src = pictures[score];
// 	}


// // Validar respuestas Peliculas
//   function checkMovies(){

//   	var question1movies = document.quiz.question1movies.value;
//   	var question2movies = document.quiz.question2movies.value;
//   	var question3movies = document.quiz.question3movies.value;
//   	var correct = 0;


//   	if (question1movies == "Monstropolis") {
//   		correct++;
//   }
//   	if (question2movies == "Cualquiera") {
//   		correct++;
//   }
//   	if (question3movies == "Payaso") {
//   		correct++;
//   	}

//     let pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
//   	let messages = ["¡Excelente!", "Estuviste bien", "De verdad pudiste hacerlo mejor"];
//   	let score;

//   	if (correct == 0) {
//   		score = 2;
//   	}

//   	if (correct > 0 && correct < 3) {
//   		score = 1;
//   	}

//   	if (correct == 3) {
//   		score = 0;
//   	}

//   	document.getElementById("afterSubmitMovies").style.visibility = "visible";

//   	document.getElementById("messageMovies").innerHTML = messages[score];
//   	document.getElementById("numberCorrectMovies").innerHTML = "Obtiviste " + correct + " respuestas correctas.";
//   	document.getElementById("pictureMovie").src = pictures[score];
// 	  }
	  
	  // COMENZAR JUEGO



function startGame() {
	quantityOfQuestions = 0;
	score = 0;
	selectedCategory = document.querySelector ('input[name = "category"]').value

	// CONDICIONAL DE CATEGORÍA SELECCIONADA
   if(selectedCategory === 'Series'){
	listadoPreguntasAUtilizar = [...questionsSeries];
   
   }
  else if(selectedCategory ==='Peliculas'){
	listadoPreguntasAUtilizar = [...questionsMovies] 
   
  }

  bienvenida.style = 'display: none'
  actualQuestion.style = 'display: block'

  nextQuestion();
  }
  
  
// OBTENER PREGUNTA
function nextQuestion(respuesta) {

	if (
	  quantityOfQuestions > 0 &&
	  respuesta === selectedQuestion.correctAnswer
	) {
	  score++;
	}
	quantityOfQuestions++;
	
	//Contador de pregunta actual
	contadorPreguntas.innerHTML=quantityOfQuestions
	if (quantityOfQuestions > 7) {
	  // TODO: pantalla finalizar juego
	//   preguntaactual.style = 'display: none';
	//   resultados.style = 'display: block';
	//   categorias.style = 'display: block';
	  document.getElementById('puntaje-usuario').innerHTML = score;
	 
	} else {
  
	  //Función para obtener una posición dentro del arreglo y desplegar una pregunta aleatoria
	  l
	  preguntaSeleccionada = listadoPreguntasAUtilizar.splice();
  
	  document.getElementById('question').innerHTML = preguntaSeleccionada.pregunta;
	  document.getElementById('answer1').innerHTML = preguntaSeleccionada.respuesta1;
	  document.getElementById('answer2').innerHTML = preguntaSeleccionada.respuesta2;
	  document.getElementById('answer3').innerHTML = preguntaSeleccionada.respuesta3;
	}
  }