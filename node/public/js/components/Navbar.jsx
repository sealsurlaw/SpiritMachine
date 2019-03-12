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