<template>
    <div v-if="showMenu" class="menuContainer">
        <dl>
            <dt>Adrian Stefan</dt>
            <dd>adrian@mrfertility.co.za</dd>
        </dl>
        <hr />
        <button aria-label="Profile">Profile</button>
        <hr />
        <button aria-label="Logout">Logout</button>
    </div>
</template>
<style scoped lang="scss">
    .menuContainer {
        position: absolute;
        background-color: var(--background-contrast);
        top: 100px;
        right: 24px;
        z-index: 100;
        border-radius: 12px;
        box-shadow: 0px 20px 40px -4px rgba(145, 158, 171, 0.16);
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
        button {
            margin: 8px;
            width: calc(100% - 16px);
            height: 38px;
            border-radius: 8px;
            padding: 8px 16px;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            text-align: left;
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
        openUserMenu: {
            type: Boolean,
            default: false
        },
    },
    setup(props) {
        let showMenu = ref(props.openUserMenu);
        return {
            showMenu
        }
    }
}
</script>