function RatingTableEntry(movieId, username, stars, review){
    this.movieId = movieId;
    this.username = username;
    this.rating = {
        "stars": stars,
        "review": review
    }
}
export default RatingTableEntry;
