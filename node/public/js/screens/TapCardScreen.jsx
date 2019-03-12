class TapCardScreen extends React.Component {
    componentWillMount() {
        // fetch("/api/nfc/card")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log(result.data);
        //             this.props.app.setState({
        //                 nfcData: result.data,
        //                 number: 1
        //             })
        //         },
        //         (error) => {
        //             console.log(error)
        //         }
        //     );
        this.props.app.setState({
            nfcData: 'e1586f7d88f8bc5d3d077e223eb4e19f361673a4ce459d9943e85ea8d5a2e217906f',
            number: 1
        });
    }

    tappedHandler(app) {
        app.setState({ number: 1 })
    }

    render() {
        return (
            <div className="tap-box" >
                <h2 className="text-center">Please tap your Spirit Card now</h2>
                <img src="images/nfc.gif" className="image-center" />
            </div >
        );
    }
}