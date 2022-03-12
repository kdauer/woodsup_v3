import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NewsContainer from '../components/NewsContainer';
import nextI18NextConfig from '../next-i18next.config.js';

const Home = () => {
  const { t } = useTranslation('common', 'news');

  console.log('Woods Up e.v. - from Potsdam with ❤');

  return (
    <>
      <main>
        <Flex
          w={'full'}
          h={'100vh'}
          align="center"
          justify="center"
          bgImage={'url(/DSC073482.jpg)'}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        >
          <NewsContainer />
        </Flex>
      </main>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common', 'news'],
        nextI18NextConfig
      )),
    },
  };
}
export default Home;
