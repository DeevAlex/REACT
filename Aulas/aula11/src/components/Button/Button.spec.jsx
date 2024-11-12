import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { Button } from '.'

describe('<Button />', () => {

    it('should render the button with the text "Load More"', () => {
        render(<Button text="Load More" />)

        expect.assertions(1) // espera-se ter 1 assersão, é mais comum em testes assincronos

        const button = screen.getByRole('button', {name: /load more/i })

        // expect(button).toHaveAttribute("class", "button") // Espera-se que a no atributo class tenha x conteudo
        expect(button).toBeInTheDocument() // verifica se está no documento

    })

    it('should call function on button click', () => {

        const fn = jest.fn() // fazendo o jest criar um mock simples ou seja uma função

        render(<Button text="Load More" onClick={fn} />)

        const button = screen.getByRole('button', {name: /load more/i })

        userEvent.click(button) // outra forma de fazer um evento click usado para quando é necessario uma forma natural
        // fireEvent.click(button) // simula um click 

        // expect(fn).toHaveBeenCalled() // checkando se a função foi chamada
        expect(fn).toHaveBeenCalledTimes(1) // checkando se a função foi chamada x vezes

    })

    it('should be disabled when disabled is true', () => {

        render(<Button text="Load More" disabled={true} />)

        const button = screen.getByRole('button', {name: /load more/i })


        expect(button).toBeDisabled() // checkando não está desativado

    })

    it('should be enabled when disabled is false', () => {

        render(<Button text="Load More" disabled={false} />)

        const button = screen.getByRole('button', {name: /load more/i })


        expect(button).toBeEnabled() // checkando não está desativado

    })

})

// Quando tem all é quando tem variaos e apenas query ou get sem all é que só tem um
// screen.query... não levanta erros (podemos usa-lo quando um elemento não está na tela fazendo se existia ou não na tela)
// screen.get... é usado quando sabemos que tem um elemento na tela (ele lenta erros)

// Comando do terminal para fazer um teste geral: npm test -- --coverage