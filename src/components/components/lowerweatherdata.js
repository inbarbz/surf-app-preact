import { h, Component } from "preact";
import { Wave } from "./wave";
import { WaterTemp } from "./watertemp";
import { BeachTemp } from "./beachtemp";

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
						<Wave />
					</div>
				</div>
				<div class="row">
					<div class="col">
						<BeachTemp />
					</div>
				</div>
				<div class="row">
					<div class="col">
						<WaterTemp />
					</div>
				</div>
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
