import { h, Component } from "preact";

export class Wave extends Component {
	componentDidMount() {
		this.setupGraph();
	}

	setupGraph() {
		const ctx = document.getElementById("wave-graph");

		let c = new Chart(ctx, {
			type: "line",
			data: {
				labels: ["9am", "10am", "11am", "12pm", "1pm", "2pm"],
				datasets: [
					{
						label: "Wave Height",
						data: [12, 19, 3, 5, 2, 3],
						borderWidth: 1,
						cubicInterpolationMode: "monotone",
						tension: 0.4,
						fill: false,
						borderColor: "blue",
					},
				],
			},
			options: {
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							color: "rgba(255,255,255,0.4)",
							borderColor: "white", // <-- this line is answer to initial question
						},
					},
					y: {
						beginAtZero: true,
						grid: {
							color: "rgba(255,255,255,0.4)",
							borderColor: "white", // <-- this line is answer to initial question
						},
					},
				},
			},
		});
		c.render();
	}

	render() {
		let label = this.props.label ? this.props.label : "EMPTY";
		console.log("Render Wave() with label = " + label);
		return (
			<div style={this.divStyles}>
				Place Holder for: {label}
				<canvas id="wave-graph" width="70%" height="100"></canvas>
			</div>
		);
	}

	divStyles = {
		boder: "solid",
		borderWidth: "2px",
	};
}
