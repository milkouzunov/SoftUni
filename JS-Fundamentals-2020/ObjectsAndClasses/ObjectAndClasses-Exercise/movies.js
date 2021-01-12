function solve (input) {
    let movies = [];

    for (let i = 0; i < input.length; i++) {
        
        let movieName = '';
        if(input[i].includes('addMovie')) {
           let movie = {};
           movieName = input[i].split(' ').slice(1).join(' ');
           movie.name = movieName;
           movies.push(movie);
        } else if (input[i].includes('directedBy')) {
            let index = input[i].split(' ')
            .indexOf('directedBy');
            movieName = input[i]
            .split(' ')
            .slice(0,index)
            .join(' ');
            let directorName = input[i].split(' ')
            .slice(index+1)
            .join(' ');
            
            for (let j = 0; j < movies.length; j++) {
                if(movies[j].name === movieName) {
                    movies[j].director = directorName;
                } else if(movies.length === j){
                    break;
                }
            }
            
        } else if (input[i].includes('onDate')) {
            let index = input[i].split(' ')
            .indexOf('onDate');
            movieName = input[i]
            .split(' ')
            .slice(0,index)
            .join(' ');
            let date = input[i].split(' ')
            .slice(index+1)
            .join(' ');
            for (let z = 0; z < movies.length; z++) {
                if(movies[z].name === movieName) {
                    movies[z].date = date;
                } else if(movies.length === z){
                    break;
                }
            }
        }
    } 
    for (let el of movies) {
        let keys = Object.keys(el);
        if(keys.includes('name') && keys.includes('director') && keys.includes('date')){

            console.log(JSON.stringify(el));
        }
    } 

}


solve
([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])

