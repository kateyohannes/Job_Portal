import { useTranslations } from "next-intl";
import Nav from "../(components)/Navigation";


export default function RootPage() {
  const t = useTranslations("Index")
  return (
    <div>
      <Nav />
      {t('title')}
    </div>
  );
}
