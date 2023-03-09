import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { InfosContainer } from './styles'

export function Jobs() {
  const [hidden, setHidden] = useState(true)
  const { t } = useTranslation()
  return (
    <InfosContainer>
      <button onClick={() => setHidden((s) => !s)}>{t('work.title')} +</button>

      {!hidden ? (
        <>
          <h2>{t('work.adv')}</h2>
          <p>{t('work.advdescr.one')}</p>
          <p>{t('work.advdescr.two')}</p>
          <p>{t('work.advdescr.three')}</p>
          <p>{t('work.advdescr.four')}</p>
          <p>{t('work.advdescr.five')}</p>

          <h2>{t('work.intern1')}</h2>
          <p>{t('work.intern1descr.one')}</p>
          <p>{t('work.intern1descr.two')}</p>
          <p>{t('work.intern1descr.three')}</p>
          <p>{t('work.intern1descr.four')}</p>
          <p>{t('work.intern1descr.five')}</p>

          <h2>{t('work.intern2')}</h2>
          <p>{t('work.intern2descr.one')}</p>
          <p>{t('work.intern2descr.two')}</p>
          <p>{t('work.intern2descr.three')}</p>
          <p>{t('work.intern2descr.four')}</p>
          <p>{t('work.intern2descr.five')}</p>
        </>
      ) : null}
    </InfosContainer>
  )
}
