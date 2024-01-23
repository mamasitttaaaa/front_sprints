import Application from './js/view/Application';

const rootElement = document.getElementById('app')!;
const app = new Application({ rootElement });

app.start();
