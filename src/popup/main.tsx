import { render } from 'solid-js/web';
import { TodoList } from './todo-list';

const element = document.getElementById('app');
if (!element) {
  throw new Error('No app element found');
}

render(() => <TodoList />, element);
