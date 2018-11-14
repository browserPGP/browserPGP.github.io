function isGoodPrngAvailable(){return!("undefined"==typeof window||!window.crypto||!window.crypto.getRandomValues)||"undefined"!=typeof window&&"object"==typeof window.msCrypto&&"function"==typeof window.msCrypto.getRandomValues}
if (!isGoodPrngAvailable()) {
  (alert("A browser that has a Pseudo Random Number Generator is required to use ProtonMail. Please update your browser."),window.location="https://protonmail.com/compatibility");
}
