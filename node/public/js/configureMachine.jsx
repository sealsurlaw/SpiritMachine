class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [1, 2],
            machines: [1, 2, 3, 4, 5, 6, 7, 8, 15],
            alcohols: ['', '', '', ''],
            mixers: ['', '', '', ''],
        }

        this.handleUserSelect = this.handleUserSelect.bind(this);
        this.handleMachineSelect = this.handleMachineSelect.bind(this);
        this.handleAlcoholInput = this.handleAlcoholInput.bind(this);
        this.handleMixerInput = this.handleMixerInput.bind(this);
    }

    componentWillMount() {
        this.setState({
            user: this.state.users[0],
            machine: this.state.machines[0],
        })
    }

    handleUserSelect(user) {
        this.setState({
            user: user,
        })
    }

    handleMachineSelect(machine) {
        this.setState({
            machine: machine,
        })
    }

    handleAlcoholInput(container, text) {
        let temp = this.state.alcohols;
        temp[container] = text;
        this.setState({
            alcohols: temp,
        })
    }

    handleMixerInput(container, text) {
        let temp = this.state.mixers;
        temp[container] = text;
        this.setState({
            mixers: temp,
        })
    }

    handleSubmit(event) {
        // Fetch to database route
        const query = '/newMachine?'
            + 'user=' + encodeURI(this.state.user)
            + '&machine=' + encodeURI(this.state.machine)
            + '&alcohols=' + encodeURI(this.state.alcohols)
            + '&mixers=' + encodeURI(this.state.mixers);
        console.log(query);

        axios.get(query)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

        console.log('User: ' + this.state.user);
        console.log('Machine: ' + this.state.machine);
        console.log('Alcohols: ' + this.state.alcohols);
        console.log('Mixers: ' + this.state.mixers);

        this.setState({
            alcohols: ['', '', '', ''],
            mixers: ['', '', '', ''],
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <SelectNumber type={'User'} collection={this.state.users} selected={this.state.user} update={this.handleUserSelect} />
                    <SelectNumber type={'Machine'} collection={this.state.machines} selected={this.state.machine} update={this.handleMachineSelect} />
                    <div className="row">
                        <div className="col-sm centered not-small">Alcohol 1:</div>
                        <div className="col-sm centered not-small">Alcohol 2:</div>
                        <div className="col-sm centered not-small">Alcohol 3:</div>
                        <div className="col-sm centered not-small">Alcohol 4:</div>
                    </div>
                    <DrinkInput type={'Alcohol'} drinks={this.state.alcohols} update={this.handleAlcoholInput} />
                    <hr />
                    <div className="row">
                        <div className="col-sm centered not-small">Mixer 1:</div>
                        <div className="col-sm centered not-small">Mixer 2:</div>
                        <div className="col-sm centered not-small">Mixer 3:</div>
                        <div className="col-sm centered not-small">Mixer 4:</div>
                    </div>
                    <DrinkInput type={'Mixer'} drinks={this.state.mixers} update={this.handleMixerInput} />
                    <div className="row">
                        <div className="col-sm">
                            <input type="submit" className="submit-button" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

class SelectNumber extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.update(e.target.value);
    }

    render() {
        const selectItems = this.props.collection.map((item) =>
            <option key={item.toString()} value={item}>
                {item}
            </option>
        );

        return (
            <div className="row">
                <div className="col-sm text-left">
                    <span className="text-span1">{this.props.type} #:</span>
                    <select value={this.props.selected} onChange={this.handleChange} className="dropdown-box text-right">
                        {selectItems}
                    </select>
                </div>
            </div>
        );
    }
}

class DrinkInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            container: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.update(this.state.container, e.target.value);
    }

    handleFocus(container, e) {
        this.setState({
            container: container,
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm small centered">{this.props.type} 1:</div>
                <div className="col-sm centered">
                    <input
                        type="text"
                        className="input-container"
                        value={this.props.drinks[0]}
                        onFocus={this.handleFocus.bind(this, 0)}
                        onChange={this.handleChange} />
                </div>
                <div className="col-sm small centered">{this.props.type} 2:</div>
                <div className="col-sm centered">
                    <input
                        type="text"
                        className="input-container"
                        value={this.props.drinks[1]}
                        onFocus={this.handleFocus.bind(this, 1)}
                        onChange={this.handleChange} />
                </div>
                <div className="col-sm small centered">{this.props.type} 3:</div>
                <div className="col-sm centered">
                    <input
                        type="text"
                        className="input-container"
                        value={this.props.drinks[2]}
                        onFocus={this.handleFocus.bind(this, 2)}
                        onChange={this.handleChange} />
                </div>
                <div className="col-sm small centered">{this.props.type} 4:</div>
                <div className="col-sm centered">
                    <input
                        type="text"
                        className="input-container"
                        value={this.props.drinks[3]}
                        onFocus={this.handleFocus.bind(this, 3)}
                        onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));