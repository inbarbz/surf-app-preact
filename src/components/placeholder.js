import { h, Component } from "preact";

export class PlaceHolder extends Component {
	render() {
		let label = this.props.label ? this.props.label : "EMPTY";
		console.log("Render PlaceHolder() with label = " + label);
		return <div style={this.divStyles}>Place Holder for: {label}</div>;
	}

	divStyles = {
		boder: "solid",
		borderWidth: "2px",
	};
}
