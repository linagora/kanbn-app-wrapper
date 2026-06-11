import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

import { Kanbn } from '@/components/Icons/Kanbn'

export const AppLayout = () => {
  return (
    <>
      <BarComponent
        searchOptions={{ enabled: false }}
        appIcon={Kanbn}
        componentsProps={{
          CozyTheme: {
            type: 'auto'
          }
        }}
      />
      <Outlet />
    </>
  )
}
