document.body.onload = () => {

  const clientName = localStorage.getItem('name');
  const phoneNumber = localStorage.getItem('phone');
  const isWhatsApp = localStorage.getItem('isWhatsApp');
  const requestDate = localStorage.getItem('date');
  const brand = localStorage.getItem('brand');
  const hasCharger = localStorage.getItem('hasCharger');
  const isPoweringUp = localStorage.getItem('isPoweringUp');
  const problem = localStorage.getItem('problem');
  const techNote = localStorage.getItem('techNote');

  const nameField = document.getElementById('nameField');
  const phoneField = document.getElementById('phoneField');
  const isWhatsAppField = document.getElementById('isWhatsAppField')
  const requestDateField = document.getElementById('dateField');
  const brandField = document.getElementById('brandField');
  const problemField = document.getElementById('problemField');
  const techNoteField = document.getElementById('techNoteField');

  const checkIsWhatsApp = document.getElementById('checkIsWhatsApp')
  const checkHasCharger = document.getElementById('checkHasCharger')
  const checkIsPoweringUp = document.getElementById('checkPoweringUp')

  nameField.textContent = clientName;
  phoneField.textContent = `${phoneNumber} ${isWhatsApp}`;
  requestDateField.textContent = requestDate;
  brandField.textContent = brand;
  problemField.textContent = problem;
  techNoteField.textContent = techNote;

  if (isWhatsApp) {
    checkIsWhatsApp.checked = true;
  } else {
    checkIsWhatsApp.checked = false;
  }

  if (hasCharger) {
    checkHasCharger.checked = true;
  } else {
    checkHasCharger.checked = false;
  }

  if (isPoweringUp) {
    checkIsPoweringUp.checked = true;
  } else {
    checkIsPoweringUp.checked = false;
  }

}

