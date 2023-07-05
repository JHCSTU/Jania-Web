<template>
    2333
</template>

<script setup>
import {ElNotification} from 'element-plus'
import {checkToken} from '../utils'
import {useRouter} from 'vue-router';

const router = useRouter()
checkToken(ElNotification, router)
</script>

<style scoped></style>