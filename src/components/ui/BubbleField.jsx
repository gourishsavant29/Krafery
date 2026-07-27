// Ambient rising-bubble field — echoes live fermentation carbonation.
// A handful of CSS-animated circles drifting upward. Purely decorative.

const bubbles = [
  { left: '8%', size: 10, delay: '0s', duration: '4.2s' },
  { left: '22%', size: 6, delay: '0.8s', duration: '3.6s' },
  { left: '38%', size: 14, delay: '1.6s', duration: '5s' },
  { left: '55%', size: 8, delay: '0.4s', duration: '4.6s' },
  { left: '70%', size: 12, delay: '2s', duration: '3.8s' },
  { left: '85%', size: 7, delay: '1.2s', duration: '4.4s' },
  { left: '95%', size: 9, delay: '2.6s', duration: '4s' },
]

export default function BubbleField({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-white/40 animate-bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </div>
  )
}
