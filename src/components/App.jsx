import React from 'react'

import flag from 'cozy-flags'

import { NotConfigured } from '@/components/NotConfigured'

/**
 * Name of the Cozy flag that holds the URL of the embedded kan.bn service.
 * It must be set on the instance (or globally) for the wrapper to display
 * anything, e.g. `https://kanbn.example.org`.
 */
export const EMBEDDED_APP_URL_FLAG = 'kanbn.embedded-app-url'

export const App = () => {
  const embeddedAppUrl = flag.useFlag(EMBEDDED_APP_URL_FLAG)

  if (!embeddedAppUrl) {
    return <NotConfigured flagName={EMBEDDED_APP_URL_FLAG} />
  }

  return (
    <iframe
      id="embeddedApp"
      data-testid="embedded-app"
      title="Kanbn"
      src={embeddedAppUrl}
      allow="clipboard-read; clipboard-write"
    />
  )
}
