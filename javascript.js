const ageForm = document.getElementById('ageForm');
const birthDateInput = document.getElementById('birthDate');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn
.addEventListener('click', (e) => {
  e.preventDefault();
  const birthDate = new Date(birthDateInput.value);
  let age = new Date().getFullYear() - birthDate.getFullYear();
  const monthDiff = new Date().getMonth() - birthDate.getMonth();
  const nextBirthday = new Date(new Date().getFullYear(), birthDate.getMonth(), birthDate.getDate());
  
  if (nextBirthday < new Date()) { nextBirthday.setFullYear(new Date().getFullYear() + 1);}

  if ( monthDiff < 0 || (monthDiff === 0 && new Date().getDate() < birthDate.getDate()))
    {
      age--;
    }

  const daysLived = Math.floor((new Date() - birthDate) / (1000 * 60 * 60 * 24));

  if (birthDateInput.value === '') {
    alert('Please enter your birth date.');
    return;
  }
  
  else if (birthDate > new Date()) {
    alert('Please enter a valid birth date.');
    return;
  }

  resultDiv.innerHTML = `Your age is ${age} years.<br><br>
  you have lived ${daysLived} days.<br><br>
  Your next birthday is on ${nextBirthday.toDateString()}.`;
  resultDiv.classList.add('results');
});