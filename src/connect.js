import React, {Component} from 'react';
import store from './store'

const connect = (AComponent) => {
    return class Connected extends Component {
      constructor() {
        super();
        this.state = store.getState();
      }
      componentDidMount() {
        store.subscribe(() => this.setState(store.getState()));
      }
      render() {
        
        return (
          <AComponent {...this.state} />
        );
      }
    };
  };

  export default connect;