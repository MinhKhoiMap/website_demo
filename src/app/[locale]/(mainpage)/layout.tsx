import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import PageHeaderProvider from "../../context";

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageHeaderProvider>
      <Header />
      {children}
      <Footer />
    </PageHeaderProvider>
  );
}
