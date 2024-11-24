<template>
    <section>
        <div class="componentContainer">
            <h2>Newest Practices</h2>
            <table ref="scrollTable" @scroll="scroll()" v-if="!isBelowThreshold" class="desktopTable">
                <thead>
                    <tr>
                        <th>Practise Name</th>
                        <th>Tel No</th>
                        <th>Email</th>
                        <th>Date Created</th>
                        <th :class="scrollable ? 'fade' : ''">Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(item, index) in content">
                        <tr>
                            <td>{{ item.name }}</td>
                            <td>{{ item.telNo }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.date }}</td>
                            <td class="status" :class="scrollable ? 'fade' : ''">
                                <label>
                                    <input v-model="item.status" type="checkbox" :checked="item.status">
                                    <span class="switch"></span>
                                    {{ item.status ? 'Enabled' : 'Disabled' }}
                                </label>
                            </td>
                            <td>
                                <button @click="deleteTable(item.id)" aria-label="Delete">
                                    <svg class="bin" width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.5 16H19.3334V14.6083C19.3138 14.0749 19.0835 13.5709 18.693 13.2069C18.3025 12.8429 17.7836 12.6487 17.25 12.6667H14.75C14.2165 12.6487 13.6976 12.8429 13.307 13.2069C12.9165 13.5709 12.6862 14.0749 12.6667 14.6083V16H8.50002C8.27901 16 8.06704 16.0878 7.91076 16.2441C7.75448 16.4004 7.66669 16.6123 7.66669 16.8333C7.66669 17.0544 7.75448 17.2663 7.91076 17.4226C8.06704 17.5789 8.27901 17.6667 8.50002 17.6667H9.33335V26.8333C9.33335 27.4964 9.59675 28.1323 10.0656 28.6011C10.5344 29.07 11.1703 29.3333 11.8334 29.3333H20.1667C20.8297 29.3333 21.4656 29.07 21.9345 28.6011C22.4033 28.1323 22.6667 27.4964 22.6667 26.8333V17.6667H23.5C23.721 17.6667 23.933 17.5789 24.0893 17.4226C24.2456 17.2663 24.3334 17.0544 24.3334 16.8333C24.3334 16.6123 24.2456 16.4004 24.0893 16.2441C23.933 16.0878 23.721 16 23.5 16ZM14.3334 14.6083C14.3334 14.475 14.5084 14.3333 14.75 14.3333H17.25C17.4917 14.3333 17.6667 14.475 17.6667 14.6083V16H14.3334V14.6083ZM21 26.8333C21 27.0544 20.9122 27.2663 20.7559 27.4226C20.5997 27.5789 20.3877 27.6667 20.1667 27.6667H11.8334C11.6123 27.6667 11.4004 27.5789 11.2441 27.4226C11.0878 27.2663 11 27.0544 11 26.8333V17.6667H21V26.8333Z"/>
                                        <path d="M13.5 25.1667C13.721 25.1667 13.933 25.0789 14.0893 24.9226C14.2456 24.7663 14.3334 24.5544 14.3334 24.3334V21C14.3334 20.779 14.2456 20.567 14.0893 20.4108C13.933 20.2545 13.721 20.1667 13.5 20.1667C13.279 20.1667 13.067 20.2545 12.9108 20.4108C12.7545 20.567 12.6667 20.779 12.6667 21V24.3334C12.6667 24.5544 12.7545 24.7663 12.9108 24.9226C13.067 25.0789 13.279 25.1667 13.5 25.1667Z"/>
                                        <path d="M18.5 25.1667C18.721 25.1667 18.933 25.0789 19.0893 24.9226C19.2456 24.7663 19.3334 24.5544 19.3334 24.3334V21C19.3334 20.779 19.2456 20.567 19.0893 20.4108C18.933 20.2545 18.721 20.1667 18.5 20.1667C18.279 20.1667 18.067 20.2545 17.9108 20.4108C17.7545 20.567 17.6667 20.779 17.6667 21V24.3334C17.6667 24.5544 17.7545 24.7663 17.9108 24.9226C18.067 25.0789 18.279 25.1667 18.5 25.1667Z"/>
                                    </svg>
                                </button>
                                <button @click.stop="" @click="openEditModel(index)" aria-label="Edit">
                                    <svg class="edit" width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.91669 28.5H23.9167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.5833 22.1333V25.1667H13.6321L22.25 16.545L19.2063 13.5L10.5833 22.1333Z" fill="white" stroke-width="2" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <button aria-label="See All">
                                See All
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.49998 11.25C1.32474 11.2504 1.15491 11.1893 1.01998 11.0775C0.866599 10.9504 0.770119 10.7674 0.751827 10.569C0.733535 10.3706 0.794935 10.1731 0.92248 10.02L4.28248 6.00002L1.04248 1.97252C0.916652 1.81757 0.857778 1.61886 0.878893 1.42038C0.900008 1.2219 0.99937 1.04002 1.15498 0.91502C1.31185 0.77699 1.5192 0.710663 1.72706 0.732019C1.93492 0.753374 2.12445 0.860476 2.24998 1.02752L5.87248 5.52752C6.09997 5.80427 6.09997 6.20327 5.87248 6.48002L2.12248 10.98C1.96988 11.1641 1.73866 11.2644 1.49998 11.25Z" fill="#5F97A0"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <template v-for="(item, index) in content">
                <table v-if="isBelowThreshold" class="mobileTable">
                    <tbody>
                        <tr>
                            <th>Practise Name :</th>
                            <td>{{ item.name }}</td>
                        </tr>
                        <tr>
                            <th>Tel No :</th>
                            <td>{{ item.telNo }}</td>
                        </tr>
                        <tr>
                            <th>Email :</th>
                            <td>{{ item.email }}</td>
                        </tr>
                        <tr>
                            <th>Date Created :</th>
                            <td>{{ item.date }}</td>
                        </tr>
                        <tr>
                            <th>Status :</th>
                            <td class="status">
                                <label>
                                    <input v-model="item.status" type="checkbox" :checked="item.status">
                                    <span class="switch"></span>
                                    {{ item.status ? 'Enabled' : 'Disabled' }}
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <th>Actions :</th>
                            <td class="buttonContainer">
                                <button @click="deleteTable(item.id)" aria-label="Delete" class="primary">
                                    <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.5 16H19.3334V14.6083C19.3138 14.0749 19.0835 13.5709 18.693 13.2069C18.3025 12.8429 17.7836 12.6487 17.25 12.6667H14.75C14.2165 12.6487 13.6976 12.8429 13.307 13.2069C12.9165 13.5709 12.6862 14.0749 12.6667 14.6083V16H8.50002C8.27901 16 8.06704 16.0878 7.91076 16.2441C7.75448 16.4004 7.66669 16.6123 7.66669 16.8333C7.66669 17.0544 7.75448 17.2663 7.91076 17.4226C8.06704 17.5789 8.27901 17.6667 8.50002 17.6667H9.33335V26.8333C9.33335 27.4964 9.59675 28.1323 10.0656 28.6011C10.5344 29.07 11.1703 29.3333 11.8334 29.3333H20.1667C20.8297 29.3333 21.4656 29.07 21.9345 28.6011C22.4033 28.1323 22.6667 27.4964 22.6667 26.8333V17.6667H23.5C23.721 17.6667 23.933 17.5789 24.0893 17.4226C24.2456 17.2663 24.3334 17.0544 24.3334 16.8333C24.3334 16.6123 24.2456 16.4004 24.0893 16.2441C23.933 16.0878 23.721 16 23.5 16ZM14.3334 14.6083C14.3334 14.475 14.5084 14.3333 14.75 14.3333H17.25C17.4917 14.3333 17.6667 14.475 17.6667 14.6083V16H14.3334V14.6083ZM21 26.8333C21 27.0544 20.9122 27.2663 20.7559 27.4226C20.5997 27.5789 20.3877 27.6667 20.1667 27.6667H11.8334C11.6123 27.6667 11.4004 27.5789 11.2441 27.4226C11.0878 27.2663 11 27.0544 11 26.8333V17.6667H21V26.8333Z" fill="#FFFFFF"/>
                                        <path d="M13.5 25.1667C13.721 25.1667 13.933 25.0789 14.0893 24.9226C14.2456 24.7663 14.3334 24.5544 14.3334 24.3334V21C14.3334 20.779 14.2456 20.567 14.0893 20.4108C13.933 20.2545 13.721 20.1667 13.5 20.1667C13.279 20.1667 13.067 20.2545 12.9108 20.4108C12.7545 20.567 12.6667 20.779 12.6667 21V24.3334C12.6667 24.5544 12.7545 24.7663 12.9108 24.9226C13.067 25.0789 13.279 25.1667 13.5 25.1667Z" fill="#FFFFFF"/>
                                        <path d="M18.5 25.1667C18.721 25.1667 18.933 25.0789 19.0893 24.9226C19.2456 24.7663 19.3334 24.5544 19.3334 24.3334V21C19.3334 20.779 19.2456 20.567 19.0893 20.4108C18.933 20.2545 18.721 20.1667 18.5 20.1667C18.279 20.1667 18.067 20.2545 17.9108 20.4108C17.7545 20.567 17.6667 20.779 17.6667 21V24.3334C17.6667 24.5544 17.7545 24.7663 17.9108 24.9226C18.067 25.0789 18.279 25.1667 18.5 25.1667Z" fill="#FFFFFF"/>
                                    </svg>
                                </button>
                                <button aria-label="Edit" class="primary">
                                    <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.91669 28.5H23.9167" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.5833 22.1333V25.1667H13.6321L22.25 16.545L19.2063 13.5L10.5833 22.1333Z" fill="transparent" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
            <EditModel @closeModel="modelClose" :modelContent="editModelContent" v-if="showEditModel" />
        </div>
    </section>
</template>
<style scoped lang="scss">
    section {
        padding: 0 40px 26px;
        @media (max-width: 576px) {
            padding: 0 24px 26px;
        }
        .componentContainer {
            padding: 24px;
            @media (max-width: 576px) {
                padding: 0;
            }
            h2 {
                font-weight: 700;
                font-size: 18px;
                line-height: 28px;
                margin-bottom: 24px;
                @media (max-width: 576px) {
                    padding: 24px;
                    margin-bottom: 0;
                }
            }
            .desktopTable {
                width: 100%;
                @media (max-width: 1400px) {
                    overflow-x: auto;
                    display: block;
                    position: relative;
                }
                thead,
                tbody {
                    tr {
                        display: flex;
                        align-items: center;
                        margin: 0 8px;
                        border-radius: 8px;
                        th,
                        td {
                            font-size: 14px;
                            line-height: 22px;
                            padding-right: 15px;
                            // Styling for the last item in the table
                            &:nth-child(1) {
                                width: 182px;
                            }
                            &:nth-child(2) {
                                width: 175px;
                            }
                            &:nth-child(3) {
                                width: 211px;
                            }
                            &:nth-child(4) {
                                width: 154px;
                            }
                            &:nth-child(5) {
                                width: 176px;
                                position: sticky;
                                right: 35px;
                            }
                            &:nth-child(6) {
                                width: 82px;
                                display: flex;
                                flex-shrink: 0;
                                padding-top: 0;
                                padding-bottom: 0;
                                position: sticky;
                                right: 0;
                            }
                            &.fade {
                                position: relative;
                                &::before {
                                    content: '';
                                    display: block;
                                    width: 100px;
                                    right: 100%;
                                    height: 100%;
                                    position: absolute;
                                    z-index: 3;
                                }
                            }
                            button {
                                svg {
                                    transition: fill .5s;
                                    &.bin {
                                        fill: var(--primary);
                                        @media (pointer: fine) and (hover: hover) {
                                            &:hover {
                                                fill: #bcbcbc;
                                            }
                                        }
                                    }
                                    &.edit {
                                        transition: fill .5s;
                                        stroke: var(--primary);
                                        @media (pointer: fine) and (hover: hover) {
                                            &:hover {
                                                stroke: #bcbcbc;
                                            }
                                        }
                                    }
                                }
                            }
                            @media (max-width: 1400px) {
                                width: 100%;
                                // Styling for the last item in the table
                                &:nth-child(1) {
                                    max-width: 211px;
                                }
                                &:nth-child(2) {
                                    max-width: 176px;
                                }
                                &:nth-child(3) {
                                    max-width: 211px;
                                }
                                &:nth-child(4) {
                                    max-width: 176px;
                                }
                                &:nth-child(5) {
                                    max-width: 176px;
                                    position: sticky;
                                    right: 35px;
                                    padding-left: 15px;
                                }
                                &:nth-child(6) {
                                    width: fit-content;
                                    padding-right: 15px;
                                }
                            }
                        }
                    }
                }
                thead {
                    tr {
                        background-color: var(--standard-highlights);
                        padding: 17px 16px;
                        th {
                            background-color: var(--standard-highlights);
                            text-align: left;
                            color: var(--font-secondary);
                            font-weight: 600;
                            &.fade {
                                &::before {
                                    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, var(--standard-highlights));
                                }
                            }
                        }
                    }
                }
                tbody {
                    tr {
                        padding: 25px 16px;
                        td {
                            text-align: left;
                            color: var(--font-heading);
                            font-weight: 400;
                            height: 100%;
                            background-color: var(--background-contrast);
                            &.fade {
                                &::before {
                                    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, var(--background-contrast));
                                }
                            }
                        }
                    }
                }
                tfoot {
                    tr {
                        td {
                            display: flex;
                            align-items: center;
                            justify-content: end;
                            padding: 20px 25px;
                            width: 100%;
                            border-top: 1px solid rgba(157, 157, 157, 0.24);
                            button {
                                color: var(--primary);
                                font-size: 12px;
                                line-height: 20px;
                                font-weight: 600;
                                cursor: pointer;
                                position: sticky;
                                right: 15px;
                                svg {
                                    margin-left: 14px;
                                }
                                @media (pointer: fine) and (hover: hover) {
                                    &:hover {
                                        background-color: unset;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .mobileTable {
                width: 100%;
                border-radius: 8px;
                background-color: var(--background);
                &:not(:last-child) {
                    margin-bottom: 40px;
                }
                tr {
                    display: flex;
                    padding: 15px 24px;
                    gap: 16px;
                    align-items: center;
                    @media (max-width: 576px) {
                        flex-wrap: wrap;
                    }
                    &:nth-of-type(odd) {
                        background-color: var(--primary-highlights);
                    }
                    th {
                        text-align: left;
                        color: var(--font-heading);
                        font-weight: 600;
                        width: 50%;
                        @media (max-width: 576px) {
                            display: block;
                            width: 100%;
                        }
                    }
                    td {
                        width: 50%;
                        word-wrap: anywhere;
                        @media (max-width: 576px) {
                            width: 100%;
                        }
                        &.buttonContainer {
                            display: flex;
                            gap: 15px;
                            button {
                                width: fit-content;
                                padding: 0 12px;
                                border-radius: 6px;
                                box-shadow: 3px 3px 2px rgba(0,0,0,.03);
                                @media (pointer: fine) and (hover: hover) {
                                    &:hover {
                                        background-color: var(--hover);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<script>
import { ref, onMounted } from 'vue';
import useScreenWidth from '../helpers/useScreenSize';
import EditModel from './EditModel.vue';
export default {
    components: {
        EditModel,
    },
    setup() {
        let scrollTable = ref(null)
        const { isBelowThreshold } = useScreenWidth(992);
        let scrollable = ref(false);
        let showEditModel = ref(false);
        let editModelContent = ref({});
        let content = ref([
            {
                id: 1,
                name: 'Cape Fertility Clinic',
                telNo: '+21 794 3956',
                email: 'info@capefertility.co.za',
                date: '04/10/2021',
                status: true,
            },
            {
                id: 2,
                name: 'Cape Fertility Clinic',
                telNo: '+21 794 3956',
                email: 'info@capefertility.co.za',
                date: '04/10/2021',
                status: true,
            },
            {
                id: 3,
                name: 'Cape Fertility Clinic',
                telNo: '+21 794 3956',
                email: 'info@capefertility.co.za',
                date: '04/10/2021',
                status: false,
            },
        ]);

        let scroll = () => {
            const maxScroll = scrollTable.value.scrollWidth > scrollTable.value.clientWidth;
            const isAtEndOfScroll = scrollTable.value.scrollLeft + scrollTable.value.clientWidth >= scrollTable.value.scrollWidth;
            if (maxScroll) {
                scrollable.value = isAtEndOfScroll ? false : true;
            }
        }

        const deleteTable = (i) => {
            content.value = content.value.filter(obj => obj.id !== i);
        }

        let modelClose = (data) => {
            showEditModel.value = data;
        }

        onMounted(() => {
            if (scrollTable.value.scrollWidth > scrollTable.value.clientWidth) {
                scrollable.value = true;
            }
        });

        let openEditModel = (i) => {
            showEditModel.value = true;
            editModelContent.value = content.value[i];
        };

        return {
            isBelowThreshold,
            scroll,
            scrollTable,
            scrollable,
            content,
            deleteTable,
            showEditModel,
            openEditModel,
            editModelContent,
            modelClose
        }
    }
}
</script>