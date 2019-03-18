class GetDrinkScreen extends React.Component {
    render() {
        let { name, image, price } = this.props.app.state.selectedCocktail;

        console.log(name);

        return (
            <div className="get-box">
                <h2 className="text-center">Please wait. Making {name}...</h2>
                <img src={image} className="image-center" />
            </div>
        );
    }
}