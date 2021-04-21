<template>
    <div class="body">
        <header class="header">
  
        </header>
    </div>
</template>
<script>
export default {
    layout: "login"
}
</script>
<style>
.body{
display: grid;
grid-template-columns:100%;
grid-template-areas: "header header";
}

.header
{
    grid-area: header;
    border: 1px dotted silver;
    background-color: black;
}

</style>