
function hideOrShowResults() {

  if (results_holder.classList.contains('d-none')) {
    results_holder.classList.remove('d-none')
    form_holder.classList.add('d-none')
  }

  else {
    results_holder.classList.add('d-none')
    form_holder.classList.remove('d-none')
    form.reset();
    // We reset gender here too
    gender = ''
  }

}
const getDayObject = () => {

  // We need to make sure that we only pass integers to the function
  
  console.log(centuryFromYear(form_year.value))
  const day_index = getDayFromInputs(20, get2LastDigitsOfYear(form_year.value), parseInt(form_month.value), parseInt(form_day.value));

  // Now we make a function to get an object based on gender from the array that contains the akan name and day of the week using the index

  const _akan_obj = getDayObjectFromAkanNames(day_index, gender)

  akan_birthday.innerText = _akan_obj.day
  akan_name.innerText = _akan_obj.akan

}
// this is where you add event listener

form.addEventListener('submit', (e) => {

  e.preventDefault();

  if (gender === '') {
    alert('Select Gender Please')
    return;
  }
  else if (form_year.value.toString().length < 4) {
    alert('Enter year in four digits')
    return;
  }
  else {
    hideOrShowResults();
    getDayObject()
    return;
  }

})
