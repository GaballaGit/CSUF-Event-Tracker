

export default function Spacing({ width, height }: { width: string, height: string }) {

	// Testing github actions 
	return (
		<>
			<div style={{
				width: `${width}`,
				height: `${height}`,
			}} id="spacer">
			</div>
		</>
	)
}


