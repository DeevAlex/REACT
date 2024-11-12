import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);
    // expect(screen.getByRole('img', { name: 'titulo1' })).toBeInTheDocument() // espera encontrar uma imagem com o titulo 'titulo1' no documento
    expect(screen.getByRole('img', { name: 'titulo1' })).toHaveAttribute('src', 'img/img.png'); // espera encontrar uma imagem com o titulo 'titulo1' e com o atributo 'src' contendo 'img/img.png'

    expect(screen.getByRole('heading', { name: /titulo1/i })).toBeInTheDocument(); // espera encontrar um h1 a h6 no documento escrito 'titulo1'

    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot(); // é como se tirasse foto do nosso componente e mostra-se para gente, ele garante que nosso componente não foi mudado porque ele tem que estar igual ao snapshot, se pressionar 'u' a snapshot é atualizada
  });
});
