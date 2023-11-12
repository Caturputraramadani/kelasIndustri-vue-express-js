<template>
    <div class="portofolio">
        <h3>Portfolio kami</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, atque.</p>
        <div class="category">
            <span v-for="category in DataCategories" @click="filter(category.id)">{{ category.title }}</span>
        </div>
        <div class="row-portofolio">
            <Card v-for="item in filteredData" :portfolio="item" :key="item.id"></Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Portfolio/Card.vue';
import { Get } from '@/Api/index.js';

export default {
    components: {
        Card
    },
    data() {
        return {
            DataCategories: [],
            selectedCategory: null, // Tambahkan variabel untuk menyimpan kategori yang dipilih
            data: [], // Ganti DataPortfolio menjadi data untuk menyimpan semua data portofolio
        }
    },
    methods: {
        async filter(id) {
            this.selectedCategory = id; // Simpan id kategori yang dipilih
        }
    },
    computed: {
        filteredData() {
            if (this.selectedCategory === null) {
                return this.data; // Tampilkan semua data jika tidak ada kategori yang dipilih
            }
            return this.data.filter(item => item.category_id === this.selectedCategory);
        }
    },
    async created() {
        const responseCategories = await Get('http://localhost:9000/api/categories');
        this.DataCategories = responseCategories.data;

        const responseData = await Get('http://localhost:9000/api/portfolio');
        this.data = responseData.data.data; // Simpan semua data portofolio
    },
}
</script>
<style >
.portofolio {
    margin-top: 80px;

}

.portofolio h3 {
    margin: auto;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 48px;
    line-height: 70px;
    color: #042181;
    margin-bottom: 15px;
    text-align: center;
}

.portofolio p {
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    color: #4F556A;
    max-width: 680px;
    margin: auto;
    margin-top: 14px;
    margin-bottom: 25px;
    text-align: center;
  
}

.portofolio p span {
    color: gray;
}

.row-portofolio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}


@media screen and (max-width: 600px) {
    .row-portofolio {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
    }
}


</style>