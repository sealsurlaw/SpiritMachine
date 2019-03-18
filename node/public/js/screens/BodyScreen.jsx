class BodyScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cocktails: null,
            cocktail: [],
            selectionPtr: 0,
            selectedAlcohol: 0,
        };

        this.leftHandler = this.leftHandler.bind(this);
        this.rightHandler = this.rightHandler.bind(this);
    }

    componentWillMount() {
        let { machine } = this.props.app.state;

        fetch("/api/machine/" + machine)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                this.setState({
                    cocktails: result,
                    cocktail: result[0].cocktails,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    leftHandler = () => {
        let { cocktail, selectionPtr } = this.state;
        let newPtr;

        // Check if end of list
        if (selectionPtr - 4 < 0) {
            newPtr = (cocktail.length) - (cocktail.length % 4);
            if (newPtr == cocktail.length)
                newPtr = 0
        }
        else {
            newPtr = selectionPtr - 4;
        }

        this.setState({
            selectionPtr: newPtr,
        })
    }

    rightHandler = () => {
        let { cocktail, selectionPtr } = this.state;

        // Check if end of list
        if (selectionPtr + 4 >= cocktail.length) {
            this.setState({
                selectionPtr: 0,
            });
        }
        else {
            this.setState({
                selectionPtr: selectionPtr + 4,
            })
        }
    }

    alcoholSelectorHandler = (index, e) => {
        let { cocktails } = this.state;

        this.setState({
            selectionPtr: 0,
            selectedAlcohol: index,
            cocktail: cocktails[index].cocktails,
        });
    }

    pickedAlcoholHandler = (whichAlcohol, e) => {

    }

    render() {
        let { cocktail, cocktails, selectedAlcohol, selectionPtr } = this.state;
        let { app } = this.props;

        if (cocktails == null) {
            return (
                <div className="alcohol-container container-fluid">
                    <div className="loading text-center align-self-center">
                        Loading...
                    </div>
                </div>
            )
        }
        else {

            const cocktailBox = cocktails.map((currCocktail, index) => {
                if (selectedAlcohol == index) {
                    return (
                        <div className="bg-dark h1 col-sm text-center pt-2 pb-2 m-0 rounded-bottom border border-top-0" key={index}>
                            <a href="#" onClick={(e) => this.alcoholSelectorHandler(index, e)} className="link text-white">
                                {currCocktail.alcohol}
                            </a>
                        </div>
                    );
                }
                else {
                    return (
                        <div className="bg-light h1 col-sm text-center pt-2 pb-2 m-0 rounded-bottom border border-top-0" key={index}>
                            <a href="#" onClick={(e) => this.alcoholSelectorHandler(index, e)} className="link text-dark">
                                {currCocktail.alcohol}
                            </a>
                        </div>
                    );
                }
            });

            const cocktailSelection = cocktail.map((currCocktail, index) => {
                if (cocktail[index] != null &&
                    index >= selectionPtr &&
                    index < selectionPtr + 4) {
                    return (
                        <div className="alcohol col-sm align-self-end" key={index}>
                            <Alcohol
                                cocktail={cocktail[index]}
                                app={app} />
                        </div>
                    );
                }

                //TODO Pad the end of the array with additional components
                // to equal 4 across
                //
                // if (index == this.state.cocktail.length - 1 &&
                //     index >= this.state.selectionPtr &&
                //     index < this.state.selectionPtr + 4) {
                //     for (let i = index; (i < this.state.selectionPtr + 4); ++i)
                //         return (
                //             <div className="alcohol col-sm" key={index}>
                //                 {/* Empty */}
                //             </div>
                //         );
                // }
            });

            return (
                <div className="alcohol-container container-fluid">
                    <div className="row">
                        {cocktailBox}
                    </div>
                    <div className="row mt-4">
                        <div className="chevron col-sm-1 align-self-center">
                            <Chevron side="left" handler={this.leftHandler} />
                        </div>
                        {cocktailSelection}
                        <div className="chevron col-sm-1 align-self-center">
                            <Chevron side="right" handler={this.rightHandler} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class Alcohol extends React.Component {
    constructor(props) {
        super(props);

        let { name, price, image } = this.props.cocktail;

        this.state = {
            image: '/images/noimage.png',
        }

        if (image != null) {
            this.state = {
                image: image,
            }
        }
    }

    componentDidUpdate() {
        let { image } = this.props.cocktail;

        // Force images to update
        if (this.state.image != image &&
            image != null) {

            this.setState({
                image: image,
            });

        }
        if (image == null &&
            this.state.image != '/images/noimage.png') {

            this.setState({
                image: '/images/noimage.png',
            })

        }
    }

    selectHandler = () => {
        let { app, cocktail } = this.props;
        let { name, price } = this.props.cocktail;
        let { image } = this.state;

        console.log(this.props.cocktail);

        // Go to GetDrinkScreen
        app.setState({
            number: 3,
            selectedCocktail: cocktail,
        });
    }

    render() {
        let { name, price } = this.props.cocktail;
        let { image } = this.state;

        return (
            <a href="#" onClick={() => this.selectHandler()} className="link text-dark">
                <h2 className="text-center"><p className="h2 font-italic cocktail-name">{name}</p></h2>
                <img src={image} className="image-center cocktail-image mt-4 rounded" alt="Drink" />
                <h4 className="text-center"><p className="h3 text-muted mt-4">${price.toFixed(2)}</p></h4>
            </a>
        );
    }
}

class Chevron extends React.Component {
    render() {
        let { handler } = this.props;

        let arrow;
        if (this.props.side == "left") {
            arrow = <i onClick={handler} className="chevron fas fa-chevron-circle-left fa-4x"></i>;
        }
        else {
            arrow = <i className="chevron fas fa-chevron-circle-right fa-4x chevron-right"></i>;
        }

        return (
            <a href="#" onClick={handler} className="link text-dark">
                {arrow}
            </a >
        );
    }
}