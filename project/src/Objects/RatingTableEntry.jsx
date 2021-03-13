function RatingTableEntry(imdbID, username, stars, review, date) {
    this.imdbID = imdbID;
    this.username = username;
    this.rating = {
        "stars": stars,
        "review": review
    }
    this.date = date.slice(0, 10);
}
export default RatingTableEntry;
