import { Select, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { useCookies } from 'react-cookie';
import { UrlObject } from 'url';

const LanguageSwitcher: FunctionComponent<{ children?: never }> = () => {
  const [cookie, setCookie] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { locale } = router;

  const switchLanguage = (e) => {
    const locale = e.target.value;
    router.replace(router.pathname, router.pathname, { locale });
    if (cookie.NEXT_LOCALE !== locale) {
      setCookie('NEXT_LOCALE', locale, { path: '/' });
    }
  };

  return (
    <Select
      variant="outline"
      onChange={(locale) => switchLanguage(locale)}
      defaultValue={locale}
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
