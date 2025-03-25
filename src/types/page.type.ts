export interface RequestProps {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<{ page?: number }>;
}
