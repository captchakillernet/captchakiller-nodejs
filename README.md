# captchakiller-nodejs

## Installation
`npm install captchakiller`

## Usage
#### Get balance example
```
const { CaptchaKiller } = require('captchakiller');

(async () => {
  const captchaKiller = new CaptchaKiller("API_KEY"); // Optionally add a partnerId and or timeout.

  try {
    const balance = await captchaKiller.getBalance();
    console.log(`Your balance is: ${balance}`);

  } catch (error) {
    console.error(error.message);
  }
})();
```
#### Solve Recaptcha V2
```
const { CaptchaKiller } = require('captchakiller');

(async () => {
  const captchaKiller = new CaptchaKiller("API_KEY"); // Optionally add a partnerId and or timeout.

  try {
    const result = await captchaKiller.solveRecaptchaV2("6LfW6wATAAAAAHLqO2pb8bDBahxlMxNdo9g947u9", "https://recaptcha-demo.appspot.com/");
    console.log(`Solution: ${result}`);

  } catch (error) {
    console.error(error.message);
  }
})();
```
#### Solve Recaptcha V2 Enterprise
```
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
```
#### Solve Recaptcha V3 Low Score
```
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
```
#### Solve Funcaptcha
```
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
```
#### Solve MTCaptcha
```
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
```
