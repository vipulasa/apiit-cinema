console.info("movie model loaded");

document.addEventListener("alpine:init", () => {
  Alpine.store("movies", {
    name: "Movies Model",
    movies: [
      {
        id: 1,
        title: "Inception",
        genre: "Science Fiction",
        duration: "2h 28m",
        rating: 8.8,
        description:
          "A thief who enters the subconscious of his targets to steal their secrets.",
        image: "https://placehold.co/600x400",
      },
      {
        id: 2,
        title: "The Shawshank Redemption",
        genre: "Drama",
        duration: "2h 22m",
        rating: 9.3,
        description:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        image: "https://placehold.co/600x400",
      },
      {
        id: 3,
        title: "The Dark Knight",
        genre: "Action",
        duration: "2h 32m",
        rating: 9.0,
        description:
          "Batman sets out to dismantle the remaining criminal organizations that plague Gotham City.",
        image: "https://placehold.co/600x400",
      },
    ],
  });
});
