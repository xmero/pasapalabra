// Pasapalabra game.

var wordList = [
  {id: 'a', word: 'asterisco', check: false, desc: 'Se utiliza para indicar la multiplicacion en Js.'},
  {id: 'b', word: 'barcelona', check: false, desc: 'Capital de Catalunya.'},
  {id: 'c', word: 'capullo', check: false, desc: 'Precursor de la flor.'},
  {id: 'd', word: 'dos', check: false, desc: 'uno + uno.'},
  {id: 'e', word: 'elefante', check: false, desc: 'Animal con una trompa muy larga.'},
  {id: 'f', word: 'falafel', check: false, desc: 'Kebab de los vegetarianos.'},
  {id: 'g', word: 'angulas', check: false, desc: 'Pescado mas caro del mundo.'},
  {id: 'h', word: 'hospital', check: false, desc: 'Edificio donde tratar a los enfermos.'},
  {id: 'i', word: 'independencia', check: false, desc: 'El futuro de Catalunya.'},
  {id: 'j', word: 'Judo', check: false, desc: 'Arte marcial tradicional Japones.'},
  {id: 'k', word: 'parking', check: false, desc: 'Espacio donde aparcamos los coches.'},
  {id: 'l', word: 'lingote', check: false, desc: 'Forma en que se guarda el oro.'},
  {id: 'm', word: 'moroso', check: false, desc: 'Persona que debe dinero.'},
  {id: 'n', word: 'nido', check: false, desc: 'Sitio donde los pajaros crian.'},
  {id: 'o', word: 'ornitorrinco', check: false, desc: 'Mamifero que pone huevos.'},
  {id: 'p', word: 'campana', check: false, desc: 'Usado en las iglesias para dar la hora.'},
  {id: 'q', word: 'quebrar', check: false, desc: 'Romper.'},
  {id: 'r', word: 'radio', check: false, desc: 'La sintonizamos para escuchar musica.'},
  {id: 's', word: 'serpiente', check: false, desc: 'Reptil largo que no tiene patas.'},
  {id: 't', word: 'tabaco', check: false, desc: 'Droga suave legal en casi todo el mundo.'},
  {id: 'u', word: 'aburrir', check: false, desc: 'Sufrir un estado de animo producido por falta de estimulos.'},
  {id: 'v', word: 'verano', check: false, desc: 'Estacion del año mas calurosa.'},
  {id: 'w', word: 'web', check: false, desc: 'Red informatica con contenidos audiovisuales.'},
  {id: 'x', word: 'anexo', check: false, desc: 'Unido o agregado a <algo></algo>.'},
  {id: 'y', word: 'desayuno', check: false, desc: 'Primera comida del dia.'},
  {id: 'z', word: 'zafiro', check: false, desc: 'Piedra preciosa de color Azul.'}
]

function main () {
  var score = 0
  var fail = 0

  function checkFirstLetter (wordToCheck) {
    if (wordToCheck.id === wordToCheck.word.charAt(0)) {
      return (' La primera letra es la: ' + wordToCheck.id)
    } else {
      return ('Contiene la letra: ' + wordToCheck.id)
    }
  }
  function checkAnswer (playerAnswer, wordToCheck) {
    if (playerAnswer.toLowerCase() === wordToCheck.word) {
      wordToCheck.check = true
      score += 1
      alert('Correcto! Tus puntos totales son: ' + score)
    } else if (playerAnswer.toLowerCase() !== 'pasapalabra') {
      wordToCheck.check = true
      fail += 1
      alert('Fallaste!!!')
    }
  }

  do {
    for (var i = 0; i < wordList.length; i++) {
      if (wordList[i].check === false) {
        var answer = prompt(checkFirstLetter(wordList[i]) + ' \nPISTA: ' + wordList[i].desc)
        checkAnswer(answer, wordList[i])
      }
      if (answer.toLowerCase() === 'exit') {
        break
      }
    }
    if (answer.toLowerCase() === 'exit') {
      alert('See you soon!')
      break
    }
  } while ((score + fail) !== wordList.length)
  if (score === wordList.length) {
    alert('Todas tus respuestas son correctas!!! Total puntos :' + score)
  } else {
    alert('Tu puntuacion final es de :' + score)
  }
}
