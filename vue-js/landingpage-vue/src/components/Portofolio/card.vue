<template>
    <div class="card-portofolio">
        <img src="@/assets/img/portfolio-1.jpg" alt="">
        <div class="card-portofolio-description">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p><span>Client:</span> Lorem ipsum dolor.</p>
        </div>
    </div>
</template>

<style scoped>
.card-portofolio{
    text-align: start;
    min-height: 306px;
    padding: 30px 30px 0 30px;
    box-shadow: 0px 10px 30px rgba(0,0,0,0.5);
    border-radius: 60px 0px 60px 0px;
    background: white;
    transition: all 0.5s ease;
    margin: 10px 10px;
    text-align: left;
    text-align: center;
}

.card-portofolio img{
    max-width: 100%;
    height: auto;
}

.card-portofolio-description{
    padding: 0 20px 20px 20px;
}

.card-portofolio h4{
    margin-top: 10px;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 0;
    color: #042181;
}
    
</style>