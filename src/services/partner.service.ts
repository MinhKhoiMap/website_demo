import http from "@/lib/http";
import {
  PartnerCardType,
  PartnerListResType,
} from "@/schemaValidations/partner.schema";

const endpoint = "/api/partner";

const getPartnerServices = {
  getList: (page: number | undefined = undefined, lang: string) =>
    http.get<PartnerListResType>(`${endpoint}${lang ? `?lang=${lang}` : ""}`),
};

export { getPartnerServices };
