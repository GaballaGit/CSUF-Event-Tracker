import type { Event } from '../../../types/types'
import DashboardEvent from '../../../components/dashevent'

interface FinderProps {
	savedEvents: Event[];
	setSavedEvents: (event: Event[]) => void;
}

// TODO: Implement the dashboard Page
export default function Dashboard({ savedEvents, setSavedEvents }: FinderProps) {

	return (
		<>
			<h1>Dashboard</h1>
			{savedEvents.map((event,) => (
				<DashboardEvent event={event} />
			))}
		</>
	)
}
