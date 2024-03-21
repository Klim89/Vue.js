<template>
    <div class="product" @click="redirect">
        <div class="img-wraper">
            <img :src="'./products/'+random+'.png'" >
        </div>
        <p class="product__name">{{ product.title.slice(0,5) }}</p>
        <p class="product__description">{{ product.body.slice(0,30) }}</p>
        <p class="product__price">{{ ( random*3.14*new Date().getTime()/10**12).toFixed(2) }} <img src="@/assets/market/rupie.png" style="width: 16px;"></p>
    </div>
</template>
<script>
export default{
    name:'ProductCard',
    props:{
        product:Object
    },
    data(){
        return{
            random:0
        }
    },
    methods:{
        redirect(){
       
        this.$router.push(`/market/${this.product.id}`)
      }
    },
    mounted(){
        this.$nextTick(function(){
            this.random=Math.ceil(Math.random()*9)
        })
    },
    updated(){
        this.$nextTick(function(){
            this.random=Math.ceil(Math.random()*9)
        }) 
    }
}
</script>
<style lang="scss" scoped>
.product{
    &:hover{
        cursor: pointer;
        .img-wraper{
            img{
                transform: scale(1.1);
                transition: 1s ease  transform ;
                
            }
        }
    }
    
    padding: 5px;
    font-family: 'pixels';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    background-color: gray;
    
    .img-wraper{
       width: 180px;
       height: 150px;
       display: flex;
       align-items: center;
       justify-content: center;
       
    img{
       width: 100px;
       height: auto;
       }
    }
    &__name{
        font-size: 20px;
    }
    &__description{
        font-style: oblique;
        text-align: center;
        color: lightgrey;
    }
    &__price{
        display: flex;
        align-items: center;
    }
}

</style>