<template>
    <div class="log">

        <Head></Head>
        <div class="main">
            <div class="title">
                <div>ip</div>
                <div>bengin</div>
                <div>dos</div>
                <div>ddos</div>
                <div>port-scan</div>
                <div>infiltration</div>
                <div>ssh-patator</div>
                <div>web-attack</div>
                <div>ftp-patator</div>
            </div>
            <div class="news-container">
                <div class="news-list" v-news-scroll>
                    <div class="news-item" v-for="(news, index) in newsList" :key="index">
                        <div>
                            {{ news.ip }}
                        </div>
                        <div>
                            {{ news.bengin }}
                        </div>
                        <div>{{ news.dos }}</div>
                        <div>{{ news.ddos }}</div>
                        <div>{{ news.port }}</div>
                        <div>{{ news.infiltrarion }}</div>
                        <div>{{ news.ssh }}</div>
                        <div>{{ news.web }}</div>
                        <div>{{ news.ftp }}</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue'
import Head from '../components/header/head.vue'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
// 引入json
import newsList from '../assets/data.json';

export default defineComponent({
    components: {
        Head, Swiper,
        SwiperSlide
    },
    name: 'Log',
    mounted() {

    },
    methods: {

    },
    data() {
        return {
            newsList: null
        };
    },
    created() {
        this.newsList = newsList
    },
    directives: {
        "news-scroll": {
            bind: function (el) {
                let scrollHeight = el.scrollHeight;
                let itemHeight = el.querySelector(".news-item").clientHeight;
                let top = 0;
                 // 控制滚动速度的时间间隔
                el.intervalId = setInterval(() => {
                    top++;
                    el.style.top = -top + "px";
                    if (top >= scrollHeight) {
                        top = 0;
                        el.style.top = 0;
                    } else if (top % itemHeight === 0) {
                        setTimeout(() => {
                            scrollHeight = el.scrollHeight;
                            itemHeight = el.querySelector(".news-item").clientHeight;
                        }, 5000); // 等待500ms，重新计算高度
                    }
                }, 1000000);
            },
            inserted: function (el) {
                el.style.position = "relative";
                el.style.overflow = "hidden";
            },
            unbind: function (el) {
                clearInterval(el.intervalId);
            }
        }
    }

})
</script>
 
<style scoped>
.news-container {
    height: 95%;
    width: 100%;
    overflow: hidden;
}

.news-list {
    position: relative;
    animation: newsScroll 50s linear infinite;
}


@keyframes newsScroll {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
}

.news-item {
    display: flex;

    height: 50px;
    line-height: 50px;
    font-size: 18px;
}

.news-item div {
    flex: 1;
}

.title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    font-size: 20px;
    border-bottom: 0.1vh solid rgb(115, 115, 115);
    /* background: blue; */
    top: 0;
    left: 0;
}

.title div {
    flex: 1;
    color: #93dae5;
}

.log {
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
}

.main {
    top: 8vh;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    /* background: red; */
}
</style>