import { gql, useQuery } from '@apollo/client'
import { Lesson } from './../../interface/lesson'

const GET_LESSONS_QUERY = gql`
    query {
        lessons {
            id
            title
        }
    }
`;

export default function App() {
  const { loading, error, data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  if (loading) return <p>Carregado dados...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return (
    <div className="bg-violet-900">
      <ul>
          {data?.lessons.map((lesson) => {
            return <li key={lesson.id}>{lesson.title}</li>;
          })}
      </ul>
    </div>
  )
}