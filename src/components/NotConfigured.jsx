import React from 'react'
import { useI18n } from 'twake-i18n'

import Empty from 'cozy-ui/transpiled/react/Empty'

import { Kanbn } from '@/components/Icons/Kanbn'

export const NotConfigured = ({ flagName }) => {
  const { t } = useI18n()

  return (
    <Empty
      data-testid="not-configured"
      centered
      icon={<Kanbn />}
      title={t('notConfigured.title')}
      text={t('notConfigured.text', { flag: flagName })}
    />
  )
}
