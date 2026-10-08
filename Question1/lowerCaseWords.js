const mixedArray = ['PIZZA', 10, true, 25, false, 'WINGS']

function lowerCaseWords(arr){
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)){
            reject("Input must be an array")
            return
        }
        const words = arr.filter(item => typeof item === 'string')
        const lowerWords = words.map(word => word.toLowerCase())

        resolve(lowerWords)
    })
}

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))