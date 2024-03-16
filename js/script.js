const submitButton = document.getElementById("submitButton");


submitButton.addEventListener("click", () => {
  const clientName = document.getElementById('clientName');
  const phoneNumber = document.getElementById('phoneNumber');
  const isWhatsApp = document.getElementById('checkWhatsApp');
  const requestDate = document.getElementById('requestDate');
  const brand = document.getElementById('brand');
  const hasCharger = document.getElementById('hasCharger');
  const isPoweringUp = document.getElementById('isPoweringUp');
  const problem = document.getElementById('problem');
  const techNote = document.getElementById('techNote');
  
  const saveDataAndRedirect = () => {
    localStorage.setItem('name', clientName.value);
    localStorage.setItem('phone', phoneNumber.value);
    localStorage.setItem('isWhatsApp', isWhatsApp.checked);
    localStorage.setItem('date', requestDate.value);
    localStorage.setItem('brand', brand.value);
    localStorage.setItem('hasCharger', hasCharger.checked);
    localStorage.setItem('isPoweringUp', isPoweringUp.checked);
    localStorage.setItem('problem', problem.value);
    localStorage.setItem('techNote', techNote.value);
    location.replace("../pdf.html");
  }

  const validateClientName = (name) => {
    const pattern = /^[a-zA-Z\s]+$/;
    if (!name) {
      alert("Por favor digite o nome do cliente.");
    }
    else if (!pattern.test(name)) {
      alert("Nome do cliente é inválido, Por favor verifique o nome do cliente");
    }
    else {
      saveDataAndRedirect()
    }
  }
  // <TO-DO Validar Celular, Data do pedido, marca, defeito e anotação técnica>
  validateClientName(clientName.value)
});


