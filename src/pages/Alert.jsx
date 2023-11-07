import React from 'react'

const Alert = ({ message, type, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
    {message}
    <button className="close" onClick={onClose}>
      <span>&times;</span>
    </button>
  </div>

  )
}

export default Alert