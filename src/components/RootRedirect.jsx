import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectUser } from '@/features/authSlice'

export default function RootRedirect() {
  const user = useSelector(selectUser)

  // Keep URL consistent: send authenticated users to /Home, otherwise to /login
  if (user) return <Navigate to="/Home" replace />
  return <Navigate to="/login" replace />
}
