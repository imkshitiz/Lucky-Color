const zodiac = document.getElementById("zodiac");
const body = document.body;
const changebackground = () => {

  switch (zodiac.value) {
    case "Aries":
      body.style.backgroundColor = "#fc0303";
      break;
    case "Tarus":
      body.style.backgroundColor = "green";
      break;
    case "Gemini":
      body.style.backgroundColor = "yellow";
      break;
    case "Cancer":
      body.style.backgroundColor = "silver";
      break;
    case "Leo":
      body.style.backgroundColor = "gold";
      break;
    case "Virgo":
      body.style.backgroundColor = "navyblue";
      break;
    case "Libra":
      body.style.backgroundColor = "pink";
      break;
    case "Scorpio":
      body.style.backgroundColor = "maroon";
      break;
    case "Sagittarius":
      body.style.backgroundColor = "purple";
      break;
    case "Capricorn":
      body.style.backgroundColor = "brown";
      break;
    case "Aquarius":
      body.style.backgroundColor = "skyblue";
      break;
      case "pisces":
      body.style.backgroundColor = "seagreen";
      break;

      default:
        body.style.backgroundColor="#fff"
        break;
  }
};

