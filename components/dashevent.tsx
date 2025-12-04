import type { Event } from '../types/types.ts'
import { useState, useEffect } from 'react'

export default function DashboardEvent({ event }: { event: Event }) {
	const [time, updateTime] = useState(0)
	const [tdd, toggleDropDown] = useState(false)

	useEffect(() => {
		const id = setInterval(() => {
			const curTime = new Date().valueOf();
			updateTime(event.time - curTime)
		}, 1000);
		return () => clearInterval(id);
	}, [])

	const toggleDD = () => {
		toggleDropDown(!tdd)
	}

	return (
		<>
			<div id="eventdash">
				<div id="defshow">
					<div id="edtext">
						<h1>{event.name}</h1>
						<h2>Starts in: {time}</h2>
						<button id="dropbutton" onClick={toggleDD}>&#62;</button>
					</div>
					<div id="edpic">
						<img src={event.image} />
					</div>
				</div>
						<div id="dropdown" className={tdd ? "close" : "open"}>
							<div id="dropdowntop">
								<h3>Host: {event.host}</h3>
								<h3>Location: {event.location}</h3>
							</div>
							<div id="dropdownbottom">
								<h3>Description:</h3>
								<p>{event.description}</p>
							</div>
						</div>
			</div>
		</>
	)
}
