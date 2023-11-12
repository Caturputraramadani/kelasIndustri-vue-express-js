<template>
    <div class="portofolio">
        <h3>Portofolio Kami</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores incidunt, facere quis veniam ut rerum atque corrupti molestias cumque reprehenderit, pariatur distinctio laboriosam. Autem mollitia quaerat eum dignissimos aspernatur!</p>
        <div class="row-portofolio">
            <Card></Card>
            <Card></Card>
            <Card></Card>   
        </div>
    </div>
</template>
<script>
import Card from '@/components/Portofolio/card.vue'
export default{
    components:{
        Card
    }
}
</script>

<style>
.portofolio{
    margin-top: 80px;
}

.portofolio h3{
    margin: auto;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 40px;
    line-height: 70px;
    color: #042181;
    margin-bottom: 15px;
    text-align: center;
}

.portofolio p{
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    /* color: #042181; */
    max-width: 600px;
    margin-top: 14px;
    margin: auto;
    margin-bottom: 25px;
    text-align: center;

}

.portofolio p span{
    color: gray;
}

.row-portofolio{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}
@media screen and (max-width: 600px) {
    .row-portofolio{
       display: grid;
       grid-template-columns: repeat(1, 1fr);
       grid-gap: 10px;
    }
}
</style>