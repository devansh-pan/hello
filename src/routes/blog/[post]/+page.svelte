<script lang="ts">
   let {data} = $props()
  const {html} = $derived(data)
</script>
<svelte:head>
	<title>{data?.data?.title ?? 'Telugu18'}</title>
	<meta name="description" content="{data?.data?.description ?? 'Welcome to telugu18.'}" />
</svelte:head>
<span class="ml-3 p-2 block *:text-wrap text-sm"><a href="/blog">Blog &nbsp; /</a> &nbsp;{data?.data?.title ?? 'Post without title'}</span>
<hr class="border border-gray-600"/>
<main class="prose dark:prose-invert p-2 ">
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/styles/default.min.css"/>-->
   
   <style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:okch(.2 .2 200);color:snow;}.hljs-comment{color:#697070}
      .hljs-punctuation,.hljs-tag{color:white;}
      .hljs-tag .hljs-attr,.hljs-tag .hljs-name{color:blue;}
      .hljs-attribute,.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-name,.hljs-selector-tag{font-weight:700}.hljs-deletion,.hljs-number,.hljs-quote,.hljs-selector-class,.hljs-selector-id,.hljs-string,.hljs-template-tag,.hljs-type{color: orangered ;}.hljs-section,.hljs-title{color:#800;font-weight:700}.hljs-link,.hljs-operator,.hljs-regexp,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#ab5656}.hljs-literal{color:#695}.hljs-addition,.hljs-built_in,.hljs-bullet,.hljs-code{color:#397300}.hljs-meta{color:#1f7199}.hljs-meta .hljs-string{color:#38a}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}
      .hljs-attribute{
         color:lightblue;
      }.hljs-selector-tag{color:hotpink;}
      .hljs-name{color: deepskyblue !important;}
      .hljs-attr{color:green !important;}
   </style>
<script type="module">
import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/es/highlight.min.js';
   hljs.highlightAll();
</script>
   <br/>
   {@html html ?? 'No content'}
   <script src="https://giscus.app/client.js"
        data-repo="devansh-pan/comments"
        data-repo-id="R_kgDONMp2OQ"
        data-category="General"
        data-category-id="DIC_kwDONMp2Oc4CkHQu"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="light"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
   </script>
</main>

<style>
   
</style>