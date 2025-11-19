import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Login from '@/pages/Login'
import Home from '@/pages/Home'

export default function RootRedirect() {
  const user = useSelector((s) => s.auth.userData)

  if (user) return <Home />
  return <Login />
}
