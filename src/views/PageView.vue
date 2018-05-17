<template>
    <div class="page-view">
        <div><header-nav></header-nav></div>
        <div class="page">
            <banner class="banner"></banner>
            <div class="card">
                <section class="header">
                    <h1 class="title">{{eventItem.title}}</h1>
                    <div class="userInfo">
                        <span>{{eventItem.owner.name}}</span>
                    </div>
                </section>
                <!-- <img :src="eventItem.image" alt=""> -->
                <div class="poster">
                    <!-- <img :src="eventItem.image" alt="" class="cover" :style="coverOther"> -->
                    <img :src="eventItem.image" alt="">
                </div>
                <section v-html="content"></section>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
import Banner from '@/components/Banner'
import axios from 'axios'
import axiosJsonp from 'axios-jsonp'
export default{
    name:'Page',
    data:function(){
        return {
            eventItem:{},
            // coverOther:{}
        }
    },
    components:{
        HeaderNav,
        Banner
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getData()
            // console.log(this.eventItem)
        })
    },
    computed:{
        content:function(){
            return this.eventItem.content.replace(/<img.*?>/ig,'')
        }
    },
    methods:{
        getData:function(){
            axios({
                url:'https://api.douban.com/v2/event/'+this.$route.params.id,
                methods:'GET',
                adapter:axiosJsonp
            })
            .then(res=>{
                this.eventItem = res.data
                // this.coverOther={backgroundImage:"url("+this.eventItem.image+")"}
                // console.log(this.eventItem.image)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/bass.scss';
.page{
    padding-top: 40px;
}
.header{
    text-align:left;
}
.title{
    font-weight: normal;
    margin:30px 0 5px;
}
.userInfo{
    margin-bottom: 20px;
    color:#494949;
}
/* .poster .cover{
    z-index: 0;
    width: 100%;
    background-size: 100%;
    background: center center no-repeat;
    filter: blur(3px);
}  */
.poster{
    text-align: center;
    margin-bottom: 30px;
}
.banner{
    width:100%;
}
</style>