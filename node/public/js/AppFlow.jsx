class AppFlow extends React.Component {
    render() {
        let { app } = this.props;
        let screen;

        switch (this.props.number) {
            case 0:
                screen = <TapCardScreen app={app} />
                break;
            case 1:
                screen = <RetrievingDataScreen app={app} />
                break;
            case 2:
                screen = <BodyScreen app={app} />
                break;
            case 3:
                screen = <ConfirmScreen app={app} />
                break;
            case 4:
                screen = <GetDrinkScreen app={app} />
                break;
        }

        return (
            <div>
                <Navbar app={app} />
                {screen}
            </div>
        );
    }
}
