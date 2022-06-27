import { render } from 'solid-js/web';

import { TodoList } from './todo-list';

const root = document.getElementById('root');
render(() => <TodoList />, root ? root : document.body);
