class Navbar extends React.Component {
    xHandler = () => {
        this.props.app.setState({
            number: 0,
        })
    }

    render() {
        let { money, number } = this.props.app.state;
        let arrow = null;
        if (number > 1 && number < 4) {
            arrow = <a className="navbar-brand" onClick={this.xHandler}><i className="fas fa-times-circle fa-2x"></i></a>
        }

        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-text">
                    {arrow}
                </span>
                <span className="navbar-text h1 text-white">${money.toFixed(2)}</span>
            </nav>
        );
    }
}