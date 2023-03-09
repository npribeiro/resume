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

import { LanguageSwitch } from '../../components/languageSwitch'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <HomeContainer>
      <PersonalCard>
        <ImageContainer>
          <img src={Foto} alt="" />
        </ImageContainer>
        <header>
          <p>
            {t('personal.subtitle.one')} <WavingHand />
          </p>
          <p>{t('personal.subtitle.two')}</p>
        </header>

        <body>
          <p>
            <NavigationArrow size={18} />
            &nbsp;
            <a href="https://goo.gl/maps/tFagtJgZVkGWJfmCA">
              {t('body.title.one')}
            </a>
          </p>

          <p>
            <PhoneCall size={18} />
            &nbsp;
            <a href="https://wa.me/351915493564">{t('body.title.two')}</a>
          </p>

          <p>
            <EnvelopeSimple size={18} />
            &nbsp;
            <a href="mailto:ribeiropascoaln@gmail.com">
              {t('body.title.three')}
            </a>
          </p>

          <p>
            <LinkedinLogo size={18} />
            &nbsp;
            <a href="https://www.linkedin.com/in/nathaliapr/">
              {t('body.title.four')}
            </a>
          </p>

          <p>
            <GithubLogo size={18} />
            &nbsp;
            <a href="https://github.com/npribeiro">{t('body.title.five')}</a>
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
      <LanguageSwitch />
    </HomeContainer>
  )
}
