<template>
    <div class="main">
        <div class="title">攻击类型分类</div>
        <div class="mapbox" style="height: 100%;width: 100%" ref="myChart"></div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts';


export default defineComponent({
    name: 'MAP',
    methods: {
        init() {
            const myChart = echarts.init(this.$refs.myChart);
            let option;

            option = {
                legend: {
                    top: 'bottom',
                    textStyle: {
                        color: '#ff'
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        // mark: { show: true },
                        // dataView: { show: true, readOnly: false },
                        // restore: { show: true },
                        // saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: '攻击类型',
                        type: 'pie',
                        radius: [80, 180],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 15,
                        },
                        label: {
                            // 默认文本标签样式
                            normal: {
                                color: "white",
                                show: true,
                                fontSize: 15
                            },
                            // 高亮文本标签样式
                            emphasis: {
                                color: "0adbfa",
                                fontSize: 15,
                                fontWeight: "bold",
                            },
                            rich: {
                                color: 'white'
                            }
                        },
                        data: [
                            { value: 65, name: 'benign' },
                            { value: 14, name: 'dos' },
                            { value: 10, name: 'ddos' },
                            { value: 3, name: 'port-scan' },
                            { value: 3, name: 'infiltration' },
                            { value: 2, name: 'ssh-patator' },
                            { value: 2, name: 'web-attack' },
                            { value: 1, name: 'ftp-patator' }
                        ],
                    }
                ],
                tooltip: {
                    trigger: 'item', // 触发类型：item 表示数据项图形触发
                    formatter: '{b}：{c} ({d}%)', // 显示的文本格式
                },
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
    /* background: white; */
    height: calc(66% + 1vh);
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
    top: 18px;
    font-size: 22px;
}
</style>