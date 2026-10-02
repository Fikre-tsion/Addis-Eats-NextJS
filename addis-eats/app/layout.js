import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
