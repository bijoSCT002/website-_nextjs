import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminDashboard } from './component'

export const AdminLayout = () => {
  return (
    <> <Routes>
      <Route path="/" element={<AdminDashboard />} />

    </Routes></>
  )
}


