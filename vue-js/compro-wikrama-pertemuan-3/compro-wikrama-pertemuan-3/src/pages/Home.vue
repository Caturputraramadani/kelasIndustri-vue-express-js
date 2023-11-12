<template>
    <div class="container">
        <Beranda :data="DataHome"></Beranda>
        <Service :data="DataLayanan"></Service>
        <Portfolio :data="DataPortfolio"></Portfolio>
        <Blog :data="DataBlog"></Blog>
    </div>
</template>

<script>
import { Get } from '@/Api/index.js'

import Beranda from '@/components/Beranda/Beranda.vue';
import Service from '@/components/Beranda/Service.vue';
import Portfolio from '@/components/Beranda/Portfolio.vue';
import Blog from '@/components/Beranda/Blog.vue';

export default{
    components:{
        Beranda,
        Service,
        Portfolio,
        Blog
    },
    data() {
        return {
            DataHome: [],
            DataLayanan: [],
            DataPortfolio: [],
            DataBlog: [],
        }
    },
    async created(){
        // api untuk home
        const response = await Get('http://localhost:9000/api/home');
        this.DataHome = response.data;
        console.log(this.DataHome)
        // api untuk layanan
        const responseLayanan = await Get('http://localhost:9000/api/services');
        this.DataLayanan = responseLayanan.data.data;
        // api untuk portfolio
        const responsePortfolio = await Get('http://localhost:9000/api/portfolio');
        this.DataPortfolio = responsePortfolio.data.data;
        // api untuk blog
        const responseBlog = await Get('http://localhost:9000/api/blog');
        this.DataBlog = responseBlog.data.data;
    }
}

</script>