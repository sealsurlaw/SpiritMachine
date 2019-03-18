class Navbar extends React.Component {
    render() {
        let { money } = this.props.app.state;

        return (
            <nav className="navbar navbar-dark bg-dark border-left border-right">
                <span className="navbar-text h1 text-white">${money.toFixed(2)}</span>
                <span className="navbar-text">
                    <a className="navbar-brand" href="#"><i className="fas fa-question-circle fa-2x"></i></a>
                </span>
            </nav>
        );
    }
}