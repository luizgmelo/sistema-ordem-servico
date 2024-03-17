const submitButton = document.getElementById("submitButton");

const getCurrentDate = () => {
  const date = new Date()

  let day = date.getDate()
  day = day < 10 ? "0" + day : day
  let month = date.getMonth() + 1
  month = month < 10 ? "0" + month : month 
  let year = date.getFullYear()

  currentDateResult = `${day}/${month}/${year}`

  requestDate.value = currentDateResult
}

getCurrentDate()

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
    location.replace("../sistema-ordem-servico/pdf.html");
  }

  const validateForm = () => {
    if (
      validateClientName(clientName.value) && validatePhoneNumber(phoneNumber.value)
      && validateProblem(problem.value)
    ) {
      saveDataAndRedirect()
    }
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
      return true
    }
  }

  const validatePhoneNumber = (number) => {
    const pattern = /^\([0-9]{2}\)(3[0-9]{3}-[0-9]{4})|(9[0-9]{4}-[0-9]{4})$/
    if (!number) {
      alert("Por favor digite o número de celular do cliente.")
    } else if (!pattern.test(number)) {
      alert("Número de celular é inválido, Por favor verifique o número do cliente. Considere parênteses e traços")
    } else {
      return true
    }
  }

  const validateProblem = (problem) => {
    if (!problem) {
      alert("Por favor digite o problema do cliente.")
    } else if (problem.length < 15) {
      alert("O problema do cliente deve ter no mínimo 15 caracteres")
    } else {
      return true
    }
  }

  validateForm()
});


