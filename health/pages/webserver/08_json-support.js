<doc-view>

<h2 id="_json_support">Json Support</h2>
<div class="section">
<p>The WebServer supports JSON-P. When enabled, you can send and
 receive JSON-P objects transparently.</p>


<h3 id="_maven_coordinates">Maven Coordinates</h3>
<div class="section">
<p>Declare the following dependency in your project:</p>

<markup
lang="xml"
title="Webserver JSON-P Dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.media.jsonp&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-media-jsonp-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h3 id="_usage">Usage</h3>
<div class="section">
<p>To enable JSON-P support, first register it with the route builder.
Then you can add routes that handle and return JSON.</p>

<markup
lang="java"
title="Configure JsonSupport and use it for reading and writing of entities"
>Routing.builder()
       .register(JsonSupport.create()) <span class="conum" data-value="1" />
       .post("/sayhello", Handler.create(JsonObject.class, this::sayHello)) <span class="conum" data-value="2" />
       .build();</markup>

<ul class="colist">
<li data-value="1">Register JsonSupport to enable transformation from and to <code>JsonObject</code> objects</li>
<li data-value="2">Register a handler that receives a <code>JsonObject</code> as its input.</li>
</ul>
<markup
lang="java"
title="Handler that receives and returns JSON objects"
>private static final JsonBuilderFactory jsonFactory = Json.createBuilderFactory(Collections.emptyMap()); <span class="conum" data-value="1" />

private void sayHello(ServerRequest req, ServerResponse res, JsonObject json) { <span class="conum" data-value="2" />
        JsonObject msg = jsonFactory.createObjectBuilder()   <span class="conum" data-value="3" />
          .add("message", "Hello " + json.getString("name"))
          .build();
        res.send(msg);                            <span class="conum" data-value="4" />
}</markup>

<ul class="colist">
<li data-value="1">Using a <code>JsonBuilderFactory</code> is more efficient than <code>Json.createObjectBuilder()</code></li>
<li data-value="2">JsonObject is passed to handler</li>
<li data-value="3">Create a JsonObject using JSON-P to hold return data</li>
<li data-value="4">Send JsonObject in response</li>
</ul>
<markup
lang="bash"
title="Example of posting JSON to sayHello endpoint"
>curl --noproxy '*' -X POST -H "Content-Type: application/json" \
    http://localhost:8080/sayhello -d '{"name":"Joe"}'
{"message":"Hello Joe"}</markup>

</div>

<h3 id="_configuring_json_readerwriter_factories">Configuring Json Reader/Writer factories</h3>
<div class="section">
<p>To configure JSON-P <code>JsonReaderFactory</code> and <code>JsonWriterFactory</code> that are used by
 the <code>JsonSupport</code> instance, create the <code>JsonSupport</code> object:</p>

<markup
lang="java"
title="Create <code>JsonSupport</code> with the provided configuration"
>JsonSupport.create(Map.of(JsonGenerator.PRETTY_PRINTING, false))</markup>

</div>
</div>
</doc-view>
