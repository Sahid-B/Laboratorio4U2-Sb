import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

test('muestra la información institucional', () => {
    render(<Footer />)
    expect(
        screen.getByText(/Portal de Asignaturas/i)
    ).toBeInTheDocument()
})