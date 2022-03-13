import { Select, useColorModeValue } from '@chakra-ui/react';
import { useTranslation, i18n } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { UrlObject } from 'url';

const LanguageSwitcher: FunctionComponent<{
  children?: React.ReactNode;
}> = () => {
  const [cookie, setCookie] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const switchLanguage = (e) => {
    e.preventDefault();
    const selectedLocale = e.target.value;
    console.log('on switch', selectedLocale);
    router.push({ pathname, query }, asPath, {
      locale: selectedLocale,
    });
    if (cookie.NEXT_LOCALE !== selectedLocale) {
      setCookie('NEXT_LOCALE', selectedLocale, { path: '/' });
    }
    console.log('after switch', selectedLocale);
  };
  console.log('cookie', cookie);
  return (
    <Select
      variant="outline"
      onChange={switchLanguage}
      defaultValue={router.locale}
      bg={useColorModeValue('brand.100', 'brand.700')}
      ml="0.5rem"
    >
      <option value="de">🇩🇪</option>
      <option value="en">🇬🇧</option>
      <option value="es">🇪🇸</option>
      <option value="fr">🇫🇷</option>
    </Select>
  );
};

export default LanguageSwitcher;
