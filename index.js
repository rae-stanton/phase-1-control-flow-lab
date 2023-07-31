function scuberGreetingForFeet(feet) {
  let message;

  switch (true) {
    case feet <= 400:
      message = "This one is on me!";
      break;
    case feet > 400 && feet <= 2000:
      message = "That will be twenty bucks.";
      break;
    case feet > 2000 && feet <= 2500:
      message = "I will gladly take your thirty bucks.";
      break;
    default:
      message = "No can do.";
  }

  return message;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}
