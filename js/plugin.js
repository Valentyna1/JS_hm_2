//---------------------------------------ФУНКЦИИ----------------------------

// // Задание 1
// function multiplay() {
// 	if (arguments.length == 0) return 0;
// 	var res = 1;
// 	for ( i=0, max = arguments.length; i < max; i++){
// 		res *= arguments[i];
// 	}
// 	return res;
// }

// // Задание 2
// function foo(limit) {
// 	var value;
// 	if(limit > 1){
// 		value = limit * foo(limit-1);
// 	} else{
// 		value = limit;
// 	}
// 	return value;
// }

// // Задание 3
// function reverseString(str) {
//     var newStr = '';
//     for (var i = str.length-1; i>=0; i--){
//         newStr += str[i];
//     }
//     return newStr;
// }
// var res = reverseString('test');
// console.log(res);


// // Задание 4
// function charCodeAt(str) {
//     var newStr = '';
// 	for (var i = 0; i <= str.length-1; i++){
//         newStr += str[i].charCodeAt() + ' ';
// 	}
// 	return newStr;
// }
// var res = charCodeAt('hello');
// console.log(res);

// //Задание 5
// function foo(str) {
//     for (var i =0; i <= str.length-1; i++) {
//         console.log(str[i]);
//     }
// }
// var res = foo('test');

// //Задание 6-1
// function firstFunc(arr, func) {
//     var newStr = 'New value: ';
//     for (var i = 0; i < arr.length; i++) {
//         newStr += func(arr[i]);
//     }
//     return newStr;
// }
// function secondFunc(one) {
//     return one[0].toUpperCase() + one.substring(1);
// }
// var res = firstFunc(['my', 'name', 'is', 'trinity'], secondFunc);
// console.log(res);

// //Задание 6-2
// function firstFunc(arr, func) {
//     var newStr = 'New value: ';
//     for (var i = 0; i < arr.length; i++) {
//         newStr += func(arr[i]);
//     }
//     return newStr;
// }
// function secondFunc(two) {
//     return two*10 + ',';
// }
// var res = firstFunc([10, 20, 30], secondFunc);
// console.log(res.slice(0, length-1));

// //Задание 6-3
// function firstFunc(arr, func) {
//     var newStr = 'New value: ';
//     for (var i = 0; i < arr.length; i++) {
//         newStr += func(arr[i]);
//     }
//     return newStr;
// }
// function secondFunc(three) {
//     return `${three.name} is ${three.age}` + '; ';
// }
// var res = firstFunc([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], secondFunc);
// console.log(res);

// //Задание 6-4
// function firstFunc(arr, func) {
//     var newStr = 'New value: ';
//     for (var i = 0; i < arr.length; i++) {
//         newStr += func(arr[i]);
//     }
//     return newStr;
// }
// function secondFunc(four) {
//     return four + ', ';
// }
// var res = firstFunc(['abc', '123'], secondFunc);
// console.log(res.slice(0, length-1));


//---------------------------------------МАССИВЫ----------------------------

// //Задание 1
// var str = 'bcdaeflmjgkhi',
// 	newStr = '';
// for (var i = str.length-1; i >= 0; i--) {
// 	newStr += str[i] + ' ';
// }
// arr = newStr.split(' ');
// var newArr = arr.sort().reverse();
// strLast = newArr.join('');
// console.log(strLast);

// //Задание 2
// var arr = [2, 4, 7, 1, -2, 10, -9];
// function sortArr(prev, next) {
// 	console.log(next, prev);
// 	return prev - next;
// }
// var newArr = arr.sort(sortArr);
// console.log(newArr);

// //Задание 3
// var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// var newArr = arr.slice(2,5);
// console.log(newArr);

// //Задание 4
// var arr = ['one', 2, 'three', 4];
// var newArr = arr.concat(arr);
// console.log(newArr);

// //Задание 5
// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.splice(2,2);
// console.log(arr);

// //Задание 6
// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.splice(2,2,'three','four');
// console.log(arr);

// // Задание 7
// var arr = ['I', 'am', 'an', 'array'];
// var newArr = arr.splice(3,0,'awesome');
// console.log(arr);

// // Задание 8
// var arr = [[14,45], [1], ['a', 'c', 'd']];
// var newArr = arr.sort(length);
// console.log(newArr);

// // Задание 9
// var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// var newArr = arr.slice(length).concat();
// console.log(newArr);

// // Задание 10
// var arr = [
// 	{cpu: 'Intel', info: {cores: 2, cache: 3}},
//     {cpu: 'Intel', info: {cores: 4, cache: 4}},
//     {cpu: 'Amd', info: {cores: 1, cache: 1}},
//     {cpu: 'Intel', info: {cores: 3, cache: 2}},
//     {cpu: 'Amd', info: {cores: 4, cache: 2}}
//     ];
// function sortArr(prev, next) {
// 	console.log(next, prev);
// 	return prev[arr.cores] - next[arr.cores];
// }
// var newArr = arr.sort(sortArr);
// console.log(newArr);

// // Задание 11
// const products = [
// 	{title: 'prod1', price: 5.2},
//     {title: 'prod2', price: 15},
//     {title: 'prod3', price: 18.9},
//     {title: 'prod4', price: 19},
//     {title: 'prod5', price: 0.18},
//     {title: 'prod6', price: 25},
//     {title: 'prod7', price: 8},
//     {title: 'prod8', price: 63}
// ];
// for (let i = 0, max = products.length; i < max; i++){
// 	if (products[i]['price'] >= 15 && products[i]['price'] <= 30){
// 		console.log(products[i]);
// 	}
// }


//---------------------------------------THIS----------------------------
// // Задание 1
// const rectangle = {
//     width: 10,
//     height: 15,
//     getSquare: getSquare
// };
// function getSquare() {
//     return this.width * this.height;
// }
// console.log(rectangle.getSquare());

// // Задание 2
// const price = {
//     price: 10,
//     discount: '15%',
//     getPrice: getPrice,
//     getPriceWithDiscount: getPriceWithDiscount
// };
// function getPrice() {
//     return `Цена без скидки = ${this.price}`;
// }
// function getPriceWithDiscount() {
//     return `Цена с учетом скидки = ${this.price * (100 - parseFloat(this.discount)) / 100}`;
// }
// console.log(price.getPrice());
// console.log(price.getPriceWithDiscount());

// Задание 3