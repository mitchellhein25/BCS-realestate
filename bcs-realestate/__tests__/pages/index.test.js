// __tests__/pages/index.test.js

import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'

describe('Home page load', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /Bryan-College Station Real Estate Investing/i,
        })

        expect(heading).toBeInTheDocument()
    })
})