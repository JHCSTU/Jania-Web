<script setup>
import {useRoute} from 'vue-router';
import {toggleDark, isDark} from '../utils';
import {ref} from 'vue';

const route = useRoute()
const darkMode = ref(false)
const changeDark = () => {
    darkMode.value = !darkMode.value
    toggleDark()
}
</script>

<template>
    <el-menu :router="true" :default-active="route.fullPath" collapse="false">
        <el-menu-item index="/">
            <el-icon>
                <Avatar/>
            </el-icon>
            <template #title>个人信息</template>
        </el-menu-item>
        <el-menu-item index="/Access">
            <el-icon>
                <Promotion/>
            </el-icon>
            <template #title>出行记录</template>
        </el-menu-item>
        <el-menu-item index="/Class">
            <el-icon>
                <Grid/>
            </el-icon>
            <template #title>课程信息</template>
        </el-menu-item>
        <el-menu-item index="/Friend">
            <el-icon class="is-loading">
                <HelpFilled/>
            </el-icon>
            <template #title>朋友圈</template>
        </el-menu-item>
        <el-menu-item index="/Setting">
            <el-icon>
                <Tools/>
            </el-icon>
            <template #title>设置</template>
        </el-menu-item>
        <el-menu-item index="/Start">
            <el-icon>
                <UploadFilled/>
            </el-icon>
            <template #title>开始</template>
        </el-menu-item>
        <el-menu-item h="full" @click="changeDark()">
            <el-icon>
                <Moon v-if="darkMode"/>
                <Sunny v-else/>
            </el-icon>
        </el-menu-item>
    </el-menu>
</template>

<style scoped></style>
