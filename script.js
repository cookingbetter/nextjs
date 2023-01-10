function diffDays(date1, date2) {
    let year1 = date1.getFullYear(),
        year2 = date2.getFullYear(),
        month1 = date1.getMonth(),
        month2 = date2.getMonth(),
        day1 = date1.getDate(),
        day2 = date2.getDate();
    let d1 = new Date(year1, month1, day1),
        d2 = new Date(year2, month2, day2),
        offset1 = d1.getTimezoneOffset(),
        offset2 = d2.getTimezoneOffset(),
        diff = (offset2 - offset1) * 60000,
        days = (d2 - d1 + diff) / 86400000;

    return days;
}
//будуща дата - сегодня
let strDate = prompt("Введите дату посещения в формате ГГГГ-ММ-ДД");
let date1 = new Date(strDate + "T00:00");
document.getElementById("days").value = diffDays(date1, new Date());