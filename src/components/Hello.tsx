import { currentUser } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';
import { Sponsors } from './Sponsors';

export const Hello = async () => {
  const t = await getTranslations('Dashboard');
  const user = await currentUser();

  return (
    <>
      <p>
        {`👋 `}
        {t('hello_message', {
          email: user?.primaryEmailAddress?.emailAddress ?? '',
        })}
      </p>
      <p>
        {t.rich('alternative_message', {
          url: () => (
            <a
              className="text-blue-700 hover:border-b-2 hover:border-blue-700"
              href="https://github.com/sachidananda-panigrahi/next-js-boilerplate"
            >
              This project repository
            </a>
          ),
        })}
      </p>
      <p>
        {t.rich('max_message', {
          url: () => (
            <a
              className="text-blue-700 hover:border-b-2 hover:border-blue-700"
              href="https://github.com/sachidananda-panigrahi/next-js-boilerplate"
            >
              This project repository
            </a>
          ),
        })}
      </p>
      <Sponsors />
    </>
  );
};
