import './style.css';

const Button = ({ className, onClick, children }) => {
  const cssClass = className ? ` ${className}` : ' main'

  const click = () => {
    onClick && onClick()
  }

  return (
    <div onClick={click} className={'btn' + cssClass} role="button">
      {children || 'Click'}
    </div>
  )
}

export default Button;
