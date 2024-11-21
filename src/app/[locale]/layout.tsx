import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    locale: string;
  }
}

export default function LocalLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
          <h1>Header</h1>
          <div className="flex-grow mt-20">
            {children}
          </div>
          <h1>Footer</h1>
        </div>
      </body>
    </html>
  );
}
