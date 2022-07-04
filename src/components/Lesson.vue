<template>
  <router-link :to="`/event/lesson/${slug}`" class="block pb-8 group">
    <span class="text-gray-300">
      {{ availableAtFormat }}
    </span>

    <div class="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500" :class="{ 'bg-green-500': (isActiveRoute)  }">
      <header class="flex items-center justify-between">
        <span v-if="isLessonAvailable" class="text-sm font-medium flex items-center gap-2" :class="{ 'text-white': isActiveRoute, 'text-blue-500': !isActiveRoute }">
          <PhCheckCircle :size="20" />
          Conteúdo liberado
        </span>

        <span v-else class="text-sm text-orange-500 font-medium flex items-center gap-2">
          <PhLock :size="20" />
          Em breve
        </span>
        
        <span class="uppercase text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
          {{ isLive ? 'Ao vivo' : 'Aula Prática' }}
        </span>
      </header>

      <strong class="mt-5 block" :class="{ 'text-white': isActiveRoute, 'text-gray-200' : !isActiveRoute  }">
        {{ title }}
      </strong>
    </div>
  </router-link>
</template>

<script>
import { PhCheckCircle, PhLock } from 'phosphor-vue'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    slug: String,
    availableAt: {
      type: Date,
      required: true
    },
    isLive: {
      type: Boolean,
      default: false
    }
  },
  name: 'Lesson',
  components: {
    PhCheckCircle,
    PhLock
  },
  data() {
    return {
      isLessonAvailable: isPast(this.availableAt) ? true : false,
      availableAtFormat: format(this.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {locale: ptBR}),
      routeSlug: this.$route.params.slug,
      isActiveRoute: false 
    }
  },
  beforeRouteUpdate(to, from, next) {
    alert(to, from, next)
  },
  watch: {
    '$route'(to) {
      if(to.params.slug == this.slug) {
        this.isActiveRoute = true;
      } else {
        this.isActiveRoute = false;
      }
    }
  },
  mounted() {
    if(this.slug==this.routeSlug) this.isActiveRoute = true;
  }
}
</script>