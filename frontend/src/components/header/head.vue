<template>
    <div class="head">
        <div class="leftbox">
            <div class="log" @click="goLog">日志监测</div>
            <div class="test">检测</div>
            <div class="verify">验证</div>
            <div class="again">重训练</div>
            <div class="upload">文件上传</div>
        </div>

        <div class="title">异常流量分析监测平台</div>
        <div class="menu">
            <div class="time">
                <div class="time_text">{{ nowTime }}</div>
                <div class="week_text">{{ nowWeek }}</div>
            </div>
            <div class="weather">
                <div class="icon left">
                    <el-icon>
                        <lightning />
                    </el-icon>
                </div>
                <div class="right">
                    <div class="temptext">25-30℃</div>
                    <div class="weathertext">多云</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Head',
    data() {
        return {
            timer: "", //定义一个定时器
            nowTime: "",
            nowWeek: "", //星期
        }
    },
    mounted() {
        this.getTime();
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
    methods: {
        getTime() {
            this.timer = setInterval(() => {
                let timeDate = new Date();
                let year = timeDate.getFullYear();
                let mounth = timeDate.getMonth() + 1;
                let day = timeDate.getDate();
                let hours = timeDate.getHours();
                hours = hours >= 10 ? hours : "0" + hours;
                let minutes = timeDate.getMinutes();
                minutes = minutes >= 10 ? minutes : "0" + minutes;
                let seconds = timeDate.getSeconds();
                seconds = seconds >= 10 ? seconds : "0" + seconds;
                let week = timeDate.getDay();
                let weekArr = [
                    "星期日",
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六",
                ];

                this.nowTime = `${year}/${mounth}/${day} ${hours}:${minutes}:${seconds}`
                this.nowWeek = `${weekArr[week]}`;
            }, 1000);
        },
        // 跳转log
        goLog() {
            this.$router.push('/log');
        }

    }
})
</script>
 
<style scoped>
.head {
    height: 8vh;
    /* z-index: 9999; */
    border-bottom: 0.1vh solid #0adbfa8a;
}

.title {
    letter-spacing: 4px;
    background: linear-gradient(to left, #2196f3, #10f7d7, #1688e9);
    -webkit-background-clip: text;
    color: transparent;
    padding: 1vh;
    text-align: center;
    font-size: 28px;
    line-height: 6vh;
    height: 8vh;
}

.leftbox{
    display: flex;
    /* background: red; */
    height: 8vh;
    width: 40%;
    position: absolute;
}

.log {
    letter-spacing: 4px;
    background: linear-gradient(to left, #2196f3, #10f7d7, #1688e9);
    /* background: rgb(136, 162, 173); */
    -webkit-background-clip: text;
    color: transparent;
    padding: 1vh;
    text-align: center;
    font-size: 20px;
    line-height: 6vh;
    height: 8vh;
    /* position: absolute; */
    margin-left: 2vw;
}

.test {
    letter-spacing: 4px;
    background: linear-gradient(to left, #2196f3, #10f7d7, #1688e9);
    /* background: rgb(136, 162, 173); */
    -webkit-background-clip: text;
    color: transparent;
    padding: 1vh;
    text-align: center;
    font-size: 20px;
    line-height: 6vh;
    height: 8vh;
    /* position: absolute; */
    margin-left: 2vw;
}

.verify {
    letter-spacing: 4px;
    background: linear-gradient(to left, #2196f3, #10f7d7, #1688e9);
    /* background: rgb(136, 162, 173); */
    -webkit-background-clip: text;
    color: transparent;
    padding: 1vh;
    text-align: center;
    font-size: 20px;
    line-height: 6vh;
    height: 8vh;
    /* position: absolute; */
    margin-left: 2vw;
}

.again {
    letter-spacing: 4px;
    background: linear-gradient(to left, #2196f3, #10f7d7, #1688e9);
    /* background: rgb(136, 162, 173); */
    -webkit-background-clip: text;
    color: transparent;
    padding: 1vh;
    text-align: center;
    font-size: 20px;
    line-height: 6vh;
    height: 8vh;
    /* position: absolute; */
    margin-left: 2vw;
}

.upload {
    letter-spacing: 4px;
    background: linear-gradient(to left, #2196f3, #10f7d7, #1688e9);
    /* background: rgb(136, 162, 173); */
    -webkit-background-clip: text;
    color: transparent;
    padding: 1vh;
    text-align: center;
    font-size: 20px;
    line-height: 6vh;
    height: 8vh;
    /* position: absolute; */
    margin-left: 2vw;
}

.menu {
    height: 8vh;
    width: 30vw;
    /* background: red; */
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    margin-right: 2vw;
    font-size: 22px;
}

.time {
    width: 50%;
    /* background: rgb(101, 106, 94); */
    text-align: center;
    align-items: center;
}

.time_text,
.week_text {
    color: #0adbfa;
    /* letter-spacing: 2px; */
    line-height: 4vh;
}

.weather {
    width: 50%;
    display: flex;
}

.left {
    width: 50%;
    /* background: blue; */
    /* height: 8vh; */
    line-height: 9vh;
    font-size: 45px;
}

.right {
    width: 50%;
    /* background: rgba(65, 66, 66, 0.6); */
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
}

.temptext {
    height: 50%;
    text-align: center;
    line-height: 4vh;
}

.weathertext {
    height: 50%;
    text-align: center;
    line-height: 4vh;
}
</style>