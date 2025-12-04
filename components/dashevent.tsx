import type { Event } from '../types/types.ts'
import { useState, useEffect } from 'react'

export default function DashboardEvent({ event }: { event: Event }) {
	const [time, updateTime] = useState(0)

	useEffect(() => {
		const id = setInterval(() => {
			const curTime = new Date().valueOf();
			updateTime(event.time - curTime)
		}, 1000);
		return () => clearInterval(id);
	}, [])


	return (
		<>
			<div id="eventdash">
				<div id="edtext">
					<h1>{event.name}</h1>
					<h2>Starts in: ${time}</h2>
					<button id="dropbutton">%gt;</button>
				</div>
				<div id="edpic">
					<img src={event.image} />
				</div>
			</div>
		</>
	)
}
