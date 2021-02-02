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
  let passenger
  // let passengerName
  // let passengerPhoneNumber
  // let numberOfPassengers
  // let PickupAddressLine1
  // let PickupAddressLine2
  // let DropoffAddressLine1
  // let DropoffAddressLine2
  
  for(let i=0; i<json.length; i++) {
  let ride = json[i]
  let outputElement = document.querySelector('.rides')
  // console.log(ride)
    
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
  
  outputElement.insertAdjacentHTML("beforeend",
  `<div class="border-4 border-gray-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">${passenger.passengerDetails.first} ${passenger.passengerDetails.last}</h2>
      <p class="font-bold text-gray-600">${passenger.passengerDetails.phoneNumber}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
        ${passenger.numberOfPassengers} passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${passenger.pickupLocation.address}</p>
      <p>${passenger.pickupLocation.city} ${passenger.pickupLocation.state} ${passenger.pickupLocation.zip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${passenger.dropoffLocation.address}</p>
      <p>${passenger.dropoffLocation.city} ${passenger.dropoffLocation.state} ${passenger.dropoffLocation.zip}</p>
    </div>
  </div>
</div>`
  )

  }

  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

