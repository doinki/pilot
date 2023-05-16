import { PokemonList } from '@/components';

import Layout from './pages/[page]/layout';

const Home = async () => {
  return (
    // @ts-expect-error Async Server component
    <Layout params={{ page: '1' }}>
      {/* @ts-expect-error Async Server component */}
      <PokemonList page={0} />
    </Layout>
  );
};

export default Home;
