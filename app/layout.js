import './globals.css';

export const metadata = {
  title: 'MBET INDIA PVT LTD | Building Digital Brands',
  description: 'MBET INDIA PVT LTD - Clean, Sleek & SEO Friendly Web and Mobile Application Development Company',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
