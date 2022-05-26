import { rest } from 'msw';

const handler = [
  rest.get('/api/products', (req, res, ctx) => {
    const errorCode = req.url.searchParams.get('error_code');

    if (errorCode) {
      return res(ctx.status(errorCode));
    }
    return res(
      ctx.status(200),
      ctx.delay(4000),
      ctx.json({
        items: [
          { name: 'product1' },
          { name: 'product2' },
        ],
      }),
    );
  }),
];

export default handler;
