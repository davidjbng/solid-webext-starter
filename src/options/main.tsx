import { render } from 'solid-js/web';

const element = document.getElementById('app');
if (!element) {
  throw new Error('No app element found');
}

render(() => <h1>Extension Options</h1>, element);
