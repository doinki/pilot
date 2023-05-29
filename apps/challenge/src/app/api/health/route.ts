export const GET = () => {
  return new Response('OK', { headers: { 'Cache-Control': 'no-store' } });
};
