// Random Password Generator

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    const lowercaseChars = "abcdefghijklmnopqrswxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^*()_+";

    let allowedChars = "";
    let passwoed = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars: "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <=0) {
        return `(password length mus be at least 1)`;

    }
    if(allowedChars.length === 0) {
        return `(At least 1 set of character needs to be selected)`;

    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }



    return '';

}

const PasswordLength = 12;
const  includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const  includeSymbols = true;

const password = generatePassword(PasswordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`generated Password: ${password}`);

