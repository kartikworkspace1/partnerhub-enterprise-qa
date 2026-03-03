export const getEnvCredentials = () => {
  const ENV = process.env.TEST_ENV || 'staging';

  if (ENV === 'production') {
    return {
      username: process.env.PROD_USERNAME!,
      password: process.env.PROD_PASSWORD!
    };
  }

  return {
    username: process.env.STAGING_USERNAME!,
    password: process.env.STAGING_PASSWORD!
  };
};


