<template>
  <div class="flex-1">

    <ApolloQuery
      :query="gql => gql`
        query GetLessonBySlug($slug: String!) {
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
        }
      `"
      :variables="{ slug: lessonSlug }"
    >

      <template v-slot="{ result: { loading, error, data } }">
        
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occurred</div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">

            <div class="bg-black flex justify-center">
              <div class="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                <Player>
                  <Youtube :videoId="data.lesson.videoId" />
                  <DefaultUi />
                </Player>
              </div>
            </div>

            <!--<div class="bg-black flex justify-center">
              <div class="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                <iframe :src="`https://www.youtube.com/embed/${data.lesson.videoId}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>-->

            <div class="p-8 max-w-[1100px] mx-auto">
              <div class="flex items-start gap-16">

                <div class="flex-1">
                  <h1 class="text-2xl font-bold">
                    {{ data.lesson.title }}
                  </h1>
                  <p class="mt-4 text-gray-200 leading-relaxed">
                    {{ data.lesson.description }}
                  </p>

                  <div class="flex items-center gap-4 mt-6">
                    <img
                      :src="data.lesson.teacher.avatarURL"
                      class="h-16 w-16 rounded-full border-2 border-blue-400"
                    />

                    <div class="leading-relaxed">
                      <strong class="font-bold text-2xl block">{{ data.lesson.teacher.name }}</strong>
                      <span class="text-gray-200 block text-sm">{{ data.lesson.teacher.bio }}</span>
                    </div>
                  </div>

                </div>

                <div class="flex flex-col gap-4">
                  <a href="#" class="btn btn-solid text-sm bg-green-500 hover:bg-green-700">
                    <PhDiscordLogo size="24" />
                    Comunidade do Discord
                  </a>
                  <a href="#" class="btn btn-outline text-sm border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900">
                    <PhLightning size="24" />
                    Acesse o desafio
                  </a>
                </div>
              </div>

              <div class="gap-8 mt-20 grid grid-cols-2">
                <a href="#" class="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                  <div class="bg-green-700 h-full p-6 flex items-center">
                    <PhFileArrowDown size="40" />
                  </div>  
                  <div class="py-6 leading-relaxed">
                    <strong class="text-2xl">Material complementar</strong>
                    <p class="text-sm text-gray-200 mt-2">
                      Acesse o material complementar para acelerar o seu desenvolvimento.
                    </p>
                  </div>  
                  <div class="h-full p-6 flex items-center">
                    <PhCaretRight size="40" />
                  </div>
                </a>

                <a href="#" class="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                  <div class="bg-green-700 h-full p-6 flex items-center">
                    <PhImage size="40" />
                  </div>  
                  <div class="py-6 leading-relaxed">
                    <strong class="text-2xl">Wallpapers exclusivos</strong>
                    <p class="text-sm text-gray-200 mt-2">
                      Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                    </p>
                  </div>  
                  <div class="h-full p-6 flex items-center">
                    <PhCaretRight size="40" />
                  </div>
                </a>
              </div>
              
            </div>

          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>

      </template>

    </ApolloQuery>

  </div>
</template>

<script>
import { PhDiscordLogo, PhLightning, PhFileArrowDown, PhCaretRight, PhImage } from 'phosphor-vue'
import { Player, Youtube, DefaultUi } from '@vime/vue'

export default {
  name: 'Video',
  props: {
    lessonSlug: String
  },
  components: {
    PhDiscordLogo,
    PhLightning,
    PhFileArrowDown,
    PhCaretRight,
    PhImage,
    Player,
    Youtube,
    DefaultUi
  }
}
</script>