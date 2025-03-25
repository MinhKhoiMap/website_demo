import { PageHeaderContextComponent } from "@/app/context";
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
      <PageHeaderContextComponent
        title="Members"
        description="ISCM Team proud to be an active and resilient team with glocal talents from various field. Together, we work to contribute to our lifelong journey towards sustainable regional and urban life, through educational and research activities."
      />
    </>
  );
}
