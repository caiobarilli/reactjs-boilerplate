import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading>Reactjs Boilerplate</Heading>)

    expect(
      screen.getByRole('heading', { name: /Reactjs Boilerplate/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading')).toHaveStyle({
      color: theme.colors.black
    })
  })
})
