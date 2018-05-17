<template>
    <div class="talion-view">
        <a href="" @click="closeTalion">关闭</a>
        <form action="" method="get">
            <div>
                <input type="search" v-model.trim.lazy="searchStr" @key.enter="beginSearch">
            </div>
        </form>
        <ul>
            <li>
                <div>
                    <router-link :to="{name:'movie'}" target="_blank">
                        <strong style="color: rgb(35, 132, 232)">电影</strong>
                        <span>影院热映</span>
                    </router-link>
                    <router-link :to="{name:'movie'}" target="_blank">
                            <strong style="color:rgb(230, 70, 126)">同城</strong>
                            <span>周末活动</span>
                    </router-link>
                    <router-link :to="{name:'movie'}" target="_blank">
                            <strong style="color:rgb(159, 120, 96)">阅读</strong>
                            <span>电子书</span>
                    </router-link>
                    <router-link :to="{name:'movie'}" target="_blank">
                            <strong style="color:rgb(225, 100, 77)">广播</strong>
                            <span>友邻动态</span>
                    </router-link>             
                 </div>
            </li>
            <li>
                <div>
                    <router-link :to="{name:'movie'}" target="_blank">
                        <strong style="color: rgb(122, 106, 219)">电视</strong>
                        <span>正在热播</span>
                    </router-link>
                    <router-link :to="{name:'movie'}" target="_blank">
                            <strong style="color:rgb(42, 184, 204)">小组</strong>
                            <span>志趣相投</span>
                    </router-link>
                    <router-link :to="{name:'movie'}" target="_blank">
                            <strong style="color:rgb(87, 116, 197)">游戏</strong>
                            <span>虚拟世界</span>
                    </router-link>
                    <router-link :to="{name:'movie'}" target="_blank">
                            <strong style="color:rgb(64, 207, 169)">FM</strong>
                            <span>红心歌单</span>
                    </router-link>             
                    </div>
            </li>
            <li>
                <div>
                    <router-link :to="{name:'book'}" target="_blank">
                        <strong style="color: rgb(159, 120, 96)"图书</strong>
                        <span畅销排行</span>
                    </router-link>
                    <router-link :to="{name:'movie'}" target="_blank">
                            <strong style="color:rgb(244, 143, 46)">音乐</strong>
                            <span>新碟榜</span>
                    </router-link>
                    <router-link :to="{name:'movie'}" target="_blank">
                            <strong style="color:rgb(89, 108, 221)">应用</strong>
                            <span>玩手机</span>
                    </router-link>
                    <router-link :to="{name:'movie'}" target="_blank">
                            <strong style="color:rgb(66, 189, 86)">市集</strong>
                            <span>购买原创</span>
                    </router-link>             
                    </div>
            </li>
        </ul>
        <div>
            <ul class="quick-nav">
                    <li><router-link :to="{name:'movie'}">注册豆瓣</router-link></li>
                    <li><router-link :to="{name:'book'}">登录豆瓣</router-link></li>
                    <li><router-link :to="{name:'home'}">使用桌面版</router-link></li>
                    <li><router-link :to="{name:'home'}">使用豆瓣App</router-link></li>
            </ul>
        </div>
    </div>
</template>                      

<style lang="scss" scoped>
@import '@/style/bass.scss';

</style>