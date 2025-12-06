import type { Event } from '../types/types.ts'
import { useState, useEffect } from 'react'

function formatTime(ms: number) {
  if (ms <= 0) return "Started"

  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / (3600 * 24));
  const hrs = Math.floor((totalSec % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;

  if (days > 0) {
    return `${days}d ${hrs}h ${mins}m ${secs}s`;
  }

  return `${hrs}h ${mins}m ${secs}s`
}

export default function DashboardEvent({ event }: { event: Event }) {
	const [time, updateTime] = useState(0)
	const [tdd, toggleDropDown] = useState(false)

	useEffect(() => {
		const eventTimestamp = new Date(`${event.date}T${event.time}`).getTime();
		const id = setInterval(() => {
			const curTime = new Date().valueOf();
			updateTime(eventTimestamp - curTime)
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
						<h1>{event.title}</h1>
						<h2>Starts in: {formatTime(time)}</h2>
						{tdd ? (
							<button id="dropbutton" onClick={toggleDD}>v</button>
						) : (
							<button id="dropbutton" onClick={toggleDD}>&#62;</button>
						)
					}
					</div>
					<div id="edpic">
						<img src={event.image} />
					</div>
				</div>
						<div id="dropdown" className={tdd ? "open" : "close"}>
							<div id="dropdowntop">
								<h3>Host: {event.organizer}</h3>
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
