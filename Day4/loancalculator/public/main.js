
// To get the values from index.html by ID
const loanInput = document.getElementById('loan-input');
const interestInput = document.getElementById('interest-input');
const yearsInput = document.getElementById('years-input');

const outputDiv = document.getElementById('output-div');

//When clicled in Calculate: 
const button = document.getElementById('button');
button.addEventListener('click', () => {
    //Calculate the interest
    const loan = loanInput.value;
    const interest = interestInput.value;
    const years = yearsInput.value;
    const payment = calculateInterest(loan, interest / 100, years);

    //To write output Front-End:
    outputDiv.innerHTML = '$' + payment. toFixed(2);
});

function calculateInterest(loan, interest, years) {
    return ((interest * loan) / (1 - Math.pow((1 + interest), -years))) * years;
  }
