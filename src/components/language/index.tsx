import { BarFranc, BarIngles, BarPort, InfosContainer } from './styles'
import { Tooltip } from '@chakra-ui/react'
import { useState } from 'react'

export function Language() {
  const [hidden, setHidden] = useState(true)
  return (
    <InfosContainer>
      <button onClick={() => setHidden((s) => !s)}>IDIOMAS +</button>

      {!hidden ? (
        <>
          <p>
            Português
            <Tooltip label="Nativo" placement="right-start">
              <BarPort />
            </Tooltip>
          </p>

          <p>
            Inglês
            <Tooltip label="Avançado" placement="right-start">
              <BarIngles />
            </Tooltip>
          </p>

          <p>
            Francês
            <Tooltip label="Básico" placement="right-start">
              <BarFranc />
            </Tooltip>
          </p>
        </>
      ) : null}
    </InfosContainer>
  )
}
