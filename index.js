// Book shelf

let bookShelf = [
    { name: "Ulug'bek", author: "Muhammad Yusuf", genre: "Tarixiy", page: 320, isRead: "O'qilmagan" },
    { name: "Bobur", author: "Alisher Navoiy", genre: "Adabiy", page: 280, isRead: "O'qilmagan" },
    { name: "Bog'bon", author: "Hamid Olimjon", genre: "Adabiy", page: 200, isRead: "O'qilmagan" }
];

function bookShelf(name, author, genre, page, isRead) {
    alert("Kitoblar javoniga xush kelibsiz!")
    console.log("Kitoblar ro'yhati:")
    for (let i = 0; i < bookShelf.length; i++) {
        console.log(`Nomi: ${bookShelf[i].name}\nMuallif: ${bookShelf[i].author}\nJanri: ${bookShelf[i].genre}\nBeti: ${bookShelf[i].page}\n${bookShelf[i].isRead}`);
        console.log("----------------");
    }

    let question = prompt("Yangi kitob qo'shmoqchi bo'lsangiz + belgisini kiriting")
    if (question == "+") {
        alert("Yaxshi! Unday bo'lsa quyidagilarga javob bering")
        addBook(name, author, genre, page, isRead)
    } else {
        alert("Tashrifingiz uchun rahmat! Salomat bo'ling")
        return
    }

}

bookShelf(name, author, genre, page, isRead)

function addBook(name, author, genre, page, isRead) {
    let newBook = {
        name: name,
        author: author,
        genre: genre,
        page: page,
        isRead: isRead
    };


    bookShelf.push(newBook);

    console.log(`Kitob muvaffaqiyatli qo'shildi.`);
}


