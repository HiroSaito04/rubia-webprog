import { Link } from 'react-router-dom';

const variantClasses = {
  // Primary: The "Action" button (Yellow with Blue shadow)
  primary: 'bg-[#ffcb05] text-[#3b4cca] border-[#3b4cca] shadow-[0px_4px_0px_0px_rgba(59,76,202,1)] hover:translate-y-[2px] hover:shadow-[0px_2px_0px_0px_rgba(59,76,202,1)] active:translate-y-[4px] active:shadow-none',
  
  // Secondary: The "UI" button (White/Silver with Red shadow)
  secondary: 'bg-white text-[#ff1c1c] border-[#ff1c1c] shadow-[0px_4px_0px_0px_rgba(255,28,28,1)] hover:translate-y-[2px] hover:shadow-[0px_2px_0px_0px_rgba(255,28,28,1)] active:translate-y-[4px] active:shadow-none',
  
  // Danger/Fire: (Red with Dark Red shadow)
  danger: 'bg-[#ff1c1c] text-white border-zinc-900 shadow-[0px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-y-[2px] hover:shadow-[0px_2px_0px_0px_rgba(24,24,27,1)] active:translate-y-[4px] active:shadow-none',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
  onClick,
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-xl border-2 px-6 py-2 text-[11px] font-black uppercase tracking-[0.15em] italic transition-all duration-75',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;