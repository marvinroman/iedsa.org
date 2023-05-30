<template>
  <iframe
    :src="link"
    name="donorbox"
    allowpaymentrequest="allowpaymentrequest"
    seamless="seamless"
    frameborder="0"
    scrolling="no"
    height="900px"
    width="100%"
    :style="
      'max-width: ' +
      maxWidth +
      '; min-width: 310px; max-height: none !important'
    "
  ></iframe>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    default: undefined,
  },
  maxWidth: {
    type: String,
    default: '600px',
  },
})

useHead({
  script: [{ src: 'https://donorbox.org/widget.js' }],
})
</script>
