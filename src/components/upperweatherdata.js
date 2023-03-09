import { h, Component } from "preact";

import { WeatherIndex } from "./weatherindex";
import { Location } from "./location";

export class UpperWeatherData extends Component {
	render() {
		console.log("Render UpperWeatherData");
		return (
			<div class="container">
				<div class="row">
					<div class="col" style="text-align:center;margin-top:300px;">
						<Location location="Brighton Beach" />
					</div>
				</div>
				<div class="row">
					<div class="col" style="text-align:center;margin-top:5px;">
						<WeatherIndex index="30" />
					</div>
				</div>
			</div>
		);
	}
}
