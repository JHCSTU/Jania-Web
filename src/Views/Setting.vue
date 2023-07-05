<template>
    <el-input v-model="tokenInput" type="textarea" placeholder="输入Token" :rows="5" clearable/>
    <el-button @click="change" style="margin-top: 20px;" type="primary">
        修改
        <el-icon class="el-icon--right">
            <Upload/>
        </el-icon>
    </el-button>
</template>

<script setup>
import {ref} from 'vue';
import {setToken} from '../utils'

const tokenInput = ref('')

const change = () => {
    setToken(tokenInput.value)
}
</script>

<style scoped></style>