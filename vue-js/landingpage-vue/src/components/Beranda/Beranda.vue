<template>
    <div>
        <div class="section_1">
            <div class="section1_content">
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ab. Officia voluptate molestias totam! Exercitationem similique quod, non maxime commodi alias dicta, sit qui ipsa ea temporibus, cumque enim molestiae.</p>
            </div>
            <div class="section1_img">
                <img src="@/assets/img/section_1.jpg" alt="beranda">
            </div>
        </div>
    </div>
     <div class="service">
            <h3>Layanan Kami</h3>
            <div class="row-service">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
</template>

<script>
import { Get } from '@/Api/index.js'
import Card from '@/components/Service/Card.vue'
export default {
    components: {
        Card
    },
        data() {
            return {
                DataHome: []
            }
        },
        async mounted() {
            const response = await Get('http://127.0.0.1:9000/api/home');
            console.log(response)
        },
}

</script>
<style scoped>
.section_1{
    padding: 20px 0;
    display: flex;
    align-items: center;
}

.section1_content{
    width: 50%;
    padding: 30px 0;
}

.section1_img{
    width: 50%;
}
.section1_img img{
    width: 100%;
}

.section1_content h1{
    margin: auto;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 40px;
    line-height: 70px;
    color: #042181;
    margin-bottom: 15px;
    
}
.section1_content p{
   margin-bottom: 20px;
}

.service{
    margin-top: 80px;
}

.service h3{
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 40px;
    line-height: 35px;
    color: #042181;
    margin-bottom: 30px;
    text-align: center;
}

.row-service{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

@media screen and (max-width: 600px) {
    .row-service{
       display: grid;
       grid-template-columns: repeat(1, 1fr);
       grid-gap: 10px;
    }
}


@media screen and (max-width: 600px){
    .section_1{
        flex-direction: column;
        padding: 20px 20px;
    }

    .section1_content{
        width: 100%;
        padding: 30px 0;
    }

    .section1_img{
        width: 100%;
    }
}

</style>