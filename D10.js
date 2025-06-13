/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 0;
let sommaValori = 10 + 20;
sum += sommaValori;
console.log(sum);
//      ||
// let sum = 0;
// sum= sum +10+20;
// console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.ceil(Math.random() * 20);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Davide",
  surname: "Mancini",
  age: 26,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me["skills"] = ["HTML", " CSS", "JAVASCRIPT"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("C++");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  const nCasual = Math.ceil(Math.random() * 6);
  console.log(nCasual);
};
dice();

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    console.log(n1);
    return n1;
  } else {
    console.log(n2);
    return n2;
  }
};
let nGrande = whoIsBigger(10, 20);
//          ||
// let casualN1 = Math.ceil(Math.random() * 6);

// let casualN2 = Math.ceil(Math.random() * 6);
// const whoIsBigger = function (n1, n2) {
//   if (n1 > n2) {
//     console.log(n1);
//     return n1;
//   } else {
//     console.log(n2);
//     return n2;
//   }
// };
// let nGrande = whoIsBigger(casualN1,casualN2);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const arrayParole = [];

const splitMe = function (str) {
  const paroleDivise = str.split(" ");
  arrayParole.push(paroleDivise);
};
splitMe("mi chiamo Davide Mancini");
console.log(arrayParole);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const stringa = [];
const deleteOne = function (str, bool) {
  if (bool === true) {
    stringa.push(str.slice(1));
  } else {
    stringa.push(str.slice(0, -1));
  }
};
deleteOne("Mi chiamo Davide Mancini", false);
console.log(stringa);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (str) {
  const strMenoN = str.split("5");
  console.log(strMenoN);
};
onlyLetters("Ho 5 paia di scarpe");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (str) {
  const email = str.includes("@");
  if (str.indexOf("@") === -1) {
    console.log(false);
  } else {
    console.log(true);
  }
  console.log(str.indexOf("@"));
  //  Ho notato che cercando l'indice di un carattere non presente nella stringa il risultato era -1.Per questo ho messo che se l'indice fosse = a -1
  // tornasse false perchè vuoldire che non è presente.Quindi bastava che l'inidice non fosse -1 per capire che il carattere fosse presente.
};
isThisAnEmail("mancinidavide73@gmail.com");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  const settimaCorrente = new Date();
  const giornoSettimana = settimaCorrente.getDay();
  console.log(giornoSettimana);
};
whatDayIsIt();
// Il risultato di adesso è 5 che sarebbe il V giorno della settimana ossia Venerdi

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (n) {
  dice(n);
};

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const dataCasuale = new Date(2022, 7, 22, 19, 30, 0);
const dataOra = new Date();
const howManyDays = function (d) {
  const giorniTrascorsi = dataOra - d;
  const giorni = Math.floor(giorniTrascorsi / (1000 * 60 * 60 * 24));
  //il calcolo per trasformare i ms in giorni l'ho trovato su google
  console.log(giorni);
};
console.log(dataOra);
howManyDays(dataCasuale);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const mioCompleanno = new Date(1999, 2, 7, 10, 0, 0);
const isTodayMyBirthday = function () {
  if (new Date() === mioCompleanno) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
console.log(mioCompleanno);

isTodayMyBirthday();

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function (obj, str) {
  if (obj.name === str) {
    delete obj.name;
  }
};

deleteProp(
  {
    name: "davide",
    surname: "mancini",
    age: 26,
  },
  "name"
);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

// const newestMovie = function (array) {
//   let risultato = { Year: 1900 };
//   array.forEach((f) => {
//     let anno = parseInt(f.Year);
//     if (anno > risultato.Year) {
//       risultato = f;
//     }
//   });
//   return risultato;
// };

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  const quantiFilm = movies.length;
  console.log(quantiFilm);
};

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const anniUscita = [];
const onlyTheYears = function () {
  for (let i = 0; i < movies.length; i++) {
    const anniFilm = movies[i].Year;
    anniUscita.push(anniFilm);
  }
};

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function (a) {
  return a.filter((m) => {
    return parseInt(m.Year) < 2000;
  });
};

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function (a) {
  return a.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.Year),
    0
  );
};

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const filmConStr = [];
const searchByTitle = function (str) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      filmConStr.push(movies);
      return filmConStr;
    }
  }
};

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const matchUnmatch = {
  match: [],
  unmatch: [],
};
const searchAndDivide = function (str) {
  for (let i = 0; i < movies.length; i++) {
    const filmConStr = movies[i].Title.includes(str);
    const filmSenzaStr = !filmConStr;
    if (movies[i].Title.includes(str)) {
      matchUnmatch.match.push(filmConStr);
    } else {
      matchUnmatch.unmatch.push(filmSenzaStr);
    }
  }
};
console.log(matchUnmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (n) {
  movies.splice(n, 1);
  return movies;
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const container = document.getElementById("container");
console.log(container);
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const allTd = function () {
  const tuttiTd = document.querySelectorAll("td");
  console.log(tuttiTd);
};
allTd();
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const tuttiTd = document.querySelectorAll("td");
const contentInTd = function () {
  tuttiTd.forEach((td) => {
    console.log(td.textContent);
  });
};
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

document.querySelectorAll("a").forEach((a) => {
  a.style.backgroundColor = "red";
});
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const nuovoElemento = document.createElement("li");
const list = document.getElementById("mylist");
const funzione = function () {
  list.appendChild(nuovoElemento);
};
funzione();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuota = function () {
  list.innerText = " ";
};
svuota();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const tuttiTr = document.querySelectorAll("tr");
const addCss = function () {
  tuttiTr.forEach((tr) => {
    tr.classList.add("test");
  });
};
addCss();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
let albero = "*";
const halfTree = function (n) {
  for (let i = 0; i < n; i++) {
    albero = albero + albero;
    console.log(albero);
  }
};
halfTree(3);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const casualeN = Math.floor(Math.random() * 1000);
const isItPrime = function (n) {
  if (n > 1 && n % 1 === 0 && n % n === 0) {
    console.log(casualeN);
    console.log(true);
  } else if (n < 1 && n % 1 === 2 && n % n === 2) {
    console.log(false);
  }
};

isItPrime(casualeN);
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
countMovies();
onlyTheYears();
console.log(anniUscita);
searchByTitle("Lord");
console.log(filmConStr);
searchAndDivide("Lord");
console.log(matchUnmatch);
// console.log(newestMovie(movies));
console.log(onlyInLastMillennium(movies));
console.log(sumAllTheYears(movies));
console.log(removeIndex(5));
console.log(movies.length);
