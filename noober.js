async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // let outputElement = document.querySelector('.rides')

  // function renderRide(ride) {
  //   let outputElement = document.querySelector('.rides')
  //   }
 
  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides   
  for(let i=0; i<json.length; i++) {
  let ride = json[i]
  let outputElement = document.querySelector('.rides')
  console.log(ride)
    
  for (let n=0; n<ride.length; n++) {
    passenger = ride[n]
    if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  outputElement.insertAdjacentHTML('beforeend',`
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>${levelOfService}</span>
  </h1>
  `)
  }

  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

