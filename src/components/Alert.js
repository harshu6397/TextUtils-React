import React from 'react'

export default function Alert() {
  return (
    <div className="alert alert-success alert-dismissible fade show my-3" role="alert">
        <strong>Welcome to my Textutils Website</strong> This is my text analyzer website. Here you can perform many
        Operations on text.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
