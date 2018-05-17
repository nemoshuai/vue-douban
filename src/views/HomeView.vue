<template>
    <div class="home">
        <header-nav></header-nav>
        <div class="page">
            <div class="card">
                <ul class="quick-nav">
                    <li><router-link :to="{name:'movie'}">影院热映</router-link></li>
                    <li><router-link :to="{name:'book'}">最受关注图书</router-link></li>
                    <li><router-link :to="{name:'home'}">豆瓣时间</router-link></li>
                    <li><router-link :to="{name:'home'}">使用豆瓣App</router-link></li>
                </ul>
                <feed-section :feedList="feedList"></feed-section>
                <infinite-loading @infinite="onInfinite"></infinite-loading>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import HeaderNav from '@/components/HeaderNav'
import FeedSection from '@/components/FeedSection'
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios'
import axiosJsonp from 'axios-jsonp'
export default{
    name:'Home',
    data:function(){
        return{
            // feedList:[]
        }
    },
    components:{
        HeaderNav,
        FeedSection,
        InfiniteLoading,
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getData()
        })
    },
    computed:{
        ...mapState({
            feedList:state => state.home.feedList
        })
    },
    methods:{
        onInfinite($state){
           setTimeout(() => {
             this.loadMore()
             $state.loaded()
           },1000)
            
        },
        ...mapActions([
            'loadMore'
        ]),
        getData(){
            // axios({
            // url:'https://api.douban.com/v2/event/list?loc=108288&start=' + 0 + '&count=3',
            // method:"GET",
            // adapter:axiosJsonp
            // })
            // .then(res => {
            //     // commit({
            //     //     type:'loadMore',
            //     //     res: res.data.events
            //     // })
            //     this.feedList=res.data.events
            //     // console.log(this.feedList);
            // })
            // .catch(err => {
            //     console.log('*error:'+err);
            // })
            this.loadMore()
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/bass.scss';


</style>