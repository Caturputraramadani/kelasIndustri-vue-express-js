<template>
 <div class="card-container">
        <div class="card-service">
            <div class="left-section">
                <img :src="img">
            </div>
            <div class="right-section">
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
                <div class="avatar-info">
                    <div class="avatar">
                        <img :src="avatar" class="avatar">
                    </div>
                    <div class="info">
                        <h5>{{ name }}</h5>
                        <p>{{ date }}</p>
                        <div class="icon-container">
                          <i class="fa-solid fa-share"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['img', 'title', 'description', 'name', 'date', 'avatar']
};
</script>

<style scoped>
 @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'); 

.card-service h4 {
    font-size: 30px;
    font-family: sans-serif;
    line-height: 30px;
    color: #5c6374;
    padding: 0%;
    margin-bottom: 10px; 
    margin-top: 25px;
}

.card-service p {
    font-weight: 300;
    font-family: sans-serif;
    color: #847f8d;
    margin-bottom: 15px; 
}
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.card-service {
    display: flex;
    width: 60%;
    padding: 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: white;
    transition: all 0.5s ease;
}

.left-section {
    flex: 1;
    padding: 0; 
}

img {
    max-width: 100%;
    width: 100%; 
    height: auto; 
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    margin-bottom: -4px;
}

.right-section {
    flex: 3;
    padding: 10px;
    padding-left: 20px;
}

.avatar-info {
    display: flex;
    align-items: center;
    margin-left: 20px; 
}
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px; 
    margin-left: -10px;
    margin-bottom: 20px;
}
.info {
    display: flex;
    flex-direction: column; 
    margin-top: -20px;

}
.info p {
    margin: 0; 
    font-family: sans-serif;

}
.info h5 {
    margin: 0; 
    font-family: sans-serif;
    font-size: 17px;
    font-weight: bold;
    color: #5c6374;
    margin-bottom: 5px;
}
.icon-container {
  width: 40px; 
  height: 40px; 
  background-color: #aeb9d3; 
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 430px;
  margin-top: -40px; 
  color: #5c6374;
}
</style>
