// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid



// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// RegExp test using Arrow function
const testPhoneNumber = phoneNumber => /(^\(\d{3}\)|^\d{3})[-\s]\d{3}[-\s]\d{4}$/.test(phoneNumber);
/* Code explained:
(^\(\d{3}\)|^\d{3}) - Phone number must start with (###) or ### format
[-\s] - the above condition followed by a space or dash
\d{3} - the above condition followed 3 digits
[-\s] - the above condition followed by a space or dash
\d{4}$ - the above condition followed by and end with 4 digits
*/


// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('206-333-4444')); // should return true
console.log(testPhoneNumber('206 333 4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit
console.log(testPhoneNumber('206)-333-4444')); // should return false, only single parenthesis
console.log(testPhoneNumber('(206-333-4444')); // should return false, only single parenthesis


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}

const parsePhoneNumber= phoneNumber => {
    if (testPhoneNumber(phoneNumber)) {
        // Convert string to exclude non-digits characters
        const digitsOnlyStr = phoneNumber.replace(/\W/g, '');
        // console.log("Answer: " + digitsOnlyStr);
        // console.log(Array.from(digitsOnlyStr).splice(0,3).join(''));
        // console.log(Array.from(digitsOnlyStr).splice(3,10).join(''));
        return {areaCode: Array.from(digitsOnlyStr).splice(0,3).join(''), phone: Array.from(digitsOnlyStr).splice(3,10).join('')};
        /* Code explained:
        phoneNumber.replace(/\W/g, '') - replace method will search for regex that are non-digit characters and replace with ''

        areaCode: Array.from(digitsOnlyStr).splice(0,3).join('') - digitsOnlyStr needs to be converted to an array which then can be used with splice to extract the specific digits at specified index positions. Join is then used to convert the array back to a string.

        phone: Array.from(digitsOnlyStr).splice(3,10).join('') - same explanation as above except splice parameters are updated to extract last 7 digits.
        */
    }
}


// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}