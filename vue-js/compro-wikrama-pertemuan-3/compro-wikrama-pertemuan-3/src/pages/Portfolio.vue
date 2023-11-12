<template>
    <div class="container">
<Portfolio :data="DataPortfolio"></Portfolio>
    </div>
</template>
<script>
import Portfolio from '@/components/Beranda/Portfolio.vue'
import { Get } from '@/Api/index.js';
export default {
    components:{
        Portfolio
    },
   data() {
        return {
            DataPortfolio: [],
            DataCategories: []
        }
    },
    async created() {
        const responsePortfolio = await Get('http://localhost:9000/api/portfolio');
        this.DataPortfolio = responsePortfolio.data.data;

    }
}
</script>

<style>
.category {
    margin: 10px 0 35px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

.category span {
    background-color: #bdcdff;
    padding: 10px 15px;
    font-weight: 500;
    border-radius: 20px;
    margin: 5px;
    cursor: pointer;
    
}

.row-portofolio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

.portofolio {
    margin-top: 10px;
}

.portofolio h3 {
    margin-top: 10px;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 0;
    color: #042181;
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
}

.portofolio p span {
    color: gray;
}

@media screen and(max-width: 600px) {
    .row-portofolio {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
    }

    .portofolio h4 {
        font-size: 20px;
    }

}
</style>