<doc-view>

<v-layout row wrap>
<v-flex xs12 sm10 lg10>
<v-card class="section-def" v-bind:color="$store.state.currentColor">
<v-card-text class="pa-3">
<v-card class="section-def__card">
<v-card-text>
<dl>
<dt slot=title>SE REST Application</dt>
<dd slot="desc"><p>Create and build a RESTful web application using Helidon SE.</p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_will_learn">What you will learn</h2>
<div class="section">
<p>You&#8217;ll learn how to use Helidon quickly to create a RESTful web application in
 three main steps:</p>

<ol style="margin-left: 15px;">
<li>
Use the Helidon Maven archetype to create a basic Helidon SE application.

</li>
<li>
Add code to perform a simple app-specific health check.

</li>
<li>
Add code to record a simple app-specific metric.

</li>
</ol>
<p>The finished code for this example is available <a id="" title="" target="_blank" href="https://github.com/oracle/helidon/tree/1.0.0-SNAPSHOT/examples/guides/se-restful-webservice">here</a>.</p>

</div>

<h2 id="_what_you_need">What you need</h2>
<div class="section">

<div class="table__overflow elevation-1 flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td>About 15 minutes</td>
</tr>
<tr>
<td><router-link to="/getting-started/01_prerequisites">Helidon Prerequisites</router-link></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_create_a_new_project">Create a new project</h2>
<div class="section">
<markup
lang="bash"
title="Run the Maven archetype"
>mvn archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=1.0.0-SNAPSHOT \
    -DgroupId=io.helidon.guides \
    -DartifactId=se-restful-webservice \
    -Dpackage=io.helidon.guides.se.restfulwebservice</markup>

<markup
lang="bash"
title="Build the application"
>mvn package</markup>


<h3 id="_exercise_the_generated_code">Exercise the generated code</h3>
<div class="section">
<markup
lang="bash"
title="Run the application"
>java -jar target/se-restful-webservice.jar</markup>

<markup
lang="bash"
title="Test the application"
>curl -X GET http://localhost:8080/greet
{"message":"Hello World!"}

curl -X GET http://localhost:8080/greet/Joe
{"message":"Hello Joe!"}

curl -X PUT http://localhost:8080/greet/greeting/Hola
{"greeting":"Hola"}

curl -X GET http://localhost:8080/greet/Jose
{"message":"Hola Jose!"}</markup>

</div>
</div>

<h2 id="_add_a_custom_health_check">Add a custom health check</h2>
<div class="section">
<p>The generated <code>Main</code> class configures some built-in health checks. You can use
 <code>curl</code> to see the health check indicators.</p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/health</markup>

<p>As a simple illustration of using health checks, this section describes how to
 update the generated code to add a custom health check specific to the
 application.</p>

<p>First edit <code>GreetingService.java</code> and add the following method:</p>

<markup
lang="java"

>HealthCheckResponse checkAlive() {
    HealthCheckResponseBuilder builder = HealthCheckResponse.builder()
            .name("greetingAlive"); <span class="conum" data-value="1" />
    if (greeting == null || greeting.trim().length() == 0) { <span class="conum" data-value="2" />
        builder.down() <span class="conum" data-value="3" />
               .withData("greeting", "not set or is empty");
    } else {
        builder.up(); <span class="conum" data-value="4" />
    }
    return builder.build(); <span class="conum" data-value="5" />
}</markup>

<ul class="colist">
<li data-value="1">The health check name.</li>
<li data-value="2">Actual condition for the health check, greeting must be non-empty and non-null
for the health to succeed.</li>
<li data-value="3">Describe the failure</li>
<li data-value="4">Set the result as success</li>
<li data-value="5">Create the health check response object</li>
</ul>
<p>Next, edit the <code>createRouting</code> method inside <code>Main.java</code> as follows in order to
 register the new health check:</p>

<markup
lang="java"

>private static Routing createRouting(Config config) {

    MetricsSupport metrics = MetricsSupport.create();
    GreetService greetService = new GreetService(config);
    HealthSupport health = HealthSupport.builder()
            .add(HealthChecks.healthChecks()) <span class="conum" data-value="1" />
            .add(greetService::checkAlive) <span class="conum" data-value="2" />
            .build();
    return Routing.builder()
            .register(JsonSupport.create())
            .register(health)
            .register(metrics)
            .register("/greet", greetService)
            .build();
}</markup>

<ul class="colist">
<li data-value="1">The built-in health checks.</li>
<li data-value="2">The <code>health</code> instance now includes the new custom health check.</li>
</ul>
<p>Rebuild, restart the application and then use <code>curl</code> to test the health check:</p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/health | json_pp</markup>

<p>You should see output similar to the following:</p>

<markup
lang="json"

>{
    "checks": [
        {
            "name": "deadlock",
            "state": "UP"
        },
        {
            "data": {
                "free": "179.37 GB",
                "freeBytes": 192597303296,
                "percentFree": "38.51%",
                "total": "465.72 GB",
                "totalBytes": 500068036608
            },
            "name": "diskSpace",
            "state": "UP"
        },
        {
            "name": "greetingAlive",
            "state": "UP"
        },
        {
            "data": {
                "free": "255.99 MB",
                "freeBytes": 268422144,
                "max": "4.00 GB",
                "maxBytes": 4294967296,
                "percentFree": "98.73%",
                "total": "308.00 MB",
                "totalBytes": 322961408
            },
            "name": "heapMemory",
            "state": "UP"
        }
    ],
    "outcome": "UP"
}</markup>

<p>The JSON output shows all check indicators, the new custom health check and the
 built-in health checks.</p>

<p>The item labeled <code>outcome</code> describes the overall health of the application based
 on all indicators.</p>


<h3 id="_unhealthy_report">Unhealthy report</h3>
<div class="section">
<p>Recall that our custom health check condition is that the greeting be non-null and
non-empty. We can easily force our server to report an unhealthy state.</p>

<markup
lang="bash"
title="Set the greeting to a blank."
>curl -X PUT http://localhost:8080/greet/greeting/%20</markup>

<p>Then ping the health check endpoint again with the same command as before.</p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/health | json_pp</markup>

<p>This time you should see these two parts of the output indicating that something
 is wrong:</p>

<markup
lang="json"

>{
    "data": {
        "greeting": "not set or is empty"
    },
    "name": "greetingAlive",
    "state": "DOWN"
}</markup>

<p>If you add <code>-i</code> to the <code>curl</code> command, the output shows that a response with
 status <code>503 Service Unavailable</code> is returned.</p>

<markup
lang="bash"

>curl -i -X GET http://localhost:8080/health</markup>

<p>Set the greeting to "Hello" to make the service healthy.</p>

<markup
lang="bash"

>curl -X PUT http://localhost:8080/greet/greeting/Hello</markup>

<p>Verify the health again.</p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/health | python -m json.tool</markup>

<p>This time the <code>outcome</code> and <code>greetingAlive</code> values will be back to <code>UP</code>.</p>

</div>
</div>

<h2 id="_add_a_custom_metric">Add a custom metric</h2>
<div class="section">
<p>The generated <code>Main</code> class configures some built-in metrics (CPU, threads, memory,
 request traffic). You can use <code>curl</code> to get the metrics data.</p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/metrics</markup>

<p>As a simple illustration of using metrics, this section describes how to update
 the generated greeting service to count how many times a client sends a request
 to the application.</p>

<p>First edit <code>GreetService.java</code> add these declarations as private fields:</p>

<markup
lang="java"

>private final MetricRegistry registry = RegistryFactory.getRegistryFactory().get()
        .getRegistry(MetricRegistry.Type.APPLICATION); <span class="conum" data-value="1" />
private final Counter greetCounter = registry.counter("accessctr"); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1">Refers to the application-scoped metrics registry.</li>
<li data-value="2">Declares a metric of type <code>counter</code> with name <code>accessctr</code>.</li>
</ul>
<p>Next create a request handler to update the counter by adding the following
 method:</p>

<markup
lang="java"

>private void counterFilter(final ServerRequest request,
                           final ServerResponse response) {
    greetCounter.inc(); <span class="conum" data-value="1" />
    request.next(); <span class="conum" data-value="2" />
}</markup>

<ul class="colist">
<li data-value="1">Updates the counter metric.</li>
<li data-value="2">Lets the next handler process the same request.</li>
</ul>
<p>Then modify the <code>update</code> method to register the new handler:</p>

<markup
lang="java"

>@Override
public void update(Routing.Rules rules) {
    rules
        .any(this::counterFilter) <span class="conum" data-value="1" />
        .get("/", this::getDefaultMessageHandler)
        .get("/{name}", this::getMessageHandler)
        .put("/greeting/{greeting}", this::updateGreetingHandler);
}</markup>

<ul class="colist">
<li data-value="1">Invokes <code>counterFilter</code> for <em>any</em> incoming request.</li>
</ul>
<p>Rebuild, restart the application and then use <code>curl</code> to test the new metric:</p>

<markup
lang="bash"
title="Generate metrics data"
>curl -X GET http://localhost:8080/greet
curl -X GET http://localhost:8080/greet/Joe
curl -X PUT http://localhost:8080/greet/greeting/Hola
curl -X GET http://localhost:8080/greet/Jose</markup>

<markup
lang="bash"
title="Retrieve the collected metrics"
>curl -X GET http://localhost:8080/metrics</markup>

<p>You should see a long response. Note two items:</p>

<ol style="margin-left: 15px;">
<li>
<code>application:accessctr 4</code> is the counter we added to the greeting service

</li>
<li>
<code>vendor:requests_count 5</code> is the total number of HTTP requests that the
application received

</li>
</ol>
<p>The metric <code>requests_count</code> is higher because the access to <code>/metrics</code> is <em>not</em>
 handled by <code>GreetingService</code>.</p>

</div>
</doc-view>
