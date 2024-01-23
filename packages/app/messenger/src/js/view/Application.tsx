import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './app/AppContainer';

// Определение свойств приложения
interface ApplicationProps {
  rootElement: HTMLElement;
}

class Application extends React.Component<ApplicationProps> {
  componentDidMount() {
  }

  start() {
    ReactDOM.render(<AppContainer />, this.props.rootElement);
  }

  render() {
    return (
      <div>
        <h1>Messenger</h1>
        <AppContainer />
      </div>
    );
  }
}

export default Application;

