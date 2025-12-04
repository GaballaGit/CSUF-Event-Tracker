import type { Event } from '../types/event'

export default function DashboardEvent({ events }: { events: Event }) {

	return (
		<>
			<div id="eventdash">
				<div id="edtext">
					<h1>{events}</h1>
				</div>
				<div id="edpic">

				</div>
			</div>
		</>
	)
}
