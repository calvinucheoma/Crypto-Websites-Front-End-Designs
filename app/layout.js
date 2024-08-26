import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CoinConnect',
  description: 'Your trusted crypto exchange platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div>{children}</div>
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
