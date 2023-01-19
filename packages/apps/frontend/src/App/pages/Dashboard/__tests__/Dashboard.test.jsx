import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { store } from 'App/store'
import { Provider } from 'react-redux'

import { Dashboard } from '../Dashboard'

const Component = (props) => {
  return (
    <Provider store={store}>
      <Dashboard {...props} />
    </Provider>
  )
}

describe('Dashboard', () => {
  it('should render', () => {
    render(<Component />)

    expect(screen.getByText(/select device type/i)).toBeInTheDocument()
  })
})
