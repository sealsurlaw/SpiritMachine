class RetrievingDataScreen extends React.Component {
    componentDidMount() {
        console.log(this.props.app.state.nfcData);
        fetch("/api/nfc/money/" + this.props.app.state.nfcData)
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.app.setState({
                        money: result.money,
                        number: 2
                    })
                },
                (error) => {
                    console.log(error)
                }
            );
    }

    tappedHandler(app) {
        app.setState({ number: 1 })
    }

    render() {
        return (
            <div className="tap-box">
                <h2 className="text-center">Please wait. Retrieving wallet balance...</h2>
                <img src="images/wallet.gif" className="image-center wallet" />
            </div >
        );
    }
}