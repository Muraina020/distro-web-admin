export default class CookieManager {
  static getCookie(cookieName) {
    const b = document.cookie.match(`(^|;)\\s*${cookieName}\\s*=\\s*([^;]+)`);
    return b ? b.pop() : "";
  }

  static setCookie(cookieName, cookieValue, hourToExpire) {
    if (
      hourToExpire !== undefined &&
      hourToExpire !== null &&
      hourToExpire !== 0
    ) {
      const date = new Date();
      date.setTime(date.getTime() + hourToExpire * 60 * 60 * 1000);
      document.cookie = `${cookieName} = ${cookieValue}; expires = ${date.toUTCString()}; path=/;`;
    } else {
      document.cookie = `${cookieName} = ${cookieValue}; path=/;`;
    }
  }

  static deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
