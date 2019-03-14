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
        fetch("/api/machine/" + this.props.app.state.machine)
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
        if (this.state.selectionPtr - 4 < 0) {
            let newPtr = (this.state.cocktail.length) - (this.state.cocktail.length % 4);
            this.setState({
                selectionPtr: newPtr,
            });
        }
        else {
            this.setState({
                selectionPtr: this.state.selectionPtr - 4,
            })
        }
    }

    rightHandler = () => {
        if (this.state.selectionPtr + 4 >= this.state.cocktail.length) {
            this.setState({
                selectionPtr: 0,
            });
        }
        else {
            this.setState({
                selectionPtr: this.state.selectionPtr + 4,
            })
        }
    }

    alcoholSelectorHandler = (index, e) => {
        this.setState({
            selectionPtr: 0,
            selectedAlcohol: index,
            cocktail: this.state.cocktails[index].cocktails,
        })
    }

    render() {
        if (this.state.cocktails == null) {
            return (
                <div className="alcohol-container container-fluid">
                    <div className="loading text-center align-self-center">
                        Loading...
                    </div>
                </div>
            )
        }
        else {

            const cocktailBox = this.state.cocktails.map((cocktail, index) => {
                if (this.state.selectedAlcohol == index) {
                    return (
                        <div className="alcohol-filter alcohol-filter-selected col-sm text-center" key={index}>
                            <a href="#" onClick={(e) => this.alcoholSelectorHandler(index, e)} className="alcohol-link-selected">
                                {cocktail.alcohol}
                            </a>
                        </div>
                    );
                }
                else {
                    return (
                        <div className="alcohol-filter col-sm text-center" key={index}>
                            <a href="#" onClick={(e) => this.alcoholSelectorHandler(index, e)} className="alcohol-link">
                                {cocktail.alcohol}
                            </a>
                        </div>
                    );
                }
            });

            const cocktailSelection = this.state.cocktail.map((cocktail, index) => {
                if (this.state.cocktail[index] != null &&
                    index >= this.state.selectionPtr &&
                    index < this.state.selectionPtr + 4) {
                    return (
                        <div className="alcohol col-sm" key={index}>
                            <Alcohol
                                name={cocktail.name}
                                src={cocktail.image}
                                price={cocktail.price} />
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
            }
            );

            return (
                <div className="alcohol-container container-fluid">
                    <div className="row">
                        {cocktailBox}
                    </div>
                    <div className="row">
                        <div className="chevron col-sm align-self-center">
                            <Chevron side="left" handler={this.leftHandler} />
                        </div>
                        {cocktailSelection}
                        <div className="chevron col-sm align-self-center">
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

        this.state = {
            image: '/images/noimage.png',
        }

        if (this.props.src != null) {
            this.state = {
                image: this.props.src,
            }
        }
    }

    render() {
        return (
            <a href="#" className="drink-link">
                <h2 className="name text-center">{this.props.name}</h2>
                <img src={this.state.image} className="image-alcohol image-center" alt="Drink" />
                <h4 className="price text-center">${this.props.price.toFixed(2)}</h4>
            </a>
        );
    }
}

class Chevron extends React.Component {
    render() {
        let arrow;
        if (this.props.side == "left") {
            arrow = <i onClick={this.handler} className="chevron fas fa-chevron-circle-left fa-4x"></i>;
        }
        else {
            arrow = <i className="chevron fas fa-chevron-circle-right fa-4x chevron-right"></i>;
        }

        return (
            <a href="#" onClick={this.props.handler} className="chevron-link">
                {arrow}
            </a >
        );
    }
}
