<script lang="ts">
    const currencies = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        JPY: '¥',
    };

    type Currency = keyof typeof currencies;

    export let currency : Currency= 'USD';
</script>

<div class="font-mono">
    <label for="price" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Price</label>
    
    <div class="relative mt-2">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="text-gray-500 dark:text-gray-400 sm:text-sm">
            {currencies[currency]}
        </span>
      </div>
      <input type="text" name="price" id="price" class="block w-full border-0 py-1.5 pl-7 pr-20 dark:bg-white/5 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-800 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:focus-within:ring-emerald-500 sm:text-sm sm:leading-6" placeholder="0.00">
      <div class="absolute inset-y-0 right-0 flex items-center">
        <label for="currency" class="sr-only">Currency</label>
        <select bind:value={currency} id="currency" name="currency" class="h-full border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 dark:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:focus:ring-emerald-500 sm:text-sm">
          {#each Object.keys(currencies) as currency}
            <option value={currency}>{currency}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
  