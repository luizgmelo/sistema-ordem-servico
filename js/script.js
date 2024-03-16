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

  localStorage.setItem('name', clientName.value);
  localStorage.setItem('phone', phoneNumber.value);
  localStorage.setItem('isWhatsApp', isWhatsApp.value);
  localStorage.setItem('date', requestDate.value);
  localStorage.setItem('brand', brand.value);
  localStorage.setItem('hasCharger', hasCharger.value);
  localStorage.setItem('isPoweringUp', isPoweringUp.value);
  localStorage.setItem('problem', problem.value);
  localStorage.setItem('techNote', techNote.value);
  location.replace("../pdf.html");
});


