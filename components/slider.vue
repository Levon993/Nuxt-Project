<template>
  <splide :options="options">
    <splide-slide>
      <img :src="require('@/assets/img/shishkin.jpg')">
      
    </splide-slide>
    <splide-slide>
      <img :src="require('@/assets/img/shishkin.jpg')">
    </splide-slide>
    <splide-slide>
      <img :src="require('@/assets/img/shishkin.jpg')">
    </splide-slide>
  </splide>
</template>

<script>
  export default { 
    data() {
      return {
        options: {
          rewind : true,
          width  : 700,
          gap    : '1rem',
        },
      };
    },
  }
</script>