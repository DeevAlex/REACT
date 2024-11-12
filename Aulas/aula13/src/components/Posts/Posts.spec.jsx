import { Posts } from '.';

const { render, screen } = require('@testing-library/react');

const props = {
  posts: [
    {
      id: 1,
      title: 'title 1',
      body: 'body 2',
      cover: 'img/img1.png',
    },
    {
      id: 2,
      title: 'title 2',
      body: 'body 2',
      cover: 'img/img2.png',
    },
    {
      id: 3,
      title: 'title 3',
      body: 'body 3',
      cover: 'img/img3.png',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3); // queremos todos os elementos que tenha algum heading com o titulo 'title', o toHaveLength(3) é que precisamos ter 3 headings no Posts
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3); // queremos todos os elementos que tenha img com o alt(name) 'title', o toHaveLength(3) é que precisamos ter 3 headings no Posts
    expect(screen.getAllByText(/body/i)).toHaveLength(3); // queremos todos os elementos que tenha algum heading com o titulo 'title', o toHaveLength(3) é que precisamos ter 3 headings no Posts
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.png');
  });

  it('should not render posts', () => {
    render(<Posts />);

    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument(); // estamos usando query porque é um elemento que não vai existir na tela
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
