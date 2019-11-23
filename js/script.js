'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    
        if (typeof(a) != null && typeof(a) != null 
        && a != '' && b != '' && a.length < 50 ) {
            appData.expenses[a] = b; 
        } else {
            alert("Введены не коректные данные!");
            i--;
        }   
    };

appData.moneyPerDay = appData.budget / 30;

alert("бюджет на 1 день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень расходов");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень расходов");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень расходов");
} else {
    console.log("произошла ошибка");
}


