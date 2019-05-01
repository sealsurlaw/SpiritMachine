class RetrievingDataScreen extends React.Component {
    componentDidMount() {
        // console.log(this.props.app.state.nfcData);
        fetch(`/api/wallet/${this.props.app.state.nfcData}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.props.app.setState({
                        money: parseFloat(result.money.substring(1)),
                        number: 2
                    });
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
            <div className="container border rounded m-3 p-4 mr-auto ml-auto text-dark">
                <div className="row">
                    <div className="col-sm align-self-center">
                        <h2 className="text-center h1">Please wait. Retrieving wallet balance...</h2>
                    </div>
                    <div className="col-sm">
                        <img src="images/wallet.gif" className="image-center wallet" />
                    </div>
                </div >
            </div>
        );
    }
}