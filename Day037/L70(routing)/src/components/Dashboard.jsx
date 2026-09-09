import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      dashboard

      <ul>
        <li>
            <NavLink to='/dashboard/courses'>
                courses
            </NavLink>
        </li>

        <li>
            <NavLink to='/dashboard/mock-tests'>
                mock-test
            </NavLink>
        </li>
        <li>
            <NavLink to='/dashboard/reports'>
                reports
            </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default Dashboard
