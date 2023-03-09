import { h, Component } from "preact";

export class TopNavBar extends Component {
	render() {
		return (
			<div class="container">
				<div class="row" style={{ padding: "0px", margin: "0px" }}>
					<div class="col-2">
						<div style="margin-top:30px;margin-left:20px">AAA</div>
					</div>
					<div class="col-8"> </div>
					<div class="col-2">
						<div style="margin-top:30px;margin-right:10px;align-content:right">
							BBB
						</div>
					</div>
				</div>
			</div>
		);
	}
}
