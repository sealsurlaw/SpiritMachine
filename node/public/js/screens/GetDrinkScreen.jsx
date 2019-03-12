class GetDrinkScreen extends React.Component {
    componentDidMount() {
        console.log(this.props.app.state.nfcData);
        fetch("/api/nfc/1")
            .then(res => res.json());
        // .then(
        //     (result) => {
        //         this.props.app.setState({
        //             money: result.money,
        //             number: 2
        //         })
        //     },
        //     (error) => {
        //         console.log(error)
        //     }
        // )
    }

    render() {
        return (
            <div className="get-box">
                <h2 className="text-center">Please wait. Making {this.props.app.state.alcohol.name}...</h2>
                <img src={this.props.app.state.alcohol.image} className="image-center" />
            </div>
        );
    }
}