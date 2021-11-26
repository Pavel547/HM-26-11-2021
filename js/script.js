// const logItems = function (array) {
//   for (let i =0; i<array.length; i+=1){
//     console.log(array[i]);
//     console.log(i+1);
//   }
// };
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//Тільки не знаю як це зробити з одним консоль логом

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const app =  message.split(" ");
//   console.log(app.length*pricePerWord);
// };
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',10,
//   ),
// );

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// );

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// );
// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// );

// const findLongestWord = function (string) {
//   const Arbitrary = string.split(" ");
//   console.log(Arbitrary);
//   for(let i = 0; i < Arbitrary.length; i +=1){
//     console.log(Arbitrary[i]);
//   }
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// const formatString = function (string) {
//   if(string.length > 40){
//     console.log(string.slice(0,40), `...`);
//   } console.log(string);
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(formatString('Curabitur ligula sapien.'));
// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
//underfinde є і без підказок

// const checkForSpam = function (message) {
//   if(message.toLowerCase().includes("spam")){
//     return false;
//   }
//   if(message.toLowerCase().includes("sale")){
//     return false;
//   }
//   return true;
// };

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));