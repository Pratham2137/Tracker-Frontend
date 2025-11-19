import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function RequireAuth({ children }) {
  const user = useSelector((s) => s.auth.userData)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // If children provided, render them; otherwise render null
  return children ?? null
  
}
