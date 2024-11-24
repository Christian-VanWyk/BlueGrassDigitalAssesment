<template>
    <section>
        <div class="componentContainer">
            <div class="graphContainer">
                <DoughnutChart :percentage="24" :color="'#FF966B'" class="graph" />
                <dl>
                    <dt>24%</dt>
                    <dd>Pending</dd>
                </dl>
            </div>
            <div class="graphContainer">
                <DoughnutChart :percentage="56" :color="'#54D62C'" class="graph" />
                <dl>
                    <dt>56%</dt>
                    <dd>Registered</dd>
                </dl>
            </div>
            <div class="graphContainer">
                <DoughnutChart :percentage="20" :color="'#1890FF'" class="graph" />
                <dl>
                    <dt>20%</dt>
                    <dd>Post Treatment</dd>
                </dl>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    section {
        padding: 0 40px 34px;
        @media (max-width: 576px) {
            padding: 0 20px 34px;
        }
        .componentContainer {
            display: flex;
            justify-content: space-between;
            padding: 38px 50px 38px 82px;
            @media (max-width: 1200px) {
                padding: 38px 50px;
                justify-content: space-around;
            }
            @media (max-width: 768px) {
                padding: 38px 24px;
                gap: 0;
                flex-wrap: wrap;
            } 
            @media (max-width: 576px) {
                gap: 40px;
            } 
            .graphContainer {
                display: flex;
                gap: 40px;
                @media (max-width: 1200px) {
                    flex-direction: column;
                    gap: 0;
                    align-items: center;
                }
                @media (max-width: 768px) {
                    width: 50%;
                    padding: 0;
                    border-radius: 8px;
                }
                @media (max-width: 576px) {
                    width: 100%;
                    align-items: start;
                    flex-direction: row;
                    gap: 40px;
                } 
                .graph {
                    width: 100px;
                    height: 100px;
                }
                dl {
                    @media (max-width: 768px) {
                        margin: 24px 0 0;
                    }   
                    dt {
                        width: 100%;
                        font-size: 24px;
                        font-weight: 700;
                        line-height: 36px;
                        color: var(--font-heading);
                        @media (max-width: 1200px) {
                            text-align: center;
                        }
                        @media (max-width: 576px) {
                            text-align: left;
                        } 
                    }
                    dd {
                        width: 100%;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 22px;
                        margin: 0;
                        @media (max-width: 1200px) {
                            text-align: center;
                        }
                        @media (max-width: 576px) {
                            text-align: left;
                        } 
                    }
                }
            }
        }
    }

</style>

<script>
import DoughnutChart from './DoughnutChart.vue';

export default {
    name: "App",
    components: {
        DoughnutChart
    }
};
</script>

