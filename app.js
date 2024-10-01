//   Qusetion no. 1
var student_names = [];
console.log(student_names);

//   Qusetion no. 2
var student_names = new Array();
console.log(student_names);

//   Qusetion no. 3
var string_array = ["English", "Mathematics", "Physics", "Chemistry"];
console.log(string_array);

//   Qusetion no. 4
var num_array = [6, 7, 8, 9];
console.log(num_array);

//   Qusetion no. 5
var boolean_array = [true, false];
console.log(boolean_array);

//   Qusetion no. 6
var mixed_array = ["English", 6, true];
console.log(mixed_array);

//  Question no. 7
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];
var outputDiv = document.createElement('div');
document.body.appendChild(outputDiv);
outputDiv.innerHTML = "<h3>Qualifications:</h3>";
for (var i = 0; i < qualifications.length; i++) {
    outputDiv.innerHTML += (i + 1) + ") " + qualifications[i] + "<br>";
}

//  Quetion no. 8

var studentNames = ['Micheal', 'John', 'Tony'];
var studentScores = [320, 230, 480];
var totalMarks = 500;
var outputDiv = document.createElement('div');
document.body.appendChild(outputDiv);
outputDiv.innerHTML = "<h3>Scores :</h3>";
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    outputDiv.innerHTML += 'Score of ' + studentNames[i] + ' is ' + studentScores[i] + ', Percentage: ' + percentage.toFixed(2) + '%.<br>';
}

//  Question no. 9
var colors = ["Red", "Yellow", "Green", "Pink", "Orange"];
var new_color = prompt("Enter a new color at the begining");
colors.unshift(new_color);
console.log(colors);
var new_color = prompt("Enter a new color at the last");
colors.push(new_color);
console.log(colors);
var new_color = prompt("Enter a new color at the begining");
colors.unshift(new_color);
console.log(colors);
var new_color = prompt("Enter another new color at the begining");
colors.unshift(new_color);
console.log(colors);
colors.shift();
console.log(colors);
colors.pop();
console.log(colors);
var index = parseInt(prompt("Enter index add color"));
var new_color = prompt("Enter a new color");
colors.splice(index, 0, new_color);
console.log(colors);

//  Qusetion no. 10
var students_score = [320, 230, 480, 120];
console.log(students_score.sort());

//   Qusetion no. 11

var cities_list = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log(`Cities list: ${cities_list}`);
console.log(`Selected cities list: ${cities_list[1]},${cities_list[2]},${cities_list[3]},`);

//  Qusetion no. 12
var arr = ["This " + "is " + "my " + "cat"];
console.log(arr);

//   Qusetion no. 13
var devices = [];
devices.push("Keyboard"); devices.push("mouse"); devices.push("printer"); devices.push("moniter");
console.log(devices);

//   Qusetion no. 14
var devices = [];
devices.unshift("Keyboard"); devices.unshift("mouse"); devices.unshift("printer"); devices.unshift("moniter");
console.log(devices);

//  Question no.15
var phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
var outputDiv = document.createElement('div');
document.body.appendChild(outputDiv);
outputDiv.innerHTML = "<h3>Phone Manufacturers :</h3>";
document.write('<select id="manufacturers" name="manufacturers">');
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
}
document.write('</select>');


