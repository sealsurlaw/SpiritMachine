class AppFlow extends React.Component {
    render() {
        if (this.props.number == 0) {
            return (
                <div>
                    <Navbar money={this.props.money} />
                    <TapCard app={this.props.app} />
                </div>
            );
        }
        if (this.props.number == 2) {
            return (
                <div>
                    <Navbar money={this.props.money} />
                    <GetDrink app={this.props.app} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <Navbar money={this.props.money} />
                    <Body app={this.props.app} />
                </div>
            );
        }
    }
}

class Alcohol extends React.Component {
    render() {
        return (
            <a href="#" className="drink-link">
                <h2 className="name text-center">{this.props.name}</h2>
                <img src={this.props.src} className="image-alcohol image-center" alt="Drink" />
                <h4 className="price text-center">{this.props.price}</h4>
            </a>
        );
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alcohol1: alcohols1,
            alcohol2: alcohols2,
        };
    }

    scrollHandler(body, direction) {
        const temp1 = alcohols1;
        const temp2 = alcohols2;
        alcohols1 = alcohols3;
        alcohols2 = alcohols4;
        alcohols3 = temp1;
        alcohols4 = temp2;
        body.setState({ alcohol1: alcohols1, alcohol2: alcohols2 })
    }

    alcoholSelectHandler(app, alcohol) {
        app.setState({
            alcohol: alcohol,
            number: 2
        });
    }

    render() {
        return (
            <div className="body-container container-fluid">
                <div className="row">
                    <div className="left-chevron col-sm-auto align-self-center">
                        <a onClick={(e) => this.scrollHandler(this, "left")} className="chevron-link">
                            <Chevron side="left" />
                        </a>
                    </div>

                    <div className="body-container col-sm">
                        <div className="alcohol-container container-fluid">
                            <div className="alcohol-row row align-items-end">
                                {this.state.alcohol1.map((alcohol, index) => (
                                    <div className="drink col-sm" key={index}>
                                        <a onClick={(e) => this.alcoholSelectHandler(this.props.app, alcohol)} className="chevron-link">
                                            <Alcohol name={alcohol.name} src={alcohol.image} price={alcohol.price} />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="divider row align-items-center">
                                <div className="col-sm">
                                    <hr />
                                </div>
                            </div>


                            <div className="alcohol-row row align-items-end">
                                {this.state.alcohol2.map((alcohol, index) => (
                                    <div className="drink col-sm" key={index + 4}>
                                        <a onClick={(e) => this.alcoholSelectHandler(this.props.app, alcohol)} className="chevron-link">
                                            <Alcohol name={alcohol.name} src={alcohol.image} price={alcohol.price} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="right-chevron col-sm-auto align-self-center">
                        <a onClick={(e) => this.scrollHandler(this, "right")} className="chevron-link">
                            <Chevron side="right" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

class Chevron extends React.Component {
    render() {
        if (this.props.side == "left") {
            return <i className="fas fa-chevron-circle-left fa-4x"></i>;
        }
        else if (this.props.side == "right") {
            return <i className="fas fa-chevron-circle-right fa-4x"></i>;
        }
    }
}

class GetDrink extends React.Component {
    render() {
        return (
            <div className="get-box">
                <h2 className="text-center">Please wait. Making {this.props.app.state.alcohol.name}...</h2>
                <img src={this.props.app.state.alcohol.image} className="image-center" />
            </div>
        );
    }
}

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <i className="fas fa-dollar-sign fa-2x">
                        <span className="dollar">{this.props.money.toFixed(2)}</span>
                    </i>
                </a>
                <span className="navbar-text">
                    <a className="navbar-brand" href="#"><i className="fas fa-question-circle fa-2x"></i></a>
                </span>
            </nav>
        );
    }
}

class TapCard extends React.Component {
    componentDidMount() {
        fetch("/api/nfc")
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.app.setState({
                        money: result.money,
                        number: 1
                    })
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    tappedHandler(app) {
        app.setState({ number: 1 })
    }

    render() {
        return (
            <div className="tap-box">
                <h2 className="text-center">Please tap your Spirit Card now</h2>
                <img src="images/nfc.gif" className="image-center" />
                {/* <button onClick={(e) => this.tappedHandler(this.props.app)}>OK</button> */}
            </div >
        );
    }
}