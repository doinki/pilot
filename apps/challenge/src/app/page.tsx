import Layout from './pages/[page]/layout';
import Page from './pages/[page]/page';

const Home = async () => {
  return (
    // @ts-expect-error Async Server component
    <Layout params={{ page: '1' }}>
      {/* @ts-expect-error Async Server component */}
      <Page params={{ page: '1' }} />
    </Layout>
  );
};

export default Home;
