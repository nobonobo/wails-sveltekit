<script>
  import { Greet } from "$lib/wailsjs/go/main/App.js";
  import { browser } from "$app/environment";
  let Name = "No Name";
  let Response = "";
  let Count = 0;
  if (browser) {
    runtime.EventsOn("count", (cnt) => (Count = cnt));
  }
</script>

<svelte:head>
  <title>Welcome</title>
</svelte:head>
<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<p>Count:{Count}</p>
<div>
  <input bind:value={Name} />
  <button
    on:click={async () => {
      Response = await Greet(Name);
    }}>greet</button
  >
  <p>{Response}</p>
</div>
