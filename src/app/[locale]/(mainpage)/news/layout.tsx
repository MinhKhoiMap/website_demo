import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import PageHeader from "@/components/partials/pageHeader";

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader />
      {children}
    </>
  );
}
