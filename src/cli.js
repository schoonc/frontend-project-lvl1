import readlineSync from 'readline-sync';

const askForName = () => {
  return readlineSync.question('May I have your name? ');
}

export default askForName;
