document.addEventListener('DOMContentLoaded', function() {
    // Array of hobbies
    const hobbies = ['Reading', 'Cooking', 'Hiking', 'Painting', 'Gardening'];
  
    // Get the hobbies list element
    const hobbiesList = document.getElementById('hobbies-list');
  
    // Add hobbies to the list
    hobbies.forEach(hobby => {
      const li = document.createElement('li');
      li.textContent = hobby;
      hobbiesList.appendChild(li);
    });
  });
  