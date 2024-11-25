import "./globals.css";
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server";

interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    locale: string;
  }
}

export default async function LocalLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {
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
