class Validation {
    isValidFirstName() {
        return true;
    }

    isValidLastName() {
        return true;
    }

    isValidEmail() {
        return true;
    }

    isValidMessage(message) {
        if (typeof message !== 'string' || message === '') {
            return false;
        }
        return true;
    }


    isValidPhoneNumber() {
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