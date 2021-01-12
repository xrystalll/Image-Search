import { Link } from 'react-router-dom';

export const NotFound = () => {
  document.title = '404 Not Found'

  return (
    <div>
      <h2>404 Not Found</h2>
      <div>
        <Link to="/">Go home</Link>
      </div>
    </div>
  )
}
