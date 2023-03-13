// import preact
import { h, Component } from "preact";

import { TopNavBar } from "./topnavbar";
import { UpperWeatherData } from "./upperweatherdata";
import { LowerWeatherData } from "./lowerweatherdata";
import { PlaceHolder } from "./placeholder";

export default class HomePage extends Component {
	constructor() {
		super();
		console.log("HomePage() constructor");
		this.state = { isLoaded: false };
	}

	componentDidMount() {
		console.log("HomePage() componentDidMount");
		this.fetchSurfData("Brighton");
	}

	locations = {
		Brighton: { latitude: 50.83, longitude: -0.14 },
		OtherPlace: { latitude: 50.83, longitude: -0.14 }
	};

	fetchSurfData(locationName) {
		let latitude = this.locations[locationName].latitude;
		let longitude = this.locations[locationName].longitude;
		let url = `https://marine-api.open-meteo.com/v1/marine?timezone=GMT&hourly=wave_height,wave_direction,wind_wave_height,wind_wave_direction,swell_wave_height,swell_wave_direction&daily=wave_height_max,wave_direction_dominant,wind_wave_height_max,wind_wave_direction_dominant,swell_wave_height_max,swell_wave_direction_dominant&latitude=${latitude}&longitude=${longitude}`;
		console.log("fetching data from from marine-api...");
		console.log(url);
		fetch(url)
			.then((res) => {
				console.log("got response from marine-api!!!");
				let res_json = res.json();
				console.log("res_json = " + res_json);
				return res_json;
			})
			.then((result) => {
				console.log(result);
				this.setState({ isLoaded: true, daily: result.daily, hourly: result.hourly });
			});
	}

	getWaveHeight() {
		if (this.state.isLoaded) {
			console.log(
				"this.state.daily.wave_height_max[0] is " +
				this.state.daily.wave_height_max[0]
			);
			return this.state.daily.wave_height_max[0];
		} else {
			return 0;
		}
	}

	getWaveHeightHourly() {
		if (this.state.isLoaded) {
			console.log(
				"this.state.hourly.swell_wave_height is " +
				this.state.hourly.swell_wave_height
			);
			return this.state.hourly.swell_wave_height;
		} else {
			return new Array(24).fill(0);
		}
	}

	getWaveDirection() {
		if (this.state.isLoaded) {
			return this.state.daily.wave_direction_dominant[0];
		} else {
			return 0;
		}
	}

	render() {
		console.log("Render HomePage");
		return (
			<div class="container home-page-background">
				<div class="row">
					<div class="col">
						<TopNavBar />
					</div>
				</div>
				<div class="row">
					<div class="col">
						<UpperWeatherData />
					</div>
				</div>
				<div class="row">
					<div class="col">
						<LowerWeatherData
							wave_height={this.getWaveHeight()}
							wave_direction={this.getWaveDirection()}
							wave_height_hourly={this.getWaveHeightHourly()}
						/>
					</div>
				</div>
			</div>
		);
	}
}
