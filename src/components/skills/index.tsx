import { useState } from 'react'
import { InfosContainer } from './styles'

export function Skills() {
  const [hidden, setHidden] = useState(true)

  return (
    <InfosContainer>
      <button onClick={() => setHidden((s) => !s)}>HABILIDADES +</button>

      {!hidden ? (
        <>
          <p>Responsável</p>
          <p>Organizada </p>
          <p>Dedicada </p>
          <p>Atenção aos detalhes </p>
          <p>Trabalho em equipe</p>
          <p>MS-Office </p>
          <p>Carta de Condução A/B </p>
          <p>OAB Brasileira Ativa</p>
        </>
      ) : null}
    </InfosContainer>
  )
}
