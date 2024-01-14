<script lang="ts">
    import Nav from '$lib/Nav.svelte';
</script>

<div class="relative">
    <div class="absolute w-screen">
        <Nav />
    </div>
    <div class="max-w-screen-lg flex flex-wrap pt-[150px] justify-between mx-auto p-4 h-screen">
        <div class="w-auto h-auto flex flex-col">
            <!-- <h3 class="text-3xl mb-4">Contact us via</h3> -->
            <h4 class="text-xl">Our contact</h4>
            <ul class="list-disc pl-4">
                <li>
                    <a href="https://github.com/fiekzz/spam-detector-backend" target="_blank" class="text-lg hover:text-[#ea8663]">fiekzz@fiekzz.com</a>
                    <span>&#40;email&#41;</span>
                </li>
                <li>
                    <a href="https://fiekzz.com" target="_blank" class="text-lg hover:text-[#ea8663]">fiekzz.com</a>
                    <span>&#40;website&#41;</span>
                </li>
                <li>
                    <a href="https://linkedin.com/in/fiekzz" target="_blank" class="text-lg hover:text-[#ea8663]">fiekzz</a>
                    <span>&#40;linkedin&#41;</span>
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