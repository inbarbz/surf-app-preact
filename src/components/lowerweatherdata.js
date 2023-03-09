import { h, Component } from "preact";

export class LowerWeatherData extends Component {
	// className="lower-weather-class"
	render() {
		let waveHeight = this.props.wave_height;
		let waveDirection = this.props.wave_direction;
		console.log("Render LowerWeatherData with waveHeight = " + waveHeight);
		return (
			<div class="container">
				<div class="row">
					<div class="col">
						Wave Height: {waveHeight}m
						<br />
						Wave Direction: {waveDirection}°
					</div>
				</div>
			</div>
		);
	}
}
