import "./globals.css";
import Navbar from "@/components/Navbar";
import { SettingsProvider } from './context/SettingsContext';


export const metadata = {
  title: "Ayan's World",
  description: "Welcome to my website :3",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`overflow-hidden max-h-screen `}>
          <SettingsProvider>
            <Navbar />
            {children}
          </SettingsProvider>
        </body>
      </html>
      
  );
}
