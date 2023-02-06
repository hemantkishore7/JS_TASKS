  class Movie{
    constructor(title = '',studio = '', rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movies=[],rating=''){
       return movies.filter((e)=> e.rating === rating)
    }
  }

  const casinoRoyale = new Movie('Casino Royale', 'Eon Productions','PG13');
  // console.log(casinoRoyale);
  const vikram = new Movie('Vikram', 'RKFI','PG13');
  const interstellar = new Movie('Interstellar', 'Para Mount','PG');
  const leo =  new Movie('Leo','7 Screen Studio', 'R');
  const avenger = new Movie('Avenger - The EndGame', 'Marvel Studio', 'PG');
  const jailer =  new Movie('Jailer', 'Sun picture', 'PG13');
  const annebella = new Movie('Annebella', 'Production #3', 'R');

  const moviesArr =[casinoRoyale,vikram,interstellar,leo,avenger,jailer,annebella];

  console.log(casinoRoyale.getPG(moviesArr,'PG'));

  //console.log(moviesArr);
