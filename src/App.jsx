import { useState, useEffect, useMemo, useCallback } from 'react'
import { events, CARD_COLORS } from './data.js'

// Confetti burst — fixed-position particles that fly from the tapped button
function ConfettiBurst({ x, y, color, id, onDone }) {
  const particles = useMemo(() => {
    const count = 14
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      angle: (360 / count) * i + (Math.random() * 24 - 12),
      distance: 35 + Math.random() * 35,
      size: 5 + Math.random() * 5,
      isCircle: Math.random() > 0.5,
      // slight color variation: mix in white or darken
      shade: Math.random() > 0.5 ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.15)',
    }))
  }, [id])

  useEffect(() => {
    const t = setTimeout(onDone, 700)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div style={{ position: 'fixed', left: x, top: y, pointerEvents: 'none', zIndex: 9999 }}>
      {particles.map(p => {
        const rad = (p.angle * Math.PI) / 180
        const tx = Math.cos(rad) * p.distance
        const ty = Math.sin(rad) * p.distance
        return (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              borderRadius: p.isCircle ? '50%' : '2px',
              backgroundColor: color,
              boxShadow: `inset 0 0 0 999px ${p.shade}`,
              animation: 'confettiFly 0.65s ease-out forwards',
              '--tx': `${tx}px`,
              '--ty': `${ty}px`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )
      })}
    </div>
  )
}

function ThumbsUpIcon() {
  return <img src="./Thumbs Up.png" alt="Thumbs up" width="22" height="22" style={{ objectFit: 'contain' }} />
}

function ThumbsDownIcon() {
  return <img src="./Thumbs Down.png" alt="Thumbs down" width="22" height="22" style={{ objectFit: 'contain' }} />
}

// Section divider with centered label
function SectionDivider({ label }) {
  return (
    <div className="section-divider">
      <div className="divider-line" />
      <span className="divider-label">{label}</span>
      <div className="divider-line" />
    </div>
  )
}

// Individual event card
function EventCard({ event, colorIndex, votes, onVote }) {
  const [expanded, setExpanded] = useState(false)
  const [bursts, setBursts] = useState([])
  const bgColor = CARD_COLORS[colorIndex % CARD_COLORS.length]
  const upVotes = votes[event.id]?.up || 0
  const downVotes = votes[event.id]?.down || 0
  const userVote = votes[event.id]?.userVote || null

  const triggerConfetti = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const burstId = Date.now() + Math.random()
    setBursts(prev => [...prev, { id: burstId, x, y }])
  }, [])

  const removeBurst = useCallback((id) => {
    setBursts(prev => prev.filter(b => b.id !== id))
  }, [])

  return (
    <div
      className="event-card"
      style={{ backgroundColor: bgColor }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="card-inner">
        {/* Date column */}
        <div className="card-date">
          {event.confirmed ? (
            <>
              <span className="date-label">{event.dayOfWeek}, {event.month}</span>
              <span className="date-number">{event.day}</span>
            </>
          ) : (
            <span className="date-tbd">TBD</span>
          )}
        </div>

        {/* Details column */}
        <div className="card-details">
          <span className="card-location">{event.location}</span>
          <span className="card-title">{event.title}</span>
        </div>

        {/* Voting column */}
        <div className="card-votes" onClick={e => e.stopPropagation()}>
          <button
            className={`vote-btn ${userVote === 'up' ? 'voted' : ''} ${userVote === 'down' ? 'dimmed' : ''}`}
            onClick={(e) => { triggerConfetti(e); onVote(event.id, 'up') }}
            aria-label="Thumbs up"
          >
            <ThumbsUpIcon />
            <span className="vote-count">{upVotes}</span>
          </button>
          <button
            className={`vote-btn ${userVote === 'down' ? 'voted' : ''} ${userVote === 'up' ? 'dimmed' : ''}`}
            onClick={(e) => { triggerConfetti(e); onVote(event.id, 'down') }}
            aria-label="Thumbs down"
          >
            <ThumbsDownIcon />
            <span className="vote-count">{downVotes}</span>
          </button>
        </div>
      </div>

      {/* Confetti bursts */}
      {bursts.map(b => (
        <ConfettiBurst
          key={b.id}
          id={b.id}
          x={b.x}
          y={b.y}
          color={bgColor}
          onDone={() => removeBurst(b.id)}
        />
      ))}

      {/* Expanded content */}
      {expanded && (
        <div className="card-expanded" onClick={e => e.stopPropagation()}>

          <div className="card-divider" />

          <a
            className="card-action-row"
            href={event.confirmed
              ? `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&location=${encodeURIComponent(event.location)}&dates=${event.gcalDate}/${event.gcalDate}`
              : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-action-left">
              <img src="./Cal.png" alt="" width="24" height="24" />
              <span className="card-action-label">Add to calendar</span>
            </div>
            <img src="./Add.png" alt="" width="32" height="32" />
          </a>

          <div className="card-divider" />

          <a
            className="card-action-row"
            href={`https://maps.google.com/?q=${encodeURIComponent(event.location + ' San Francisco')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-action-left">
              <img src="./Pin.png" alt="" width="24" height="24" />
              <span className="card-action-label">View on map</span>
            </div>
            <img src="./Eye.png" alt="" width="32" height="32" />
          </a>

          <div className="card-divider" />

          <p className="card-description-text">{event.description}</p>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [votes, setVotes] = useState(() => {
    try {
      const saved = localStorage.getItem('munchBunchVotes')
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  const handleVote = (eventId, direction) => {
    setVotes(prev => {
      const existing = prev[eventId] || { up: 0, down: 0, userVote: null }
      let updated

      if (existing.userVote === direction) {
        // Un-vote
        updated = {
          ...existing,
          [direction]: Math.max(0, existing[direction] - 1),
          userVote: null,
        }
      } else {
        // Switch vote or new vote
        const wasOtherDirection = existing.userVote && existing.userVote !== direction
        updated = {
          ...existing,
          up: direction === 'up'
            ? existing.up + 1
            : wasOtherDirection ? Math.max(0, existing.up - 1) : existing.up,
          down: direction === 'down'
            ? existing.down + 1
            : wasOtherDirection ? Math.max(0, existing.down - 1) : existing.down,
          userVote: direction,
        }
      }

      const newVotes = { ...prev, [eventId]: updated }
      try {
        localStorage.setItem('munchBunchVotes', JSON.stringify(newVotes))
      } catch {}
      return newVotes
    })
  }

  const confirmedEvents = events.filter(e => e.confirmed)
  const tbdEvents = events.filter(e => !e.confirmed)

  // Assign color indices globally so colors stay consistent across filter changes
  const colorMap = {}
  events.forEach((e, i) => { colorMap[e.id] = i })

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-illustration">
          <video src="./Video-cropped.mp4" autoPlay loop muted playsInline />
        </div>
        <div className="header-logo">
          <img src="./logo.png" alt="Munch Bunch Saucy Summers" />
        </div>
      </header>

      <main className="app-main">
        {/* Confirmed events */}
        {confirmedEvents.length > 0 && (
          <section>
            <SectionDivider label="Events" />
            <div className="cards-list">
              {confirmedEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  colorIndex={colorMap[event.id]}
                  votes={votes}
                  onVote={handleVote}
                />
              ))}
            </div>
          </section>
        )}

        {/* TBD possibilities */}
        {tbdEvents.length > 0 && (
          <section>
            <SectionDivider label="Possibilities" />
            <div className="cards-list">
              {tbdEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  colorIndex={colorMap[event.id]}
                  votes={votes}
                  onVote={handleVote}
                />
              ))}
            </div>
          </section>
        )}

        {confirmedEvents.length === 0 && tbdEvents.length === 0 && (
          <p className="empty-state">No activities yet!</p>
        )}
      </main>

      <footer className="app-footer">
        <p>Made with 🌶️ by Munch Bunch</p>
      </footer>
    </div>
  )
}
