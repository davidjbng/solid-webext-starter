import { createResource } from 'solid-js';
import { sendTabMessage } from '../messaging';
import browser, { Tabs } from 'webextension-polyfill';

export function Popup() {
  const [currentTab] = currentTabResource();
  return (
    <div>
      <h1>Popup</h1>
      <button
        onClick={() =>
          sendTabMessage(currentTab()?.id ?? 0, {
            message: 'hello',
            data: 'world',
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
    const tabs = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    return tabs[0];
  });
}
