import React from 'react'
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, long: null, errMsg: '' };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude, long: position.coords.longitude })
            },
            (err) => {
                this.setState({ errMsg: err.message });
            }
        );
    }

    render() {
        const { state } = this;
        if (state.errMsg && !this.state.lat && !this.state.long) {
            return (
                <div>Err: {state.errMsg}</div>
            )
        } else {
            return (
                <div>
                    Lat: {state.lat} ,
                    Long: {state.long}
                </div>
            )
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)