document.cookie = "user=John"; // update only cookie named 'user'
alert(document.cookie); 

function diffDays(date1, date2) {
    let year1 = date1.getFullYear(),
        year2 = date2.getFullYear(),
        month1 = date1.getMonth(),
        month2 = date2.getMonth(),
        day1 = date1.getDate(),
        day2 = date2.getDate();
    let d1 = new Date(year1, month1, day1),
        d2 = new Date(year2, month2, day2),
        // Смещение для уже полностью очищенных двух локальных дат
        offset1 = d1.getTimezoneOffset(),
        offset2 = d2.getTimezoneOffset(),
        diff = (offset2 - offset1) * 60000,
        days = (d2 - d1 + diff) / 86400000;

    return days;
}

let strDate = prompt("Введите дату рождения в формате ГГГГ-ММ-ДД");
let date1 = new Date(strDate + "T00:00");
document.getElementById("days").value = diffDays(date1, new Date());

setCookie('user', parseInt(diffDays(date1, new Date())));

function setCookie(name, value) {

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);  
    document.cookie = updatedCookie;
  }












// //показать время из куки
// //alert(document.cookie);

// //если пользователь ввел и нажал
// //высчитываем значение, записываем в куки

// function func(){

//     let strDate = prompt("Введите дату рождения в формате ГГГГ-ММ-ДД");
//     let date1 = new Date(strDate + "T00:00");

//     document.getElementById("days").value

//     var now = new Date();
//     days = getDate()
//     months = getMonth()

//     setCookie('user', 'John');
// }

