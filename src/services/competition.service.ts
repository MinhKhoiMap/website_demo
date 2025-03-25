import http from "@/lib/http";
import {
  CompetitionCardType,
  CompetitionListResType,
  CompetitionResType,
} from "@/schemaValidations/competition.schema";
import { LangType } from "@/types/lang.type";

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
