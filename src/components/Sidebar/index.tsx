import { gql, useQuery } from "@apollo/client";
import { CardLessons } from "../CardLessons";
import { LessonProps } from "../../interface/lesson";
import { FadingBalls } from "react-cssfx-loading";

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      stage
      title
      lessonType
      availableAt
    }
  }

`;

export function Sidebar() {
  const { loading, error, data } = useQuery<{ lessons: LessonProps[] }>(GET_LESSONS_QUERY);
  if (loading) return (
    <FadingBalls width="50px" height="50px" duration="4s" />
  )
  if (error) return <p>Error :(</p>;
  return (
    <aside className="w-full md:w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aula
      </span>

      <div className="flex flex-col gap-8">
      {data?.lessons.map((lesson) => {
            return <CardLessons
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              lessonType={lesson.lessonType} id={""}            />;
          })}
      </div>
    </aside>
  );
}
