import http from "@/lib/http";
import {
  ActivitiesListResType,
  ActivitiesResType,
} from "@/schemaValidations/activities.schema";

const endpoint = "api/activities";

const getActivitiesServices = {
  getList: (page: number | undefined = undefined, lang: string) =>
    http.get<ActivitiesListResType>(
      `${endpoint}${lang ? `?lang=${lang}` : ""}${page ? `&page=${page}` : ""}`
    ),
  getDetail: (slug: string, lang: string) =>
    http.get<ActivitiesResType>(
      `${endpoint}/${slug}${lang ? `?lang=${lang}` : ""}`
    ),
};

export { getActivitiesServices };
