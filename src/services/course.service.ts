import http from "@/lib/http";
import {
  CourseListResType,
  CourseResType,
} from "@/schemaValidations/course.schema";

const getCourseServices = {
  getList: (
    dirName: "course_undergraduate" | "course_graduate" | "non-degree",
    lang: string,
    options?: { [key: string]: any }
  ) => {
    return http.get<CourseListResType>(
      `/api/course/${dirName}${lang ? `?lang=${lang}` : ""}`,
      { ...options }
    );
  },
  getCourse: (
    dirName: "course_undergraduate" | "course_graduate" | "non-degree",
    idCourse: string,
    lang: string,
    options?: { [key: string]: any }
  ) => {
    return http.get<CourseResType>(
      `/api/course/${dirName}/${idCourse}${lang ? `?lang=${lang}` : ""}`
    );
  },
};

export { getCourseServices };
