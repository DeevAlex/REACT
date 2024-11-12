import { TextInput } from '.'
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("<TextInput />", () => {

    it ('should have a value of searchValue', () => {

        const fn = jest.fn()
        render(<TextInput  handleChange={fn} searchValue={'testando'} />)

        const input = screen.getByPlaceholderText(/Informe o titulo do post/i)
        expect(input).toBeInTheDocument()
        expect(input.value).toBe('testando')

    })

    it ('should call handleChange function on each key pressed', () => {

        const fn = jest.fn()
        render(<TextInput  handleChange={fn} />)

        const input = screen.getByPlaceholderText(/Informe o titulo do post/i)

        const value = 'o valor'

        userEvent.type(input, value) // onde vai digirar e o valor que vai ser digitado (type é o evento de digitar)

        expect(input.value).toBe(value)
        expect(fn).toHaveBeenCalledTimes(value.length) // para saber se foi digitado o tanto de letras que tem na palavra/frase
        
    })

    it('should match snapshot', () => {

        const fn = jest.fn()
        const { container } = render(<TextInput  handleChange={fn} />)

        expect(container).toMatchSnapshot()

    })

})