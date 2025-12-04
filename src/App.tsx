import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar'
import Dashboard from './pages/dashboard//dashboard'
import Finder from './pages/finder/finder'

function App() {


	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/find" element={<Finder />} />
			</Routes>
		</>
	)
}

export default App
