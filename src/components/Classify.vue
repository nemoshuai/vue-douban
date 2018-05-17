<template>
    <section class="classify">
        <header><h2>分类浏览</h2></header>
        <div class="section-content">
            <ul class="typeList">
                <li v-for="(item,index) in typesList" :key="index">
                    <a :href="item.href">{{item.title}}</a>
                    <span></span>
                </li>
                <div style="clear:both;"></div>
            </ul>
        </div>
    </section>
</template>

<script>
export default{
    name:'Classify',
    props:['kind'],
    data:function(){
        return{
            // typesList:[]
        }
    },
    computed:{
        typesList:function(){
            if(this.kind=="movie"){
                return [
                    {
                        title:'经典',
                        href:'#'
                    },
                    {
                        title:'冷门佳片',
                        href:'#'
                    },
                    {
                        title:'豆瓣高分',
                        href:'#'
                    },
                    {
                        title:'动作',
                        href:'#'
                    },
                    {
                        title:'喜剧',
                        href:'#'
                    },
                    {
                        title:'爱情',
                        href:'#'
                    },
                    {
                        title:'悬疑',
                        href:'#'
                    },
                    {
                        title:'恐怖',
                        href:'#'
                    },
                    {
                        title:'科幻',
                        href:'#'
                    },
                    {
                        title:'治愈',
                        href:'#'
                    },
                    {
                        title:'文艺',
                        href:'#'
                    },
                    {
                        title:'成长',
                        href:'#'
                    },
                    {
                        title:'动画',
                        href:'#'
                    },
                    {
                        title:'华语',
                        href:'#'
                    },
                    {
                        title:'欧美',
                        href:'#'
                    },
                    {
                        title:'韩国',
                        href:'#'
                    },
                    {
                        title:'日本',
                        href:'#'
                    },
                ]
            }
            else if(this.kind=='book'){
                return [
                    {
                        title:'小说',
                        href:'#'
                    },
                    {
                        title:'爱情',
                        href:'#'
                    },
                    {
                        title:'历史',
                        href:'#'
                    },
                    {
                        title:'外国文学',
                        href:'#'
                    },
                    {
                        title:'青春',
                        href:'#'
                    },
                    {
                        title:'离职',
                        href:'#'
                    },
                    {
                        title:'随笔',
                        href:'#'
                    },
                    {
                        title:'传记',
                        href:'#'
                    },
                    {
                        title:'推理',
                        href:'#'
                    },
                    {
                        title:'旅行',
                        href:'#'
                    },
                    {
                        title:'奇幻',
                        href:'#'
                    },
                    {
                        title:'经管',
                        href:'#'
                    }
                ]
            }
        }
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
.section-content li{
    width: 50%;
    float: left;
    box-sizing: border-box;
    border-top:solid 1px #eee;
    border-bottom: solid 1px #eee;
    border-right: solid 1px #eee;
    padding-right: 2%;
    /* box-sizing: border-box; */
    height: 2.64rem;
    a{
      color: $theme-color;
      line-height: 2.64rem;
    }
}
.classify .section-content{
    margin-left: .94rem;
}
.typeList{
    font-size: 0.9rem;
    padding: 1.2rem 0 1.9rem;
    overflow: hidden;
}
span{
    color:#ccc;
    float:right;
    font-size:.5rem;
    font-weight:bold;
    display: inline-block;
    border-right:solid 1px #ccc;
    border-top:solid 1px #ccc;
    transform:rotate(45deg);
    width:.5rem;
    height: .5rem;
    margin-top:1rem;
}
</style>