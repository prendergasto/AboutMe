export default function compareNumbers(userGuess, magicNumber) {
    if (userGuess === magicNumber) {
        return 0;
    } else if (userGuess < magicNumber) {
        return -1;
    } else if (userGuess > magicNumber) {
        return 1;
    }

}