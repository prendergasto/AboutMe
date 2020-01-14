export default isYes;

function isYes(str) {
    if (str.toLowerCase() === 'yes' || str.toLowerCase() === 'y' || str.toLowerCase() === 'yeah' || str.toLowerCase() === 'ya') return true;
    else return false;
}
