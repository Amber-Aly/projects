//Q1
var studentNames = [];

//Q2
var studentNames1 = new Array();

//Q3
var fruits = ["Apple", "Banana", "Mango"];

//Q4
var numbers =[10, 20, 30, 40];

//Q5
var boolean =[true, false, true];

//Q6
var mixedArray = ["Hello", 42, true, null];

//Q7

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

    document.write("1) " + qualifications[0] + "<br>");
    document.write("2) " + qualifications[1] + "<br>");
    document.write("3) " + qualifications[2] + "<br>");
    document.write("4) " + qualifications[3] + "<br>");
    document.write("5) " + qualifications[4] + "<br>");
    document.write("6) " + qualifications[5] + "<br>");
    document.write("7) " + qualifications[6] + "<br>");
    document.write("8) " + qualifications[7] + "<br><br>");

//     //Q8
    var studentsNames = ["Ali", "Sara", "Ahmed"];
    var studentScores = [420, 380, 450];
    var totalMarks = 500;

//      // Display student 1
     document.write("Student: " + studentsNames[0] + "<br>");
     document.write("Score: " + studentScores[0] + "<br>");
     document.write("Percentage: " + (studentScores[0] / totalMarks * 100) + "%<br><br>");

//      // Display student 2
    document.write("Student: " + studentsNames[1] + "<br>");
    document.write("Score: " + studentScores[1] + "<br>");
    document.write("Percentage: " + (studentScores[1] / totalMarks * 100) + "%<br><br>");

//     // Display student 3
    document.write("Student: " + studentsNames[2] + "<br>");
    document.write("Score: " + studentScores[2] + "<br>");
    document.write("Percentage: " + (studentScores[2] / totalMarks * 100) + "%<br><br>");

    //Q9

    // Initialize color array
    var colors = ["Red", "Green", "Blue"];
    document.write("<b>Initial Colors:</b> " + colors + "<br><br>");

    // a. Add color to beginning
    let colorStart = prompt("Enter a color to add to the beginning:");
    colors.unshift(colorStart);
    document.write("<b>After adding to beginning:</b> " + colors + "<br><br>");

    // b. Add color to end
    let colorEnd = prompt("Enter a color to add to the end:");
    colors.push(colorEnd);
    document.write("<b>After adding to end:</b> " + colors + "<br><br>");

     // c. Add two more colors to beginning
     colors.unshift("Purple", "Orange");
     document.write("<b>After adding two colors to beginning:</b> " + colors + "<br><br>");
 
     // d. Delete first color
     colors.shift();
     document.write("<b>After deleting first color:</b> " + colors + "<br><br>");
 
     // e. Delete last color
     colors.pop();
     document.write("<b>After deleting last color:</b> " + colors + "<br><br>");
 
     // f. Add color at specific index
     let addIndex = prompt("Enter the index to add a color:");
     let addColor = prompt("Enter the color to add at index " + addIndex + ":");
     colors.splice(addIndex, 0, addColor);
     document.write("<b>After adding color at index " + addIndex + ":</b> " + colors + "<br><br>");
 
     // g. Delete color(s) from specific index
     let delIndex = prompt("Enter the index to delete color(s):");
     let delCount = prompt("Enter how many colors to delete from index " + delIndex + ":");
     colors.splice(delIndex, delCount);
     document.write("<b>After deleting " + delCount + " color(s) from index " + delIndex + ":</b> " + colors + "<br><br>");
 


