class BodyScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cocktails: null,
            cocktail: [],
        };
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
            return (
                <div className="alcohol-container container-fluid">
                    <div className="row">
                        <div className="chevron col-sm align-self-center">
                            <Chevron side="left" />
                        </div>
                        <div className="alcohol col-sm">
                            <Alcohol
                                name={this.state.cocktail[0].name}
                                src={this.state.cocktail[0].image}
                                price={this.state.cocktail[0].price} />
                        </div>
                        <div className="alcohol col-sm">
                            <Alcohol
                                name={this.state.cocktail[1].name}
                                src={this.state.cocktail[1].image}
                                price={this.state.cocktail[1].price} />
                        </div>
                        <div className="alcohol col-sm">
                            <Alcohol
                                name={this.state.cocktail[2].name}
                                src={this.state.cocktail[2].image}
                                price={this.state.cocktail[2].price} />
                        </div>
                        <div className="chevron col-sm align-self-center">
                            <Chevron side="right" />
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
        if (this.props.side == "left") {
            return <i className="fas fa-chevron-circle-left fa-4x"></i>;
        }
        else if (this.props.side == "right") {
            return <i className="fas fa-chevron-circle-right fa-4x chevron-right"></i>;
        }
    }
}

// class BodyScreen extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             alcohol1: alcohols1,
//             alcohol2: alcohols2,
//         };
//     }

//     scrollHandler(body, direction) {
//         const temp1 = alcohols1;
//         const temp2 = alcohols2;
//         alcohols1 = alcohols3;
//         alcohols2 = alcohols4;
//         alcohols3 = temp1;
//         alcohols4 = temp2;
//         body.setState({ alcohol1: alcohols1, alcohol2: alcohols2 })
//     }

//     alcoholSelectHandler(app, alcohol) {
//         app.setState({
//             alcohol: alcohol,
//             number: 3
//         });
//     }

//     render() {
//         return (
//             <div className="body-container container-fluid">
//                 <div className="row">
//                     <div className="left-chevron col-sm-auto align-self-center">
//                         <a onClick={(e) => this.scrollHandler(this, "left")} className="chevron-link">
//                             <Chevron side="left" />
//                         </a>
//                     </div>

//                     <div className="body-container col-sm">
//                         <div className="alcohol-container container-fluid">
//                             <div className="alcohol-row row align-items-end">
//                                 {this.state.alcohol1.map((alcohol, index) => (
//                                     <div className="drink col-sm" key={index}>
//                                         <a onClick={(e) => this.alcoholSelectHandler(this.props.app, alcohol)} className="chevron-link">
//                                             <Alcohol name={alcohol.name} src={alcohol.image} price={alcohol.price} />
//                                         </a>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="divider row align-items-center">
//                                 <div className="col-sm">
//                                     <hr />
//                                 </div>
//                             </div>


//                             <div className="alcohol-row row align-items-end">
//                                 {this.state.alcohol2.map((alcohol, index) => (
//                                     <div className="drink col-sm" key={index + 4}>
//                                         <a onClick={(e) => this.alcoholSelectHandler(this.props.app, alcohol)} className="chevron-link">
//                                             <Alcohol name={alcohol.name} src={alcohol.image} price={alcohol.price} />
//                                         </a>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="right-chevron col-sm-auto align-self-center">
//                         <a onClick={(e) => this.scrollHandler(this, "right")} className="chevron-link">
//                             <Chevron side="right" />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// class Alcohol extends React.Component {
//     render() {
//         return (
//             <a href="#" className="drink-link">
//                 <h2 className="name text-center">{this.props.name}</h2>
//                 <img src={this.props.src} className="image-alcohol image-center" alt="Drink" />
//                 <h4 className="price text-center">{this.props.price}</h4>
//             </a>
//         );
//     }
// }

// class Chevron extends React.Component {
//     render() {
//         if (this.props.side == "left") {
//             return <i className="fas fa-chevron-circle-left fa-4x"></i>;
//         }
//         else if (this.props.side == "right") {
//             return <i className="fas fa-chevron-circle-right fa-4x"></i>;
//         }
//     }
// }