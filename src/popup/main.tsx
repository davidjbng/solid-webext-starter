import { render } from 'solid-js/web';
import { Popup } from './popup';

const element = document.getElementById('app');
if (!element) {
  throw new Error('No app element found');
}

render(() => <Popup />, element);
