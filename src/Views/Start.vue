<template>
    <el-steps :space="200" :active="active" simple>
        <el-step title="下载工具" :icon="Link"/>
        <el-step title="填入Token" :icon="UploadFilled"/>
        <el-step title="加载数据" :icon="Position"/>
    </el-steps>
    <el-button id="next" style="margin-top: 12px" @click="next">下一步</el-button>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {ref} from 'vue'
import {ElNotification} from 'element-plus'
import {Link, Position, UploadFilled} from '@element-plus/icons-vue'

const router = useRouter()

const isMobile = () => {
    let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
}
const active = ref(1)

const next = () => {
    if (active.value == 2) {
        document.querySelector("#next").innerHTML = "完成"
    }
    if (active.value == 3) {
        router.push({path: "/"})
    }
    active.value++
}

if (isMobile()) {
    ElNotification({
        title: '警告',
        message: '请使用电脑进行初始化',
        type: 'error',
    })
}


</script>

<style scoped></style>