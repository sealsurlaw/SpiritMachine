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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  render() {
    return (
      <AppFlow number={this.state.number} app={this} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));