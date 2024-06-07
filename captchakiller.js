"use strict";

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


class CaptchaKiller {
    constructor(apiKey = process.env.CK_API_KEY, partnerId = null, timeout = 30) {
      this.apiKey = apiKey;
      this.partnerId = partnerId;
      this.timeout = timeout * 1000; // Convert seconds to milliseconds
      this.baseUrl = 'https://api.captchakiller.net/c';
      this.userManagerBaseUrl = 'https://api.captchakiller.net/u';
    }
  
    async getBalance() {
      try {
        const url = new URL(`${this.userManagerBaseUrl}/balance`);

        const headers = new Headers({
          'x-api-key': this.apiKey
        });

        const response = await fetch(url, { timeout: this.timeout, headers: headers });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(`Error: ${data.errorId} - ${data.error}`);
        }
        return data.balance;
      } catch (error) {
        throw new Error(`Error fetching balance: ${error.message}`);
      }
    }
  
    async solveRecaptchaV2(sitekey, site, payload = null, gdomain = false, invisible = false, proxytype = null, proxyaddress = null, proxyport = null, proxyuser = null, proxypass = null) {
      try {
        const params = new URLSearchParams();

        params.append('sitekey', sitekey);
        params.append('site', site);
        
        // Optional params
        if (gdomain) {
          params.append('gdomain', gdomain);
        }

        if (invisible) {
          params.append('invisible', invisible);
        }

        if (payload) {
          params.append('payload', payload);
        }

        if (proxytype) {
          params.append('proxytype', proxytype);
        }

        if (proxyaddress) {
          params.append('proxyaddress', proxyaddress);
        }

        if (proxyport) {
          params.append('proxyport', proxyport);
        }

        if (proxyuser) {
          params.append('proxyuser', proxyuser);
        }

        if (proxypass) {
          params.append('proxypass', proxypass);
        }

        const url = new URL(`${this.baseUrl}/solvev2?${params.toString()}`);

        const headers = new Headers();

        headers.append('x-api-key', this.apiKey);

        if (this.partnerId) {
          headers.append('x-partner-id', this.partnerId);
        }

        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
          timeout: this.timeout
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(`Error: ${data.errorId} - ${data.error}`);
        }
        return data.result;
      } catch (error) {
        throw new Error(`Error solving captcha: ${error.message}`);
      }
    }

    async solveRecaptchaV2Enterprise(sitekey, site, action = null, payload = null, gdomain = false, invisible = false, proxytype = null, proxyaddress = null, proxyport = null, proxyuser = null, proxypass = null) {
      try {
        const params = new URLSearchParams();

        params.append('sitekey', sitekey);
        params.append('site', site);
        
        // Optional params
        if (gdomain) {
          params.append('gdomain', gdomain);
        }

        if (action) {
          params.append('action', action);
        }

        if (invisible) {
          params.append('invisible', invisible);
        }

        if (payload) {
          params.append('payload', payload);
        }

        if (proxytype) {
          params.append('proxytype', proxytype);
        }

        if (proxyaddress) {
          params.append('proxyaddress', proxyaddress);
        }

        if (proxyport) {
          params.append('proxyport', proxyport);
        }

        if (proxyuser) {
          params.append('proxyuser', proxyuser);
        }

        if (proxypass) {
          params.append('proxypass', proxypass);
        }

        const url = new URL(`${this.baseUrl}/solvev2e?${params.toString()}`);

        const headers = new Headers();

        headers.append('x-api-key', this.apiKey);

        if (this.partnerId) {
          headers.append('x-partner-id', this.partnerId);
        }

        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
          timeout: this.timeout
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(`Error: ${data.errorId} - ${data.error}`);
        }
        return data.result;
      } catch (error) {
        throw new Error(`Error solving captcha: ${error.message}`);
      }
    }

    async solveRecaptchaV3LowScore(sitekey, site, action, gdomain = false) {
      try {
        const params = new URLSearchParams();

        params.append('sitekey', sitekey);
        params.append('site', site);
        
        // Optional params
        if (gdomain) {
          params.append('gdomain', gdomain);
        }

        if (action) {
          params.append('action', action);
        }

        const url = new URL(`${this.baseUrl}/solvev3ls?${params.toString()}`);

        const headers = new Headers();

        headers.append('x-api-key', this.apiKey);

        if (this.partnerId) {
          headers.append('x-partner-id', this.partnerId);
        }

        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
          timeout: this.timeout
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(`Error: ${data.errorId} - ${data.error}`);
        }
        return data.result;
      } catch (error) {
        throw new Error(`Error solving captcha: ${error.message}`);
      }
    }

    async solveFuncaptcha(publickey, site, surl = null, datatype = null, _data = null) {
      try {
        const params = new URLSearchParams();

        params.append('publickey', publickey);
        params.append('site', site);
        
        // Optional params
        if (surl) {
          params.append('surl', surl);
        }

        if (datatype) {
          params.append('datatype', datatype);
        }

        if (_data) {
          params.append('data', _data);
        }

        const url = new URL(`${this.baseUrl}/solveark?${params.toString()}`);

        const headers = new Headers();

        headers.append('x-api-key', this.apiKey);

        if (this.partnerId) {
          headers.append('x-partner-id', this.partnerId);
        }

        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
          timeout: this.timeout
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(`Error: ${data.errorId} - ${data.error}`);
        }
        return data.result;
      } catch (error) {
        throw new Error(`Error solving captcha: ${error.message}`);
      }
    }

    async solveMTCaptcha(sitekey, site, action = null) {
      try {
        const params = new URLSearchParams();

        params.append('sitekey', sitekey);
        params.append('site', site);
        
        // Optional params

        if (action) {
          params.append('action', action);
        }

        const url = new URL(`${this.baseUrl}/solvemtc?${params.toString()}`);

        const headers = new Headers();

        headers.append('x-api-key', this.apiKey);

        if (this.partnerId) {
          headers.append('x-partner-id', this.partnerId);
        }

        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
          timeout: this.timeout
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(`Error: ${data.errorId} - ${data.error}`);
        }
        return data.result;
      } catch (error) {
        throw new Error(`Error solving captcha: ${error.message}`);
      }
    }
  }
  
  module.exports = { CaptchaKiller };