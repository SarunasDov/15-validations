class Validation {
    isValidFirstName(firstName) {
        // blogai jei ne stringas
        // blogai jei simboliu kiekis yra maziau nei 2
        // blogai jei pirmoji vardo raide mazoji
        // blogai jei 
        if (!this.isValidMessage(firstName)) {
            return false;
        }
        if (firstName.length < 2) {
            return false;
        }
        if (firstName[0].toLowerCase() === firstName[0]) {
            return false;
        }
        if (firstName.slice(1).toLowerCase() !== firstName.slice(1)) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        // blogai jei ne stringas
        // blogai jei simboliu yra maziau nei 2
        if (!this.isValidMessage(lastName)) {
            return false;
        }
        if (lastName < 2) {
            return false
        }
        return true;
    }


    isValidEmail() {
        return true;
    }

    isValidMessage(message) {
        // blogai jei ne stringas
        // blogai jei tekstas yra tuscias
        if (typeof message !== 'string' || message === '') {
            console.error('ERROR: Message has to be a text string');
            return false;
        }
        return true;
    }


    isValidPhoneNumber(phoneNumber) {
        if (typeof phoneNumber !== 'Number') {

        }
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }
}

module.exports = Validation;