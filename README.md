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
