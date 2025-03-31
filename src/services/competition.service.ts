import http from "@/lib/http";
import {
  CompetitionListResType,
  CompetitionResType,
} from "@/schemaValidations/competition.schema";

const endpointRoot = "api/competition";

const getCompetitionServices = {
  getList: (page: number | undefined = undefined, lang: string) =>
    http.get<CompetitionListResType>(
      `${endpointRoot}${lang ? `?lang=${lang}` : ""}${
        page ? `&page=${page}` : ""
      }`
    ),
  getDetail: (slug: string, lang: string) =>
    http.get<CompetitionResType>(
      `${endpointRoot}/${slug}${lang ? `?lang=${lang}` : ""}`
    ),
};

export { getCompetitionServices };
