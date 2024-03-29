'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpanses: function() {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце"),
                    b = prompt("Во сколько обойдется?");
                
                if (typeof(a) != null && typeof(b) != null 
                && a != '' && b != '' && a.length < 50 ) {
                    appData.expenses[a] = b; 
                } else {
                    alert("Введены не коректные данные!");
                    i--;
                }   
            }
        },
        detectDayBudget: function() {
            appData.moneyPerDay = ( appData.budget / 30).toFixed(1);
            alert("бюджет на 1 день: " + appData.moneyPerDay);
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log("Минимальный уровень расходов");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень расходов");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Высокий уровень расходов");
            } else {
                console.log("произошла ошибка");
            }
        },
        checkSavings: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
            appData.monthInCome = save/100/12*percent;
            alert("Доход в месяц в вашего депозита: " + appData.monthInCome);
            }
        },
        chooseOptExpenses: function() {
            for (let i = 1; i < 4; i++) {
                let a = prompt("Статья необязательных расходов?");
                
                if (typeof(a) != null && typeof(a) != null 
                && a != '' && a.length < 50 ) {
                    appData.optionalExpenses[i] = a; 
                } else {
                    alert("Введены не коректные данные!");
                    i--;
                }   
            }
        },
        chooseInCome: function() {
            let items;
            do {
                items = prompt('Что принесет дополнительный доход? (Укажите через запятую)', '');
            } while ( items == '' || items == null || typeof(items) != 'string');
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?',''));
            appData.income.sort();
            
            appData.income.forEach(function(item, i) {
                alert('Способы доп. заработка: ' + (i + 1) + " - " + item);
              });
        }
    };
console.log('Наша программа включает в себя данные:');
for (let prop in appData) {
    console.log(prop + ' = ' + appData[prop]);
}