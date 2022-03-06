// __tests__/pages/index.test.js

import { render, screen } from '@testing-library/react'
import Softwares from '../../pages/softwares'
import '@testing-library/jest-dom'

describe('Softwares page load', () => {
    it('renders a heading', () => {
        render(<Softwares />)

        const heading = screen.getByRole('heading', {
            name: /Softwares/i,
        })

        expect(heading).toBeInTheDocument()
    })
})