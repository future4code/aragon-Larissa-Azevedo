function validateInput(input) {
    const result = {
        isError: false,
        errors: []
    }

    const keys = Object.keys(input)

    for (let key of keys){
        if(input[key] === undefined){
            result.isError = true,
            result.errors.push(key)
        }
    }   
 return result
}

console.log(validateInput({id: 1, name: undefined, email: undefined }))
console.log(validateInput({id: 1, name: "astrodev", email: "astrodev@gmail.com" }))
console.log(validateInput({ }))