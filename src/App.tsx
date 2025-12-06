import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/navbar'
import Dashboard from './pages/dashboard/dashboard'
import Finder from './pages/finder/finder'

function App() {
	// Event IDs
	const [savedEvents, setSavedEvents] = useState<number[]>([]);

	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/CSUF-Event-Tracker"
					element={
						<Dashboard
							savedEvents={savedEvents}
							setSavedEvents={setSavedEvents}
						/>
					}
				/>
				<Route
					path="/CSUF-Event-Tracker/find"
					element={
						<Finder
							savedEvents={savedEvents}
							setSavedEvents={setSavedEvents}
						/>
					}
				/>
			</Routes>
		</>
	)
}
export default App
