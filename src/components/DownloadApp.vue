<template>
    <div class="download-app">
        <div class="info">
            <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" alt="">
            <div class="info-content">
                <strong>豆瓣</strong>
            </div>
        </div>
        <a href="https://www.douban.com/doubanapp/card/log?category=book_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_book_home%26direct_dl%3D1">免费下载Android客户端</a>
    </div>
</template>

<script>
export default{
    name:'DownloadApp'
}
</script>

<style lang="scss" scoped>
@import '@/style/bass.scss';
.download-app{
    font-size:15px;
    margin-top:50px;
    margin-bottom: 30px;
    padding-bottom: 10px; 
    text-align: center;
}

.info{
    text-align: left;
    display: inline-block;
    overflow: hidden;
    margin-bottom: 15px;
}

.info img{
    float: left;
    width:48px;
    height: 48px;
    margin-right: 10px;
}

.info-content{
    overflow: hidden;
}

.info .info-content strong{
    font-size:24px;
    line-height: 48px;
    font-weight: normal;
}
.download-app a{
    display: block;
    color: #42bd56;
    text-decoration: none;
}
</style>