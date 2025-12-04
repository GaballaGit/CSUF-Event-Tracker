import type { Event } from '../../../types/types'
import DashboardEvent from '../../../components/dashevent'
import './dashboard.css'
interface FinderProps {
	savedEvents: Event[];
	setSavedEvents: (event: Event[]) => void;
}

// TODO: Implement the dashboard Page
export default function Dashboard({ savedEvents, }: FinderProps) {

	return (
		<>
			<h1><span id="dashheader">Dashboard</span></h1>
			{savedEvents.map((event,) => (
				<DashboardEvent event={event} />
			))}
		</>
	)
}
