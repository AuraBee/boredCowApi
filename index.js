/**
Bored API
(URL: https://www.boredapi.com/api/activity)

// */
// document.getElementById("activity-get").addEventListener('click', function() { 
// fetch ("https://www.boredapi.com/api/activity")
//     .then(response => response.json())
//     .then(data =>  { 
        
//         console.log(data);
        
//         document.getElementById("activity-do").textContent = data.activity
      
//     })
// })

document.getElementById("activity-get").addEventListener("click", function() {
    fetch("https://www.boredapi.com/api/activity")
      .then(response => response.json())
      .then(data => {
        document.getElementById("activity").textContent = data.activity
        document.getElementById("title").textContent = " 🌞 🐄 🌈 Happy Cow 🌈 🐄 🌞";
        document.style.color = "pink"
        document.body.classList.add("color-switch")
    })
  })