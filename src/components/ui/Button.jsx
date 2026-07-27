import { Link } from 'react-router-dom'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  ...rest
}) {
  const classes = `${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon size={18} className="shrink-0" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
