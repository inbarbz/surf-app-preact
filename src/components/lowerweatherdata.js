import { h, Component } from "preact";
import { Wave } from "./wave";
import { WaterTemp } from "./watertemp";
import { BeachTemp } from "./beachtemp";
import { WaveDirectionGroup } from "./wavedirectiongroup";

export class LowerWeatherData extends Component {
	// className="lower-weather-class"
	render() {
		let waveHeight = this.props.wave_height;
		let waveHeightHourly = this.props.wave_height_hourly;
		let waveDirectionHourly = this.props.wave_direction_hourly;

		let waveDirection = this.props.wave_direction;
		console.log(
			"Render LowerWeatherData with waveHeight = " +
				waveHeight +
				" and waveHeightHourly " +
				waveHeightHourly
		);
		return (
			<div class="container">
				<div class="row">
					<div class="col">
						<Wave wave_height_hourly={waveHeightHourly} />
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
						<WaveDirectionGroup wave_direction_hourly={waveDirectionHourly} />
					</div>
				</div>
			</div>
		);
	}
}
