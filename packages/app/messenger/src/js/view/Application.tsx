import React from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './app/AppContainer';

// Определение свойств приложения
interface ApplicationProps {
  rootElement: HTMLElement;
}

class Application extends React.Component<ApplicationProps> {
  componentDidMount() {
    this.start();
  }

  start() {
    const root = createRoot(this.props.rootElement);
    root.render(<AppContainer />);
  }

  render() {
    return (
      <div>
        <h1>Messenger</h1>
        <div id="appContainer"></div>
      </div>
    );
  }
}

export default Application;