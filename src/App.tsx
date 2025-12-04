import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/navbar'
import Dashboard from './pages/dashboard/dashboard'
import Finder from './pages/finder/finder'

function App() {
    const [savedEvents, setSavedEvents] = useState<number[]>([]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <Dashboard 
                            savedEvents={savedEvents} 
                            setSavedEvents={setSavedEvents} 
                        />
                    } 
                />
                <Route 
                    path="/find" 
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