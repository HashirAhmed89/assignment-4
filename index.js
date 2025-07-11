// Q no 1  Online Course Enrollment Processor
// Scenario:
// An online platform tracks course enrollments for students. Each enrollment includes the
// student's name, selected course, and enrollment date.
// Task:
// Write a function that processes an array of enrollment objects, each containing:
// ● name: Name of the student.
// ● course: The name of the course.
// ● enrollmentDate: The date the student enrolled.

// The system should:
// 1. Use switch to assign a fee to each course:
// ○ Web Development: $200
// ○ Data Science: $250
// ○ Graphic Design: $150
// 2. Use if-else to apply a 10% early bird discount for enrollments made more than 30
// days before the course start date.
// 3. Format student names and courses using string methods (capitalize first letter of each
// word).
// 4. Use date methods to calculate the duration since enrollment.
// 5. Use array methods to generate a summary of enrollments and fees.

// let studentData = [
//     {
//         name: "hashir",
//         course: "web and app development",
//         enrollment: "02-1-2025",
//     },
//     {
//         name: "alishan",
//         course: "data science",
//         enrollment: "03-1-2025",
//     },
//     {
//         name: "asif",
//         course: "graphic designing",
//         enrollment: "04-1-2025",
//     },
// ];

// const cap = (word) => {
//     let breakWord = word.split(" ");
//     let afterBreak = breakWord.map((w) => {
//         return w.charAt(0).toUpperCase() + w.slice(1);
//     });
//     return afterBreak.join(" ");
// };

// const studentEnrollement = (students, startDateOfCourse) => {
//     const startDate = new Date(startDateOfCourse)

//     const result = students.map((student) => {
//         let fees = 0;
//         let course = student.course.toLowerCase()

//         switch (course) {
//             case "web and app development":
//                 fees = 200;
//                 break;
//             case "data science":
//                 fees = 150;
//                 break;
//             case "graphic designing":
//                 fees = 250;
//                 break;
//             default:
//                 console.log("Invalid course");
//                 return null;
//         }

//         let enrollmentDate = new Date(student.enrollment)
//         let diff = Math.ceil((startDate - enrollmentDate) / (1000 * 60 * 60 * 24))
//         if (diff > 30) {
//             const discount = fees * 0.1;
//             fees -= discount;
//         }

//         const formattedName = cap(student.name)
//         const formattedCourse = cap(student.course)
//         const currDate = new Date()
//         const duration = Math.ceil((enrollmentDate - currDate) / (1000 * 60 * 60 * 24))

//         return {
//             studentName: formattedName,
//             studentCourse: formattedCourse,
//             enrollmentFees: `$${fees.toFixed(2)}`,
//             duration: `${duration} ago`
//         }
//     })

//     return result;
// }


// const output = studentEnrollement(studentData, "1-1-2025");
// console.log(output);


// 

//  2. Employee Payroll System
// Scenario:
// You are developing a payroll system for employees. Each employee has a salary, hours worked,
// and bonus eligibility.
// Task:
// Write a function that processes an array of employee objects, each containing:
// ● employeeName: The name of the employee.
// ● baseSalary: The base salary of the employee.
// ● hoursWorked: The total number of hours worked.
// ● eligibleForBonus: Boolean flag indicating if the employee is eligible for a bonus.

// The system should:
// 1. Calculate the overtime pay (1.5x the base rate) for any hours worked beyond 40.
// 2. Use switch to apply a bonus based on eligibility:
// ○ If eligible, apply a 10% bonus to the base salary.
// ○ If not eligible, no bonus.
// 3. Use if-else to check if the total salary exceeds $100,000, applying a tax rate of 30%
// for high earners.
// 4. Use string methods to format employee names.
// 5. Use array methods to calculate and display the total payroll.

// let bonusPercent = 10;
// let taxPercent = 30;

// let employees = [
//   { name: "zain", baseSalary: 3000, hourWork: 50, eligibleForBonus: true },
//   { name: "hashir", baseSalary: 4000, hourWork: 30, eligibleForBonus: false },
//   { name: "asif", baseSalary: 120000, hourWork: 70, eligibleForBonus: true }
// ];


// let formattedEmployees = employees.map(function(emp) {
//   let formattedName = emp.name.charAt(0).toUpperCase() + emp.name.slice(1).toLowerCase();
//   return {
//     name: formattedName,
//     baseSalary: emp.baseSalary,
//     hourWork: emp.hourWork,
//     eligibleForBonus: emp.eligibleForBonus
//   };
// });


// let employeesWithBonus = formattedEmployees.map(function(emp) {
//   let salaryWithBonus;
//   switch(emp.eligibleForBonus) {
//     case true:
//       salaryWithBonus = Math.round(emp.baseSalary * (1 + bonusPercent / 100));
//       break;
//     case false:
//       salaryWithBonus = emp.baseSalary;
//       break;
//     default:
//       salaryWithBonus = emp.baseSalary;
//   }
//   return {
//     name: emp.name,
//     baseSalary: emp.baseSalary,
//     hourWork: emp.hourWork,
//     eligibleForBonus: emp.eligibleForBonus,
//     salaryWithBonus: salaryWithBonus
//   };
// });


// let employeesWithFinalSalary = employeesWithBonus.map(function(emp) {
//   let finalSalary;
//   if (emp.salaryWithBonus > 100000) {
//     let excess = emp.salaryWithBonus - 100000;
//     let taxedExcess = excess * (1 - taxPercent / 100);
//     finalSalary = Math.round(100000 + taxedExcess);
//   } else {
//     finalSalary = emp.salaryWithBonus;
//   }
//   return {
//     name: emp.name,
//     finalSalary: finalSalary
//   };
// });


// let totalPayroll = employeesWithFinalSalary.reduce(function(sum, emp) {
//   return sum + emp.finalSalary;
// }, 0);

// employeesWithFinalSalary.forEach(function(emp) {
//   console.log(emp.name + ": " + emp.finalSalary);
// });

// console.log("Total Payroll: " + totalPayroll);

// 3. Banking System (Using Switch Case, Functions, and Loops)
// Scenario:
// You are developing a banking system that allows users to check their balance, deposit money,
// withdraw money, and transfer money to other users.
// Task:
// 1. Create an array of users, where each user has:
// ○ name (user’s name),
// ○ balance (user’s current balance).
// 2. Write a function that takes the user’s action (e.g., "deposit", "withdraw",
// "transfer", "checkBalance") and updates the user’s balance accordingly.
// 3. Use switch to handle the user’s action and:
// ○ For "deposit", add the deposit amount to the balance.
// ○ For "withdraw", subtract the withdrawal amount from the balance.
// ○ For "transfer", transfer money between users.
// 4. Return the updated balance after the action is performed.

// let detail=[{
//     name:"hashir",
//     balance:"100",
// },
// {
//     name:"M.fareed",
//     balance:"200",
// },
// {
//     name:"noman",
//     balance:"300",
// },
// {
//     name:"abdullah",
//     balance:"400",
// },
// ]
// function ATM(proc,amount,userName,transferUser){
//     let user=detail.find(userData=>{
//        return userData.name==userName

//     })
//  let transfer = detail.find(t => t.name == transferUser);

//     if(!user){
//         return "not found user"
//     }

//       amount = Number(amount);
//     user.balance = Number(user.balance);

//     switch (proc) {
//         case "deposit":
//             user.balance+=amount
//             return `deposit amount is ${amount}`+`new amount is ${user.balance}`
//         case "withdraw":
//             if(user.balance >= amount){
//                 user.balance -= amount
//                 return `withdraw balance is ${amount}`+`new amount is ${user.balance}`

//             }else{
//                 return "not valid insufficient balance"
//             }
//         case "transfer":
//             if(!transfer){
//                 return "not found"
//             }
//             if(user.balance>=amount){
//                 user.balance -= amount
//                 transfer.balance = Number(transfer.balance);
//                 transfer.balance += amount;
//                 return `${userName} transfered ${amount} to ${transferUser} new balance is ${user.balance}`

//             }
//             else{
//                 return "insufficient balance transfer"
//             }
//             case "check balance":
//                 return `${userName} balance is ${user.balance}`

            
           
    
//         default:
//             return "invalid proced"
//             break;
//     }


// }

// console.log(ATM("deposit",3000, 'hashir', 'noman'))

// 4. Multi-Currency Converter
// Scenario:
// You are building a currency converter for an international travel app. The app needs to convert
// an amount in one currency to multiple other currencies (e.g., USD to EUR, GBP, JPY, etc.).
// Task:
// 1. Create an object with exchange rates for different currencies (e.g., {"USD": 1,
// "EUR": 0.85, "GBP": 0.75, "JPY": 110.50}).
// 2. Write a function that:
// ○ Takes in the amount in USD and the target currency.
// ○ Converts the amount to the target currency using the exchange rates.
// ○ Use switch to handle the conversion based on the target currency.
// 3. Return the converted amount in the selected currency.

// let curr=[
//     {"USD": 1,
// "EUR": 0.85,
//  "GBP": 0.75, 
//  "JPY": 110.50,
// }]
// function converter(amuntInUSD,currency){
//     let convertedAmmount;
//     switch (currency) {
//         case "EUR":
//             convertedAmmount=amuntInUSD*0.85
            
//             break;
//         case "GBP":
//             convertedAmmount=amuntInUSD*0.75
//         break;
//         case "JPY":
//             convertedAmmount=amuntInUSD*110.50
//         case "USD":
//             convertedAmmount=amuntInUSD
    
//         default:
//             return "invalid currency"
//             break;
//     }
//     return `${amuntInUSD} USD = ${convertedAmmount.toFixed(2)} ${targetCurrency.toUpperCase()}`
// }

// 5. Temperature Converter
// Scenario:
// You are building a temperature converter that converts between Celsius, Fahrenheit, and Kelvin.
// Task:
// Write a function that:
// 1. Takes in a temperature value and a unit (Celsius, Fahrenheit, or Kelvin).
// 2. Use switch to convert the given temperature to the other two units (e.g., Celsius to
// Fahrenheit and Kelvin).
// 3. Return the converted temperature values.

// function temp(value,unit){
//     let celcius, farenite, kelvin;
//     switch (unit) {
//         case "celcius":
//             celcius = value;
//             farenite = (value * 9/5) + 32;
//             kelvin = value + 273.15;
//             break;

//         case "farenite":
//             farenite = value;
//             celcius = (value - 32) * 5/9;
//             kelvin = celcius + 273.15;
//             break;

//         case "kelvin":
//             celcius = value - 273.15;
//             farenite = (celcius * 9/5) + 32;
//             kelvin = value;
//             break;

//         default:
//             return "invalid unit use only celcius , farenite and kelvin";
//     }
//     return {
//         celcius: celcius.toFixed(2),
//         farenite: farenite.toFixed(2),
//         kelvin: kelvin.toFixed(2),
//     };
// }

// function show(){
//     let val = parseFloat(document.getElementById("temp").value);
//     let unitSelect = document.getElementById("selection").value;
//     let result = temp(val, unitSelect);
//     if (typeof result === "string") {
//         document.getElementById("output").innerHTML = result;
//     } else {
//         document.getElementById("output").innerHTML = 
//             `celcius : ${result.celcius}°C <br>` + 
//             `farenite : ${result.farenite}°F <br>` + 
//             `kelvin : ${result.kelvin}°K <br>`;
//     }
// }
