class ConfirmScreen extends React.Component {
    backHandler = () => {
        let { app } = this.props;

        app.setState({
            number: 2,
        })
    }

    confirmHandler = () => {
        let { app } = this.props;
        let { price } = app.state.selectedCocktail;
        let { money, nfcData } = app.state;

        const newBalance = money - price;

        fetch(`/api/wallet/${nfcData}/${newBalance}`)
            .then(res => res.json())
            .then(() => {
                this.props.app.setState({
                    money: money - price,
                })
                app.setState({
                    number: 4,
                })
            },
                (error) => {
                    console.log(error)
                }
            );
    }

    render() {
        let { name, image, price } = this.props.app.state.selectedCocktail;
        let { money } = this.props.app.state;
        let warningMessage = <div className="row"><div className="col-sm text-center h1 text-danger">You don't have enough money</div></div>
        let confirmButton = <button type="button" className="btn btn-outline-secondary btn-lg btn-block">Confirm</button>

        if (this.props.app.state.selectedCocktail.image == null) {
            image = '/images/noimage.png';
        }

        if (money - price >= 0) {
            warningMessage = null
            confirmButton = <button type="button" onClick={() => this.confirmHandler()} className="btn btn-success btn-lg btn-block">Confirm</button>
        }

        return (
            <div className="container border m-3 p-2 mr-auto ml-auto rounded text-dark">
                <div className="row justify-content-center">
                    <div className="col-sm">
                        <img src={image} alt="Drink image" className="image-alcohol image-center rounded-circle" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm text-center h1 font-italic">{name}</div>
                </div>
                <hr className="w-75 border" />
                <div className="row">
                    <div className="col-sm text-right h2 pr-2 font-weight-bold">Wallet:</div>
                    <div className="col-sm text-left h2 pl-2">${money.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-sm text-right h2 pr-2 font-weight-bold">Price:</div>
                    <div className="col-sm text-left h2 pl-2">-${price.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-sm text-right h2 pr-2 font-weight-bold">Remaining:</div>
                    <div className="col-sm text-left h2 pl-2">${(money - price).toFixed(2)}</div>
                </div>
                {warningMessage}
                <div className="row mt-2">
                    <div className="col-sm">
                        <button type="button" onClick={() => this.backHandler()} className="btn btn-secondary btn-lg btn-block">Back</button>
                    </div>
                    <div className="col-sm">
                        {confirmButton}
                    </div>
                </div>
            </div>
        );
    }
}