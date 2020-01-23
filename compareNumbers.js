export default function compareNumbers(userGuess, magicNumber) {
    if (userGuess === magicNumber) {
        return 0;
    } else if (userGuess > magicNumber) {
        return 1;
    } else if (userGuess < magicNumber) {
        return -1;
    }
    // else if (11 <= userGuess >= 15) {
    //     return 0.1;
    // }

}