import focalPointLogo from '@assets/logo.png'
import Image from 'next/image';
import "./styles.scss"
import ptBr from 'dayjs/locale/pt-BR'
import dayjs from 'dayjs';

dayjs.locale(ptBr)

export function Header() {

  const todayWeek = dayjs().format('dddd')
  const todayWeekName = todayWeek.split('-').at(0)
  const date = dayjs().format('DD[ de ]MMMM[ de ]YYYY')

  return (
    <header className="header">
      <Image className="logoImage" src={focalPointLogo} alt="FocalPoint Logo" />
      <h2 className="greeting">Bem-vindo de volta, Marcus</h2>
      <p className="headerDate"><span style={{ textTransform: 'capitalize' }}>{`${todayWeekName}`}</span>{`, ${date}`}</p>
    </header>
  )
}