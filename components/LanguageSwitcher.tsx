import { Select, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function LanguageSwitcher() {
  const [cookie, setCookie] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { locale } = router;

  const switchLanguage = (e) => {
    const locale = e.target.value;
    router.push({ locale }, { locale }, { locale }, { shallow: true });
    if (cookie.NEXT_LOCALE !== locale) {
      setCookie('NEXT_LOCALE', locale, { path: '/' });
    }
  };

  return (
    <Select
      variant="outline"
      onChange={switchLanguage}
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
}
