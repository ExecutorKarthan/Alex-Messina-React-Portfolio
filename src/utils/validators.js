//Create a function to validate a submitted email
export function validateEmail(email) {
    const emailReg = /^\w(\w+|(\.\w)|-\w|_\w)+\w@(\w|-)+(\.\w{2,3})$/
    return emailReg.test(String(email).toLowerCase());
  }