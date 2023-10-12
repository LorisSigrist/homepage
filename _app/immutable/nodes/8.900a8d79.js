import{S as Bs,i as Vs,s as Ys,k as t,q as o,a as r,l as e,m as p,r as l,h as a,c as i,n as k,b as u,G as s,H as Na}from"../chunks/index.fae6157f.js";function Gs(Fs){let E,L,Yn,En,U,Gn,vn,x,W,Kn,_n,J,Nn,bn,H,Ds=`<code class="language-js"><span class="token keyword">let</span> result<span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">unsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  result <span class="token operator">=</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token function">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,xn,v,Qn,X,Xn,Zn,Hn,q,$n,Sn,S,Os=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CustomException1</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
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
<span class="token punctuation">&#125;</span></code>`,gn,z,na,Cn,g,B,aa,Rn,_,sa,Z,ta,ea,Tn,C,As=`<code class="language-rust"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">match</span> <span class="token function">unsafe_fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token class-name">Ok</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token class-name">Err</span><span class="token punctuation">(</span><span class="token class-name">CustomExceptions</span><span class="token punctuation">::</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=></span> null<span class="token punctuation">,</span>
    <span class="token class-name">Err</span><span class="token punctuation">(</span><span class="token class-name">CustomExceptions</span><span class="token punctuation">::</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token macro property">print!</span><span class="token punctuation">(</span><span class="token string">"CustomeException2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      null<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token class-name">Err</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">"Unexpected Error: &#123;:?&#125;"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,In,V,pa,Pn,R,T,$,oa,la,Mn,b,ca,nn,ua,ra,Fn,I,js=`<code class="language-js"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResultMatcher</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>CustomException1<span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>CustomException2<span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span> console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"CustomException2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,Dn,Y,ia,On,G,ka,An,h,P,an,ha,da,sn,fa,ya,M,tn,ma,wa,en,Ea,va,d,pn,_a,ba,on,xa,Ha,ln,Sa,ga,Ca,f,cn,Ra,Ta,un,Ia,Pa,rn,Ma,Fa,Da,y,kn,Oa,Aa,hn,ja,La,dn,Ua,Wa,jn,m,Ja,fn,qa,za,yn,Ba,Va,Ln,K,mn,wn,Ya,Un,F,N,Ga,Wn,D,Ls=`<code class="language-js"><span class="token comment">/**
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
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`;return{c(){E=t("h1"),L=t("a"),Yn=o("Declarative Exception Handling"),En=r(),U=t("p"),Gn=o("In this article we will explore a potential remedy to the nightmare that is error handling in JS."),vn=r(),x=t("h2"),W=t("a"),Kn=o("The State of Error Handling in JS"),_n=r(),J=t("p"),Nn=o("If you have a function that might fail, you would probably do something like this."),bn=r(),H=t("pre"),xn=r(),v=t("p"),Qn=o(`This very common implementation has a bug though. It handles all exceptions, not just the ones we expect to happen during normal operation.
If `),X=t("code"),Xn=o("usafe"),Zn=o(" has a Syntax error in it’s implementation this would silently swallow it. We don’t want that."),Hn=r(),q=t("p"),$n=o(`A better implementation would be to throw custom error-types for all your expected exceptions
and test anything that’s thrown against those.`),Sn=r(),S=t("pre"),gn=r(),z=t("p"),na=o(`But the code here gets really really ugly really really fast. We have to imperatively check which Execution path we should take,
opening up the door to many silly bugs.`),Cn=r(),g=t("h2"),B=t("a"),aa=o("What we want"),Rn=r(),_=t("p"),sa=o(`Wouldn’t it be really nice if we could declaratively define each execution path an the right thing just happened?
Other languages like Rust would make this pretty easy using Errors-As-Values and `),Z=t("code"),ta=o("match"),ea=o(" statements. Something like this:"),Tn=r(),C=t("pre"),In=r(),V=t("p"),pa=o("This way we can declaratively define each possible execution branch, drastically reducing the chance of bugs."),Pn=r(),R=t("h2"),T=t("a"),$=t("code"),oa=o("ResultMatcher"),la=o(" a potential solution"),Mn=r(),b=t("p"),ca=o("I took a stab at implementing a similar API in JS, and I came up with the "),nn=t("code"),ua=o("ResultMatcher"),ra=o(" class. You can find the full source code at the bottom of this article. It is used like this:"),Fn=r(),I=t("pre"),Dn=r(),Y=t("p"),ia=o("It is fully typesafe making it a breeze to work with."),On=r(),G=t("p"),ka=o("Let’s take a look at each part:"),An=r(),h=t("ul"),P=t("li"),an=t("code"),ha=o("const result"),da=o(" will be the return value of whatever execution branch is taken. In the snippet above the return type would be "),sn=t("code"),fa=o("string | null"),ya=r(),M=t("li"),tn=t("code"),ma=o("ResultMatcher(unsafe)"),wa=o(" constructs a matcher instance for the function "),en=t("code"),Ea=o("unsafe"),va=r(),d=t("li"),pn=t("code"),_a=o(".ok()"),ba=o(" takes a callback that handles the return value of "),on=t("code"),xa=o("unsafe"),Ha=o(" if it succeeds. If "),ln=t("code"),Sa=o(".ok"),ga=o(" is not used on the Matcher it will default to the identity function."),Ca=r(),f=t("li"),cn=t("code"),Ra=o(".catch(CustomException1, e => null)"),Ta=o(" Will only run if "),un=t("code"),Ia=o("unsafe"),Pa=o(" throws a "),rn=t("code"),Ma=o("CustomException1"),Fa=o(". It may return a value."),Da=r(),y=t("li"),kn=t("code"),Oa=o(".run()"),Aa=o(" Actually calls "),hn=t("code"),ja=o("unsafe"),La=o(". If unsafe takes args, you will pass them here (Eg: "),dn=t("code"),Ua=o('run("Hello", {option: "a"})'),Wa=o("). TS will enforce this."),jn=r(),m=t("p"),Ja=o("Sometimes you "),fn=t("em"),qa=o("do"),za=o(" want to react to all errors that are thrown. Maybe just to log them. For that we have the "),yn=t("code"),Ba=o("catchAll"),Va=o(" method."),Ln=r(),K=t("ul"),mn=t("li"),wn=t("code"),Ya=o(".catchAll(e => {console.error(e); throw e})"),Un=r(),F=t("h2"),N=t("a"),Ga=o("The Snippet"),Wn=r(),D=t("pre"),this.h()},l(n){E=e(n,"H1",{id:!0});var c=p(E);L=e(c,"A",{href:!0});var Qa=p(L);Yn=l(Qa,"Declarative Exception Handling"),Qa.forEach(a),c.forEach(a),En=i(n),U=e(n,"P",{});var Xa=p(U);Gn=l(Xa,"In this article we will explore a potential remedy to the nightmare that is error handling in JS."),Xa.forEach(a),vn=i(n),x=e(n,"H2",{id:!0});var Za=p(x);W=e(Za,"A",{href:!0});var $a=p(W);Kn=l($a,"The State of Error Handling in JS"),$a.forEach(a),Za.forEach(a),_n=i(n),J=e(n,"P",{});var ns=p(J);Nn=l(ns,"If you have a function that might fail, you would probably do something like this."),ns.forEach(a),bn=i(n),H=e(n,"PRE",{class:!0});var Us=p(H);Us.forEach(a),xn=i(n),v=e(n,"P",{});var Jn=p(v);Qn=l(Jn,`This very common implementation has a bug though. It handles all exceptions, not just the ones we expect to happen during normal operation.
If `),X=e(Jn,"CODE",{});var as=p(X);Xn=l(as,"usafe"),as.forEach(a),Zn=l(Jn," has a Syntax error in it’s implementation this would silently swallow it. We don’t want that."),Jn.forEach(a),Hn=i(n),q=e(n,"P",{});var ss=p(q);$n=l(ss,`A better implementation would be to throw custom error-types for all your expected exceptions
and test anything that’s thrown against those.`),ss.forEach(a),Sn=i(n),S=e(n,"PRE",{class:!0});var Ws=p(S);Ws.forEach(a),gn=i(n),z=e(n,"P",{});var ts=p(z);na=l(ts,`But the code here gets really really ugly really really fast. We have to imperatively check which Execution path we should take,
opening up the door to many silly bugs.`),ts.forEach(a),Cn=i(n),g=e(n,"H2",{id:!0});var es=p(g);B=e(es,"A",{href:!0});var ps=p(B);aa=l(ps,"What we want"),ps.forEach(a),es.forEach(a),Rn=i(n),_=e(n,"P",{});var qn=p(_);sa=l(qn,`Wouldn’t it be really nice if we could declaratively define each execution path an the right thing just happened?
Other languages like Rust would make this pretty easy using Errors-As-Values and `),Z=e(qn,"CODE",{});var os=p(Z);ta=l(os,"match"),os.forEach(a),ea=l(qn," statements. Something like this:"),qn.forEach(a),Tn=i(n),C=e(n,"PRE",{class:!0});var Js=p(C);Js.forEach(a),In=i(n),V=e(n,"P",{});var ls=p(V);pa=l(ls,"This way we can declaratively define each possible execution branch, drastically reducing the chance of bugs."),ls.forEach(a),Pn=i(n),R=e(n,"H2",{id:!0});var cs=p(R);T=e(cs,"A",{href:!0});var Ka=p(T);$=e(Ka,"CODE",{});var us=p($);oa=l(us,"ResultMatcher"),us.forEach(a),la=l(Ka," a potential solution"),Ka.forEach(a),cs.forEach(a),Mn=i(n),b=e(n,"P",{});var zn=p(b);ca=l(zn,"I took a stab at implementing a similar API in JS, and I came up with the "),nn=e(zn,"CODE",{});var rs=p(nn);ua=l(rs,"ResultMatcher"),rs.forEach(a),ra=l(zn," class. You can find the full source code at the bottom of this article. It is used like this:"),zn.forEach(a),Fn=i(n),I=e(n,"PRE",{class:!0});var qs=p(I);qs.forEach(a),Dn=i(n),Y=e(n,"P",{});var is=p(Y);ia=l(is,"It is fully typesafe making it a breeze to work with."),is.forEach(a),On=i(n),G=e(n,"P",{});var ks=p(G);ka=l(ks,"Let’s take a look at each part:"),ks.forEach(a),An=i(n),h=e(n,"UL",{});var w=p(h);P=e(w,"LI",{});var Bn=p(P);an=e(Bn,"CODE",{});var hs=p(an);ha=l(hs,"const result"),hs.forEach(a),da=l(Bn," will be the return value of whatever execution branch is taken. In the snippet above the return type would be "),sn=e(Bn,"CODE",{});var ds=p(sn);fa=l(ds,"string | null"),ds.forEach(a),Bn.forEach(a),ya=i(w),M=e(w,"LI",{});var Vn=p(M);tn=e(Vn,"CODE",{});var fs=p(tn);ma=l(fs,"ResultMatcher(unsafe)"),fs.forEach(a),wa=l(Vn," constructs a matcher instance for the function "),en=e(Vn,"CODE",{});var ys=p(en);Ea=l(ys,"unsafe"),ys.forEach(a),Vn.forEach(a),va=i(w),d=e(w,"LI",{});var O=p(d);pn=e(O,"CODE",{});var ms=p(pn);_a=l(ms,".ok()"),ms.forEach(a),ba=l(O," takes a callback that handles the return value of "),on=e(O,"CODE",{});var ws=p(on);xa=l(ws,"unsafe"),ws.forEach(a),Ha=l(O," if it succeeds. If "),ln=e(O,"CODE",{});var Es=p(ln);Sa=l(Es,".ok"),Es.forEach(a),ga=l(O," is not used on the Matcher it will default to the identity function."),O.forEach(a),Ca=i(w),f=e(w,"LI",{});var A=p(f);cn=e(A,"CODE",{});var vs=p(cn);Ra=l(vs,".catch(CustomException1, e => null)"),vs.forEach(a),Ta=l(A," Will only run if "),un=e(A,"CODE",{});var _s=p(un);Ia=l(_s,"unsafe"),_s.forEach(a),Pa=l(A," throws a "),rn=e(A,"CODE",{});var bs=p(rn);Ma=l(bs,"CustomException1"),bs.forEach(a),Fa=l(A,". It may return a value."),A.forEach(a),Da=i(w),y=e(w,"LI",{});var j=p(y);kn=e(j,"CODE",{});var xs=p(kn);Oa=l(xs,".run()"),xs.forEach(a),Aa=l(j," Actually calls "),hn=e(j,"CODE",{});var Hs=p(hn);ja=l(Hs,"unsafe"),Hs.forEach(a),La=l(j,". If unsafe takes args, you will pass them here (Eg: "),dn=e(j,"CODE",{});var Ss=p(dn);Ua=l(Ss,'run("Hello", {option: "a"})'),Ss.forEach(a),Wa=l(j,"). TS will enforce this."),j.forEach(a),w.forEach(a),jn=i(n),m=e(n,"P",{});var Q=p(m);Ja=l(Q,"Sometimes you "),fn=e(Q,"EM",{});var gs=p(fn);qa=l(gs,"do"),gs.forEach(a),za=l(Q," want to react to all errors that are thrown. Maybe just to log them. For that we have the "),yn=e(Q,"CODE",{});var Cs=p(yn);Ba=l(Cs,"catchAll"),Cs.forEach(a),Va=l(Q," method."),Q.forEach(a),Ln=i(n),K=e(n,"UL",{});var Rs=p(K);mn=e(Rs,"LI",{});var Ts=p(mn);wn=e(Ts,"CODE",{});var Is=p(wn);Ya=l(Is,".catchAll(e => {console.error(e); throw e})"),Is.forEach(a),Ts.forEach(a),Rs.forEach(a),Un=i(n),F=e(n,"H2",{id:!0});var Ps=p(F);N=e(Ps,"A",{href:!0});var Ms=p(N);Ga=l(Ms,"The Snippet"),Ms.forEach(a),Ps.forEach(a),Wn=i(n),D=e(n,"PRE",{class:!0});var zs=p(D);zs.forEach(a),this.h()},h(){k(L,"href","#declarative-exception-handling"),k(E,"id","declarative-exception-handling"),k(W,"href","#the-state-of-error-handling-in-js"),k(x,"id","the-state-of-error-handling-in-js"),k(H,"class","language-js"),k(S,"class","language-js"),k(B,"href","#what-we-want"),k(g,"id","what-we-want"),k(C,"class","language-rust"),k(T,"href","#resultmatcher-a-potential-solution"),k(R,"id","resultmatcher-a-potential-solution"),k(I,"class","language-js"),k(N,"href","#the-snippet"),k(F,"id","the-snippet"),k(D,"class","language-js")},m(n,c){u(n,E,c),s(E,L),s(L,Yn),u(n,En,c),u(n,U,c),s(U,Gn),u(n,vn,c),u(n,x,c),s(x,W),s(W,Kn),u(n,_n,c),u(n,J,c),s(J,Nn),u(n,bn,c),u(n,H,c),H.innerHTML=Ds,u(n,xn,c),u(n,v,c),s(v,Qn),s(v,X),s(X,Xn),s(v,Zn),u(n,Hn,c),u(n,q,c),s(q,$n),u(n,Sn,c),u(n,S,c),S.innerHTML=Os,u(n,gn,c),u(n,z,c),s(z,na),u(n,Cn,c),u(n,g,c),s(g,B),s(B,aa),u(n,Rn,c),u(n,_,c),s(_,sa),s(_,Z),s(Z,ta),s(_,ea),u(n,Tn,c),u(n,C,c),C.innerHTML=As,u(n,In,c),u(n,V,c),s(V,pa),u(n,Pn,c),u(n,R,c),s(R,T),s(T,$),s($,oa),s(T,la),u(n,Mn,c),u(n,b,c),s(b,ca),s(b,nn),s(nn,ua),s(b,ra),u(n,Fn,c),u(n,I,c),I.innerHTML=js,u(n,Dn,c),u(n,Y,c),s(Y,ia),u(n,On,c),u(n,G,c),s(G,ka),u(n,An,c),u(n,h,c),s(h,P),s(P,an),s(an,ha),s(P,da),s(P,sn),s(sn,fa),s(h,ya),s(h,M),s(M,tn),s(tn,ma),s(M,wa),s(M,en),s(en,Ea),s(h,va),s(h,d),s(d,pn),s(pn,_a),s(d,ba),s(d,on),s(on,xa),s(d,Ha),s(d,ln),s(ln,Sa),s(d,ga),s(h,Ca),s(h,f),s(f,cn),s(cn,Ra),s(f,Ta),s(f,un),s(un,Ia),s(f,Pa),s(f,rn),s(rn,Ma),s(f,Fa),s(h,Da),s(h,y),s(y,kn),s(kn,Oa),s(y,Aa),s(y,hn),s(hn,ja),s(y,La),s(y,dn),s(dn,Ua),s(y,Wa),u(n,jn,c),u(n,m,c),s(m,Ja),s(m,fn),s(fn,qa),s(m,za),s(m,yn),s(yn,Ba),s(m,Va),u(n,Ln,c),u(n,K,c),s(K,mn),s(mn,wn),s(wn,Ya),u(n,Un,c),u(n,F,c),s(F,N),s(N,Ga),u(n,Wn,c),u(n,D,c),D.innerHTML=Ls},p:Na,i:Na,o:Na,d(n){n&&a(E),n&&a(En),n&&a(U),n&&a(vn),n&&a(x),n&&a(_n),n&&a(J),n&&a(bn),n&&a(H),n&&a(xn),n&&a(v),n&&a(Hn),n&&a(q),n&&a(Sn),n&&a(S),n&&a(gn),n&&a(z),n&&a(Cn),n&&a(g),n&&a(Rn),n&&a(_),n&&a(Tn),n&&a(C),n&&a(In),n&&a(V),n&&a(Pn),n&&a(R),n&&a(Mn),n&&a(b),n&&a(Fn),n&&a(I),n&&a(Dn),n&&a(Y),n&&a(On),n&&a(G),n&&a(An),n&&a(h),n&&a(jn),n&&a(m),n&&a(Ln),n&&a(K),n&&a(Un),n&&a(F),n&&a(Wn),n&&a(D)}}}class Ns extends Bs{constructor(E){super(),Vs(this,E,null,Gs,Ys,{})}}export{Ns as component};
