import {
  HomeContainer,
  ImageContainer,
  InfoContainer,
  PersonalCard,
} from './styles'

import {
  GithubLogo,
  PhoneCall,
  LinkedinLogo,
  EnvelopeSimple,
  NavigationArrow,
  HandWaving,
} from 'phosphor-react'

import Foto from '../../assets/foto.jpg'

import { Education } from '../../components/education'
import { Jobs } from '../../components/jobs'
import { Language } from '../../components/language'
import { Skills } from '../../components/skills'

import { Divider } from '@chakra-ui/react'

const WavingHand = () => {
  return (
    <HandWaving color="#B596E5" weight="duotone">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="1s"
        from="-20 0 0"
        to="70 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </HandWaving>
  )
}

export function Home() {
  return (
    <HomeContainer>
      <PersonalCard>
        <ImageContainer>
          <img src={Foto} alt="" />
        </ImageContainer>
        <header>
          <p>
            Olá! <WavingHand />
          </p>
          <p>
            Sou Nathalia, tenho 26 anos e mudei recentemente para Portugal.
            Possuo Autorização de Residência, NIF e NISS. Procuro oportunidades
            de trabalho onde eu possa aprender e agregar para a empresa. Fico a
            diposição!
          </p>
        </header>

        <body>
          <p>
            <PhoneCall size={18} />
            &nbsp;
            <a href="https://wa.me/351915493564">+351 915 493 564</a>
          </p>

          <p>
            <EnvelopeSimple size={18} />
            &nbsp;
            <a href="mailto:ribeiropascoaln@gmail.com">
              ribeiropascoaln@gmail.com
            </a>
          </p>

          <p>
            <LinkedinLogo size={18} />
            &nbsp;
            <a href="https://www.linkedin.com/in/nathaliapr/">LinkedIn</a>
          </p>

          <p>
            <GithubLogo size={18} />
            &nbsp;
            <a href="https://github.com/npribeiro">GitHub</a>
          </p>

          <p>
            <NavigationArrow size={18} />
            &nbsp;
            <a href="https://goo.gl/maps/tFagtJgZVkGWJfmCA">
              Sacavém, Loures, PT
            </a>
          </p>
        </body>

        <Skills />
      </PersonalCard>

      <Divider orientation="vertical" />

      <InfoContainer>
        <h1>NATHALIA PASCOAL RIBEIRO</h1>

        <Jobs />
        <Education />
        <Language />
      </InfoContainer>
    </HomeContainer>
  )
}
