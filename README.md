smartSearch
===========

Keep old get parameters, add new get parameters, and redirect to the new page,

<h2>How to use</h2>


<h3>
    Add smartSearch.min.js to your page
</h3>

<p>
    Suppose you current url is http://alan-zhang.com/?name=test&age=11.
</p>

<strong>To redirect to http://alan-zhang.com?name=tom&age=11</strong>
<p>The js code:</p>

<pre><code>
var data = {};
data.name = "tom";
smartSearch(data);
</code></pre>

<strong>To redirect to http://blog.alan-zhang.com?name=jack&age=33</strong>
<p>
    The js code:
</p>
<pre><code>
var data = {}, url = "http://blog.alan-zhang.com";
data.name = "jack";
data.age = 33;
smartSearch(data, url);
</code></pre>
