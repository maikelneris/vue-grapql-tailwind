<template>
  <aside class="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
    <h3 class="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
      Cronograma de aulas
    </h3>

    <div class="flex flex-col">
      <ApolloQuery
        :query="gql => gql`
          query GetLessonsQuery {
            lessons(orderBy: publishedAt_ASC, stage: PUBLISHED) {
              id
              lessonType
              availableAt
              title
              slug
            }
          }
        `" 
      >
        <template v-slot="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occurred</div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">

            <Lesson
              v-for="lesson in data.lessons"
              :key="lesson.id"
              :title="lesson.title"
              :availableAt="new Date(lesson.availableAt)"
              :slug="lesson.slug"
              :isLive="lesson.lessonType==='live' ? true : false" />

          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </ApolloQuery>

      
    </div>
  </aside>
</template>

<script>
import Lesson from './Lesson.vue';

export default {
  name: 'Sidebar',
  components: {
    Lesson
  }
}
</script>