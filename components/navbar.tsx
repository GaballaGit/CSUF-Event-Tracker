import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<div id="navbar">
			<h1>CSUF Event Tracker</h1>
			<div id="navlinks">
				<nav>
					<Link to="/CSUF-Event-Tracker"><h2>Dashboard</h2></Link>
					<Link to="/CSUF-Event-Tracker/find"><h2>Find Event</h2></Link>
				</nav>
			</div>
		</div>
	)
}
