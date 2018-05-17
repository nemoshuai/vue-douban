<template>
    <section>
        <div class="feed-section">
            <router-link :to="{name:'page',params:{id:item.id}}" class="feed-item" v-for="(item,index) in feedList" :key="index">
                <div class="feed-content">
                    <img :src="item.image_lmobile" alt="">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content|blief}}</p>
                </div>
                <div class="author">
                   <span>by {{item.owner.name}}</span>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>

export default{
    name:'FeedSection',
    props:['feedList'],
    data:function(){
        return{
            // list: this.feedList
        }
    },
    mounted:function(){
        this.$nextTick(function(){
            console.log(this.List);
        })
    },
    filters:{
        blief:function(content){
          return content.substr(0,50)
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/style/bass.scss';
.feed-item{
    display: block;
    color: #494949;
    padding: 25px 0 25px 0
}
.feed-content img{
    float: right;
    width:26%;
    height: 93.2px;
    margin-left: 25px;
}
.feed-content{
    margin-bottom: 10px;
}
.feed-content h3{
    font-size:17px;
    font-weight: 500;
    text-align: justify;
    margin-bottom: 6px;
}
.feed-content p{
    font-size: 12px;
    color:#aaa;
    text-align: justify;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    overflow:hidden;
}
.author span{
    color: #aaa;
    font-size: 12px;
}
</style>