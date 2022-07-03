import { onMessage } from '../messaging';

console.log('Content script loaded');

onMessage('hello', (message, sender) => {
  console.log('Revieved message from sender: ', sender);
  console.log(`Hello, ${message.data.name}`);
});
