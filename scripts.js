function calculagorjeta(event){
  event.preventDefault();
  let conta = document.getElementById ('conta').value;
  let Qual_serv = document.getElementById ('Qual_serv').value;
  let pessoas = document.getElementById ('pessoas').value;

  if (conta == '' || Qual_serv == 0){
    alert('Por favor, preencha os valores');
    return;
  }

   if (pessoas == '' || pessoas <= 1 ) {
      pessoas = 1;
      document.getElementById('cada').style.display = "none";
   } else {
      document.getElementById('cada').style.display = "block";
   }

  let total = (conta * Qual_serv ) / pessoas;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('total').style.display ="block";
}

document.getElementById('total').style.display ="none";
document.getElementById('cada').style.display ="none";
document.getElementById('GorjetasForm').addEventListener('submit', calculagorjeta);