export function validateEmail(email) {
    //const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailReg = /^\w(\w+|(\.\w)|-\w|_\w)+\w@(\w|-)+(\.\w{2,3})$/
    return emailReg.test(String(email).toLowerCase());
  }