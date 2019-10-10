let john = {
    firstName: 'John',
    lastName: "Lox",
    mass: 70,
    height: 1.770,
    calcBmi: function() {
        this.bmi = this.mass/(this.height*this.height);
        // return bmi;
    }

}

let mark = {
    firstName: 'Mark',
    lastName: "Lox",
    mass: 70,
    height: 177,
    calcBmi: function() {
        this.bmi = this.mass/(this.height*this.height)*10000;
        // return bmi;
    }

}
mark.calcBmi();
john.calcBmi();


switch (true) {
    case mark.bmi > john.bmi:
         console.log('Mark is heavier, his BMI is ' + mark.bmi);
         break;
    case mark.bmi < john.bmi:
         console.log('Jonh is heavier, his BMI is ' +  john.bmi);
         break;
    default:
        console.log('They are eaqual!');
}
// if (mark.bmi > john.bmi) {
//     console.log('Mark is heavier, his BMI is ' + mark.bmi);
// } else if 
//     (mark.bmi < john.bmi) {
//         console.log('Jonh is heavier, his BMI is ' +  john.bmi);
// } else {
//     console.log('They are eaqual!');
// }

