<script>
	import pending_create from './pending_create.png';
	import pending_delete from './pending_delete.png';
	import pending_patch from './pending_patch.png';
</script>

<h1>Building Bachtel</h1>
<p>
	Bachtel is a time- and performance tracking application built for the needs of social workers.
</p>
<p>
	Social Workers have a special set of requirements when it comes to the software-tools they use.
	Since they often work in the field, away from their office, they need their tools to work offline.
	They often enlist the help of volunteers, who intern need to be able to track their time and
	performance, so easy installation and intuitive design are a must. Bachtel was built to meet those
	requirements.
</p>

<h2>Our Starting point</h2>
<p>
	When building the Bachtel App, we we're not starting from zero. There had already been a version
	of Bachtel in production for a couple years, it was just so outdated and illsuited to the needs of
	social workers that the entire frontend had to be replaced.
</p>

<p>
	We did however inherit the backend, since it was still perfectly functional. This did cause some
	complications, since it wasn't built with offline-sync in mind, but we would work around that.
</p>

<h2>Picking the tool for the Job</h2>

<p>
	When it comes to ease of installation and freedom of design, there really is no match for the web.
	Just give someone a link and they can start using your application right away. The downside is
	that you need to be connected to the internet to use it.
</p>

<p>
	Unless, of course, if you build a <abbr class="italic" title="Progressive Web App">PWA</abbr>.
	Which is what we chose to do.
</p>

<h2>Communicating Sync-Status to Users</h2>
<p>
	When you've made some changes offline, it's often unintuitive if the changes have actually been
	sent to the server. Since payroll can be dependent on the time you've worked, it's important to
	know if everything has been synced.
</p>
<p>
	For this reason, we've decided to expose the sync-status of each entry to the user through visual
	design.
</p>
<p>
	Entries that have been created, but not synced are drawn with a dotted outline, Entries that have
	been edited are drawn in italics, and entries that have been deleted are ghosted out.
</p>

<div class="grid grid-cols-1 gap-2 sm:grid-cols-3">
	<img
		class="rounded-3xl dark:border border-gray-300"
		src={pending_create}
		alt="An entry that has been created, but not synced"
	/>
	<img
		class="rounded-3xl dark:border border-gray-300"
		src={pending_patch}
		alt="An entry that has been edited, but not synced"
	/>
	<img
		class="rounded-3xl dark:border border-gray-300"
		src={pending_delete}
		alt="An entry that has been deleted, but not synced"
	/>
</div>

<p>Adding these visual cues has resulted in much less confusion when using the app.</p>
