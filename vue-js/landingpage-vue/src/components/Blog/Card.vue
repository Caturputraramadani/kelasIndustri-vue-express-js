<template>
    <div class="card-blog">
        <img src="@/assets/img/portfolio-1.jpg" alt="">
        <div class="card-blog-description">
            <div class="time">
                Dec 1st 2022
            </div>
            <h4>Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, alias.</p>
            <a href=""> Read More</a>
        </div>
    </div>
</template>
<style>
.card-blog {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    background: white;
    transition: all 0.5s ease;
    border-radius: 30px 0px 30px 0px;
    margin: 10px 10px;
    display: flex;
    align-items: center;
}

.card-blog img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    padding: 0 0 20px 20px;
}

.card-blog-description {
    padding: 0 20px 0 20px;
}

.card-blog-description .time {
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: #4F556A;
}

.card-blog-description a {
    font-weight: 900;
    font-size: 15px;
    line-height: 18px;
    text-transform: capitalize;
    cursor: pointer;
    color: #042181;
    text-decoration: none;
}

.card-blog h4 {
    font-weight: 900;
    font-size: 24px;
    line-height: 20px;
    color: #042181;
    margin-bottom: 0px;
    margin-top: 5px;
}

.card-blog p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4F5564;
    margin-bottom: 5px;
    margin-top: 10px;
}

@media screen and (max-width: 600px) {
    .card-blog {
        flex-direction: column;
        align-items: center;  
        padding-bottom: 20px;

    }

    .card-blog img {
        width: 100%;
        height: 360;
        object-fit: contain;
        padding: 20px;
    }

    .card-blog h4,
    .card-blog p {
        padding: 0;
        margin-top: 10px;
      
    }
}
</style>


<!-- <style>
.card-blog {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    background: white;
    transition: all 0.5s ease;
    border-radius: 30px 0px 30px 0px;
    margin: 10px 10px;
    display: flex;
}   
.card-blog img {
width: 200px;
height: 200px;
object-fit: contain;
padding: 0 0 20px 20px;
}
.card-blog-description {
padding: 0 20px 0 20px;
}
.card-blog-description .time {
font-weight: 500;
font-size: 12px;
line-height: 17px;
color: #4F556A;
}
.card-blog-description a {
font-weight: 900;
font-size: 15px;
line-height: 18px;
text-transform: capitalize;
color: #042181;
cursor: pointer;
text-decoration: none;
}
.card-blog h4 {
font-weight: 900;
font-size: 24px;
line-height: 28px;
color: #042181;
margin-bottom: 0px;
margin-top: 5px;
}
.card-blog p {
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #4F556A;
margin-top: 10px;
margin-bottom: 5px;
}

@media screen and (max-width: 600px) {
.row-blog {
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap: 10px;
}
.card-blog {
flex-direction: column;
align-items: start;
}
.card-blog img {
    width: 100%;
        height: 360;
        object-fit: contain;
        padding: 20px; 
}
} -->

<!-- </style> -->
