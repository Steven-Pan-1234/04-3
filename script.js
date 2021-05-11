document.getElementById('price').addEventListener('click', tp)
let age = 0
let date = 'monday'
function tp () {
  age = document.getElementById('age').value
  age = parseInt(age)
  date = document.getElementById('date').value
  if ( (date == "monday" || date == "thursday") || (age > 5 && age < 18) ) 
  {
    document.getElementById('...').innerHTML = 'student price'
  }
  else if ( age <= 5) {
    document.getElementById('...').innerHTML = 'free'
  }
  else {
    document.getElementById('...').innerHTML = 'regular price'
  }
  
} 