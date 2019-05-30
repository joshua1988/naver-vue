<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-md mx-auto">
      <data-provider url="contacts.json" class="mb-8">
        <div class="card" slot-scope="{ response: contacts, loading }">
          <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>
          <div>
            <div v-for="contact in contacts" :key="contact.id" class="flex items-center spaced-y-6">
              <img :src="contact.picture.medium" class="h-12 w-12 rounded-full block mr-2" alt="">
              <div>
                <div class="font-bold">
                  {{ contact.name.first }} {{ contact.name.last }}
                </div>
                <div class="text-grey-dark">
                  {{ contact.email }}
                </div>
              </div>
            </div>
          </div>
          <!-- TODO: 데이터를 받아오는 동안 로딩 상태 표시 -->
        </div>
      </data-provider>
    </div>
  </div>
</template>

<script>
import DataProvider from './components/DataProvider.vue';

export default {
	components: {
		'data-provider': DataProvider,
	},
};
</script>

<style src="./assets/css/app.css"/>