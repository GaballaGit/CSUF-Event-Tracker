import { useState } from 'react';
import events from '../../events/events.json';
import type { Event } from '../../../types/types';
import DashboardEvent from '../../../components/dashevent';
import './dashboard.css';

interface DashboardProps {
  savedEvents: number[]; // Array of event IDs
  setSavedEvents: (events: number[]) => void;
}

export default function Dashboard({ savedEvents, setSavedEvents }: DashboardProps) {
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  const [filterTag, setFilterTag] = useState<string>('All');

  // Get full event objects from saved IDs
  const savedEventObjects = events.filter(event => 
    savedEvents.includes(event.id)
  );

  // Get unique tags from saved events
  const allTags = savedEventObjects.flatMap(event => event.tags);
  const tags = ['All', ...new Set(allTags)];

  // Filter events by tag
  let filteredEvents = filterTag === 'All' 
    ? savedEventObjects 
    : savedEventObjects.filter(event => event.tags.includes(filterTag));

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  // Remove event from dashboard
  const removeEvent = (eventId: number) => {
    setSavedEvents(savedEvents.filter(id => id !== eventId));
  };

  // Clear all saved events
  const clearAll = () => {
    if (window.confirm('Are you sure you want to remove all events from your dashboard?')) {
      setSavedEvents([]);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        {/* Header */}
        <div className="dashboard-header">
          <h1>My Dashboard</h1>
          <p>Manage your saved events</p>
        </div>

        {savedEventObjects.length === 0 ? (
          // Empty State
          <div className="empty-state">
            <div className="empty-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h2>No Saved Events</h2>
            <p>Start exploring events in the Event Finder and save the ones you're interested in!</p>
          </div>
        ) : (
          <>
            {/* Controls Bar */}
            <div className="controls-bar">
              <div className="controls-left">
                <div className="control-group">
                  <label>Sort by:</label>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                    className="sort-select"
                  >
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                  </select>
                </div>
                
                <div className="control-group">
                  <label>Filter:</label>
                  <select 
                    value={filterTag} 
                    onChange={(e) => setFilterTag(e.target.value)}
                    className="filter-select"
                  >
                    {tags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button onClick={clearAll} className="clear-all-button">
                Clear All
              </button>
            </div>

            {/* Statistics */}
            <div className="dashboard-stats">
              <div className="stat-item">
                <span className="stat-label">Total Saved:</span>
                <span className="stat-value">{savedEventObjects.length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Showing:</span>
                <span className="stat-value">{sortedEvents.length}</span>
              </div>
            </div>

            {/* Events List */}
            {sortedEvents.length === 0 ? (
              <div className="no-results">
                <p>No events match the selected filter.</p>
              </div>
            ) : (
              <div className="dashboard-events">
                {sortedEvents.map(event => (
                  <div key={event.id} className="dashboard-event-wrapper">
                    <DashboardEvent event={event} />
                    <button 
                      onClick={() => removeEvent(event.id)}
                      className="remove-button-standalone"
                      title="Remove from dashboard"
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}