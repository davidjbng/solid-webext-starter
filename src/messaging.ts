import browser from 'webextension-polyfill';

export function onMessage(id: string, callback: OnMessageCallback) {
  console.log('Registering message listener:', id);
  browser.runtime.onMessage.addListener((m, sender) => {
    if (m.id === id) {
      callback({ data: m.data, sender });
    }
  });
}
type OnMessageCallback = (message: {
  data: any;
  sender: browser.Runtime.MessageSender;
}) => void;

export function sendMessage(id: string, data: any) {
  console.log('Sending message:', id);
  browser.runtime.sendMessage(id, data);
}

export function sendTabMessage(tab: number, data: any) {
  console.log('Sending tab message:', tab);
  browser.tabs.sendMessage(tab, data);
}
