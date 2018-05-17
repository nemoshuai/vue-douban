<template>
    <div class="top-banner">
        <div class="banner-bg">
            <img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg" alt="">
        </div>
        <div class="banner-wrapper">
            <div class="inner">
                <div class="inner-msg">
                    <span>下载豆瓣App</span><br>
                    <span>每天看点好内容</span>
                </div>
                <div class="download">
                    <a href="https://www.douban.com/doubanapp/app?page=neo&amp;model=B&amp;copy=1&amp;channel=neo_content&amp;direct_dl=1">
                        极速下载
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    name:'Banner'
}
</script>

<style lang="scss" scoped>
@import '@/style/bass.scss';
.top-banner{
    position: relative;
    text-align: left;
    height: 85.3px;
    width:100%;
}
.banner-bg{
   position: absolute;
   width: 100%;
   img{
    width:100%;
    /* position: absolute; */
    top:0;
    left: 0;
    /* display: inline-block; */
    vertical-align: middle;
   }
}
.banner-wrapper{
    position: absolute;
    overflow: hidden;
    top:0;
    bottom: 0;
    left: 10px;
    right: 10px;
    .inner{
        /* overflow: hidden; */
        width:100%;
        height: 100%;
        display:table;
        margin-left:5px;
        .inner-msg{
            display: table-cell;
            vertical-align: middle;
            line-height: 1.4;
        }
    }
}
.inner-msg span{
    font-size:14px;
    font-weight: 400;
    color: #2ca532;
}
.download{
    display: table-cell;
    vertical-align: middle;
    width: 100px;
}
.download a{
    font-size:13px;
    font-weight: 700;
    padding:0 14px;
    position: relative;
    background-color:$theme-color;
    color:#fff;
    border:1px solid $theme-color;
    border-radius:3px;
    line-height:2;
    display:inline-block;
}
</style>