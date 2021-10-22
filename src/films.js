// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(item => {
    return item.director;
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(function (pelicula) {
    if (pelicula.director == director) {
      return pelicula.title;
    }
  })
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  //filtrar array por  director
  let newArray = array.filter(function (pelicula) {
    if (pelicula.director == director) {
      return pelicula.title
    }
  })
  //crear array de score
  let score = newArray.map(item => {
    return item.score
  })
  //calcular score media por director
  let result = score.reduce((score1, score2) => (score1 + score2) / score.length);

  console.log("EXERCICE 3 ->", director, Math.floor(result * 100) / 100);
  return Math.floor(result * 100) / 100;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  //crear una copia de array(slice) y ordenar por alfabeto
  let sortedArray = array.slice().sort((a, b) => (a.title > b.title ? 1 : -1));
  // devolver 20 primeros titulos de la lista ordenada
  let result = sortedArray.slice(0, 20).map(item => {
    return item.title;
  })
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortedArray = array.slice().sort((a, b) => // crear una copia de array(slice)
  {
    if (a.year !== b.year) // si el año solo aparese uma vez ordenar por año
    {
      return (a.year - b.year)
    }
    else { //si año repite ordenar titulos por alfabeto
      return (a.title > b.title ? 1 : -1)
    }
  });

  console.log("EXERCICE 5 ->", sortedArray);
  return sortedArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let newArray = array.filter(function (pelicula) {
    if (pelicula.genre.includes(category)) { //filtrar array por genero, usar includes porque hay maas de un genero
      return pelicula.genre
    }
  })
  //crear array de score
  let score = newArray.map(item => {
    return item.score
  })
  //calcular suma de scores y cantidad de scores que no son iguales a 0 o ''
  let result = score.reduce((acc, score) => {
    if (score !== 0 && score !== '') {
      acc.count++;
      acc.sum += score;
    }
    return acc;
  }, { count: 0, sum: 0 });
  // calcular media de score por genero
  let resultFin = result.sum / result.count

  console.log("EXERCICE 6 ->", category, Math.floor(resultFin * 100) / 100);
  return Math.floor(resultFin * 100) / 100;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.filter(item => {

    //obtiene duration y convierte a un array
    let itemDuration = item.duration.split(' ');

    let horas;
    let minutos;
    //para cada elemento de duration elimina 'h' y 'min
    itemDuration.map(e => {
      if (e.includes('h')) {
        horas = parseInt(e.replace('h', '')) * 60;
        minutos = 0;
      }
      else if (e.includes('min')) {
        minutos = parseInt(e.replace('min', ''));
        horas = horas;
      }
      //calcula duracion en minutos 
      let newItemDuration = parseInt(minutos) + parseInt(horas);
      console.log(newItemDuration);
      //reemplaza valor de duration
      item.duration = newItemDuration;
    })

    return item;
  });
  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  //filtrar el array por año
  const newArray = array.filter(function (pelicula) {
    if (year === pelicula.year) {
      return pelicula.year;
    }
  });
//obtener la score maxima del array filtrado
  let score = newArray.reduce(function (a, b) {
    return Math.max(a, b.score);
  }, 0);
//mostrar la pelicula que tiene score maxima
  let result = newArray.filter(function (item) {
    if (item.score === score) {
      return item
    }
  })
  console.log("EXERCICE 8 ->", result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
