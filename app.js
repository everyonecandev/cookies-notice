(() => {
  if (window.localStorage) {
    // check if the cookie is accepted
    const cookieAcceptedKey = "cookie_accepted_at";
    const accepted = window.localStorage.getItem(cookieAcceptedKey) != null;
    if (!accepted) {
      // load the js file
      window.addEventListener("load", () => {
        // create the script element
        let script = document.createElement("script");
        // assign an onload event handler
        script.addEventListener("load", () => {
          // show the banner
          new CookieBanner(cookieAcceptedKey).requestForCookiePermission();
        });

        // load the script file
        script.src = "/cookie/js/cookie.js";
        document.body.appendChild(script);
      });
    }
  }
})();
