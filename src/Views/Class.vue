<template>
    <div class="demo-date-picker">
        <div class="block">
            <span class="demonstration">起始时间</span>
            <el-date-picker v-model="startTime" type="date"/>
        </div>
        <div class="block">
            <span class="demonstration">结束时间</span>
            <el-date-picker v-model="endTime" type="date"/>
        </div>
    </div>
    <el-row :gutter="20">
        <el-col v-for="item in testDataList" :key="item.jc" class="card" :span="6">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <el-button class="button" type="primary" text>获取签到码</el-button>
                    </div>
                </template>
                <div v-for="info in item" class="text item">
                    {{ info }}
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import {ElNotification} from 'element-plus'
import {checkToken} from '../utils'
import {useRouter} from 'vue-router';
import {ref} from 'vue';

const router = useRouter()
checkToken(ElNotification, router)

const startTime = ref()
const endTime = ref()

/**
 * Test
 */
const testDataList = ref()

let testData = {
    coursName: "课程名",
    jc: "1-2",
    courseId: "courseId",
    clsssId: "classId"
}
testDataList.value = Array(8).fill(testData)
</script>

<style scoped>
.card {
    margin-bottom: 20px;
}

.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-date-picker .block:last-child {
    border-right: none;
}

.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>