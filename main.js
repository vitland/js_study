// let john = {
//     firstName: 'John',
//     lastName: "Lox",
//     mass: 70,
//     height: 1.770,
//     calcBmi: function() {
//         this.bmi = this.mass/(this.height*this.height);
//         // return bmi;
//     }

// }

// let mark = {
//     firstName: 'Mark',
//     lastName: "Lox",
//     mass: 70,
//     height: 177,
//     calcBmi: function() {
//         this.bmi = this.mass/(this.height*this.height)*10000;
//         // return bmi;
//     }

// }
// mark.calcBmi();
// john.calcBmi();


// switch (true) {
//     case mark.bmi > john.bmi:
//          console.log('Mark is heavier, his BMI is ' + mark.bmi);
//          break;
//     case mark.bmi < john.bmi:
//          console.log('Jonh is heavier, his BMI is ' +  john.bmi);
//          break;
//     default:
//         console.log('They are eaqual!');
// }
// // if (mark.bmi > john.bmi) {
// //     console.log('Mark is heavier, his BMI is ' + mark.bmi);
// // } else if 
// //     (mark.bmi < john.bmi) {
// //         console.log('Jonh is heavier, his BMI is ' +  john.bmi);
// // } else {
// //     console.log('They are eaqual!');
// // 



let john = {

 bill: [124, 48, 268, 180, 42],
 calcTip: function() {
     let percent = 0;
     this.tip = [];
     this.total = [];
     for (let i = 0; i < this.bill.length; i++) {
         console.log(percent);
         console.log(this.bill[i]);
         console.log(this.tip)
         let bill = this.bill[i];
         if (bill < 50) {
             percent = 0.20 
         } else if (bill >= 50 && bill < 200) {
             percent = 0.15 
         } else { percent = 0.10  }
          this.tip[i] = this.bill[i] * percent;
          this.total[i] = this.bill[i] + this.bill[i] *percent;
     }
     
}
}
john.calcTip()
console.log(john);