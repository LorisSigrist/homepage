<script lang="ts">
    export let palette: string[] = [];

    function addColor() {
        palette = [...palette, "#000000"];
    }

    function removeColor(index: number) {
        palette = palette.filter((_, i) => i !== index);
    }
</script>

<ul>
    {#each palette as color, index}
        <li>
            <input type="color" bind:value={color} />
            <button on:click={() => removeColor(index)}>Remove</button>
        </li>
    {/each}
    <li>
        <button on:click={addColor}>Add</button>
    </li>
</ul>