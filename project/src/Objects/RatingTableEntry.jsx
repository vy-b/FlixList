function RatingTableEntry(movieId, username, stars, review, date){
    this.movieId = movieId;
    this.username = username;
    this.rating = {
        "stars": stars,
        "review": review
    }
    this.date = date;
}
export default RatingTableEntry;
