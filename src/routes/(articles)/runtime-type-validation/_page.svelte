<h1>Runtime Type Validation in JS Apps</h1>
<p>
	If your social-media feed is anything like mine, you've probably seen a lot of talk about runtime
	type validation lately. There are plenty of guides on how to do it, but few of them properly
	explore the benefits of the approach.
</p>

<p>
	In this article, we'll explore runtime type validation through the lens of <i>robustness</i>, and
	why that will benefit your code greatly.
</p>

<h2>What I mean by Robustness</h2>
<p>
	When I say robustness, I mean the ability of a system to handle unexpected input and produce
	sensible output. As Jon Postel put it in his <a
		href="https://en.wikipedia.org/wiki/Robustness_principle"
		target="_blank">Robustness Principle</a
	>:
</p>

<blockquote>Be conservative in what you do, be liberal in what you accept from others</blockquote>

<p>
    In this article, we'll explore how to use runtime type validation to achieve this goal.
</p>

<h2>
    A quick overview of (most) Runtime Type Validation libraries
</h2>
<p>
    In case you're out of the loop, here is how most runtime type validation libraries are used:
</p>

<ol>
    <li> You define a schema, which describes the expected shape of your data. This will also define the TS types of the object you're parsing.</li>
    <li>
        You pass any data you are unsure about to the type schema. It will then either return a value 
        that matches your schema, or throw an error if the data is unintelligible.
    </li>
</ol>

<p>
    Once you've parsed the data once, you can be sure that it will always match your schema. Therefore 
    compile-time type validation is enought from there on out.
</p>