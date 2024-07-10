function getCookie(name) {
    const cookiePattern = new RegExp(`(?:^|; )${encodeURIComponent(name)}=([^;]*)`);
    const match = document.cookie.match(cookiePattern);
    return match ? decodeURIComponent(match[1]) : null;
  }
  
  function getUserFromCookie() {
    const userCookie = getCookie('user');
    if (userCookie) {
      try {
        return JSON.parse(userCookie);
      } catch (error) {
        console.error('Error parsing user cookie:', error);
        return null;
      }
    }
    return null;
  }

  export default getUserFromCookie