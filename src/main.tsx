import { render } from 'solid-js/web';
import App from './App';
import {Router} from 'solid-app-router'
import 'uno.css';

render(() =>
<Router>
<App />
</Router>, document.getElementById('root') as HTMLElement);
