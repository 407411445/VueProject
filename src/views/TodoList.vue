<template>
    <h1>TodoList-Test</h1>
    <div class="todolist">
        <p><input v-model="data.inputText" type="text" @compositionstart="data.cstartHandler()"
                @compositionend="data.cendHandler()" @keyup.enter="data.inputHandler()" /></p>
        <p>
            <button @click="data.show = 'all'">全部</button>
            <button @click="data.show = 'open'">未完成</button>
            <button @click="data.show = 'done'">完成</button>
        </p>
        <ul>
            <!-- <li v-for="(item,index) in data.list" :key="index">{{item.content}}</li>// 綁index不好， 刪除修改會有問題 -->
            <li v-for=" item  in data.filterList" :key="item.timestamp">
                <template v-if="data.editing === item">
                    <input type="text" v-model="data.editingText" />
                    <button @click="data.cancelHandler()">取消</button>
                    <button @click="data.completeHandler()">完成</button>
                </template>
                <template v-else>
                    <input type="checkbox" v-model="item.status">{{item.content}}
                    <button @click="data.editHandler(item)">修改</button>
                    <button @click="data.deleteHandler(item)">刪除</button>
                </template>
            </li>
        </ul>
    </div>
</template>

<script setup>

import { computed, reactive } from 'vue';


const data = reactive({
    inputText: "",
    list: [],
    compositionstatus: false,
    editing: null,
    editingText: "",
    show: "all",
    filterList: computed(() => {
        if (data.show === "all") {
            return data.list;
        }
        else if (data.show === "open") {
            return data.list.filter((item) => {
                return item.status === false
            })
        }
        else if (data.show === "done") {
            return data.list.filter((item) => {
                return item.status === true
            })
        }
        else {
            return [];
        }
    }),
    cstartHandler: () => {
        data.compositionstatus = true;
    },
    cendHandler: () => {
        data.compositionstatus = false;
    },
    inputHandler: function () {
        if (this.compositionstatus) {
            return false;
        }
        else {
            data.list.push({
                timestamp: new Date().getTime(),
                status: false,
                content: data.inputText
            })
            data.inputText = "";
        }
    },
    deleteHandler: (item) => {
        data.list = data.list.filter((target) => {
            return target != item;
        });

        // data.list.splice(index, 1);
    },
    editHandler: (item) => {
        data.editing = item;
        data.editingText = item.content;
    },
    cancelHandler: () => {
        data.editingText = "";
        data.editing = null;
    },
    completeHandler: () => {
        data.editing.content = data.editingText;
        data.cancelHandler();
    },

})
</script>

<style scoped>
li button {
    display: none;
}

li:hover button {
    display: inline;
}
</style>