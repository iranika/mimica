<template>
  <q-page padding>
    <q-card v-if="auth.route === 'authenticated'">
      <q-card-section>
        {{ auth.user?.attributes.name }} 
      </q-card-section>
    </q-card>
    <q-card v-for="renka in models.data?.listRenkaLists?.items" :key="renka">
      <q-card-section>
        {{ renka }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useAuthenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import { API, graphqlOperation } from 'aws-amplify';
import { listRenkaLists } from '../graphql/queries';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { ListRenkaListsQuery } from 'src/API';

export default defineComponent({
  // name: 'PageName'
  components: {
  },
  setup(){
    const models = ref(<GraphQLResult<ListRenkaListsQuery>>{});
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const auth = useAuthenticator();
    onMounted(()=>{
      const load = async () => {
        models.value = await API.graphql(
          graphqlOperation(
            listRenkaLists
          )
        ) as GraphQLResult<ListRenkaListsQuery>
        //      models.value = await DataStore.query(RenkaList)
        console.log(models);
      }
      void load()
    })
    return {
      models,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      auth
    }
  }
})
</script>
