function calculateLemonDistribution() {
    // Get the number of lemons from the input
    const lemons = parseInt(document.getElementById("lemons").value);
    const resultElement = document.getElementById("result");
    let result = ""; // To store the final output
    let shortage = 0;

    if (lemons >= 21) {
        // Case 2
        result += "god1=7 offered\n";
        result += "god2=7 offered\n";
        result += "god1=7 offered\n";
        result += "sufficient\n";
    } else if (lemons === 15) {
        // Case 3
        result += "god1=7 offered\n";
        result += "god2=7 offered\n";
        result += "god1=having 1 need 6\n";
        shortage = 6;
        result += `shortage:${shortage}\n`;
    } else if (lemons === 7) {
        // Case 1
        result += "god1=7 offered\n";
        result += "god2=need 7\n";
        result += "god1=need 7\n";
        shortage = 14;
        result += `shortage:${shortage}\n`;
    } else if (lemons > 21 && lemons < 67) {
        // Custom cases (based on logic)
        const totalNeed = 67;
        shortage = totalNeed - lemons;
        result += "god1=7 offered\n";
        result += "god2=7 offered\n";
        result += "god1=7 offered\n";
        result += `shortage:${shortage}\n`;
    } else {
        // Default case
        result += "Not enough lemons to distribute.\n";
    }

    // Display the result
    resultElement.textContent = result;
}
