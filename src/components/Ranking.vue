<template>
    <div class="ranking">
       <i :class="[item ? onClass : offClass]" class="el-icon-star-on" v-for="(item, index) in rankingList"></i>
       <span v-text="">{{rank}}</span>
    </div>
</template>

<script>
export default{
    name:'Ranking',
    props:['rank'],
    data:function(){
        return{
            rankingList:[false,false,false,false,false],
            onClass:'star-on',
            offClass:'star-off'
        }
    },
    mounted:function(){
        this.$nextTick(function(){
            this.showRank()
        })
    },
    methods:{
        showRank:function(){
            let rating = parseInt(this.rank/2)
            for(let i=0;i<rating;i++){
                this.$set(this.rankingList,i,true)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.star-on{
    color:#ff8000;
}
.star-off{
    color: #aaa;
}
.ranking{
    font-size:.72rem;
    line-height: .94rem;
}
.ranking i::before{
    width: 10px;
    height: 10px;
    /* content:"\E637"; */
}
</style>