/*
CONDIÇÕES
-if
-else if
-else
-switch
*/

// if

let result = 5 + 5;

if (result === 10) {
  result = 2;
}

// else if

let apples = 20;

if (apples === 10) {
  apples = 100;
} else if (apples === 20) {
  apples = 200;
} else if (apples === 30) {
  apples = 300;
}

// else

let waters = 500;

if (waters !== 500) {
  waters = 1000;
} else {
  waters = 2000;
}

let mouse = 3;

if (mouse !== 3) {
  mouse = 5;
} else if (mouse === 10) {
  mouse = 20;
} else {
  mouse = 10;
}

// switch

let isAuthenticated = true;

switch (isAuthenticated) {
  case false:
    isAuthenticated = true;
    break;
  case true:
    isAuthenticated = false;
    break;
  default:
    isAuthenticated = false
    break;  
}