//answers for assignment questions [refer questions.txt for questions]

//answer for question 1
//returns keys of an object in comma seperated string format
const getObjKeys = (obj) => Object.keys(obj).join(",");

//answer for question 2
const deleteObjProperty = (obj, propToDel) => {
  console.log(obj);
  delete obj[propToDel];
  console.log(obj);
};

//answer for question 3
const getObjLength = (obj) => Object.keys(obj).length;

//answer for question 4
let library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const printBookInfo = (booksCollection) => {
  for (let book of booksCollection) {
    let bookInfo = "";
    for (let prop in book) {
      bookInfo = bookInfo + book[prop] + " ";
    }
    console.log(bookInfo);
    bookInfo = "";
    console.log("\n");
  }
};
//answer for question 5

const cylinder = new Object({
  PI = 3.1416,
  radius: 2,
  height: 5,
  getVolume: function (prec = 4) {
    return (this.PI * this.radius * this.radius * this.height).toFixed(prec);
  },
});
cylinder.getVolume();


//answer for question 6
library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

const sortBooks = (library) => {
    library.sort((book1,book2) => book2.libraryID - book1.libraryID);
    console.log(library);
}

sortBooks(library);
