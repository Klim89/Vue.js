<template>
    <div class="gallery">
        <div class="main-image">
            <img :src="currentImage" alt="Большое изображение" />
        </div>
        <div class="box">
            <img v-for="(image, index) in images" :src="image" :key="index" @click="changeImage(index)" alt="image" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatGallery', 

    data() {
        return {
            images: [
                'https://i.7fon.org/150/f55644279.jpg',
                'https://i.7fon.org/150/u438149.jpg',
                'https://i.7fon.org/150/g860911.jpg'
            ],
            currentIndex: 0,
        };
    },
    methods: {
        changeImage(index) {
            this.currentIndex = index;
        }
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        },
    }
};
</script>

<style lang="scss" scoped>
.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-image {
    margin-bottom: 20px;
}

.main-image img {
    width: 200px;
}

.box {
    display: flex;
}

.box img {
    width: 100px;
    margin-right: 10px;
    cursor: pointer;
}
</style>