<template>
       <div class="container">
           <div class="position">
                    <div class="marker-animation">
            </div>
            <div class="marker-animation1">
            </div>
       </div>
       </div>
</template>
<script>
export default {
    name: 'Animat'
}
</script>



<style scoped>
.container{
    position: absolute;
    top: 47%;
    left: 49%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;
    /* justify-content: center; */
    height: 300px;
    width: 300px;
}

.position{
    width: 100px;
    height: 100px;
    display: block;
    top: 100px;
    left: 100px;
}
.marker-animation{
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    top: 0;
    background: rgb(155 180 251 / 40%);
    border-radius: 50%;
    animation: pulse 2400ms ease-out infinite;
}
.marker-animation1{
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    top: 0;
    background: rgb(155 180 251 / 40%);
    border-radius: 50%;
    opacity: 0;
    animation: pulse 2400ms ease-out infinite;
    animation-delay: .5s;
}
@keyframes pulse {
    0%{
        transform: scale(0.1);
        opacity: 0;
    }

    50%{
        opacity: 0.8;
    }
    100%{
        transform: scale(1.2);
        opacity: 0;
    }
}

</style>