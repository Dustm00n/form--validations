let PaymentForm = document.querySelector(#PaymentForm);

PaymentForm.addEvenlistener("submit",(e)=>{
    e.preventdefault();



    let solonumeros = /^[0-9]$/;
    let checkCVC= /^[0-9]{3}$/;
    let letras = /^[a-zA-Z/s]+$/;


    const form = e.target;   


    if(form.Card.value ==="" || !solonumeros.test(form.Card.value)){
        alert("por favor verifique el numero de la tarjeta...:)")
    }

    if(form.CVC.value ==="" ||  !checkCVC.test(form.CVC.value)){
        alert("por favor verifique el numero de seguridad (CVC)")

    }
    
})