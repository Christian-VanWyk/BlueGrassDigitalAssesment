<template>
    <section>
        <span class="userName">Welcome Andrew!</span>
        <p>Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel risus eleifend laoreet.</p>
    </section>
</template>
<style scoped lang="scss">
    section {
        padding: 32px 40px 40px;
        @media (max-width: 576px) {
            padding: 32px 24px 40px;
        }
        .userName {
            display: block;
            color: var(--font-heading);
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            margin-bottom: 8px;
        }
        p {
            display: block;
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
        }
    }
</style>
<script>
</script>