var alcohols1 = [
  { name: "Cuba Libre", image: "images/rumandcoke.jpg", price: "$5.00" },
  { name: "Screwdriver", image: "images/screwdriver.jpg", price: "$5.00" },
  { name: "Vodka Cranberry", image: "images/vodkacranberry.jpeg", price: "$4.00" },
  { name: "Old Fashioned", image: "images/oldfashioned.jpg", price: "$7.00" }
];

var alcohols2 = [
  { name: "Red Bull Vodka", image: "images/redbullvodka.jpg", price: "$5.00" },
  { name: "Black Russian", image: "images/blackrussian.jpg", price: "$5.00" },
  { name: "Gimlet", image: "images/gimlet.jpg", price: "$6.00" },
  { name: "Long Island Iced Tea", image: "images/longislandicedtea.jpg", price: "$9.00" }
];

var alcohols3 = [
  { name: "Moscow Mule", image: "images/moscowmule.jpg", price: "$6.00" },
  { name: "Whiskey Sour", image: "images/whiskeysour.jpg", price: "$5.00" },
  { name: "Vodka Cranberry", image: "images/vodkacranberry.jpeg", price: "$84.00" },
  { name: "Old Fashioned", image: "images/oldfashioned.jpg", price: "$70.00" }
];

var alcohols4 = [
  { name: "Red Bull Vodka", image: "images/redbullvodka.jpg", price: "$50.00" },
  { name: "Screwdriver", image: "images/screwdriver.jpg", price: "$85.00" },
  { name: "Vodka Cranberry", image: "images/vodkacranberry.jpeg", price: "$84.00" },
  { name: "Old Fashioned", image: "images/oldfashioned.jpg", price: "$70.00" }
];

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          <i className="fas fa-dollar-sign fa-2x">
            <span className="dollar">22.34</span>
          </i>
        </a>
        <span className="navbar-text">
          <a className="navbar-brand" href="#"><i className="fas fa-question-circle fa-2x"></i></a>
        </span>
      </nav>
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

class Alcohol extends React.Component {
  render() {
    return (
      <a href="#" className="drink-link">
        <h2 className="name text-center">{this.props.name}</h2>
        <img src={this.props.src} className="image-center" alt="Drink" />
        <h4 className="price text-center">{this.props.price}</h4>
      </a>
    );
  }
}

function scrollHandler(body, direction) {
  // if (direction == "left") {
  const temp1 = alcohols1;
  const temp2 = alcohols2;
  alcohols1 = alcohols3;
  alcohols2 = alcohols4;
  alcohols3 = temp1;
  alcohols4 = temp2;
  // }
  // else {
  //     const temp = alcohols1;
  //     alcohols1 = alcohols3;
  //     alcohols3 = alcohols2;
  //     alcohols2 = temp;
  // }
  body.setState({ alcohol1: alcohols1, alcohol2: alcohols2 })
}

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alcohol1: alcohols1,
      alcohol2: alcohols2
    };
  }

  render() {
    return (
      <div className="body-container container-fluid">
        <div className="row">
          <div className="left-chevron col-sm-auto align-self-center">
            <a onClick={(e) => scrollHandler(this, "left")} className="chevron-link">
              <Chevron side="left" />
            </a>
          </div>

          <div className="body-container col-sm">
            <div className="alcohol-container container-fluid">
              <div className="alcohol-row row align-items-end">
                {this.state.alcohol1.map(alcohol => (
                  <div className="drink col-sm">
                    <Alcohol name={alcohol.name} src={alcohol.image} price={alcohol.price} />
                  </div>
                ))}
              </div>

              <div className="divider row align-items-center">
                <div className="col-sm">
                  <hr />
                </div>
              </div>


              <div className="alcohol-row row align-items-end">
                {this.state.alcohol2.map(alcohol => (
                  <div className="drink col-sm">
                    <Alcohol name={alcohol.name} src={alcohol.image} price={alcohol.price} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right-chevron col-sm-auto align-self-center">
            <a onClick={(e) => scrollHandler(this, "right")} className="chevron-link">
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