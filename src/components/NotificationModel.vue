<template>
    <div v-if="openNotificationModel" class="modelContainer">
        <dl>
            <dt>Notifications</dt>
            <dd>{{`You have ${content.length} unread messages`}}</dd>
        </dl>
        <hr />
        <template v-for="(item, index) in content">
        <div class="notification">
            <div v-if="!!item.image.length" class="profile-picture"> 
                <img :src="`/resources/${item.image}`" :alt="item.image">
            </div>
                <div class="notification-content">
                    <h2>{{item.title}}</h2>
                    <p class="user-name">{{item.description}}</p> 
                    <time datetime="2022-10-07">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29612 2.45686C5.39245 1.72432 6.68138 1.33333 7.99992 1.33333C8.8754 1.33333 9.74231 1.50577 10.5511 1.8408C11.36 2.17583 12.0949 2.66689 12.714 3.28595C13.333 3.90501 13.8241 4.63993 14.1591 5.44877C14.4942 6.25761 14.6666 7.12452 14.6666 7.99999C14.6666 9.31854 14.2756 10.6075 13.5431 11.7038C12.8105 12.8001 11.7693 13.6546 10.5511 14.1592C9.33297 14.6638 7.99253 14.7958 6.69932 14.5386C5.40611 14.2813 4.21823 13.6464 3.28588 12.714C2.35353 11.7817 1.71859 10.5938 1.46135 9.3006C1.20412 8.00739 1.33614 6.66695 1.84072 5.44877C2.34531 4.2306 3.19979 3.18941 4.29612 2.45686ZM5.03688 12.4345C5.91394 13.0205 6.94509 13.3333 7.99992 13.3333C9.41441 13.3333 10.771 12.7714 11.7712 11.7712C12.7714 10.771 13.3333 9.41448 13.3333 7.99999C13.3333 6.94516 13.0205 5.91402 12.4344 5.03695C11.8484 4.15989 11.0154 3.47631 10.0409 3.07264C9.06636 2.66897 7.99401 2.56335 6.95944 2.76914C5.92487 2.97493 4.97457 3.48288 4.22869 4.22876C3.48281 4.97464 2.97485 5.92495 2.76907 6.95951C2.56328 7.99408 2.6689 9.06643 3.07256 10.041C3.47623 11.0155 4.15982 11.8485 5.03688 12.4345ZM8.66658 7.33333H10.6666C10.8434 7.33333 11.013 7.40357 11.138 7.52859C11.263 7.65361 11.3333 7.82318 11.3333 7.99999C11.3333 8.17681 11.263 8.34637 11.138 8.4714C11.013 8.59642 10.8434 8.66666 10.6666 8.66666H7.99992C7.82311 8.66666 7.65354 8.59642 7.52851 8.4714C7.40349 8.34637 7.33325 8.17681 7.33325 7.99999V5.33333C7.33325 5.15652 7.40349 4.98695 7.52851 4.86192C7.65354 4.7369 7.82311 4.66666 7.99992 4.66666C8.17673 4.66666 8.3463 4.7369 8.47132 4.86192C8.59635 4.98695 8.66658 5.15652 8.66658 5.33333V7.33333Z" fill="#BCBCBC"/>
                        </svg>
                        {{item.time}}
                    </time>
                </div> 
                <button @click="deleteNotification(item.id)" class="binButton" aria-label="Delete notification"> 
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5001 3.99999H12.3334V2.60833C12.3139 2.07484 12.0836 1.57088 11.6931 1.2069C11.3025 0.842932 10.7836 0.648655 10.2501 0.666661H7.75008C7.21654 0.648655 6.69763 0.842932 6.30711 1.2069C5.91658 1.57088 5.6863 2.07484 5.66675 2.60833V3.99999H1.50008C1.27907 3.99999 1.06711 4.08779 0.910826 4.24407C0.754545 4.40035 0.666748 4.61231 0.666748 4.83333C0.666748 5.05434 0.754545 5.2663 0.910826 5.42258C1.06711 5.57886 1.27907 5.66666 1.50008 5.66666H2.33341V14.8333C2.33341 15.4964 2.59681 16.1323 3.06565 16.6011C3.53449 17.0699 4.17037 17.3333 4.83342 17.3333H13.1667C13.8298 17.3333 14.4657 17.0699 14.9345 16.6011C15.4034 16.1323 15.6667 15.4964 15.6667 14.8333V5.66666H16.5001C16.7211 5.66666 16.9331 5.57886 17.0893 5.42258C17.2456 5.2663 17.3334 5.05434 17.3334 4.83333C17.3334 4.61231 17.2456 4.40035 17.0893 4.24407C16.9331 4.08779 16.7211 3.99999 16.5001 3.99999ZM7.33342 2.60833C7.33342 2.47499 7.50841 2.33333 7.75008 2.33333H10.2501C10.4917 2.33333 10.6667 2.47499 10.6667 2.60833V3.99999H7.33342V2.60833ZM14.0001 14.8333C14.0001 15.0543 13.9123 15.2663 13.756 15.4226C13.5997 15.5789 13.3878 15.6667 13.1667 15.6667H4.83342C4.6124 15.6667 4.40044 15.5789 4.24416 15.4226C4.08788 15.2663 4.00008 15.0543 4.00008 14.8333V5.66666H14.0001V14.8333ZM6.50008 13.1667C6.7211 13.1667 6.93306 13.0789 7.08934 12.9226C7.24562 12.7663 7.33341 12.5543 7.33341 12.3333V8.99999C7.33341 8.77898 7.24562 8.56702 7.08934 8.41074C6.93306 8.25446 6.7211 8.16666 6.50008 8.16666C6.27907 8.16666 6.06711 8.25446 5.91083 8.41074C5.75455 8.56702 5.66675 8.77898 5.66675 8.99999V12.3333C5.66675 12.5543 5.75455 12.7663 5.91083 12.9226C6.06711 13.0789 6.27907 13.1667 6.50008 13.1667ZM12.0893 12.9226C11.9331 13.0789 11.7211 13.1667 11.5001 13.1667C11.2791 13.1667 11.0671 13.0789 10.9108 12.9226C10.7545 12.7663 10.6667 12.5543 10.6667 12.3333V8.99999C10.6667 8.77898 10.7545 8.56702 10.9108 8.41074C11.0671 8.25446 11.2791 8.16666 11.5001 8.16666C11.7211 8.16666 11.9331 8.25446 12.0893 8.41074C12.2456 8.56702 12.3334 8.77898 12.3334 8.99999V12.3333C12.3334 12.5543 12.2456 12.7663 12.0893 12.9226Z"/>
                    </svg>
                </button>
            </div>
            <hr />
        </template>
        <button @click="clearAll()" aria-label="Clear All" class="clearButton">Clear All</button>
    </div>
</template>
<style scoped lang="scss">
.modelContainer {
    position: absolute;
    background-color: var(--background-contrast);
    top: 100px;
    right: 210px;
    min-width: 364px;
    z-index: 100;
    border-radius: 12px;
    box-shadow: 0px 20px 40px -4px rgba(145, 158, 171, 0.16);
    @media (max-width: 768px) {
        right: 24px;
    }
    &:after {
        position: absolute;
        content: '';
        bottom: 95%;
        display: block;
        border-left: 18px solid var(--background-contrast);
        border-bottom: 18px solid transparent;
        box-shadow: 0px 20px 40px -4px rgba(145, 158, 171, 0.2);
        z-index: 2;
        right: 30px;
        transform: rotate(45deg);
        @media (max-width: 768px) {
            right: 220px;
        }
    }
    dl {
        padding: 16px 20px;
        margin: 0;
        dt {
            font-size: 16px;
            font-weight: 600;
            color: var(--font-heading);
            line-height: 24px;
        }
        dd {
            margin: 0;
            font-size: 14px;
            font-weight: 400;
            color: var(--font-secondary);
            line-height: 22px;
        }
    }
    .notification {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px 24px 16px 30px;
        .profile-picture {
            width: 40px;
            height: 40px;
        }
        .notification-content {
            min-width: 220px;
            h2 {
                font-size: 14px;
                font-weight: 600;
                line-height: 22px;
            }
            p {
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
                margin-bottom: 4px;
            }
            time {
                font-size: 12px;
                font-weight: 400;
                line-height: 18px;
                display: flex;
                align-items: center;
                gap: 4px;
            }
        }
        .binButton {
            svg {
                transition: fill .5s;
                fill: #bcbcbc;
                @media (pointer: fine) and (hover: hover) {
                    &:hover {
                        fill: var(--primary);
                    }
                }
            }
        }
    }
    .clearButton {
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        padding: 14px;
        width: 100%;
        color: var(--primary);
        @media (pointer: fine) and (hover: hover) {        
            &:hover {
                background-color: rgba(157, 157, 157, 0.08);
            }
        }
    }
}
</style>
<script>
import { ref } from 'vue';
export default {
    props: {
        openNotificationModel: {
            type: Boolean,
            default: false
        },
    },
    setup(props) {
        let content = ref([
            {
                id : 1,
                image: 'default-profile.png',
                title: 'New Registration',
                description: 'Alex Fredricks',
                time: '07 Oct 2022'
            },
            {   
                id : 2,
                image: 'default-profile.png',
                title: 'New Registration',
                description: 'Alex Fredricks',
                time: '07 Oct 2022'
            }
        ]);

        let showMenu = ref(props.openNotificationModel);

        const clearAll = () => {
            content.value = [];
        };

        const deleteNotification = (i) => {
            content.value = content.value.filter(obj => obj.id !== i);
        };

        return {
            showMenu,
            content,
            clearAll,
            deleteNotification
        }
    }
}
</script>