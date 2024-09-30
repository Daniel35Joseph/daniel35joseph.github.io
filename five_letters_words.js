const fiveLetterWords = [
    "APPLE",
    "HOUSE",
    "TABLE",
    "BREAD",
    "CHAIR",
    "MUSIC",
    "PLANT",
    "RIVER",
    "TEETH",
    "BEACH",
    "CLOUD",
    "DANCE",
    "EARTH",
    "FAIRY",
    "GHOST",
    "HONEY",
    "IMAGE",
    "JELLY",
    "KNEES",
    "LEMON",
    "MANGO",
    "NOBLE",
    "OCEAN",
    "PIANO",
    "QUEEN",
    "RADIO",
    "SUNNY",
    "TIGER",
    "UNCLE",
    "VIRUS",
    "WHEAT",
    "XENON",
    "YOUNG",
    "ZEBRA",
    "BEAST",
    "POWER"
];

fetch('wordsapi_sample.json')
  .then(response => response.json())
  .then(data => {
    // You can work with the JSON data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch or parsing
    console.error('Error:', error);
  });

  
  