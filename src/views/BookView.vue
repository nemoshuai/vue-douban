<template>
                <div class="book">
                    <header-nav></header-nav>
                    <div class="page">
                        <div class="card">
                            <special-column title="最受关注图书|虚幻类" :itemList="unReal"></special-column>
                            <special-column title="最受关注图书|虚幻类" :itemList="real"></special-column>
                            <!-- <special-column title="新片速递" :itemList="comingSoon"></special-column> -->
                            <classify kind="book"></classify>
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
    name: 'Book',
    data:function(){
        return{
            unReal:[],
            real:[]
        }
    },
    components:{
        HeaderNav,
        DownloadApp,
        SpecialColumn,
        Classify
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getUnreal()
        })
    },
    methods:{
        getUnreal:function(){
            axios({
                url:'https://api.douban.com/v2/book/search?q=虚构类&count=5',
                methods:'GET',
                adapter:axiosJsonp
            })
            .then(res => {
                this.unReal = res.data.books
                console.log(this.unReal)
                this.getReal()
            })
            .catch(err => {
                console.log(err)
            })
        },
        getReal:function(){
            axios({
                url:'https://api.douban.com/v2/book/search?q=非虚构类&count=5',
                methods:'GET',
                adapter:axiosJsonp
            })
            .then(res => {
                this.real = res.data.books
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
</style>