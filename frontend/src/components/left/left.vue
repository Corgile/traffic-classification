<template>
    <div class="title">分析准确率</div>
    <div class="LEFT" ref="left">
        
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
export default defineComponent({
    name: 'LEFT',
    // components: { LT, LM, LB },
    methods: {
        init() {
            var myChart = echarts.init(this.$refs.left);
            var option;

            option = {
                grid: {
                    // bottom: '3%',
                    top: '10%'
                },
                xAxis: {
                    type: 'category',
                    data: ['begin', 'dos', 'ddos', 'port', 'infiltration', 'ssh', 'web', 'ftp'],
                    axisLabel: {
                        fontSize: 14, // 设置标签文字字体大小
                        interval: 0, // 设置间隔为 0，表示所有标签都显示
                        formatter: function (value, index) {
                            // 使用 index 参数获取当前标签所在的列数
                            if (index === 0) {
                                return '{begin|' + value + '}'; // 第一列标签颜色为蓝色
                            } else if (index === 1) {
                                return '{dos|' + value + '}'; // 第二列标签颜色为蓝色
                            } else if (index === 2) {
                                return '{ddos|' + value + '}'; // 第二列标签颜色为蓝色
                            } else if (index === 3) {
                                return '{port|' + value + '}'; // 第二列标签颜色为蓝色
                            } else if (index === 4) {
                                return '{infiltration|' + value + '}'; // 第二列标签颜色为蓝色
                            } else if (index === 5) {
                                return '{ssh|' + value + '}'; // 第二列标签颜色为蓝色
                            } else if (index === 6) {
                                return '{web|' + value + '}'; // 第二列标签颜色为蓝色
                            } else {
                                return '{ftp|' + value + '}'; // 第二列标签颜色为蓝色
                            }
                        },
                        rich: {
                            // 定义富文本样式
                            begin: {
                                color: '#5470c6',
                            },
                            dos: {
                                color: '#91cc75',
                            },
                            ddos: {
                                color: '#fac858',
                            },
                            port: {
                                color: '#ee6666',
                            },
                            infiltration: {
                                color: '#73c0de',
                            },
                            ssh: {
                                color: '#3ba272',
                            },
                            web: {
                                color: '#fc8452',
                            },
                            ftp: {
                                color: '#9a60b4',
                            },
                        },
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        min: 90,
                        max: 100,
                        axisLine: {
                            lineStyle: {
                                color: '#0adbfa', // 设置轴线颜色
                            }
                        },
                        axisLabel: {
                            // color: 'green', // 设置标签颜色
                            fontSize: 14, // 设置字体大小
                        },

                    },
                    {
                        type: 'value',
                        min: 90,
                        max: 100,
                    },
                ],
                // yAxis: {
                //     type: 'value',
                //     min: 90,
                //     max: 100,
                //     axisLine: {
                //         lineStyle: {
                //             color: '#0adbfa', // 设置轴线颜色
                //         }
                //     },
                //     axisLabel: {
                //         // color: 'green', // 设置标签颜色
                //         fontSize: 14, // 设置字体大小
                //     },

                // },
                series: [
                    {
                        data: [
                            { value: 99.3, itemStyle: { color: '#5470c6' } },
                            { value: 99.9, itemStyle: { color: '#91cc75' } },
                            { value: 99.5, itemStyle: { color: '#fac858' } },
                            { value: 99.8, itemStyle: { color: '#ee6666' } },
                            { value: 94.2, itemStyle: { color: '#73c0de' } },
                            { value: 99.9, itemStyle: { color: '#3ba272' } },
                            { value: 99.6, itemStyle: { color: '#fc8452' } },
                            { value: 100, itemStyle: { color: '#9a60b4' } },
                        ],
                        type: 'bar'
                    },
                    {
                        data: [
                            { value: 99.3, itemStyle: { color: '#5470c6' } },
                            { value: 99.9, itemStyle: { color: '#91cc75' } },
                            { value: 99.5, itemStyle: { color: '#fac858' } },
                            { value: 99.8, itemStyle: { color: '#ee6666' } },
                            { value: 94.2, itemStyle: { color: '#73c0de' } },
                            { value: 99.9, itemStyle: { color: '#3ba272' } },
                            { value: 99.6, itemStyle: { color: '#fc8452' } },
                            { value: 100, itemStyle: { color: '#9a60b4' } },
                        ],
                        // data: [99.3, 99.9, 99.5, 99.8, 94.2,99.9,99.6,100],
                        type: 'line',
                        yAxisIndex: 1, // 使用第二个 y 轴
                        itemStyle: { color: '#FFDAB9' }, // 设置折线的颜色
                        label: { show: true, formatter: '{c}' }, // 显示折线上的数值标签
                    },
                ],
                tooltip: {
                    trigger: 'axis', // 设置鼠标悬停时触发 tooltip
                    axisPointer: {
                        type: 'cross',
                    },
                    formatter: function (params) {
                        var result = params[0].name + '<br/>'; // 添加 x 轴标签
                        result += params[0].marker + '准确率: ' + params[0].value + '<br/>'; // 添加柱状图的数据
                        return result;
                    },
                },
            };


            option && myChart.setOption(option);
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
.LEFT {
    /* background: red; */
    width: 35%;
    display: flex;
    margin: 1vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    left: 2%;
}
</style>