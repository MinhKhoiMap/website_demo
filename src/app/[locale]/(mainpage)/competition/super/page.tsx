import Card from "@/components/card";
import Pagination from "@/components/pagination";
import PageHeader from "@/components/partials/pageHeader";
import { getCompetitionServices } from "@/services/competition.service";
import { RequestProps } from "@/types/page.type";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  return (
    <>
      <PageHeader />
      <section className="section">
        <div className="container">
          <div className="row">{locale}</div>
        </div>
      </section>
    </>
  );
}
