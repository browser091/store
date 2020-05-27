export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Зеленая книга",
      author: "Питер Фаррелли ",
      price: 23,
      coverImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPdgtRc5TT4JiDbPiK5fpo2R6MMu2SBf4t1O2lv5KtiwIrf4Rl&usqp=CAU",
    },
    {
      id: 2,
      title: "Проект «Синяя книга»",
      author: "Дэвид О'Лири",
      price: 13,
      coverImage: "https://www.kinopoisk.ru/images/film_big/1173629.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        reject(new Error("something bad happened"));
      }, 2000);
    });
  }
}
