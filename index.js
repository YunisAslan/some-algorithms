// Sual 1

// const firstNumber = parseInt(prompt("Enter the first number", 99));
// const secondNumber = parseInt(prompt("Enter the second number", 99));
// const thirdNumber = parseInt(prompt("Enter the third number", 99));

// const avgResult = (firstNumber + secondNumber + thirdNumber) / 3;
// console.log("Result: ", avgResult);

////////////

// Sual 2

// const semestrBal = parseInt(prompt("Semestr ərzində toplanılan bal", 50));
// const imtahanBal = parseInt(prompt("Imtahanda toplanılan bal", 50));

// const toplamBal = semestrBal + imtahanBal;

// if (semestrBal < (50 * 40) / 100 || imtahanBal < (50 * 60) / 100) {
//   // 100->50
//   console.log("Telebe imtahana buraxilmadi");
// } else if (toplamBal < 51) {
//   console.log("Tələbə kesildi");
// } else {
//   console.log(`Tələbə semestri ${toplamBal} bal ilə uğurla keçdi`);
// }

////////////

// Sual 3

// const sloganContainer = document.getElementById("write-slogan");
// const text = "MƏN JAVASCRIPTDƏ MASTER OLACAM";

// for
// function writeSlogan() {
//   for (let i = 0; i < 10; i++) {
//     sloganContainer.innerHTML += text + "<br></br>";
//   }
// }
// writeSlogan();

// while
// let i = 0;
// while (i < 13) {
//   i++;
//   sloganContainer.innerHTML += text + "<br>";
// }

// do while
// let i = 0;
// do {
//   //en az bir defe calisacaq, daha sonra sherte gore (condition)
//   sloganContainer.innerHTML += text + "<br>";
//   i++;
// } while (i < 10);

////////////

// Sual 4

// for-la
// let toplam = 0;
// for (let i = 0; i <= 100; i++) {
//   toplam += i;
// }
// console.log(toplam);

// while ile
// let i = 1;
// let sum = 0;
// while (i <= 100) {
//   sum += i;
//   i++;
// }
// console.log("toplam: ", sum);

// do while ile
// let i = 1;
// let toplam = 0;
// do {
//   toplam += i;
//   i++;
// } while (i <= 100);
// console.log(toplam);

////////////

// Sual 5

// let numbers = "";

// for (let i = 0; i <= 10; i++) {
//   if (i !== 10) {
//     numbers += i + ",";
//   } else {
//     numbers += i;
//   }
// }

// console.log(numbers);

////////////

// Sual 6

// const number = parseInt(
//   prompt("Faktorialinin tapilmasi ucun ededi daxil edin")
// );

// function getFactorial(n) {
//   let hasil = 1; // initial

//   for (i = 1; i <= n; i++) {
//     hasil *= i;
//   }

//   return hasil;
// }

// const result = getFactorial(number);
// console.log("rESULT: ", result);

////////////

// Sual 7

// const numX = parseInt(prompt("X-i daxil edin"));
// const numY = parseInt(prompt("Y-i daxil edin"));

// function F(x, y) {
//   if (x > 0 && y < 0) {
//     return 4 * x + 2 * y + 4;
//   } else if (x > 0 && y === 0) {
//     return 2 * x - y + 3;
//   } else if (x < 0 && y > 0) {
//     return 3 * x + 4 * y + 3;
//   }
// }

// const result = F(numX, numY);
// console.log(result);

////////////

// Sual 8

// const telebeninBali = parseInt(prompt("Balinizi daxil edin"));

// function getAccreditation(bal) {
//   if (bal >= 91 && bal <= 100) {
//     return "A";
//   } else if (bal >= 81 && bal <= 90) {
//     return "B";
//   } else if (bal >= 71 && bal <= 80) {
//     return "C";
//   } else if (bal >= 61 && bal <= 70) {
//     return "D";
//   } else if (bal >= 51 && bal <= 60) {
//     return "E";
//   } else {
//     return "F";
//   }
// }

// const result = getAccreditation(telebeninBali);
// console.log(result);

////////////

// Sual 9 ******** HƏLL EDİLMƏDİ **********

// const number = parseInt(prompt("Enter an integer: "));

// for (let i = 1; i <= 10; i++) {
//   const result = i * number;

//   document.write(`${number} * ${i} = ${result}\t`);
// }

////////////

// Sual 10 (INTERVİEW QUESTION (FOR JUNIOR)) *Binary Search*

function findTarget(arr, target) {
  let left = 0; //[0]
  let right = arr.length - 1; //[9]

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log("middle", middle);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]; //[0]-[9] length: 10
const target = 61;

const result = findTarget(array, target);
console.log(result);

// NOT BINARY SEARCH
// function findTarget(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// }

// const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
// const target = 33;

// const result = findTarget(array, target);
// console.log(result);
