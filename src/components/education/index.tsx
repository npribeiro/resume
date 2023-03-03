import { useState } from 'react'
import { InfosContainer } from './styles'

export function Education() {
  const [hidden, setHidden] = useState(true)
  return (
    <InfosContainer>
      <button onClick={() => setHidden((s) => !s)}>FORMAÇÃO +</button>

      {!hidden ? (
        <>
          <h2>BACHAREL EM DIREITO</h2>
          <p>UNISAL Centro Salesiano de São Paulo </p>
          <p>2015 / 2020</p>

          <h2>TÉCNICO EM INFORMÁTICA P/ INTERNET</h2>
          <p>CEMEP Osmar Passarelli Silveira</p>
          <p>2011 / 2013</p>
        </>
      ) : null}
    </InfosContainer>
  )
}
