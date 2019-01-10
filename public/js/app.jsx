const alcohols1 = [
    { name: "Cuba Libre", image: "images/rumandcoke.jpg", price: "$5.00" },
    { name: "Screwdriver", image: "images/screwdriver.jpg", price: "$5.00" },
    { name: "Vodka Cranberry", image: "images/vodkacranberry.jpeg", price: "$4.00" },
    { name: "Old Fashioned", image: "images/oldfashioned.jpg", price: "$7.00" }
];

const alcohols2 = [
    { name: "Red Bull Vodka", image: "images/redbullvodka.jpg", price: "$5.00" },
    { name: "Screwdriver", image: "images/screwdriver.jpg", price: "$5.00" },
    { name: "Vodka Cranberry", image: "images/vodkacranberry.jpeg", price: "$4.00" },
    { name: "Old Fashioned", image: "images/oldfashioned.jpg", price: "$7.00" }
];

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-primary">
                <a class="navbar-brand" href="#"><i class="fas fa-dollar-sign fa-2x"><span class="dollar">22.34</span></i></a>
                <span class="navbar-text">
                    <a class="navbar-brand" href="#"><i class="fas fa-question-circle fa-2x"></i></a>
                </span>
            </nav>
        );
    }
}

class Chevron extends React.Component {
    render() {
        if (this.props.side == "left") {
            return <i class="fas fa-chevron-circle-left fa-4x"></i>;
        }
        else if (this.props.side == "right") {
            return <i class="fas fa-chevron-circle-right fa-4x"></i>;
        }
    }
}

class Alcohol extends React.Component {
    render() {
        return (
            <a href="#" class="drink-link">
                <h2 class="name text-center">{this.props.name}</h2>
                <img src={this.props.src} class="image-center" alt="Drink" />
                <h4 class="price text-center">{this.props.price}</h4>
            </a>
        );
    }
}

class Body extends React.Component {

    render() {
        return (
            <div class="body-container container-fluid">
                <div class="row">
                    <div class="left-chevron col-sm-auto align-self-center">
                        <a href="#" class="chevron-link">
                            <Chevron side="left" />
                        </a>
                    </div>

                    <div class="body-container col-sm">
                        <div class="alcohol-container container-fluid">
                            <div class="alcohol-row row align-items-end">
                                {alcohols1.map(alcohol => (
                                    <div class="drink col-sm">
                                        <Alcohol name={alcohol.name} src={alcohol.image} price={alcohol.price} />
                                    </div>
                                ))}
                            </div>

                            <div class="divider row align-items-center">
                                <div class="col-sm">
                                    <hr />
                                </div>
                            </div>


                            <div class="alcohol-row row align-items-end">
                                {alcohols2.map(alcohol => (
                                    <div class="drink col-sm">
                                        <Alcohol name={alcohol.name} src={alcohol.image} price={alcohol.price} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div class="right-chevron col-sm-auto align-self-center">
                        <a href="#" class="chevron-link">
                            <Chevron side="right" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Body />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));