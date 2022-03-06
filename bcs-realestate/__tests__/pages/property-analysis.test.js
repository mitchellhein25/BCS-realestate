// __tests__/pages/index.test.js

import { render, screen } from '@testing-library/react'
import PropertyAnalysis from '../../pages/property-analysis'
import '@testing-library/jest-dom'

describe('Property Analysis page load', () => {
    it('renders a heading', () => {
        render(<PropertyAnalysis />)

        const heading = screen.getByRole('heading', {
            name: /Property Analysis Calculator/i,
        })

        expect(heading).toBeInTheDocument()
    })
})