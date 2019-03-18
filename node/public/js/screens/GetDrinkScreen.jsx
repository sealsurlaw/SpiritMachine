class GetDrinkScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pourType: "ALCOHOL"
        }
    }

    componentWillMount() {
        fetch('/pour/alcohol/' + this.props.app.state.selectedCocktail.alcohol.container)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    pourType: "MIXER",
                });
                this.pourMixer();
            });
    }

    pourMixer() {
        fetch('/pour/mixer/' + this.props.app.state.selectedCocktail.mixer.container)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    pourType: "DONE",
                });
                setTimeout(() => this.props.app.setState({ number: 0 }), 5000);
            });
    }

    restartApp = () => {

    }

    render() {
        let { name, image, alcohol, mixer } = this.props.app.state.selectedCocktail;
        let { selectedCocktail } = this.props.app.state;
        let pouringMessage = '';
        let loadingGif;

        if (this.props.app.state.selectedCocktail.image == null) {
            image = '/images/noimage.png';
        }

        if (this.state.pourType == 'ALCOHOL') {
            pouringMessage = 'Please wait. Dispensing a shot of ' + alcohol.name + '...';
        }
        else if (this.state.pourType == 'MIXER') {
            pouringMessage = 'Please wait. Topping up with ' + mixer.name + '...';
        }
        else if (this.state.pourType == 'DONE') {
            pouringMessage = 'Enjoy your drink!';
        }

        if (this.state.pourType == 'ALCOHOL' ||
            this.state.pourType == 'MIXER') {
            loadingGif =
                <div className="row">
                    <div className="col-sm">
                        <img src='/images/loading.gif' alt="Loading" className="image-center mt-2" />
                    </div>
                </div>
        }
        else {
            loadingGif = null;
        }


        return (
            <div className="container border m-3 p-2 mr-auto ml-auto rounded text-dark">
                <div className="row justify-content-center">
                    <div className="col-sm">
                        <img src={image} alt="Drink image" className="image-alcohol image-center rounded-circle" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm text-center h1 font-italic mt-2">{name}</div>
                </div>
                <hr className="w-75 border" />
                <div className="row">
                    <div className="col-sm text-center h1">
                        {pouringMessage}
                    </div>
                </div>
                {loadingGif}
            </div>
        );
    }
}