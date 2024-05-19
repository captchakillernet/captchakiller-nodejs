const { CaptchaKiller } = require('captchakiller');

(async () => {
  const captchaKiller = new CaptchaKiller("API_KEY"); // Optionally add a partnerId and or timeout.

  try {
    const result = await captchaKiller.solveRecaptchaV2Enterprise("6LfW6wATAAAAAHLqO2pb8bDBahxlMxNdo9g947u9", "https://recaptcha-demo.appspot.com/");
    console.log(`Solution: ${result}`);

  } catch (error) {
    console.error(error.message);
  }
})();
