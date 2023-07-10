<!--
    @component
    Allows you to display two different versions of a component based on the theme.
    css-only implementation.

    @slot-light
    the content to display when the theme is light

    @slot-dark
    the content to display when the theme is dark

    @example
    <Themed>
        <Icon src={Sun} slot="light" />
        <Icon src={Moon} slot="dark" />
    </Themed>
-->

<div class="dark:hidden contents">
	<slot name="light" />
</div>

<div class="hidden dark:contents">
	<slot name="dark" />
</div>
