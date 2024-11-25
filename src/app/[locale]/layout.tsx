import "./globals.css";
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server";
import {getTranslations} from 'next-intl/server';

interface RootLayoutProps {
  children: React.ReactNode,
  params: Promise<{
    locale: string;
  }>
}

 
export async function generateMetadata({
  params: {locale}
} : any) {
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title')
  };
}
export default async function LocalLayout({
  children,
  params: { locale }
}: any) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body>
        <div className="">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
