// Ambient floating blob used as a soft organic background accent.
// Purely decorative — aria-hidden.

export default function OrganicBlob({
  color = '#FF6E63',
  size = 420,
  className = '',
  opacity = 0.35,
  blur = true,
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-organic ${blur ? 'blur-3xl' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
      }}
    />
  )
}
