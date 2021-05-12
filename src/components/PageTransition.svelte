<!-- src/component/PageTransitions.svelte -->
<script>
    import { fly } from 'svelte/transition';
    export let refresh = '';
  </script>
  
  {#key refresh}
    <div style="height:100vh"
      in:fly="{{ y: -50, duration: 250, delay: 300 }}"
      out:fly="{{ y: -50, duration: 250 }}" 
      >
      <slot/>
    </div>
  {/key}