import{s as Wn,n as un}from"../chunks/scheduler.Om8DFOvc.js";import{S as zn,i as Dn,e,s as o,H as F,c as p,k as l,f as c,a as j,l as U,d as s,m as i,g as t}from"../chunks/index.eD0tUP58.js";function Jn(Fn){let u,rn='<a href="#declarative-exception-handling">Declarative Exception Handling</a>',I,m,kn="In this article we will explore a potential remedy to the nightmare that is error handling in JS.",q,r,dn='<a href="#the-state-of-error-handling-in-js">The State of Error Handling in JS</a>',A,y,hn="If you have a function that might fail, you would probably do something like this.",W,f,z,jn=`<code class="language-js"><span class="token keyword">let</span> result<span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">unsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  result <span class="token operator">=</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token function">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,D,w,mn=`This very common implementation has a bug though. It handles all exceptions, not just the ones we expect to happen during normal operation.
If <code>usafe</code> has a Syntax error in it’s implementation this would silently swallow it. We don’t want that.`,J,v,yn=`A better implementation would be to throw custom error-types for all your expected exceptions
and test anything that’s thrown against those.`,O,x,B,Un=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CustomException1</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
<span class="token keyword">class</span> <span class="token class-name">CustomException2</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>

<span class="token keyword">let</span> result<span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
   <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">unsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//throws CustomException1 &amp; 2</span>
   result <span class="token operator">=</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token function">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">CustomException1</span><span class="token punctuation">)</span> result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">CustomException2</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"CustomeException2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">else</span> <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,V,g,fn=`But the code here gets really really ugly really really fast. We have to imperatively check which Execution path we should take,
opening up the door to many silly bugs.`,Y,k,wn='<a href="#what-we-want">What we want</a>',G,H,vn=`Wouldn’t it be really nice if we could declaratively define each execution path an the right thing just happened?
Other languages like Rust would make this pretty easy using Errors-As-Values and <code>match</code> statements. Something like this:`,K,T,N,In=`<code class="language-rust"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">match</span> <span class="token function">unsafe_fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token class-name">Ok</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token class-name">Err</span><span class="token punctuation">(</span><span class="token class-name">CustomExceptions</span><span class="token punctuation">::</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=></span> null<span class="token punctuation">,</span>
    <span class="token class-name">Err</span><span class="token punctuation">(</span><span class="token class-name">CustomExceptions</span><span class="token punctuation">::</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token macro property">print!</span><span class="token punctuation">(</span><span class="token string">"CustomeException2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      null<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token class-name">Err</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">"Unexpected Error: &#123;:?&#125;"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,Q,C,xn="This way we can declaratively define each possible execution branch, drastically reducing the chance of bugs.",X,d,gn='<a href="#resultmatcher-a-potential-solution"><code>ResultMatcher</code> a potential solution</a>',Z,_,Hn="I took a stab at implementing a similar API in JS, and I came up with the <code>ResultMatcher</code> class. You can find the full source code at the bottom of this article. It is used like this:",$,b,nn,qn=`<code class="language-js"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResultMatcher</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>CustomException1<span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>CustomException2<span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span> console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"CustomException2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,sn,M,Tn="It is fully typesafe making it a breeze to work with.",an,E,Cn="Let’s take a look at each part:",tn,R,_n="<li><code>const result</code> will be the return value of whatever execution branch is taken. In the snippet above the return type would be <code>string | null</code></li> <li><code>ResultMatcher(unsafe)</code> constructs a matcher instance for the function <code>unsafe</code></li> <li><code>.ok()</code> takes a callback that handles the return value of <code>unsafe</code> if it succeeds. If <code>.ok</code> is not used on the Matcher it will default to the identity function.</li> <li><code>.catch(CustomException1, e =&gt; null)</code> Will only run if <code>unsafe</code> throws a <code>CustomException1</code>. It may return a value.</li> <li><code>.run()</code> Actually calls <code>unsafe</code>. If unsafe takes args, you will pass them here (Eg: <code>run(&quot;Hello&quot;, {option: &quot;a&quot;})</code>). TS will enforce this.</li>",en,S,bn="Sometimes you <em>do</em> want to react to all errors that are thrown. Maybe just to log them. For that we have the <code>catchAll</code> method.",pn,P,Mn="<li><code>.catchAll(e =&gt; {console.error(e); throw e})</code></li>",on,h,En='<a href="#the-snippet">The Snippet</a>',cn,L,ln,An=`<code class="language-js"><span class="token comment">/**
 * The configuration for a ResultMatcher Strategy.
 *
 * @template Prototype
 * @template ReturnType
 * @typedef &#123;&#123;
 *    prototype: &#123; new (): Prototype;  &#125; | &#123; prototype: Prototype; &#125;,
 *    handler: (instance: Prototype) => ReturnType;
 * &#125;&#125; Strategy
 */</span>

<span class="token comment">/**
 * Declaratively define what should happen for all the possible outcomes of a function.
 * This follows an immutable builder pattern, so each method returns a new instance of the ResultMatcher class.
 *
 * @template &#123;(...args: any) => any&#125; UnsafeFunc
 * @template &#123;(result: ReturnType&lt;UnsafeFunc>) => any&#125; [SuccessHandler=((result: ReturnType&lt;UnsafeFunc>) => ReturnType&lt;UnsafeFunc>)]
 * @template &#123;Strategy&lt;any, any>[]&#125; [Strategies=[]]
 * @template &#123;((e: unknown) => any)&#125; [FallbackHandler=(e: unknown) => never]
 */</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ResultMatcher</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/** @type &#123;UnsafeFunc&#125; */</span>
  #unsafeFunction<span class="token punctuation">;</span>

  <span class="token comment">/** @type &#123;Strategies&#125; */</span>
  #strategies<span class="token punctuation">;</span>

  <span class="token comment">/** @type &#123;SuccessHandler&#125; */</span>
  #successHandler<span class="token punctuation">;</span>

  <span class="token comment">/** @type &#123;FallbackHandler&#125; */</span>
  #fallbackHandler<span class="token punctuation">;</span>

  <span class="token comment">/**
   * @param &#123;UnsafeFunc&#125; func
   * @param &#123;Strategies&#125; strategies
   * @param &#123;SuccessHandler&#125; successHandler
   * @param &#123;FallbackHandler&#125; fallbackHandler
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    func<span class="token punctuation">,</span>
    strategies <span class="token operator">=</span> <span class="token comment">/** @type &#123;any&#125; */</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    successHandler <span class="token operator">=</span> <span class="token comment">/** @type &#123;any&#125; */</span> <span class="token punctuation">(</span>identity<span class="token punctuation">)</span><span class="token punctuation">,</span>
    fallbackHandler <span class="token operator">=</span> <span class="token comment">/** @type &#123;any&#125; */</span> <span class="token punctuation">(</span>raise<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#unsafeFunction <span class="token operator">=</span> func<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#strategies <span class="token operator">=</span> strategies<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#successHandler <span class="token operator">=</span> successHandler<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#fallbackHandler <span class="token operator">=</span> fallbackHandler<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token comment">/**
   * Defines a strategy for a given error type.
   *
   * @template Prototype
   * @template StrategyReturnType
   *
   * @param &#123;&#123; new (): Prototype;&#125; | &#123; prototype: Prototype; &#125;&#125; prototype - The error type to handle. Thrown things will be compared against this with &#96;instanceof&#96;.
   * @param &#123;(instance: Prototype) => StrategyReturnType&#125; handler - Callback to handle the error.
   * @returns &#123;ResultMatcher&lt;UnsafeFunc, SuccessHandler, [...Strategies, Strategy&lt;Prototype, StrategyReturnType>], FallbackHandler>&#125;
   */</span>
  <span class="token keyword">catch</span><span class="token punctuation">(</span>prototype<span class="token punctuation">,</span> handler<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> registeredStrategy <span class="token operator">=</span> <span class="token punctuation">&#123;</span> prototype<span class="token punctuation">,</span> handler <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ResultMatcher</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#unsafeFunction<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>#strategies<span class="token punctuation">,</span> registeredStrategy<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#successHandler<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#fallbackHandler<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token comment">/**
   * @template &#123;(e:unknown) => any&#125; Handler
   *
   * @param &#123;Handler&#125; handler
   * @returns &#123;ResultMatcher&lt;UnsafeFunc, SuccessHandler, Strategies, Handler>&#125;
   */</span>
  <span class="token function">catchAll</span><span class="token punctuation">(</span><span class="token parameter">handler</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ResultMatcher</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#unsafeFunction<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#strategies<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#successHandler<span class="token punctuation">,</span>
      handler<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token comment">/**
   * Handle the happy path
   *
   * @template &#123;(result: ReturnType&lt;UnsafeFunc>) => any&#125; Handler
   * @param &#123;Handler&#125; handler
   * @returns &#123;ResultMatcher&lt;UnsafeFunc, Handler, Strategies, FallbackHandler>&#125;
   */</span>
  <span class="token function">ok</span><span class="token punctuation">(</span><span class="token parameter">handler</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ResultMatcher</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#unsafeFunction<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#strategies<span class="token punctuation">,</span>
      handler<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>#fallbackHandler<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token comment">/**
   * Calls the unsafe function with the given parameters and handles any errors that may be thrown
   * according to the registered strategies.
   *
   * @param  &#123;Parameters&lt;UnsafeFunc>&#125; params
   * @returns &#123;ReturnType&lt;SuccessHandler> | ReturnType&lt;Strategies[number]["handler"]> | ReturnType&lt;FallbackHandler>&#125;
   */</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> successResult<span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// @ts-ignore</span>
      successResult <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">#unsafeFunction</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> strategy <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#strategies<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token comment">/** @type &#123;any&#125; */</span> <span class="token punctuation">(</span>strategy<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">return</span> strategy<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>

      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">#fallbackHandler</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">#successHandler</span><span class="token punctuation">(</span>successResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/**
 * The identity function
 * @template T
 * @param &#123;T&#125; x
 * @returns &#123;T&#125;
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">identity</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">;</span>

<span class="token comment">/**
 * @template T
 * @param &#123;T&#125; e
 * @returns &#123;never&#125;
 * @throws &#123;T&#125;
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">raise</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`;return{c(){u=e("h1"),u.innerHTML=rn,I=o(),m=e("p"),m.textContent=kn,q=o(),r=e("h2"),r.innerHTML=dn,A=o(),y=e("p"),y.textContent=hn,W=o(),f=e("pre"),z=new F(!1),D=o(),w=e("p"),w.innerHTML=mn,J=o(),v=e("p"),v.textContent=yn,O=o(),x=e("pre"),B=new F(!1),V=o(),g=e("p"),g.textContent=fn,Y=o(),k=e("h2"),k.innerHTML=wn,G=o(),H=e("p"),H.innerHTML=vn,K=o(),T=e("pre"),N=new F(!1),Q=o(),C=e("p"),C.textContent=xn,X=o(),d=e("h2"),d.innerHTML=gn,Z=o(),_=e("p"),_.innerHTML=Hn,$=o(),b=e("pre"),nn=new F(!1),sn=o(),M=e("p"),M.textContent=Tn,an=o(),E=e("p"),E.textContent=Cn,tn=o(),R=e("ul"),R.innerHTML=_n,en=o(),S=e("p"),S.innerHTML=bn,pn=o(),P=e("ul"),P.innerHTML=Mn,on=o(),h=e("h2"),h.innerHTML=En,cn=o(),L=e("pre"),ln=new F(!1),this.h()},l(n){u=p(n,"H1",{id:!0,"data-svelte-h":!0}),l(u)!=="svelte-z0u4rw"&&(u.innerHTML=rn),I=c(n),m=p(n,"P",{"data-svelte-h":!0}),l(m)!=="svelte-xe0fn0"&&(m.textContent=kn),q=c(n),r=p(n,"H2",{id:!0,"data-svelte-h":!0}),l(r)!=="svelte-xa1j4"&&(r.innerHTML=dn),A=c(n),y=p(n,"P",{"data-svelte-h":!0}),l(y)!=="svelte-j0y3la"&&(y.textContent=hn),W=c(n),f=p(n,"PRE",{class:!0});var a=j(f);z=U(a,!1),a.forEach(s),D=c(n),w=p(n,"P",{"data-svelte-h":!0}),l(w)!=="svelte-86uv7g"&&(w.innerHTML=mn),J=c(n),v=p(n,"P",{"data-svelte-h":!0}),l(v)!=="svelte-7telbu"&&(v.textContent=yn),O=c(n),x=p(n,"PRE",{class:!0});var Rn=j(x);B=U(Rn,!1),Rn.forEach(s),V=c(n),g=p(n,"P",{"data-svelte-h":!0}),l(g)!=="svelte-1kgaj31"&&(g.textContent=fn),Y=c(n),k=p(n,"H2",{id:!0,"data-svelte-h":!0}),l(k)!=="svelte-kzejms"&&(k.innerHTML=wn),G=c(n),H=p(n,"P",{"data-svelte-h":!0}),l(H)!=="svelte-dvkkc4"&&(H.innerHTML=vn),K=c(n),T=p(n,"PRE",{class:!0});var Sn=j(T);N=U(Sn,!1),Sn.forEach(s),Q=c(n),C=p(n,"P",{"data-svelte-h":!0}),l(C)!=="svelte-xy7f4b"&&(C.textContent=xn),X=c(n),d=p(n,"H2",{id:!0,"data-svelte-h":!0}),l(d)!=="svelte-9hqu1k"&&(d.innerHTML=gn),Z=c(n),_=p(n,"P",{"data-svelte-h":!0}),l(_)!=="svelte-tiiv16"&&(_.innerHTML=Hn),$=c(n),b=p(n,"PRE",{class:!0});var Pn=j(b);nn=U(Pn,!1),Pn.forEach(s),sn=c(n),M=p(n,"P",{"data-svelte-h":!0}),l(M)!=="svelte-h0ke80"&&(M.textContent=Tn),an=c(n),E=p(n,"P",{"data-svelte-h":!0}),l(E)!=="svelte-aex9p"&&(E.textContent=Cn),tn=c(n),R=p(n,"UL",{"data-svelte-h":!0}),l(R)!=="svelte-1rlehpz"&&(R.innerHTML=_n),en=c(n),S=p(n,"P",{"data-svelte-h":!0}),l(S)!=="svelte-12ouq9h"&&(S.innerHTML=bn),pn=c(n),P=p(n,"UL",{"data-svelte-h":!0}),l(P)!=="svelte-1fgu1t0"&&(P.innerHTML=Mn),on=c(n),h=p(n,"H2",{id:!0,"data-svelte-h":!0}),l(h)!=="svelte-1m2hw0c"&&(h.innerHTML=En),cn=c(n),L=p(n,"PRE",{class:!0});var Ln=j(L);ln=U(Ln,!1),Ln.forEach(s),this.h()},h(){i(u,"id","declarative-exception-handling"),i(r,"id","the-state-of-error-handling-in-js"),z.a=null,i(f,"class","language-js"),B.a=null,i(x,"class","language-js"),i(k,"id","what-we-want"),N.a=null,i(T,"class","language-rust"),i(d,"id","resultmatcher-a-potential-solution"),nn.a=null,i(b,"class","language-js"),i(h,"id","the-snippet"),ln.a=null,i(L,"class","language-js")},m(n,a){t(n,u,a),t(n,I,a),t(n,m,a),t(n,q,a),t(n,r,a),t(n,A,a),t(n,y,a),t(n,W,a),t(n,f,a),z.m(jn,f),t(n,D,a),t(n,w,a),t(n,J,a),t(n,v,a),t(n,O,a),t(n,x,a),B.m(Un,x),t(n,V,a),t(n,g,a),t(n,Y,a),t(n,k,a),t(n,G,a),t(n,H,a),t(n,K,a),t(n,T,a),N.m(In,T),t(n,Q,a),t(n,C,a),t(n,X,a),t(n,d,a),t(n,Z,a),t(n,_,a),t(n,$,a),t(n,b,a),nn.m(qn,b),t(n,sn,a),t(n,M,a),t(n,an,a),t(n,E,a),t(n,tn,a),t(n,R,a),t(n,en,a),t(n,S,a),t(n,pn,a),t(n,P,a),t(n,on,a),t(n,h,a),t(n,cn,a),t(n,L,a),ln.m(An,L)},p:un,i:un,o:un,d(n){n&&(s(u),s(I),s(m),s(q),s(r),s(A),s(y),s(W),s(f),s(D),s(w),s(J),s(v),s(O),s(x),s(V),s(g),s(Y),s(k),s(G),s(H),s(K),s(T),s(Q),s(C),s(X),s(d),s(Z),s(_),s($),s(b),s(sn),s(M),s(an),s(E),s(tn),s(R),s(en),s(S),s(pn),s(P),s(on),s(h),s(cn),s(L))}}}class Vn extends zn{constructor(u){super(),Dn(this,u,null,Jn,Wn,{})}}export{Vn as component};
