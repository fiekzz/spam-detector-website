<script lang="ts">
  import Nav from '$lib/Nav.svelte';
  import { Textarea } from "$lib/components/ui/textarea";
  import { Button } from "$lib/components/ui/button";

  export let text: string = '';

  export let resultText: string = '';

  export let showResult: boolean = false;

  export let getresult: string = '';

  interface SpamMessage {
    message: string;
  }

  const handleCheckSpam = async() => {

    const response = await fetch('api/getresult', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: text })
    });

    const result = await response.json();
    
    getresult = result.Message

    resultText = text

    showResult = true;
  }

</script>

<div class="relative">
  <div class="absolute w-screen">
    <Nav />
  </div>
  <div class="max-w-screen-lg flex flex-wrap pt-[150px] justify-between mx-auto p-4 h-screen">
    <div class="w-full h-auto flex flex-col">
        <div class="flex flex-col items-start">
          <h3 class="text-3xl font-medium mb-2">Spam detector</h3>
          <div class="mb-4">
            <h3>This AI has accuracy of 95%</h3>
          </div>
          <div class="grid w-full gap-2">
            <Textarea placeholder="Type your message here." class="w-full lg:w-[800px] mb-2 h-[200px]" bind:value={text} />
            <Button on:click={handleCheckSpam} class="w-full lg:w-[800px]">Check spam</Button>
          </div>
        </div>
        {#if showResult}
          <div class="w-full h-full flex flex-col mt-10 border-t border-black">
            <h3 class="text-xl font-medium mb-2 mt-6">Result</h3>
            <div class="mb-4">
              <h3>Your message <span class="font-bold">{resultText}</span> is detected as <span class="font-bold">{getresult}</span></h3>
            </div>
          </div>
        {/if}
    </div>
  </div>
</div>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>