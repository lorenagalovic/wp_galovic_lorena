document.getElementById('checkButton').addEventListener('click', function () {

    const number = parseInt(document.getElementById('numberInput').value, 10);
  
    const resultElement = document.getElementById('result');
  
  
  
    if (isNaN(number)) {
  
      resultElement.textContent = "Molimo unesite ispravan broj.";
  
      resultElement.style.color = "red";
  
    } else if (number > 10) {
  
      resultElement.textContent = "Broj je veći od 10.";
  
      resultElement.style.color = "green";
  
    } else {
  
      resultElement.textContent = "Broj nije veći od 10.";
  
      resultElement.style.color = "blue";
  
    }
  
  });
  
  