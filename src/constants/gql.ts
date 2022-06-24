import { gql } from "@apollo/client";

export const GET_LESSON_BY_SLUG = gql `
  query GetLessonBySlug($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        avatarURL
        bio
        name
     }
    }
  }`;


export const GET_LESSONS_QUERY = gql`
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