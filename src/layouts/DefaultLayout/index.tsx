import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LaytouContainer } from './styles'

export function DefaultLayout() {
  return (
    <LaytouContainer>
      <Header />
      <Outlet />
    </LaytouContainer>
  )
}
