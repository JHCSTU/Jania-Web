<template>
    <el-image class="head" fit="cover" lazy :src="imageUrl" :preview-src-list="[imageUrl]"></el-image>
    <div class="textBlock">
        <el-text class="mx-1" size="large">{{ name }}</el-text>
    </div>
    <div class="textBlock">
        <el-text class="mx-1" size="large">{{ studentKey }}</el-text>
    </div>
</template>

<script setup>
import { ElNotification } from 'element-plus'
import { checkToken, getStudentKey, request } from '../utils'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
checkToken(ElNotification, router)

const imageUrl = ref()
const name = ref()
const studentKey = ref()
/**
 * Test
 */
// imageUrl.value = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
// name.value = "饶小明"
// getStudentKey();
// studentKey.value = getStudentKey();

const data = await request("mine",{}).data
</script>

<style scoped>
.textBlock {
    padding-top: 30px;
}

.mx-1 {
    font-size: 40px;
}

.head {
    width: 250px;
    height: 250px;
}
</style>