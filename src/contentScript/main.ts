import browser from 'webextension-polyfill';

console.log('Content script loaded');

browser.runtime.onMessage.addListener((message, sender) => {
  console.log('Revieved message from sender: ', sender);
  console.log(`Hello, ${message.data}`);
});
