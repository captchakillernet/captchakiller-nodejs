const { CaptchaKiller } = require('captchakiller');

(async () => {
  const captchaKiller = new CaptchaKiller("API_KEY"); // Optionally add a partnerId and or timeout.

  try {
    const result = await captchaKiller.solveFuncaptcha("DF9C4D87-CB7B-4062-9FEB-BADB6ADA61E6", "https://demo.arkoselabs.com")
    console.log(`Solution: ${result}`);

  } catch (error) {
    console.error(error.message);
  }
})();
