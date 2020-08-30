function Book(title, author, volume, price){
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

var html = new Book('웹 표준의 정석', 'Ko', '608', '28,000');
var youtube = new Book('유튜브 영상 만들기', 'Kim', '368', '16,000');
var python = new Book('점프 투 파이썬', 'Park', '352', '18,800');

var bookList = [html, youtube, python]; // bookList 배열에 각 객체 저장

// bookList 선언
// 선언 결과 : (3) [Book, Book, Book]  배열 안에 3개의 방이 존재하고, 각 방에 Book 객체가 각각 저장되어 있다는 뜻


// bookList 배열에 저장된 도서 객체에서 책 제목만 골라서 표시하기

document.write("<h1>책 제목으로 살펴보기</h1>");
for(var i = 0; i < bookList.length; i++){
    document.write("<p>" + bookList[i].title + "</p>"); // bookList[i] 배열 i번째 객체의 title 반환
}