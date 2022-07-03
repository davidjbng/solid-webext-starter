import browser from 'webextension-polyfill';

export function onMessage(
  id: string,
  callback: (message: any, sender: browser.Runtime.MessageSender) => void
) {
  console.log('Registering message listener:', id);
  browser.runtime.onMessage.addListener((message, sender) => {
    if (message.id === id) {
      callback({ data: message.data }, sender);
    }
  });
}

export async function sendMessage(id: string, data: any) {
  const [currentTab] = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  console.log('Sending tab message:', currentTab);

  browser.tabs.sendMessage(currentTab?.id ?? 0, { id, data });
}
