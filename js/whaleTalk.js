// The translation of English to Whale function.
function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("englishInput").value;
  // Displaying the value
  // alert(inputVal);

  const input = inputVal;
  const vowels = ["a", "e", "i", "o", "u"];
  const resultArray = [];

  for (let i = 0; i < input.length; i++) {
    // console.log('i is ' + i);
    if (input[i] === "e") {
      resultArray.push(input[i]);
    }
    if (input[i] === "u") {
      resultArray.push(input[i]);
    }

    for (let x = 0; x < vowels.length; x++) {
      // console.log('x is ' + x)
      if (input[i] === vowels[x]) {
        // console.log(input[i]);
        resultArray.push(input[i]);
      }
    }
  }

  if (input === "") {
    document.getElementById("translatedText").innerHTML =
      "The whales are waiting to hear from you...";
  } else {
    const resultString = `"${resultArray.join(" ").toUpperCase()}"`;
    document.getElementById("translatedText").innerHTML = resultString;
  }
}

// The event listener to use the enter key to translate the input text
const inputEnter = document.getElementById("englishInput");

inputEnter.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("translate").click();
  }
});
