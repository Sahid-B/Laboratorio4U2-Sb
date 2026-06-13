import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { PersonajesPage } from './personajes'

global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                results: [
                    {
                        id: 1,
                        name: 'Rick Sanchez',
                        species: 'Human',
                        image: 'rick.png'
                    }
                ]
            })
    })
)

test('carga personajes desde la API', async () => {
    render(<PersonajesPage />)
    expect(
        await screen.findAllByText('Rick Sanchez')
    ).toBeTruthy()
})