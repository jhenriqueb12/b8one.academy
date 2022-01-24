/*
OPERADORES 2:
-&& -> AND
-|| -> OR
*/

// &&

let result = true;

let useName = 'Gabriel';

let isAuthenticated = result === true && useName === "Gabriel"; // true

let isAuthenticated = result && useName === "Hugo"; //false

let isAuthenticated = !result && useName === "Gabriel"; //false

// ||

let apples = 20;

let waters = 10;

let dailyStockIsOk = apples === 20 || waters === 10; // true

let dailyStockIsOk = apples === 20 || waters === 20; // true

let dailyStockIsOk = apples === 10 || waters === 20; // false