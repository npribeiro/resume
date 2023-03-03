import { useState } from 'react'
import { InfosContainer } from './styles'

export function Jobs() {
  const [hidden, setHidden] = useState(true)
  return (
    <InfosContainer>
      <button onClick={() => setHidden((s) => !s)}>EXPERIÊNCIA +</button>

      {!hidden ? (
        <>
          <h2>ADVOGADA JR</h2>
          <p>Denis Wingter Advogados Associados </p>
          <p>06/2021 - 04/2022 </p>
          <p> - Efetuação de processos, cível e família </p>
          <p> - Efetuação de contratos </p>
          <p> - Acompanhamento e atenção diária à clientes</p>

          <h2>ESTAGIÁRIA</h2>
          <p>Universidade Estadual de Campinas (UNICAMP) </p>
          <p>04/2018 - 04/2019</p>
          <p>
            - Organização de documentos e acompanhamento de processos do
            Registro de Preços
          </p>
          <p> - Aplicação de penalidades e análise de defesa </p>
          <p> - Contato com fornecedores</p>

          <h2>ESTAGIÁRIA</h2>
          <p>Centro De Pesquisa e Desenvolvimento (CPqD) </p>
          <p>07/2014 - 07/2016 </p>
          <p> - Análise, edição e segmentação de arquivos de áudio gravados </p>
          <p>
            {' '}
            - Contato com clientes para eventuais esclarecimentos de dúvidas{' '}
          </p>
          <p> - Programação simples</p>
        </>
      ) : null}
    </InfosContainer>
  )
}
