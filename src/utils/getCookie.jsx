function getCookie(name) {
    // Construct a string to search for the cookie
    const nameEQ = name + "=";
    // Split the cookie string into individual cookies
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        // Get the current cookie and remove any leading spaces
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        // If the cookie's name matches, return its value
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    // If the cookie is not found, return null
    return null;
}

export default getCookie