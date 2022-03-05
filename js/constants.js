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
  