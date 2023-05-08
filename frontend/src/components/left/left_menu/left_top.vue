<template>
    <div class="main">
        <div class="title">benign</div>
        <div ref="sitechart" class="chart">
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts';
export default defineComponent({
    name: 'LT',
    methods: {
        init() {
            var myChart = echarts.init(this.$refs.sitechart);
            var option;

            option = {
                legend: {
                    top: 'bottom',
                    textStyle : {
                        color : '#ff'
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
                        name: '用电占比',
                        type: 'pie',
                        radius: [10, 50],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8,
                        },
                        label: {
                            // 默认文本标签样式
                            normal: {
                                color: "white",
                                show: true,
                                fontSize: 14
                            },
                            // 高亮文本标签样式
                            emphasis: {
                                color: "0adbfa",
                                fontSize: 18,
                                fontWeight: "bold",
                            },
                            rich : {
                                color : 'white'
                            }
                        },
                        data: [
                            { value: 43, name: '火力发电' },
                            { value: 35, name: '水力发电' },
                            { value: 15, name: '光伏发电' },
                            { value: 7, name: '其他' }
                        ],
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
    /* background: yellow; */
    margin-bottom: 1vh;
    height: 33%;
    /* border: #0adbfa solid 1px; */
    border-bottom: #0adbfa solid 1px;
    position: relative;
}

.title {
    height: 25px;
    line-height: 25px;
    /* background: blue; */
    /* padding: 10px; */
    text-align: left;
    /* margin-left: 10px; */
    color: #0adbfa;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50%;
    font-size: 18px;
}

.chart {
    height: 100%;
    width: 100%;
    bottom: 0;
    /* background: red; */
}
</style>