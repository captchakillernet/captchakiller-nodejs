const { CaptchaKiller } = require('captchakiller');

(async () => {
  const captchaKiller = new CaptchaKiller("API_KEY"); // Optionally add a partnerId and or timeout.

  try {
    const result = await captchaKiller.solveMTCaptcha("MTPublic-DemoKey9M", "https://service.mtcaptcha.com/");
    console.log(`Solution: ${result}`);

  } catch (error) {
    console.error(error.message);
  }
})();
