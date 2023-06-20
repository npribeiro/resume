import classNames from 'classnames'
import { changeLanguage } from 'i18next'
import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitch.module.scss'

export const LanguageSwitch = () => {
  const { i18n } = useTranslation()
  const language = i18n.language

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value)
  }

  return (
    <div className="select">
      <select
        value={language}
        onChange={handleLanguageChange}
        className={classNames(styles.select, styles[language])}
      >
        <option selected value="pt">
          Português
        </option>
        <option value="en">English </option>
      </select>
    </div>
  )
}
