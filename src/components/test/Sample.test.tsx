import { render, screen } from '@testing-library/react'

import { Sample } from '../Sample'

const testProps = { title: 'Hello, World!' }

describe('Sample', () => {
  it('renders title', () => {
    render(<Sample {...testProps} />)
    const { title } = testProps
    const screenTitle = screen.getByText(title)
    expect(screenTitle).toBeInTheDocument()
  })
})
