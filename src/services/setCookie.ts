export function setCookie(name: string, value: any) {
    // Convert the object to a JSON string
    const jsonValue = JSON.stringify(value);
  
    // Encode the string to be safe for use as a cookie value
    const encodedValue = encodeURIComponent(jsonValue);
  
    // Set the cookie
    const expires = '';
    document.cookie = `${name}=${encodedValue};${expires};path=/`;
  }