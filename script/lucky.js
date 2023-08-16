const arrayy = [90];

function generaNumeri() {
  let dettagli = '';
  for (let i = 0; i < arrayy.length; i++) {
    const randomValue = Math.floor(Math.random() * arrayy[i]) + 1;
    dettagli += randomValue + "<br>";
  }
 
  
  setTimeout(() => {
    document.getElementById('ripasso').innerHTML = dettagli;
  }, 500);
}

document.getElementById('generaButton').addEventListener('click', generaNumeri);







