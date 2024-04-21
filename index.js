// Digital Bookshelf

// let bookShelf = [
//     { name: "Ulug'bek", author: "Muhammad Yusuf", genre: "Tarixiy", page: 320, isRead: "O'qilmagan" },
//     { name: "Bobur", author: "Alisher Navoiy", genre: "Adabiy", page: 280, isRead: "O'qilmagan" },
//     { name: "Bog'bon", author: "Hamid Olimjon", genre: "Adabiy", page: 200, isRead: "O'qilmagan" }
// ];

// function mybookShelf() {
//     let start = confirm("Kitoblar javoniga xush kelibsiz! Kitoblar ro'yhatini ko'rishni istaysizmi?")

//     if (start) {
//         console.log("Kitoblar ro'yhati:")
//         for (let i = 0; i < bookShelf.length; i++) {
//             console.log(`Nomi: ${bookShelf[i].name}\nMuallif: ${bookShelf[i].author}\nJanri: ${bookShelf[i].genre}\nBeti: ${bookShelf[i].page}\n${bookShelf[i].isRead}`);
//             console.log("----------------");
//         }

//         let start2 = confirm("O'zingizning kitobingizni qo'shishni xohlaysizmi?")

//         if (start2) {
//             alert("Yaxshi! Unday bo'lsa quyidagilarga javob bering")

//             let name = prompt("Kitob nomini kiriting:")
//             let author = prompt("Kitob muallifini kiriting:")
//             let genre = prompt("Kitob janrini kiriting:")
//             let page = +prompt("Kitob necha betdan iborat?")
//             let isRead = prompt("Kitobni o'qib tugatgan bo'lsangiz + belgisini qoldiring.")
//             let newIsRead = isRead == "+" ? "O'qilgan" : "O'qilmagan";

//             function addBook(name, author, genre, page, newIsRead) {
//                 let newBook = {
//                     name: name,
//                     author: author,
//                     genre: genre,
//                     page: page,
//                     isRead: newIsRead
//                 };

//                 bookShelf.push(newBook);

//                 console.log(`Kitob muvaffaqiyatli qo'shildi.`);
//                 console.log(`Yangilangan ro'yhat`);
//                 for (let i = 0; i < bookShelf.length; i++) {
//                     console.log(`Nomi: ${bookShelf[i].name}\nMuallif: ${bookShelf[i].author}\nJanri: ${bookShelf[i].genre}\nBeti: ${bookShelf[i].page}\n${bookShelf[i].isRead}`);
//                     console.log("----------------");
//                 }
//             }
//             addBook(name, author, genre, page, newIsRead)
//         } else {
//             alert(`Tashrifingiz uchun tashakkur 😊`)
//             return
//         }
//     } else {

//         let start2 = confirm("Yaxshi, o'zingizning kitobingizni qo'shishga nima deysiz?")

//         if (start2) {
//             alert("Yaxshi! Unday bo'lsa quyidagilarga javob bering")

//             let name = prompt("Kitob nomini kiriting:")
//             let author = prompt("Kitob muallifini kiriting:")
//             let genre = prompt("Kitob janrini kiriting:")
//             let page = prompt("Kitob necha betdan iborat?")
//             let isRead = prompt("Kitobni o'qib tugatgan bo'lsangiz + belgisini qoldiring.")
//             let newIsRead = isRead == "+" ? "O'qilgan" : "O'qilmagan";

//             function addBook(name, author, genre, page, isRead) {
//                 let newBook = {
//                     name: name,
//                     author: author,
//                     genre: genre,
//                     page: page,
//                     isRead: newIsRead
//                 };

//                 bookShelf.push(newBook);

//                 console.log(`Kitob muvaffaqiyatli qo'shildi.`);
//                 console.log(`Yangilangan ro'yhat`);
//                 for (let i = 0; i < bookShelf.length; i++) {
//                     console.log(`Nomi: ${bookShelf[i].name}\nMuallif: ${bookShelf[i].author}\nJanri: ${bookShelf[i].genre}\nBeti: ${bookShelf[i].page}\n${bookShelf[i].isRead}`);
//                     console.log("----------------");
//                 }
//             }
//             addBook(name, author, genre, page, isRead)
//         } else {
//             alert(`Tashrifingiz uchun tashakkur 😊`)
//             return
//         }
//     }

// }

// mybookShelf()



// Contact Management System

// let contactList = [
//     { name: "BekMuhammad", phone: +998998953501, email: "bekdev@gmail.com", state: "Uzbekistan", region: "Toshkent" },
//     { name: "Mirabbos", phone: +998997983614, email: "mirabbos@gmail.com", state: "Uzbekistan", region: "Toshkent" },
//     { name: "Muhiddin", phone: +998901234567, email: "muhiddin98@gmail.com", state: "Uzbekistan", region: "Buxoro" }
// ];

// function myContactList() {
//     let start = confirm("Kontaktlar ro'yhatini ko'rishni istaysizmi?")

//     if (start) {
//         console.log("Kontaktlar ro'yhati:")
//         for (let i = 0; i < contactList.length; i++) {
//             console.log(`Ismi: ${contactList[i].name}\nTelefon raqami: ${contactList[i].phone}\nE-mail: ${contactList[i].email}\nDavlati: ${contactList[i].state}\nShahri: ${contactList[i].region}`);
//             console.log("----------------");
//         }

//         let start2 = confirm("Yangi kontakt qo'shishni istaysizmi?")

//         if (start2) {
//             alert("Yaxshi! Unday bo'lsa ma'lumotlarni kiriting")

//             let name = prompt("Kontakt ismini kiriting:")
//             let unknownName = name == "" ? "Noma'lum" : name;
//             let phone = +prompt("Kontakt telefon raqamini kiriting:")
//             let unknownPhone = phone == "" ? "Noma'lum" : phone;
//             let email = prompt("Kontakt E-mailini kiriting:")
//             let unknownEmail = email == "" ? "Noma'lum" : email;
//             let state = prompt("Qaysi davlat fuqarosi?")
//             let unknownState = state == "" ? "Noma'lum" : state;
//             let region = prompt("Yashash shahrini kiriting:")
//             let unknownRegion = region == "" ? "Noma'lum" : region;

//             function addBook(name, phone, email, state, region) {
//                 let newBook = {
//                     name: name,
//                     phone: phone,
//                     email: email,
//                     state: state,
//                     region: region
//                 };

//                 contactList.push(newBook);

//                 console.log(`Kitob muvaffaqiyatli qo'shildi.`);
//                 console.log(`Yangilangan ro'yhat`);
//                 for (let i = 0; i < contactList.length; i++) {
//                     console.log(`Ismi: ${contactList[i].name}\nTelefon raqami: ${contactList[i].phone}\nE-mail: ${contactList[i].email}\nDavlati: ${contactList[i].state}\nShahri: ${contactList[i].region}`);
//                     console.log("----------------");
//                 }
//             }
//             addBook(unknownName, unknownPhone, unknownEmail, unknownState, unknownRegion)
//         } else {
//             alert(`Tashrifingiz uchun tashakkur 😊`)
//             return
//         }
//     } else {

//         let start2 = confirm("Yaxshi, yangi kontakt qo'shishni istaysizmi?")

//         if (start2) {
//             alert("Yaxshi! Unday bo'lsa ma'lumotlarni kiriting")

//             let name = prompt("Kontakt ismini kiriting:")
//             let unknownName = name == "" ? "Noma'lum" : name;
//             let phone = +prompt("Kontakt telefon raqamini kiriting:")
//             let unknownPhone = phone == "" ? "Noma'lum" : phone;
//             let email = prompt("Kontakt E-mailini kiriting:")
//             let unknownEmail = email == "" ? "Noma'lum" : email;
//             let state = prompt("Qaysi davlat fuqarosi?")
//             let unknownState = state == "" ? "Noma'lum" : state;
//             let region = prompt("Yashash shahrini kiriting:")
//             let unknownRegion = region == "" ? "Noma'lum" : region;

//             function addBook(name, phone, email, state, region) {
//                 let newBook = {
//                     name: name,
//                     phone: phone,
//                     email: email,
//                     state: state,
//                     region: region
//                 };

//                 contactList.push(newBook);

//                 console.log(`Kitob muvaffaqiyatli qo'shildi.`);
//                 console.log(`Yangilangan ro'yhat`);
//                 for (let i = 0; i < contactList.length; i++) {
//                     console.log(`Ismi: ${contactList[i].name}\nTelefon raqami: ${contactList[i].phone}\nE-mail: ${contactList[i].email}\nDavlati: ${contactList[i].state}\nShahri: ${contactList[i].region}`);
//                     console.log("----------------");
//                 }
//             }
//             addBook(unknownName, unknownPhone, unknownEmail, unknownState, unknownRegion)
//         } else {
//             alert(`Tashrifingiz uchun tashakkur 😊`)
//             return
//         }
//     }
// }

// myContactList()