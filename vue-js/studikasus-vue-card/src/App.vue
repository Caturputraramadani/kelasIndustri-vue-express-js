<template>
  <div class="row-service">
    <card v-for="item in data" :title="item.title" :description="item.description" :date="item.date" :name="item.name" :img="item.img" :avatar="item.avatar">
      <img :src="item.img" alt="Card Image" />
    </card>
  </div>
</template>

<script>
import Card from '@/components/my-components/card.vue'

export default {
  components: {
    Card,
  },
  data() {
    return {
      data: [
        {
          title: 'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
          description: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt odit ipsam nemo dolorum ab neque soluta beatae sunt. Sapiente, praesentium rerum. Accusamus autem tenetur iste est et numquam vitae fuga a optio.',
          img: '/faltform.jpg', 
          avatar: '/harrypot.jpg', 
          date: '31 Oktober 2023',
          name: 'Harry Potter',
        }
      ],
    };
  },
};
</script>
<style>

</style>