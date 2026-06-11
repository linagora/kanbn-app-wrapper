import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

import { Kanbn } from '@/components/Icons/Kanbn'
import { KanbnText } from '@/components/Icons/KanbnText'

export const AppLayout = () => {
  return (
    <>
      <BarComponent
        searchOptions={{ enabled: false }}
        appIcon={Kanbn}
        appTextIcon={KanbnText}
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
