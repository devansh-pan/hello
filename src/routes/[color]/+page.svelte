<script lang='ts'>
  
  let color = $state('200');
  const swatches: number[] = [10, 20 ,30, 40, 50, 60, 70,80, 90, 95]
  let codes : number[] = [20,60,80,100,120,140,160,180,200,220,260,280,300,340]
</script>
<h1>Oklch color palette generator </h1>
<label for="color">Color 0-360</label>
0<input name="color" bind:value={color} type="range" min=0 max=360 />360

<pre>
  <code class="language-js">
  {#each swatches as swatch }
swatch-{swatch}0  "color: oklch({swatch}% 0.34 {color} );" 
{/each}
  </code>
  <button class="copy-btn">Copy</button>
</pre>

{#each swatches as swatch }
<div class='w-full border text-lg ' style="background-color: oklch( {swatch}% 0.34 {color}) ;">
 <p class="fil" > swatch-{swatch}0 </p>
</div>
{/each}
<em>Some colors appear as duplicate but they are not.The browser fallback to nearest color that your device screen can produce.But on supported devices like OLED you can see the difference between shades and tints.</em>
{#each codes as code}
  {#each swatches as swatch}
    <div style="background-color:oklch({swatch}% .34 {code});">
     <p class="fil">{code}-{swatch}</p>
    </div>
  
  {/each}
  <br/>
{/each}
<style>
  pre {
  position: relative;
}
.fil{
  filter: invert(1) brightness(2); 
}
.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  }

</style>