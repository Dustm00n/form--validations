let PaymentForm = document.querySelector("#PaymentForm");

PaymentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let hola = true;

  alert("procesando formulario....");

  let solonumeros = /^5432 [0-9]{4} [0-9]{4} [0-9]+$/;
  let checkCVC = /^[0-9]{3}$/;
  let letras = /^[a-zA-Z/s]+$/;
  let Amount = /^[0-9]+$/;


  const form = e.target;

  if (form.Card.value === "" || !solonumeros.test(form.Card.value)) {
    alert("por favor verifique el numero de la tarjeta...:)");
    hola = false;
  }

  if (form.CVC.value === "" || !checkCVC.test(form.CVC.value)) {
    alert("por favor verifique el numero de seguridad (CVC)");
    hola = false;
  }
  
  if(form.Amount.value === "" || !Amount.test(form.Amount.value)) {
    alert("por favor confirme su monto.. :)")
    hola = false
  }

  if(form.FirtsName.value === "" || !letras.test(form.FirtsName.value)){
      alert("complete su nombre por favor.")
      hola = false
  }

  if(form.LastName.value === "" || !letras.test(form.LastName.value)){
    alert("complete con su appellido.")
    hola = false
}

if(form.PostalCode.value === "" || !solonumeros.test(form.PostalCode.value)){
    alert("Por favor Ingrese su codigo postal")
    hola = false
}

if(form.City.value ==="" || !letras.test(form.City.value)){
    alert("Inngrese su ciudad")
    hola = false
}




});
