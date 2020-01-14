module.exports = function parseStringAsArray(arrayAsString) {
    const techsArray = arrayAsString.split(',').map(tech => tech.trim());

    return techsArray;
}