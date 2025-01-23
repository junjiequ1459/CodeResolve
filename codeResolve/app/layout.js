import Link from 'next/link'; // Import the Link component
import './global.css'; // Import global CSS


export const metadata = {
  title: 'Code Resolve - Unlock Your Potential',
  description: 'Join Code Resolve to explore amazing opportunities.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/about-us">
              About Us
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Code Resolve All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
