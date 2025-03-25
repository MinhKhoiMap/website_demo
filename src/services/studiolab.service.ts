import http from "@/lib/http";
import {
  CollaborationStudioCardType,
  CollaborationStudioListResType,
  CollaborationStudioProjectResType,
} from "@/schemaValidations/studiolab.schema";

const getCollaborationServices = {
  getList: (
    page: number | undefined = undefined,
    lang: string,
    options?: { [key: string]: any }
  ) => {
    return http.get<CollaborationStudioListResType>(
      `api/studiolab/collaboration_studio${lang ? `?lang=${lang}` : ""}${
        page ? `&page=${page}` : ""
      }`,
      { ...options }
    );
  },
  getProject: (id: string, lang: string, options?: { [key: string]: any }) => {
    return http.get<CollaborationStudioProjectResType>(
      `api/studiolab/collaboration_studio/${id}${lang ? `?lang=${lang}` : ""}`,
      { ...options }
    );
  },
};

const getISCMServices = {
  getList: (
    page: number | undefined = undefined,
    lang: string,
    options?: { [key: string]: any }
  ) => {
    return http.get<CollaborationStudioListResType>(
      `api/studiolab/iscm_studio${lang ? `?lang=${lang}` : ""}${
        page ? `&page=${page}` : ""
      }`,
      { ...options }
    );
  },
  getProject: (id: string, lang: string, options?: { [key: string]: any }) => {
    return http.get<CollaborationStudioProjectResType>(
      `api/studiolab/iscm_studio/${id}${lang ? `?lang=${lang}` : ""}`,
      { ...options }
    );
  },
};

export { getCollaborationServices, getISCMServices };
