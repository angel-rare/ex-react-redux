import * as React from 'react';
import { connect } from 'react-redux';
import { incNumber, decNumber, resetNumber } from './actions/action';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<{ number: any, incNumber: any, decNumber: any, resetNumber: any }> {
    render() {
        let { number, incNumber, decNumber, resetNumber} = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <p>{ number }</p>
                    <button onClick={incNumber}>Increase Number</button>
                    <button onClick={decNumber}>Decrease Number</button>
                    <button onClick={resetNumber}>Reset Number</button>
                </header>
            </div>
        );
    };
}

const mapStateToProps = (state: any) => ({
  number: state.num.value
});

const mapDispatchToProps = (dispatch: any) => ({
    incNumber: () => dispatch(incNumber(10)),
    decNumber: () => dispatch(decNumber(10)),
    resetNumber: () => dispatch(resetNumber()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
