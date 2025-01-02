<template>
    <div>
        <canvas class="graph" ref="chartCanvas"></canvas>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch, onBeforeUnmount } from "vue";
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from "chart.js";

// Register required components
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

export default defineComponent({
    name: "DonutChart",
    props: {
        percentage: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: "#36A2EB"
        }
    },
    setup(props) {
        const chartCanvas = ref(null);
        // Tracks the chats instance, this is important for destorying it later.
        let chartInstance = null;

        const centerLabelPlugin = {
            id: "centerLabel",
            afterDatasetDraw(chart) {
                const { ctx, width, height } = chart;
                const label = props.percentage + '%';

                ctx.save();
                ctx.font = '600 14px Montserrat';
                ctx.fillStyle = '#414141';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(label, width / 2, height / 2);
                ctx.restore();
            }
        };

        const initChart = () => {
            if (chartInstance) {
                // FailSafe to destroy the chart if it already exists
                chartInstance.destroy();
            }

            // Creating a new chart instance
            chartInstance = new Chart(chartCanvas.value, {
                type: "doughnut",
                data: {
                    labels: [],
                    datasets: [
                        {
                            data: [props.percentage, 100 - props.percentage],
                            backgroundColor: [ props.color, 'rgba(157, 157, 157, 0.16)'],
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                        centerLabel: false
                    },
                    borderWidth: 0,
                    cutout: "80%",
                    circumference: "365",
                    rotation: 0,
                    borderRadius: 1000,
                    spacing: -3,
                    borderAlign: 'inner',
                },
                plugins: [centerLabelPlugin]
            });
        };

        onMounted(() => {
            initChart();
        });

        watch(
            () => [props.percentage, props.color, props.label],
            () => {
                initChart();
            }
        );

        onBeforeUnmount(() => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        });

        return { chartCanvas };
    },
});
</script>
