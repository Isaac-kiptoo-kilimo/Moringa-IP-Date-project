const form_holder = document.getElementById('form-holder');

const form = document.getElementById('form');
const form_day = document.getElementById('day');
const form_month = document.getElementById('month');
const form_year = document.getElementById('year');

let gender = ''

const results_holder = document.getElementById('results');

const akan_birthday = document.getElementById('akan-birth-day');

const akan_name = document.getElementById('akan-name');

// Male
// Sunday: Kwasi
// Monday: Kwadwo
// Tuesday: Kwabena
// Wednesday: Kwaku
// Thursday: Yaw
// Friday: Kofi
// Saturday: Kwame

const male_akan_names = [
    {
      index: 0,
      day: "Sunday",
      akan: "Kwasi"
    },
    {
      index: 1,
      day: "Monday",
      akan: "Kwadwo"
    },
    {
      index: 2,
      day: "Tuesday",
      akan: "Kwabena"
    },
    {
      index: 3,
      day: "Wednesday",
      akan: "Kwaku"
    },
    {
      index: 4,
      day: "Thursday",
      akan: "Yaw"
    },
    {
      index: 5,
      day: "Friday",
      akan: "Kofi"
    },
    {
      index: 6,
      day: "Saturday",
      akan: "Kwame"
    }
  ]
// Female
// Sunday: Akosua
// Monday: Adwoa
// Tuesday: Abenaa
// Wednesday: Akua
// Thursday: Yaa
// Friday: Afua
// Saturday: Ama

const female_akan_names = [
  {
    index: 0,
    day: "Sunday",
    akan: "Akosua"
  },
  {
    index: 1,
    day: "Monday",
    akan: "Adwoa"
  },
  {
    index: 2,
    day: "Tuesday",
    akan: "Abenaa"
  },
  {
    index: 3,
    day: "Wednesday",
    akan: "Akua"
  },
  {
    index: 4,
    day: "Thursday",
    akan: "Yaa"
  },
  {
    index: 5,
    day: "Friday",
    akan: "Afua"
  },
  {
    index: 6,
    day: "Saturday",
    akan: "Ama"
  }
]
/*

  Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

  CC - is the century digits. For example 1989 has CC = 19
  YY - is the Year digits (1989 has YY = 89)
  MM -  is the Month
  DD - is the Day of the month 
  mod - is the modulus function ( % ) */
  
  const setGender = (_gender) => {
    gender = _gender
  }
  
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
  const day_index = getDayFromInputs(centuryFromYear(form_year.value), get2LastDigitsOfYear(form_year.value), parseInt(form_month.value), parseInt(form_day.value));

  // Now we make a function to get an object based on gender from the array that contains the akan name and day of the week using the index

  const _akan_obj = getDayObjectFromAkanNames(day_index, gender)

  akan_birthday.innerText = _akan_obj.day
  akan_name.innerText = _akan_obj.akan

}


