function compoundInterest(principal, interest, nyear ) 
{

//Above define function name, { indicates start of script. Below 3 lines. Input 3 values from HTML Form (Number, Range and Select types), assign the values to new variables principal, interest, nyear, values extracted from getPrincipalValue, getInterestRate and getYear

principal = document.getElementById("getPrincipalValue").value;
interest = document.getElementById("getInterestRate").value;
nyear = document.getElementById("getYear").value;

//Create two new variables (Var command) assigning the Product of 3 variables above and calling an inbuilt java function to check current date and add the number of years to it, ready for output.

var resultInterest = (principal * interest/100 * nyear);
var year = new Date().getFullYear()+parseInt(nyear);

//Ouput text and variable values, which are then displayed within the html, inside P tags. Problem unresolved is trying to output product+principal, is being interpreted as a string as as such puts the principal value next to the output value.

document.getElementById("outputPrincipal").innerHTML ="If you deposit? $" + principal;
document.getElementById("outputInterest").innerHTML = "at an interest rate of " + interest + "%"; 
document.getElementById("compounded").innerHTML = "You will receive $ " + resultInterest
document.getElementById("outputYear").innerHTML = "in the year " + year;
}
