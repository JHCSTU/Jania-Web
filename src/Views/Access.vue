<template>
    <el-table stripe border="true" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="时间"/>
        <el-table-column prop="address" label="地点"/>
    </el-table>
</template>

<script setup>
import {ElNotification} from 'element-plus'
import {checkToken} from '../utils'
import {useRouter} from 'vue-router';

const router = useRouter()
checkToken(ElNotification, router)

const tableData = [
    {
        date: '2016-05-03',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>


<style scoped></style>