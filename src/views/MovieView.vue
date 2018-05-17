<template>
    <div class="movie">
        <header-nav></header-nav>
        <div class="page">
            <div class="card">
                <special-column title="影院热映" :itemList="inthreats"></special-column>
                <special-column title="免费在线观影" :itemList="inthreats"></special-column>
                <special-column title="新片速递" :itemList="comingSoon"></special-column>
                <classify kind="movie"></classify>
            </div>
            <download-app></download-app>
        </div>
    </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
import DownloadApp from '@/components/DownloadApp'
import SpecialColumn from '@/components/SpecialColumn'
import Classify from '@/components/Classify'
import axios from 'axios'
import axiosJsonp from 'axios-jsonp'
export default{
    name: 'Movie',
    components:{
        HeaderNav,
        DownloadApp,
        SpecialColumn,
        Classify
    },
    data:function(){
        return{
            inthreats:[],
            comingSoon:[]
        }
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getThreats()
        })
    },
    methods:{
        getThreats:function(){
            axios({
                url:'https://api.douban.com/v2/movie/in_theaters?start=0&count=5',
                methods:'GET',
                adapter:axiosJsonp
            })
            .then(res => {
                this.inthreats = res.data.subjects
                // console.log(this.inthreats)
                this.getcomingSoon()
            })
            .catch(err => {
                console.log(err)
            })
        },
        getcomingSoon:function(){
            axios({
                url:'https://api.douban.com/v2/movie/coming_soon?start=0&count=5',
                methods:'GET',
                adapter:axiosJsonp
            })
            .then(res => {
                this.comingSoon = res.data.subjects
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
.card{
    margin:0;
}
</style>