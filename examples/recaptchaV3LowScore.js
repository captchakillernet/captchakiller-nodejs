const { CaptchaKiller } = require('captchakiller');

(async () => {
  const captchaKiller = new CaptchaKiller("API_KEY"); // Optionally add a partnerId and or timeout.

  try {
    const result = await captchaKiller.solveRecaptchaV3LowScore("6LdKlZEpAAAAAAOQjzC2v_d36tWxCl6dWsozdSy9", "https://recaptcha-demo.appspot.com/", "examples/v3scores");
    console.log(`Solution: ${result}`);

  } catch (error) {
    console.error(error.message);
  }
})();
