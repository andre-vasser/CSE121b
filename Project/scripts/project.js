{
    "HeroesName": "Super hero",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Thor",
        "age": 1,500,
        "secretIdentity": "Dr. Donald Blake",
        "powers": ["Strenght", "Immortal", "Lightning"]
      },
      {
        "name": "Superman",
        "age": 30,
        "secretIdentity": "Clark kent",
        "powers": [
          "Million ton punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Saitama",
        "age": 25,
        "secretIdentity": "Unknown",
        "powers": [
          "strenght",
          "speed",
          "stamina",
          "durability",
          
        ]
      }
    ]
    // Fetch data from an API
fetch('https://wallpaperaccess.com/one-punch-man-saitama')
.then(response => response.json())
.then(data => {
  // Manipulate the DOM or apply styles based on the fetched data
  const dataContainer = document.getElementById('data-container');
  dataContainer.innerHTML = '';

  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item.title;
    dataContainer.appendChild(div);
  });
})
.catch(error => console.error('Error fetching data:', error));
  }