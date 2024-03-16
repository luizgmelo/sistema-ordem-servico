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
  const requestDateField = document.getElementById('dateField');
  const brandField = document.getElementById('brandField');
  const problemField = document.getElementById('problemField');
  const techNoteField = document.getElementById('techNoteField');

  const checkIsWhatsApp = document.getElementById('checkIsWhatsApp')
  const checkHasCharger = document.getElementById('checkHasCharger')
  const checkIsPoweringUp = document.getElementById('checkPoweringUp')

  nameField.textContent = clientName;
  phoneField.textContent = `${phoneNumber}`;
  requestDateField.textContent = requestDate;
  brandField.textContent = brand;
  problemField.textContent = problem;
  techNoteField.textContent = techNote;

  if (isWhatsApp === "true") {
    checkIsWhatsApp.checked = true;
  } else {
    checkIsWhatsApp.checked = false;
  }

  if (hasCharger === "true") {
    checkHasCharger.checked = true;
  } else {
    checkHasCharger.checked = false;
  }

  if (isPoweringUp === "true") {
    checkIsPoweringUp.checked = true;
  } else {
    checkIsPoweringUp.checked = false;
  }

  function generatePdf() {
    let element = document.getElementById('pdf');
    let opt = {
      margin: 15,
      filename: 'ordem-de-servico.pdf',
    }
    html2pdf().set(opt).from(element).save();
  }

  const buttonGeneratePdf = document.getElementById("buttonGeneratePdf")
  buttonGeneratePdf.addEventListener('click', generatePdf)

}

