import './style.css';

const Layout = ({ title, children }) => {
  return (
    <div className="layout">
      {title && <h2 className="layout_title">{title}</h2>}
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout;
