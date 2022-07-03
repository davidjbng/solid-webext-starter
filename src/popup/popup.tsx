import { createResource } from 'solid-js';
import { sendMessage } from '../messaging';
import browser, { Tabs } from 'webextension-polyfill';

export function Popup() {
  return (
    <div>
      <h1>Popup</h1>
      <button
        onClick={() =>
          sendMessage('hello', {
            name: 'me',
          })
        }
      >
        Greet
      </button>
    </div>
  );
}

function currentTabResource() {
  return createResource<Tabs.Tab>(async () => {
    const [currentTab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    return currentTab;
  });
}
