<template>
  <div class="flex-1">
    <div class="bg-black flex justify-center">
      <div class="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <Player>
          <Youtube videoId="OOn3BSGiMoo" />
          <DefaultUi />
        </Player>
      </div>
    </div>

    <div class="p-8 max-w-[1100px] mx-auto">
      <div class="flex items-start gap-16">

        <div class="flex-1">
          <h1 class="text-2xl font-bold">
            Lorem ipsun dolor et sumi aondeai kapa
          </h1>
          <p class="mt-4 text-gray-200 leading-relaxed">
            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
          </p>

          <div class="flex items-center gap-4 mt-6">
            <img
              src="https://github.com/maikelneris.png"
              class="h-16 w-16 rounded-full border-2 border-blue-400"
            />

            <div class="leading-relaxed">
              <strong class="font-bold text-2xl block">Maikel Neris</strong>
              <span class="text-gray-200 block text-sm">Lorem ipsun dolor</span>
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