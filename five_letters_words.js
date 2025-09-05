const fiveLetterWords = [
    "SEVEN",
    // "APPLE",
    // "HOUSE",
    // "TABLE",
    // "BREAD",
    // "CHAIR",
    // "MUSIC",
    // "PLANT",
    // "RIVER",
    // "TEETH",
    // "BEACH",
    // "CLOUD",
    // "DANCE",
    // "EARTH",
    // "FAIRY",
    // "GHOST",
    // "HONEY",
    // "IMAGE",
    // "JELLY",
    // "KNEES",
    // "LEMON",
    // "MANGO",
    // "NOBLE",
    // "OCEAN",
    // "PIANO",
    // "QUEEN",
    // "RADIO",
    // "SUNNY",
    // "TIGER",
    // "UNCLE",
    // "VIRUS",
    // "WHEAT",
    // "XENON",
    // "YOUNG",
    // "ZEBRA"
];

async function loadFiveLetterWords() {
    const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/?letters=5', {
      headers: {
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
        'X-RapidAPI-Key': 'YOUR_API_KEY'
      }
    });
  
    if (response.ok) {
      const data = await response.json();
      const words = data.results.data;
      console.log(words);
    } else {
      console.error('Failed to fetch the words.');
    }
  }
  
loadFiveLetterWords();

  
  
