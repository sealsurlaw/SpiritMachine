class TapCardScreen extends React.Component {
    componentWillMount() {
        fetch("/api/wallet/card")
            .then(res => res.json())
            .then((result) => {
                console.log(result.data);
                this.props.app.setState({
                    nfcData: result.data,
                    number: 1
                })
            },
                (error) => {
                    console.log(error)
                }
            );


        // setTimeout(() => {
        //     this.props.app.setState({
        //         nfcData: '6c2ea83f7bf822609781dc7501514b156ae60647',
        //         number: 1
        //     });
        // }, 1000);


    }

    tappedHandler(app) {
        app.setState({ number: 1 })
    }

    refreshHandler(app) {
        fetch("/api/wallet/card")
            .then(res => res.json())
            .then((result) => {
                console.log(result.data);
                this.props.app.setState({
                    nfcData: result.data,
                    number: 1
                })
            },
                (error) => {
                    console.log(error)
                }
            );
    }

    render() {
        return (
            <div className="container border rounded m-3 p-4 mr-auto ml-auto text-dark">
                <div className="row">
                    <div className="col-sm align-self-center">
                        <h2 className="text-center h1">Please tap your Spirit Card now</h2>
                    </div>
                    <div className="col-sm">
                        <img src="images/nfc.gif" className="image-center" />
                    </div>
                </div >
                <div className="row">
                    <div className="col-sm align-self-center">
                        <button type="button" onClick={() => this.refreshHandler()} className="btn btn-secondary btn-lg btn-block">Tap</button>
                    </div>
                </div >
            </div>
        );
    }
}
