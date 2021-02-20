function MovieTableEntry(movieId, title, plot, poster, rated, year, runtime, genre, actors){
    this.movieId = movieId;
    this.title = title;
    this.plot = plot;
    this.poster = poster;
    this.rated = rated;
    this.year = year;
    this.runtime = runtime;
    this.genre = genre;
    this.actors = actors;
}
export default MovieTableEntry;