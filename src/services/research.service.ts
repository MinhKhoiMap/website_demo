import http from "@/lib/http";
import {
  BookResType,
  PublicationResType,
} from "@/schemaValidations/research.schema";

const endpointRoot = "api/research";

const getPublicationList = {
  getList: (
    lang: string,
    category:
      | "framework transition"
      | "glocal design"
      | "human centric approach"
      | "urban system"
      | "tech solutions"
  ) => {
    console.log(`${endpointRoot}/publications/${category}?lang=${lang}`);
    return http.get<PublicationResType>(
      `${endpointRoot}/publications/${category}?lang=${lang}`
    );
  },
};

const getBookList = {
  getList: (lang: string) => {
    return http.get<BookResType>(`${endpointRoot}/books?lang=${lang}`);
  },
};

export { getPublicationList, getBookList };
