<template>
    <section>
        <div class="grid">
            <div v-for="(griditem, index) in griditems" class="gridItem">
                <div class="itemContent">
                    <h2>{{ griditem.title }}</h2>
                    <span class="stat">
                        <div class="icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 4.66667C14.0063 4.62021 14.0063 4.57312 14 4.52667C13.9942 4.48753 13.983 4.44938 13.9667 4.41333C13.949 4.38075 13.929 4.34955 13.9067 4.32C13.8813 4.27784 13.8498 4.23965 13.8133 4.20667L13.7333 4.16C13.6948 4.1313 13.6521 4.10881 13.6067 4.09333H13.4733C13.4327 4.054 13.3853 4.02237 13.3333 4H9.99999C9.6318 4 9.33332 4.29848 9.33332 4.66667C9.33332 5.03486 9.6318 5.33333 9.99999 5.33333H11.8867L9.21999 8.47333L6.33999 6.76C6.05818 6.59239 5.69633 6.65458 5.48665 6.90667L2.15332 10.9067C2.03995 11.0427 1.98537 11.2183 2.00163 11.3946C2.01789 11.571 2.10365 11.7336 2.23999 11.8467C2.35993 11.9461 2.51088 12.0003 2.66665 12C2.86494 12.0003 3.05308 11.9124 3.17999 11.76L6.14665 8.2L8.99332 9.90667C9.27206 10.072 9.62931 10.0129 9.83999 9.76667L12.6667 6.46667V8C12.6667 8.36819 12.9651 8.66667 13.3333 8.66667C13.7015 8.66667 14 8.36819 14 8V4.66667Z" fill="#54D62C"/>
                            </svg> 
                        </div>
                        {{ griditem.growthPercent }}
                    </span>
                    <span class="total">{{ griditem.total }}</span>
                </div>
                <span v-if="!!griditem.icon.length" class="itemIcon">
                    <img :src="`/resources/${griditem.icon}`" :alt="griditem.icon">
                </span>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
    section {
        padding: 0 40px 26px;
        @media (max-width: 576px) {
            padding: 0 20px 26px;
        }
    }
    .grid {
        display: grid;
        // This will create three equal columns
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .gridItem {
            background-color: var(--background-contrast);
            height: 154px;
            width: 100%;
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12);
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width: 992px) {
                height: fit-content;
                position: relative;
                padding: 0;
            }
            .itemContent {
                height: 100%;
                h2 {
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 22px;
                    color: var(--font-heading);
                    margin-bottom: 8px;
                }
                .stat {
                    display: flex;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 22px;
                    color: var(--font-heading);
                    margin-bottom: 4px;
                    .icon {
                        height: 24px;
                        width: 24px;
                        border-radius: 100%;
                        background-color: var(--primary-highlights);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                .total {
                    display: block;
                    font-size: 32px;
                    font-weight: 700;
                    line-height: 48px;
                    color: var(--font-heading);
                }
                @media (max-width: 992px) {
                    padding: 24px;
                    z-index: 2;
                }
            }
            .itemIcon {
                height: 64px;
                width: 64px;
                border-radius: 100%;
                background-color: var(--primary-highlights);
                display: flex;
                align-items: center;
                justify-content: center;
                @media (max-width: 992px) {
                    height: 100px;
                    width: 100px;
                    margin-right: 24px;
                    flex-shrink: 0;
                    position: absolute;
                    right: 0;
                    img {
                        height: 70px;
                        opacity: 0.4;
                    }
                }
            }
        }
    }
</style>
<script>
import gsap from 'gsap';
import { onMounted, ref } from 'vue'
export default {
    setup(props) {
        let griditems = ref([
            {
                title: 'Total Practices',
                growthPercent: '+15%',
                total: '11',
                icon: 'stethoscope-icon.svg',
            },
            {
                title: 'Total Subscribers',
                growthPercent: '+15%',
                total: '261',
                icon: 'baby-stroller-icon.svg',
            },
            {
                title: 'Total Treatments',
                growthPercent: '+15%',
                total: '135',
                icon: 'plaster-icon.svg',
            },
            {
                title: 'Total Consents',
                growthPercent: '+15%',
                total: '135',
                icon: 'document-icon.svg',
            },
            {
                title: 'Total Consents signed',
                growthPercent: '+15%',
                total: '2159',
                icon: 'document-icon.svg',
            },
            {
                title: 'Total Fact sheets read',
                growthPercent: '+15%',
                total: '2159',
                icon: 'bolb-icon.svg',
            },
        ]);

        onMounted(() => {
            const gridElements = document.querySelectorAll('.gridItem')
            
            gsap.from(gridElements, {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power3.out'
            });
        })

        return {
            griditems,
        }
    }
}
</script>