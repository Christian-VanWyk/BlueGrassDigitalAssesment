<template>
    <div class="modelContainer" @click="cancel()">
        <div @click.stop="" class="container">
            <h2>Edit Data Table</h2>
            <form>
                <label for="name">Name</label>
                <input v-model="content.name" @keyup="nameValidation" id="name" type="text">

                <label for="telNo">Tel No</label>
                <input placeholder="+27 country code is needed" v-model="content.telNo" @keyup="numberValidation" id="telNo" type="tel">

                <label for="email">Email</label>
                <input 
                    v-model="content.email" 
                    id="email" 
                    type="email" 
                    :class="!emailValidation() ? 'error' : ''"
                >
                <label for="date">Date created</label>
                <input v-model="content.date" id="date" type="text">

                <div class="status">
                    <label>
                        Enabled
                        <input v-model="content.status" type="checkbox">
                        <span class="switch"></span>
                    </label>
                </div>
            </form>
            <div class="formBottom">
                <button @click="cancel()" class="cancel" aria-label="Cancel">
                    Cancel
                </button>
                <button @click="save()" aria-label="Save">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.modelContainer {
    position: fixed;
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .16);
    .container {
        position: relative;
        background-color: var(--background-contrast);
        max-width: 420px;
        width: 100%;
        padding: 24px;
        box-shadow: 0px 1px 2px 0px rgba(145, 158, 171, 0.16);
        border-radius: 12px;
        z-index: 1;
        margin: 0 24px;

        label {
            font-size: 14px;
        }

        input {
            width: 100%;
            height: 35px;
            border: unset;
            border-bottom: 1px solid rgba(0, 0, 0, .16);
            margin-bottom: 24px;
            position: relative;

            &:hover {
                border-color: none;
                outline: none;
            }

            &:focus {
                outline: none;
            }

            &.error {
                border-bottom: 1px solid red;
            }
        }

        .status {
            width: fit-content;

            input {
                width: fit-content;
            }
        }

        .formBottom {
            display: flex;
            gap: 15px;
            justify-content: end;

            button {
                display: block;
                margin-top: 24px;
                width: fit-content;
                padding: 6px 12px;
                border-radius: 6px;
                background-color: var(--primary);
                color: var(--font-light);
                box-shadow: 3px 3px 2px rgba(0, 0, 0, .03);

                &.cancel {
                    background-color: var(--hazard);
                }

                @media (pointer: fine) and (hover: hover) {
                    &:hover {
                        background-color: var(--hover);
                    }
                }
            }
        }
    }

    h2 {
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        color: var(--font-heading);
        margin-bottom: 24px;
        padding-bottom: 24px;
    }
}
</style>
<script>
import { ref, onMounted } from 'vue';

export default {
    props: {
        modelContent: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ['closeModel'],
    setup(props, { emit }) {
        const content = ref(props.modelContent);

        const cancel = () => {
            emit('closeModel', false);
        };

        // Super basic validation.
        const save = () => {
            let data = content.value;
            let valid = false;

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    if (data[key] === undefined || data[key] === null || data[key] === '') {
                        valid = false;
                        return
                    } else {
                        valid = true;
                    }
                }
            }

            if (valid) {
                emit('closeModel', false);
            }
        };

        const numberValidation = () => {
            content.value.telNo = content.value.telNo.replace(/[^0-9+]/g, "");

            if (content.value.telNo.startsWith("+27")) {
                let cleanedNumber = content.value.telNo.slice(1);
                content.value.telNo = `+${cleanedNumber.slice(0, 2)} ${cleanedNumber.slice(2, 5)} ${cleanedNumber.slice(5, 8)} ${cleanedNumber.slice(8)}`;
            }
        };

        const nameValidation = () => {
            content.value.name = content.value.name.replace(/[^a-zA-Z]/g, "");
        }

        const emailValidation = () => {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(content.value.email);
        }

        return {
            content,
            cancel,
            save,
            numberValidation,
            nameValidation,
            emailValidation
        };
    }
}
</script>
