import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from '.';
import userEvent from '@testing-library/user-event';

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// const handlers = [
//   rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
//     return res(
//       ctx.json([
//         {
//           userId: 1, // isso é que vai ser mostrado ao invés do posts que estão na url dos posts
//           id: 1,
//           title: 'title1',
//           body: 'body 1',
//         },
//         {
//           userId: 2,
//           id: 2,
//           title: 'title2',
//           body: 'body2',
//         },
//         {
//           userId: 3,
//           id: 3,
//           title: 'title3',
//           body: 'body3',
//         },
//       ]),
//     );
//   }),
// ];

// const server = setupServer(...handlers);

describe('<Home />', () => {
  // Antes dos testes habilita o servidor a ficar ouvindo
  // beforeAll(() => {
  //   server.listen();
  // });

  // depois de cada teste resetar os handlers porque não queremos que um teste afete o outro
  // afterEach(() => server.resetHandlers());

  it('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não há nenhum post com esse titulo');
    await waitForElementToBeRemoved(noMorePosts); // espera que o p dizendo Não há nenhum post com esse titulo seja removido da tela, usado quando pegamos um conteudo de uma API ou de algo que seja assincrono
    screen.debug();

    const search = screen.getByPlaceholderText(/Informe o titulo do post/i);
    expect(screen.getByRole('heading', { name: 'qui est esse' })).toBeInTheDocument();
    // expect(screen.getByRole('heading', { name: 'quia et suscipit' })).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      }),
    ).toBeInTheDocument();
    userEvent.type(search, 'quia et suscipit');
    // expect(screen.queryByRole('heading', { name: 'qui est esse' })).toBeInTheDocument();
    // expect(screen.queryByRole('heading', { name: 'quia et suscipit' })).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {
        name: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      }),
    ).not.toBeInTheDocument();
    userEvent.clear(search);
    expect(screen.queryByRole('heading', { name: 'qui est esse' })).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {
        name: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      }),
    ).toBeInTheDocument();

    userEvent.type(search, 'blabla');
    expect(screen.getByText('Não há nenhum post com esse titulo')).toBeInTheDocument();
  });

  // depois dos testes fecha o servidor
  // afterAll(() => {
  //   server.close();
  // });
});

// testes .spec são unitarios
// testes .test são de integração

// o Mock Service Worker, mocka um serviço externo para gente, primeiro devemos criar os handlers (intercepta as urls chamadas), segundo importe o rest e o setupServer da biblioteca msw e msw/node
