<template>
  <p>-----------------------Templating---------------------------</p>
  {{ nama }}
  {{ number }}
  <div v-html="kelas"></div>
  <p>-----------------------Data Binding-------------------------</p>
  <button :disable="nonaktif">button</button>
  <h1 v-bind="property">Chestnut Wand</h1>
  <!-- <input :typeInput="text"> -->
  <!-- {{ count + 2 }} -->
  {{ count == 0 ? count + 1 : count + 2 }}
  <p>----------------------------v-if----------------------------</p>
  <button v-if="show">submit</button>

  <div v-if="count == 1"> nomber 1</div>
  <div v-else-if="count == 2"> nomber 2</div>
  <div v-else> lebih dari 2</div>

  <p>---------------------computed dan method---------------------</p>
  <button @click="counterNumber">{{ counterButton }}</button>
  <button @click="countComputed"> Computed {{ numberComputed }}</button>

  <input :type="typeInput">
  <button @click="showPassword">show password</button>
  <p>---------------------class dan style---------------------</p>
  <ul>
    <li class="fs40px" :class="{
      active: isActive,
      fs40px: isActive
    }">
      Magic
    </li>

  </ul>
  <button @click="ubahWarna">ubah warna</button>
  <p>---------------------list randering-----------------</p>
  <ul>
    <li v-for="(item, index) in listHouses">{{ item }} {{ index }}</li>
  </ul>
  <p>---------------------v-model-----------------</p>
  <input type="text" v-model="inputKelas">
  {{ inputKelas }}
</template>

<script>
export default {
  data() {
    return {
      inputKelas: '',
      listHouses: ['Gryffindor', 'Raven Claws', 'Slytherin', 'Huflepuff'],
      counterButton: 0,
      numberComputed: 0,
      count: 4,
      nama: 'Harry Potter',
      number: 1,
      kelas: '<h1>Hogwarts Gryffindor</h1>',
      nonaktif: true,
      property: {
        id: 1,
        class: 'color'
      },
      typeInput: 'password',
      show: true,
      isActive: true

    }
  },

  methods: {
    counterNumber() {
      this.counterButton += 1;
    },
    showPassword() {
      if (this.typeInput == 'password') {
        this.typeInput = 'text'
      } else {
        this.typeInput = 'password'
      }
    },
    ubahWarna() {
      if (this.isActive == true) {
        this.isActive = false;
      }
      else {
        this.isActive = true;
      }
    }

    
  },
  computed: {
    countComputed() {
       this.numberComputed += 1;
    }
  }
}
</script>

<style>
.color {
  color: brown;
}

* {
  text-align: center;
}
.fs40px{
  font-size: 50px;
}

.active{
  color: blueviolet;
}

</style>