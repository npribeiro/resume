import { BarFranc, BarIngles, BarPort, InfosContainer } from './styles'
import { Tooltip } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Language() {
  const [hidden, setHidden] = useState(true)
  const { t } = useTranslation()
  return (
    <InfosContainer>
      <button onClick={() => setHidden((s) => !s)}>
        {t('languages.title')} +
      </button>

      {!hidden ? (
        <>
          <p>
            {t('languages.subtitle.one')}
            <Tooltip label="Nativo" placement="right-start">
              <BarPort />
            </Tooltip>
          </p>

          <p>
            {t('languages.subtitle.two')}
            <Tooltip label="Avançado" placement="right-start">
              <BarIngles />
            </Tooltip>
          </p>

          <p>
            {t('languages.subtitle.three')}
            <Tooltip label="Básico" placement="right-start">
              <BarFranc />
            </Tooltip>
          </p>
        </>
      ) : null}
    </InfosContainer>
  )
}
