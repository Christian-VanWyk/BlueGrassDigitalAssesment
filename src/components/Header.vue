<template>
    <header>
        <div class="userControls">
            <span @click.stop="toggleModel('notification')" class="notifications">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6 11.1667L17.1 12.675C17.4852 13.0666 17.5985 13.6508 17.3876 14.158C17.1767 14.6652 16.6826 14.9969 16.1333 15H13.3333V15.2833C13.2523 17.0447 11.7616 18.4087 10 18.3333C8.23834 18.4087 6.74771 17.0447 6.66666 15.2833V15H3.86666C3.31736 14.9969 2.82328 14.6652 2.61239 14.158C2.40151 13.6508 2.5148 13.0666 2.9 12.675L4.4 11.1667V7.275C4.40295 5.6593 5.10153 4.12313 6.31727 3.05896C7.533 1.99479 9.14813 1.50571 10.75 1.71666C13.5712 2.14907 15.6413 4.59612 15.6 7.45V11.1667ZM10 16.6667C10.8362 16.7257 11.5707 16.1161 11.6667 15.2833V15H8.33333V15.2833C8.42934 16.1161 9.16382 16.7257 10 16.6667Z" fill="#9D9D9D"/>
                </svg>
                <span class="badge">2</span>
            </span>
            <span @click.stop="toggleModel('userMenu')" class="userMenu">
                <span class="userIcon">AS</span>
                Adrian Stefan
                <svg :class="userState ? 'opened' : ''" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99997 4.66666C4.84421 4.66697 4.69325 4.61272 4.57331 4.51333L0.573308 1.18C0.289802 0.944354 0.251 0.523502 0.486642 0.239996C0.722283 -0.0435107 1.14314 -0.0823126 1.42664 0.153329L4.99997 3.14L8.57331 0.259995C8.71104 0.148149 8.88767 0.0958162 9.0641 0.114585C9.24052 0.133354 9.40219 0.221676 9.51331 0.359996C9.63673 0.498568 9.69681 0.682314 9.6791 0.867035C9.66139 1.05176 9.56748 1.22074 9.41997 1.33333L5.41997 4.55333C5.29659 4.63701 5.14871 4.67691 4.99997 4.66666Z" fill="#67ADB9"/>
                </svg>
            </span>
            <NotificationModel @click.stop="" :openNotificationModel="notificationState" v-if="notificationState" /> 
            <UserMenuMenu @click.stop="" :openUserMenu="userState" v-if="userState" /> 
        </div>
    </header>
</template>
<style scoped lang="scss">
    header {
        position: sticky;
        top: 0;
        background-color: var(--background-contrast);
        width: 100%;
        padding: 16px 40px;
        z-index: 99;
        box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.05); 
        .userControls {
            display: flex;
            justify-content: end;
            align-items: center;
            gap: 12px;
            flex-shrink: 0;
            .notifications {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 44px;
                height: 44px;
                position: relative;
                cursor: pointer;
                user-select: none;
                .badge {
                    display: block;
                    width: fit-content;
                    border-radius: 50px;
                    height: fit-content;
                    position: absolute;
                    background-color: var(--hazard);
                    color: var(--font-light);
                    padding: 2px 6px;
                    font-size: 12px;
                    left: 21px;
                    bottom: 23px;
                    font-weight: 700;
                }
            }
            .userMenu {
                display: flex;
                align-items: center;
                gap: 12px;
                width: 179px;
                height: 40px;
                font-size: 14px;
                font-weight: 600;
                color: var(--font-heading);
                position: relative;
                cursor: pointer;
                user-select: none;
                .userIcon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 40px;
                    width: 40px;
                    border-radius: 100%;
                    background-color: var(--primary-highlights);
                    color: var(--font-primary);
                }
                svg {
                    transition: .5s;
                    &.opened {
                        transform: rotate(-180deg);
                    }
                }
            }
        }
    } 
</style>
<script> 
import { onMounted, ref } from 'vue'
import UserMenuMenu from './UserMenuMenu.vue'; 
import NotificationModel from './NotificationModel.vue'; 

export default { 
    components: { 
        UserMenuMenu, 
        NotificationModel
    }, 
    setup() { 
        const userState = ref(false); 
        const notificationState = ref(false);

        const toggleModel = (data) => { 
            if (data === 'userMenu') { 
                userState.value = !userState.value; 
                notificationState.value = false; 
            } else if (data === 'notification') { 
                notificationState.value = !notificationState.value; 
                userState.value = false; 
            } 
        }; 

        onMounted(() => {
            document.addEventListener('click', () => {
                notificationState.value = false; 
                userState.value = false; 
            });
        })

        return { 
            userState, 
            notificationState, 
            toggleModel
        }; 
    } 
}; 
</script>