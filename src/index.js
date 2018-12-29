import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, long: null, errMsg: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            (err) => this.setState({ errMsg: err.message })

        );
    }

    renderContent() {
        const { state } = this;
        if (state.errMsg && !this.state.lat && !this.state.long) {
            return (<div>Err: {state.errMsg}</div>
            )
        }
        if (!state.errMsg && this.state.lat && this.state.long) {
            return (
                <SeasonDisplay Lat={state.lat} Long={state.long} />
            )
        }

        return (
            <Spinner message="Accessed locaition loading..." />
        )
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)