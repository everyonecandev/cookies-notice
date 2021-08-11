class CookieBanner {
  constructor(key, params = {}) {
    // set the hostname
    this.hostname = params.hostname
      ? params.hostname
      : window.location.hostname;
    // set the title
    this.title = params.title
      ? params.title
      : `By using ${this.hostname}, you agree to our`;

    // set the cookie URL
    this.cookieUrl = params.cookieUrl
      ? params.cookieUrl
      : window.location.origin + "/privacy-policy/";
    // set the cookie banner css class
    this.cssClass = params.cssClass ? params.cssClass : "cookies-notice";
    // banner element
    this.banner = null;
    // check the local storage
    this.cookieAcceptedKey = key;
  }

  show() {
    this.banner = document.createElement("div");
    this.banner.classList.add(this.cssClass);
    this.banner.innerHTML = `<p>${this.title} <a target="_blank" href="${this.cookieUrl}">Cookie Policy</a></p><button>Accept</button>`;
    document.body.appendChild(this.banner);

    // wire up the event to the button in the banner
    const btn = this.banner.querySelector("button");
    btn.addEventListener("click", () => {
      // save the acceptance to the local storage
      window.localStorage.setItem(this.cookieAcceptedKey, Date.now());
      // remove the event listener
      btn.removeEventListener("click", this.acceptCookie);
      // remove the cookie banner
      document.body.removeChild(this.banner);
    });

    return this;
  }

  requestForCookiePermission() {
    this.show();
  }
}
