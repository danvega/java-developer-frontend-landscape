<script setup>

import {onMounted, ref} from "vue";

const sessions = ref([]);

onMounted(() => {
  // call api and get a list of sessions
  fetch("/api/sessions")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        sessions.value = data;
      })
});
</script>

<template>
<h1 class="text-4xl font-bold mt-8 mb-8">
  Spring I/O Sessions
</h1>

<div class="">
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
          <tr>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
          <!-- if sessions.title contains Workshop bg-green-100 -->
          <tr v-for="session in sessions">
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
              {{session.title}}
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {{ session.speakers.toString() }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>