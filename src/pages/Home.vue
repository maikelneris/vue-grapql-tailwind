<template>
  <div class="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
    <div class="w-full max-w-[1100px] flex justify-between items-center mt-28 mx-auto">
      <div class="max-w-[640px]">
        <Logo />

        <h1 class="mt-8 text-[2.5rem] leading-tight">
          Construa uma <strong class="text-blue-500">aplicação completa</strong>, do zero, com <strong class="text-blue-500">Vue JS</strong>
        </h1>
        <p class="mt-4 text-gray-200 leading-relaxed">
          Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
        </p>
      </div>

      <div class="p-8 bg-gray-700 border rounded border-gray-500 max-w-[390px]">

        <ApolloMutation
          :mutation="gql => gql`
          mutation CreateSubscriber($name: String!, $email: String!) {
            createSubscriber(data: {name: $name, email: $email}) {
              id
            }
          }
          `"
          :variables="{
            name,
            email
          }"
          @done="onCreateSubscriber"
        >
          <template v-slot="{ mutate, loading, error }">
            
            <h2 class="text-2xl block font-bold mb-6">
              Inscreva-se gratuitamente
            </h2>
            <div class="flex flex-col gap-2 w-full">
              <input
                class="bg-gray-900 rounded px-5 h-14"
                type="text"
                v-model="name"
                placeholder="Seu nome completo"
              >
              <input
                class="bg-gray-900 rounded px-5 h-14"
                type="email"
                v-model="email"
                placeholder="Digite seu email"
              >
              <button :disabled="loading" @click="mutate()" type="submit" class="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors">
                Garantir minha vaga
              </button>
            </div>

            <p v-if="error">An error occurred: {{ error }}</p>
          </template>
        </ApolloMutation>

        
      </div>

    </div>
    
    <img src="@/assets/print-mockup.png" class="mt-10" />
  </div>
</template>

<script>
import Logo from '../components/Logo'
export default {
  name: 'Home',
  components: {
    Logo
  },
  data() {
    return {
      name: 'Maikel',
      email: 'mike@decodeweb.com.br'
    }
  },
  methods: {
    onCreateSubscriber() {
      alert('ok');
    }
  }
}
</script>