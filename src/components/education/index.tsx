import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { InfosContainer } from './styles'

export function Education() {
  const [hidden, setHidden] = useState(true)
  const { t } = useTranslation()
  return (
    <InfosContainer>
      <button onClick={() => setHidden((s) => !s)}>
        {t('education.title')} +
      </button>

      {!hidden ? (
        <>
          <h2>{t('education.bach')}</h2>
          <p>{t('education.bachdescr.one')}</p>
          <p>{t('education.bachdescr.two')}</p>

          <h2>{t('education.tec')}</h2>
          <p>{t('education.tecdescr.one')}</p>
          <p>{t('education.tecdescr.two')}</p>
        </>
      ) : null}
    </InfosContainer>
  )
}
