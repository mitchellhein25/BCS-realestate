// __tests__/pages/banks.test.js

import { render, screen } from '@testing-library/react'
import Banks from '../../pages/banks'
import '@testing-library/jest-dom'

describe('Banks page load', () => {
    it('renders a heading', () => {
        render(<Banks />)

        const heading = screen.getByRole('heading', {
            name: /B\/CS Banks/i,
        })

        expect(heading).toBeInTheDocument()
    })
})