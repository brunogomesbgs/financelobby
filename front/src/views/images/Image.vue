<script setup>

import { storeToRefs } from 'pinia';
import { useImagesStore } from '@/stores';

const imagesStore = useImagesStore();
const { images } = storeToRefs(imagesStore);

imagesStore.loadImages()
</script>
<template>
  <h1>Images</h1>
  <router-link to="/" class="btn btn-sm btn-success mb-2">Home</router-link>
  <template v-if="!(images?.loading || images?.error)">
      <div>Image from Unsplas</div>
  </template>
  <template v-if="images?.loading">
    <div class="text-center m-5">
      <span class="spinner-border spinner-border-lg align-center"></span>
    </div>
  </template>
  <template v-if="images?.error">
    <div class="text-center m-5">
      <div class="text-danger">Error to load Images: {{images.error}}</div>
    </div>
  </template>
</template>