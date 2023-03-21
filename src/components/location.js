import { h, Component } from "preact";
import { useEffect, useState } from 'preact/hooks';


export class Location extends Component {
	render() {
		console.log("Render Location");
		let location = this.props.location;
		return (
			<div class="container localtion" style="font-size:30px;">
				{location}
			</div>
		);
	}
}
