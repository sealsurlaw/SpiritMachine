class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: 0,
      machine: 1,
      number: 0,
      selectedCocktail: null,
    }
  }

  render() {
    return (
      <AppFlow number={this.state.number} money={this.state.money} app={this} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));