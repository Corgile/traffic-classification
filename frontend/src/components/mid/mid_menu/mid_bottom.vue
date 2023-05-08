<template>
    <div class="main">
        <div class="title">ip攻击分布</div>
        <div class="mapbox" style="height: 100%;width: 100%" ref="myChart"></div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts';
export default defineComponent({
    name: 'MB',
    methods: {
        init() {
            var myChart = echarts.init(this.$refs.myChart);
            var option;

            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // Use axis to trigger tooltip
                        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {
                    bottom: 10,
                    // data: ['Series 1', 'Series 2', 'Series 3'],
                    textStyle: {
                        color: function (value) {
                            // 使用 colorPalette 中的颜色为每个图例项设置不同的颜色
                            return echarts.colorPalette[value];
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    // bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: 'white', // 设置坐标轴线的颜色
                        }
                    },
                    min: 0,
                    max: 100
                },
                yAxis: {
                    type: 'category',
                    data: ['172.16.0.1', '192.168.10.8', '205.174.165.73'],
                    axisLine: {
                        lineStyle: {
                            color: '#0adbfa' // 设置纵轴轴线颜色为红色
                        }
                    },
                },
                series: [
                    {
                        name: 'bengin',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true,
                            // formatter: '{c}%'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0, 0, 0],
                    },
                    {
                        name: 'dos',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true,
                            // formatter: '{c}%'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [45, 0, 0]
                    },
                    {
                        name: 'ddos',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [40, 0, 0]
                    },
                    {
                        name: 'port-scan',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [8, 0, 0]
                    },
                    {
                        name: 'infiltration',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0, 100, 100]
                    },
                    {
                        name: 'ssh-patator',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [3, 0, 0]
                    },
                    {
                        name: 'web-attack',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [1, 0, 0]
                    },
                    {
                        name: 'ftp-patator',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [3, 0, 0]
                    }
                ]
            };

            option && myChart.setOption(option);

            // 添加窗口大小改变监听事件，当窗口大小改变时，图表会重新绘制，自适应窗口大小
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.init();
        });
    },
})
</script>
 
<style scoped>
.main {
    width: 100%;
    margin-top: 1vh;
    /* background: white; */
    height: 33%;
    display: flex;
}

.mapbox {
    /* margin: 2vh; */
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: relative;
    /* background: red; */
    /* border: 2px solid red; */
}

.title {
    height: 25px;
    /* width: 72%; */
    line-height: 25px;
    /* background: blue; */
    /* padding: 10px; */
    text-align: center;
    /* margin-left: 10px; */
    color: #0adbfa;
    position: absolute;
    /* top: 18px; */
    font-size: 22px;
}
</style>