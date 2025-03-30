export default async function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      AfterLoginLayout
      {children}
    </div>
  );
}
