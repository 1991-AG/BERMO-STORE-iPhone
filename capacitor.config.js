const { CapacitorConfig } = require('@capacitor/cli');

const config = {
  appId: 'com.bermostore.app',
  appName: 'BERMO STORE',
  webDir: 'www',
  server: {
    // This URL is replaced after you paste your current Google Apps Script Web App URL.
    url: 'https://script.google.com/macros/s/AKfycbwTIyM5GwW-2lXPT8RT6DmGHvUJABWnly8AitMVQQEUcsEztR0kSYMF0KhAs0LUzuid/exec',
    cleartext: false,
    androidScheme: 'https'
  },
  ios: {
    contentInset: 'automatic'
  }
};

module.exports = config;
