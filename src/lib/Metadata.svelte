<script lang="ts" context="module">

    export interface Metadata {
        title?: string;
        description?: string;
        author?: string;
    }

</script>

<script lang="ts">
    import {page} from '$app/stores';

    const DEFAULT_TITLE = "Loris Sigrist";
    const DEFAULT_AUTHOR = "Loris Sigrist";
</script>

<svelte:head>
    <title>{$page.data.title ?? DEFAULT_TITLE}</title>
    {#if $page.data.description}
        <meta name="description" content="{$page.data.description}" />
    {/if}
    <meta name="author" content="{$page.data.author ?? DEFAULT_AUTHOR}" />
</svelte:head>