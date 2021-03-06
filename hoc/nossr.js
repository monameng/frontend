import React, { PureComponent } from 'react';
import { isServerSide } from '@/utils/common';
// import Loading from '@/components/loading';
import CircularProgress from '@material-ui/core/CircularProgress';

export default (WrappedComponent) => {
  return class NossrComponent extends PureComponent {
    state = {
      show: false,
      skip: false,
    }

    componentDidMount() {
      this.change();
    }

    change = () => {
      if (!this.state.skip && !isServerSide()) {
        this.setState({ show: true, skip: true });
      }
    }

    render() {
      const { ...other } = this.props;
      if (!this.state.show) {
        return 'loading';
      }
      return (
        <WrappedComponent {...other} />
      );
    }
  };
};
