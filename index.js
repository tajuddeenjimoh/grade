function calculatePercentage() {
    let sub1 = parseFloat(document.getElementById("sub1").value) || 0;
    let sub2 = parseFloat(document.getElementById("sub2").value) || 0;
    let sub3 = parseFloat(document.getElementById("sub3").value) || 0;
    let sub4 = parseFloat(document.getElementById("sub4").value) || 0;
    let sub5 = parseFloat(document.getElementById("sub5").value) || 0;

    if ([sub1, sub2, sub3, sub4, sub5].some(mark => mark < 0 || mark > 100)) {
        document.getElementById("result").innerHTML = `<span style="color:red;">Marks must be between 0 and 100.</span>`;
        return;
    }

    let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
    let percentage = (totalMarks / 500) * 100;
    
    let grade;
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "Fail";

    document.getElementById("result").innerHTML = `
        Total Marks of all Subject: ${totalMarks}/500 <br>
        Percentage: ${percentage.toFixed(2)}% <br>
        Grade: ${grade}
    `;
}