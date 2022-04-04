---
title: plugin
date: 2020-05-28
---

This is plugin.

<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/.vuepress/components/Xuan.vue?template
  </template>
  <template slot="code-script">
    <<< @/.vuepress/components/Xuan.vue?script
  </template>
  <template slot="code-style">
    <<< @/.vuepress/components/Xuan.vue?style
  </template>
</RecoDemo>
