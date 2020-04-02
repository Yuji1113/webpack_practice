import * as React from 'react'

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div style={{ backgroundColor: 'green', color: "#fff" }}>
      {message}
    </div>
  )
}

export default Alert
