import { onMessage } from '../messaging';

console.log('Content script loaded');

onMessage('hello', (message) => {
  console.log(`Hello, ${message.data.name}`);
});
