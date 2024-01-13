<script lang="ts">
    import Nav from '$lib/Nav.svelte';
</script>

<div class="relative">
    <div class="absolute w-screen">
        <Nav />
    </div>
    <div class="max-w-screen-lg flex flex-wrap pt-[150px] justify-between mx-auto p-4 h-screen">
        <div class="w-auto h-auto flex flex-col">
            <h3 class="text-3xl mb-4">This project is by Group H</h3>
            <h4 class="text-xl">Our repositories:</h4>
            <ul class="list-disc pl-4">
                <li>
                    <a href="https://github.com/fiekzz/spam-detector-backend" target="_blank" class="text-lg hover:text-[#ea8663]">Backend</a>
                    <span>&#40;FastAPI python&#41;</span>
                </li>
                <li>
                    <a href="https://github.com/fiekzz/spam-detector-backend" target="_blank" class="text-lg hover:text-[#ea8663]">Frontend</a>
                    <span>&#40;SvelteKit&#41;</span>
                </li>
                <li>
                    <a href="https://github.com/fiekzz/spam-detector-backend" target="_blank" class="text-lg hover:text-[#ea8663]">Data visualization and AI training</a>
                    <span>&#40;Jupyter Notebook&#41;</span>
                </li>
            </ul>
        </div>
    </div>
</div>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>