import "./globals.css";

export const metadata = {
  title: 'Khalifrex AI - Your Smartest Chatbot',
  description: 'Chat with Khalifrex AI — a modern AI assistant designed to help you with anything from coding to conversation.',
  keywords: ['Khalifrex', 'AI chatbot', 'Next.js AI', 'OpenAI bot', 'JavaScript Assistant'],
  authors: [{ name: 'Saleh Sani Saleh', url: 'https://khalifrex.dev' }],
  icons: {
    icon: '/favicon.png', // can be .png, .svg, or .ico
  },
  openGraph: {
    title: 'Khalifrex AI',
    description: 'Your intelligent assistant built with modern tech and AI.',
    url: 'https://your-deployed-domain.com',
    siteName: 'Khalifrex AI',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Khalifrex AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalifrex AI',
    description: 'Your intelligent assistant built with modern tech and AI.',
    creator: '@khalifrex',
    images: ['/og-image.png'],
  },
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
