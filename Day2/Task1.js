// if statement 

grade ='A';
if grade=='A'{
    console.log("Excellent!");
console.log("This message always prints as default");
}

//if-else block

age = 17;
if age >= 18{
    console.log("Eligible for voting");
}
else{
    console.log("Not Eligible for voting");
console.log("Age check complete.");
}

// Multiple else if statements

score = 86;
if score >= 90{
    console.log("Grade: A")
}
else if score >= 80{
    console.log("Grade: B")
}
else if score >= 70{
    console.log("Grade: C")
}
else if score >= 60{
    console.log("Grade: D")
}
else{
    console.log("Grade: F")
}
console.log("Grading complete.")

// switch using if-elif-else

day_number = 3 
if day_number == 1{
    console.log("It's Sunday!")
}
else if day_number == 2{
    console.log("It's Monday!")
}
else if day_number == 3{
    console.log("It's Tuesday!")
}
else if day_number == 4{
    console.log("It's Wednesday!")
}
else if day_number == 5{
    console.log("It's Thursday!")
}
else if day_number == 6{
    console.log("It's Friday!")
}
else if day_number == 7{
    console.log("It's Saturday!")
}
else{
    console.log("Invalid day number. Please enter a number between 1 and 7.")
}
