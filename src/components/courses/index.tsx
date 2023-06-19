import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { InfosContainer } from './styles'

export function Courses() {
  const [hidden, setHidden] = useState(true)
  const { t } = useTranslation()
  return (
    <InfosContainer>
      <button onClick={() => setHidden((s) => !s)}>
        {t('courses.title')} +
      </button>

      {!hidden ? (
        <>
          <h2>{t('courses.subtitle1')}</h2>
          <p>{t('courses.descr1')}</p>

          <h2>{t('courses.subtitle2')}</h2>
          <p>{t('courses.descr2')}</p>
        </>
      ) : null}
    </InfosContainer>
  )
}
