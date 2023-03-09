import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { InfosContainer } from './styles'

export function Skills() {
  const [hidden, setHidden] = useState(true)
  const { t } = useTranslation()

  return (
    <InfosContainer>
      <button onClick={() => setHidden((s) => !s)}>
        {t('skills.title')} +
      </button>

      {!hidden ? (
        <>
          <p>{t('skills.subtitle.one')}</p>
          <p>{t('skills.subtitle.two')}</p>
          <p>{t('skills.subtitle.three')}</p>
          <p>{t('skills.subtitle.four')}</p>

          <p>{t('skills.subtitle.five')}</p>
          <p>{t('skills.subtitle.six')}</p>
          <p>{t('skills.subtitle.seven')}</p>
          <p>{t('skills.subtitle.eight')}</p>
          <p>{t('skills.subtitle.nine')}</p>
        </>
      ) : null}
    </InfosContainer>
  )
}
