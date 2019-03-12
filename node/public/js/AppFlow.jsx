class AppFlow extends React.Component {
    render() {
        let screen;
        switch (this.props.number) {
            case 0:
                screen = <TapCardScreen app={this.props.app} />
                break;
            case 1:
                screen = <RetrievingDataScreen app={this.props.app} />
                break;
            case 2:
                screen = <BodyScreen app={this.props.app} />
                break;
            case 3:
                screen = <GetDrinkScreen app={this.props.app} />
                break;
        }

        return (
            <div>
                <Navbar money={this.props.money} />
                {screen}
            </div>
        );
    }
}
