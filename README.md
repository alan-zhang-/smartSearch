smartSearch
===========

Keep old get parameters, add new get parameters, and redirect to the new page,

<h2>How to use</h2>


<h3>
    Add smartSearch.min.js before you js code.
</h3>
<pre><code>
    <script src="smartSearch.min.js"></script>
</code></pre>


<p>
    Suppose you current url is http://blabla.com/?name=test&age=11.
</p>

<strong>To redirect to http://blabla.com?name=tom&age=11</strong>
<p>The js code:</p>

<pre><code>
var data = {};
data.name = "tom";
smartSearch(data);
</code></pre>

<strong>To redirect to http://anotherDomain.com?name=jack&age=33</strong>
<p>
    The js code:
</p>
<pre><code>
var data = {}, url = "http://anotherDomain.com";
data.name = "jack";
data.age = 33;
smartSearch(data, url);
</code></pre>
