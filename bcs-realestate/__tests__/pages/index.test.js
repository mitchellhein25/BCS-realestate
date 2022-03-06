// __tests__/pages/index.test.js

import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'

describe('Home page load', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /Everything you need to invest in BCS real estate!/i,
        })

        expect(heading).toBeInTheDocument()
    })
})