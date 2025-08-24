// Function to get zodiac sign from day and month
function getZodiacSign(day, month) {
  const signs = [
    { sign: "Capricorn", start: [12, 22], end: [1, 19] },
    { sign: "Aquarius", start: [1, 20], end: [2, 18] },
    { sign: "Pisces", start: [2, 19], end: [3, 20] },
    { sign: "Aries", start: [3, 21], end: [4, 19] },
    { sign: "Taurus", start: [4, 20], end: [5, 20] },
    { sign: "Gemini", start: [5, 21], end: [6, 20] },
    { sign: "Cancer", start: [6, 21], end: [7, 22] },
    { sign: "Leo", start: [7, 23], end: [8, 22] },
    { sign: "Virgo", start: [8, 23], end: [9, 22] },
    { sign: "Libra", start: [9, 23], end: [10, 22] },
    { sign: "Scorpio", start: [10, 23], end: [11, 21] },
    { sign: "Sagittarius", start: [11, 22], end: [12, 21] }
  ];

  for (let z of signs) {
    if (
      (month === z.start[0] && day >= z.start[1]) ||
      (month === z.end[0] && day <= z.end[1])
    ) {
      return z.sign;
    }
  }
  return "Unknown";
}

// Horoscope messages (3 per sign)
const horoscopeMessages = {
  Aries: [
    "Take bold action today!",
    "You might meet someone inspiring.",
    "Trust your instincts."
  ],
  Taurus: [
    "Focus on self-care.",
    "A good day to plan finances.",
    "Be patient with loved ones."
  ],
  Gemini: [
    "Try learning something new.",
    "Communication will open doors.",
    "Stay curious."
  ],
  Cancer: [
    "Family brings comfort today.",
    "A quiet moment will give you peace.",
    "Your emotions are your strength."
  ],
  Leo: [
    "You are the center of attention!",
    "Show off your talents.",
    "Your energy will inspire others."
  ],
  Virgo: [
    "Organize your thoughts.",
    "Help someone in need.",
    "Small efforts bring big results."
  ],
  Libra: [
    "Balance is key today.",
    "Connect with friends.",
    "Romance is in the air."
  ],
  Scorpio: [
    "Your passion drives success.",
    "Keep your secrets safe.",
    "Something hidden will be revealed."
  ],
  Sagittarius: [
    "Adventure awaits!",
    "Be open to new experiences.",
    "Laugh more today."
  ],
  Capricorn: [
    "Work hard, but rest too.",
    "You’re closer to your goals.",
    "Discipline pays off."
  ],
  Aquarius: [
    "Your ideas can help others.",
    "Do something unique.",
    "You might surprise yourself."
  ],
  Pisces: [
    "Let your creativity flow.",
    "Dreams hold meaning today.",
    "Go with the flow."
  ]
};

// Show random horoscope
function showHoroscope() {
  const dateInput = document.getElementById("birthdate").value;
  if (!dateInput) {
    alert("Please select your birthdate!");
    return;
  }

  const date = new Date(dateInput);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const sign = getZodiacSign(day, month);
  const messages = horoscopeMessages[sign];
  
  // Pick random message using Math.random()
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];

  document.getElementById("result").innerHTML = `
    <h2>Your Sign: ${sign}</h2>
    <p>${randomMessage}</p>
  `;
}
