class Book {
  constructor(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = new Date(publishedYear, 0, 1); 
  }

  getSummary() {
    console.log("Book: ",this.title,"by ",this.author," published in ",this.publishedYear.getFullYear());
  }
}

class EBook extends Book {
  constructor(title, author, publishedYear, fileSize) {
    super(title, author, publishedYear);
    this.fileSize = fileSize;
  }

  getSummary() {
    super.getSummary();
    console.log("File size: ",this.fileSize," MB");
  }
}
const book1 = new Book("Wings of Fire", "A. P. J. Abdul Kalam and Arun Tiwari", 1999);
const ebook1 = new EBook("Rich Dad Poor Dad", "Robert Kiyosaki and Sharon Lechter", 1997,11.3);
const book2 = new Book("The Art of Being Alone", " Renuka Gavrani",  2023.);
const ebook2 = new EBook("The Harry Potter book Series","J.K. Rowling"," 1997 and 2007 ",3.6);

console.log("--- Book Summaries ---");
book1.getSummary();
ebook1.getSummary();
book2.getSummary();
ebook2.getSummary();
