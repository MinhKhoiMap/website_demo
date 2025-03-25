import http from "@/lib/http";
import {
  MemberListResType,
  MemberResType,
} from "@/schemaValidations/member.schema";

const endpointRoot = "api/people";

const getMemberServices = {
  getList: (
    dirName: "members" | "advisory" | "adjunctprofessors" | "network",
    page: number | undefined = undefined,
    lang: string
  ) => {
    return http.get<MemberListResType>(
      `${endpointRoot}/${dirName}${lang ? `?lang=${lang}` : ""}${
        page ? `&page=${page}` : ""
      }`
    );
  },
  getDetail: (
    dirName: "members" | "advisory" | "adjunctprofessors" | "network",
    idMember: string,
    lang: string
  ) => {
    return http.get<MemberResType>(
      `${endpointRoot}/${dirName}/${idMember}${lang ? `?lang=${lang}` : ""}`
    );
  },
};

export { getMemberServices };
