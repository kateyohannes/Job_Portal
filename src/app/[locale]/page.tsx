import { useTranslations } from "next-intl";


export default function RootPage() {
  const t = useTranslations("Index")
  return (
    <div>
      {t('title')}
    </div>
  );
}
