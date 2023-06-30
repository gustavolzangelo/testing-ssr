import Head from 'next/head';

export const getServerSideProps = async () => {
  const userAuth0Id = 'auth0|648a0bad04fbfef826858ae9';

  console.log('userAuth0Id', userAuth0Id);

  const userId = 'auth0|648a0bad04fbfef826858ae9';
  const companyId = 's6Lta52NGpeRjHszadzuF';

  console.log('userId', userId);
  console.log('companyId', companyId);

  return {
    props: {
      userId,
    companyId,
    },
  };
};

const AccountSettings = (props: any) => {
  console.log(props);
  return (
    <>
      <Head>
        <title>Middleware - Account Settings</title>
        <meta
          name="description"
          content="Account Settings for the application"
        />
      </Head>      
    </>
  );
};

export default AccountSettings;
