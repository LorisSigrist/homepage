<script lang="ts" context="module">
    export type Tab = {
        label: string,
        value: string,
    }
</script>

<script lang="ts" generics="Tabs extends readonly Tab[]">
    export let tabs: Tabs;
    export let selected: Tabs[number]['value'];
</script>

<nav class="flex w-full">
    {#each tabs as tab}
        <label class="flex-1">
            <input
                type="radio"
                name="tabs"
                value={tab.value}
                bind:group={selected}
                class="sr-only"
            >
            <div class="flex items-center justify-center py-2 text-sm font-medium text-gray-700 bg-white border-b {tab.value === selected ? "border-indigo-500 border-b-2" : "border-gray-300"} cursor-pointer hover:bg-gray-50">
                {tab.label}
            </div>
        </label>
    {/each}
</nav>
