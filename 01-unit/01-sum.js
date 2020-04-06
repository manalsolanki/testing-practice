// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function sum(num1 ,num2) {
  if (num1 == undefined) num1 = 0;
  if (num2 == undefined) num2 = 0;
  return Number(num1)+ Number(num2);
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the sum of two numbers.
  var result = sum(1, 1);
  if (result !== 2) throw new Error('Expected sum(1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = sum(1, 1, 1, 1, 1, 1, 2);
  if (result !== 2) throw new Error('Expected sum(1, 1, 1, 1, 1, 1, 2) to be 2. Received: ' + result);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = sum (1);
  if (result !== 1) throw new Error(' Expected sum (1) to be 1. Recieved: ' + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = sum ( );
  if (result !== 0) throw new Error(' Expected sum ( ) to be 0 . Recieved: ' + result);

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked a number with a string , it should return sum.
  var result = sum ("1", "1");
  if (result !== 2) throw new Error(' Expected sum ("1" , "1" ) to be 2 . Recieved: ' + result);

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
