      // login event handler
      document.getElementById("login").addEventListener("click", function (){
        document.getElementById('login-area').style.display = 'none'; // first page will be hide
        
        document.getElementById('txn-area').style.display = 'block'; // second page will be show (when click)
      });

      // deposit event handler
      document.getElementById('addDeposit').addEventListener('click', function () { 
        
        // const depositAmt = document.getElementById('depositAmount').value; // using value for identify the input amount (only for input tag)
        const amountNum = getInputAmt('depositAmount'); // for convert amt string to number


        // const currentamt = document.getElementById('currentDeposit').innerText; // using innertext for identify the input amount (except input tag)
        // const currentamtNum = parseFloat (currentamt);  // for convert amt string to number
        // const totalDeposit = currentamtNum + amountNum; // adding both value

        // document.getElementById('currentDeposit').innerText = totalDeposit; // set the total amount

        // const currentBl = document.getElementById('currentBalance').innerText;
        // const aurrentBlNum = parseFloat(currentBl);
        // const totalBalance = amountNum + aurrentBlNum;
        // document.getElementById('currentBalance').innerText = totalBalance;
        grandDeposit("currentDeposit", amountNum);
        grandDeposit("currentBalance", amountNum);


        document.getElementById('depositAmount').value = ""; // to clear input value
      }) 

      // withdraw btn even handler
      document.getElementById('addWithdraw').addEventListener('click', function () {
        // const withrawAmount = document.getElementById('withrawAmt').value;
        const withrawNum = getInputAmt('withrawAmt')

        grandDeposit("currentWithdraw", withrawNum);
        grandDeposit("currentBalance", -1 * withrawNum);

        document.getElementById('withrawAmt').value = "";
      })

      function getInputAmt(id) {
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
      }

      function grandDeposit(id, amountNum) {
        const currentBl = document.getElementById(id).innerText; // using innertext for identify the input amount (except input tag)
        const currentBlNum = parseFloat(currentBl); // for convert amt string to number
        const totalBalance = amountNum + currentBlNum; // adding both value
        document.getElementById(id).innerText = totalBalance; // set the total amount
      }