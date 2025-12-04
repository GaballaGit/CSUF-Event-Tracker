import events from '../../events/events.json';
import { useState } from 'react';
import './finder.css';

// To recieve events ids from app.tsx
interface FinderProps {
	savedEvents: number[];
	setSavedEvents: (events: number[]) => void;
}

export default function Finder({ savedEvents, setSavedEvents }: FinderProps) {
	const eventList = events;
	const [selectedTag, setSelectedTag] = useState('All');
	const [searchQuery, setSearchQuery] = useState('');

	// Get unique tags
	const allTags = eventList.flatMap(event => event.tags);
	const tags = ['All', ...new Set(allTags)];

	// Filter events based on selected tag and search query
	let filteredEvents = selectedTag === 'All'
		? eventList
		: eventList.filter(event => event.tags.includes(selectedTag));

	// Apply search filter
	if (searchQuery.trim()) {
		filteredEvents = filteredEvents.filter(event =>
			event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
			event.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
			event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
		);
	}

	// Calculate statistics
	const totalEvents = eventList.length;
	const upcomingEvents = eventList.filter(event => new Date(event.date) >= new Date()).length;

	// Toggle saved event
	const toggleSaveEvent = (eventId: number) => {
		if (savedEvents.includes(eventId)) {
			setSavedEvents(savedEvents.filter(id => id !== eventId));
		} else {
			setSavedEvents([...savedEvents, eventId]);
		}
	};

	return (
		<div className="finder-container">
			<div className="finder-wrapper">
				{/* Header */}
				<div className="finder-header">
					<h1>Event Finder</h1>
					<p>Discover and save events that interest you</p>
				</div>

				{/* Search Bar */}
				<div className="search-container">
					<div className="search-bar">
						<svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
						<input
							type="text"
							placeholder="Search events by title, description, location, organizer, or tags..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="search-input"
						/>
						{searchQuery && (
							<button
								className="clear-button"
								onClick={() => setSearchQuery('')}
								title="Clear search"
							>
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						)}
					</div>
				</div>

				{/* Statistics Cards */}
				<div className="stats-grid">
					<div className="stat-card">
						<div className="stat-card-content">
							<div className="stat-info">
								<p>Total Events</p>
								<p>{totalEvents}</p>
							</div>
							<div className="stat-icon blue">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</div>
						</div>
					</div>

					<div className="stat-card">
						<div className="stat-card-content">
							<div className="stat-info">
								<p>Upcoming Events</p>
								<p>{upcomingEvents}</p>
							</div>
							<div className="stat-icon green">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
						</div>
					</div>

					<div className="stat-card">
						<div className="stat-card-content">
							<div className="stat-info">
								<p>Saved Events</p>
								<p>{savedEvents.length}</p>
							</div>
							<div className="stat-icon orange">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				{/* Tag Filter */}
				<div className="filter-container">
					<div className="filter-buttons">
						{tags.map(tag => (
							<button
								key={tag}
								onClick={() => setSelectedTag(tag)}
								className={`filter-button ${selectedTag === tag ? 'active' : ''}`}
							>
								{tag}
							</button>
						))}
					</div>
				</div>

				{/* Events Grid */}
				<div className="events-grid">
					{filteredEvents.map(event => {
						const isSaved = savedEvents.includes(event.id);

						return (
							<div key={event.id} className="event-card">
								<div className="event-image-container">
									<img src={event.image} alt={event.title} className="event-image" />
									<button
										className={`save-button ${isSaved ? 'saved' : ''}`}
										onClick={() => toggleSaveEvent(event.id)}
										title={isSaved ? 'Remove from dashboard' : 'Add to dashboard'}
									>
										<svg fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
										</svg>
									</button>
								</div>
								<div className="event-content">
									{/* Event Title */}
									<h3 className="event-title">{event.title}</h3>

									{/* Description */}
									<p className="event-description">{event.description}</p>

									{/* Event Details */}
									<div className="event-details">
										<div className="event-detail">
											<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
											</svg>
											{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at {event.time}
										</div>
										<div className="event-detail">
											<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
											{event.location}
										</div>
										<div className="event-detail">
											<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
											</svg>
											{event.organizer}
										</div>
										<div className="event-detail">
											<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											{event.duration}
										</div>
									</div>

									{/* Tags */}
									<div className="event-tags">
										{event.tags.map((tag, index) => (
											<span key={index} className="event-tag">
												#{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* No Events Message */}
				{filteredEvents.length === 0 && (
					<div className="no-events">
						<p>No events found matching your search.</p>
					</div>
				)}
			</div>
		</div>
	);
}
