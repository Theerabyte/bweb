import { LanguageProvider } from '@/[language]/LanguageContext';
import "@/app/[styles]/globals.css";
import Nav from "@/components/Nav";
import Bav from "@/components/Bav";

export const metadata = {
  title: "Naomi Bächler"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <LanguageProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Nav />
            <main style={{ flex: 1, padding: '20px' }}>
              {children}
            </main>
            <Bav />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
