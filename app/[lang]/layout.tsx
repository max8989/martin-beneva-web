export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
  ];
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
