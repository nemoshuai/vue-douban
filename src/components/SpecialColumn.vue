<template>
    <section>
        <header class="title-header">
            <h2>{{title}}</h2>
            <a href="">更多</a>
        </header>
        <div class="section-content">
            <ul class="section-row">
                <li v-for="(item,index) in itemList" :key="index" class="item">
                    <router-link :to="{name:'home'}">
                        <img :src="item.images.small" alt="">
                        <span>{{item.title}}</span>
                        <ranking :rank="item.rating.average"></ranking>
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import Ranking from '@/components/Ranking'
export default{
    name:'SpecialColumn',
    props:['title','itemList'],
    components:{
        Ranking
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/bass.scss';
header{
    padding:0 17px;
    h2{
        font-weight:normal;
        font-size:1.06rem;
        display: inline-block;
    }
}
header a{
    color: $theme-color;
    float:right;
    line-height:1.5rem;
    font-size:0.9rem;
}
.section-row{
    padding:15px 0 43px;
    /* overflow: hidden; */
    white-space:nowrap;
    font-size: 0;
    zoom: 1;
    margin:0;
}
.item{ 
    text-align: center;
    display: inline-block;
    vertical-align: top;
    width: 100px;
    margin-left: 17px;
    img{
        width:100%;
        height: 142.84px;
    }
    span{
        font-size:15.04px;
        margin-top:2px;
        line-height: 15.04px;
        display: block;
        max-width: 100%;
        text-align: center;
       /* -webkit-box-orient:horizontal;
       -webkit-line-clamp:1; */
       overflow: hidden;
       white-space: nowrap;
       text-overflow:ellipsis;
       /* line-height: 31px; */
    }
}
</style>