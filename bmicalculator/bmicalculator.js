const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    // Show the results
    // results.innerHTML = `<span>${BMI}</span>`;

    if (BMI <= 18.6) {
      results.innerHTML = `<span>${BMI}<br> Concern: You are Under Weight</span>`;
      results.style.color = 'red';
    }

    if (BMI > 18.6 && BMI <= 24.9) {
      results.innerHTML = `<span>${BMI} <br> Bravo: You are Healthy </span>`;
      results.style.color = 'blue';
    }

    if (BMI > 24.9) {
      results.innerHTML = `<span>${BMI} <br> Workout: You are Over Weight</span>`;
      results.style.color = 'red';
    }
  }
});
