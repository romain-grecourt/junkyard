<doc-view>

<v-layout row wrap>
<v-flex xs12 sm10 lg10>
<v-card class="section-def" v-bind:color="$store.state.currentColor">
<v-card-text class="pa-3">
<v-card class="section-def__card">
<v-card-text>
<dl>
<dt slot=title>MP Web Application</dt>
<dd slot="desc"><p>Create and build a web application using Helidon MicroProfile and JAX-RS.</p>
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
<p>You&#8217;ll learn how to use Helidon MicroProfile quickly to create a JAX-RS
 application in three main steps:</p>

<ol style="margin-left: 15px;">
<li>
Write a basic Helidon MP app to respond to the HTTP requests.

</li>
<li>
Add code to perform a simple app-specific health check.

</li>
<li>
Add code to record a simple app-specific metric.

</li>
</ol>
<p>The finished code for this example is available <a id="" title="" target="_blank" href="https://github.com/oracle/helidon/tree/1.0.0-SNAPSHOT/examples/guides/mp-simple">here</a>.</p>

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
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=1.0.0-SNAPSHOT \
    -DgroupId=io.helidon.guides \
    -DartifactId=mp-simple \
    -Dpackage=io.helidon.guides.mp.simple</markup>

<markup
lang="bash"
title="Build the application"
>cd mp-simple ; mvn package</markup>


<h3 id="_exercise_the_generated_code">Exercise the generated code</h3>
<div class="section">
<markup
lang="bash"
title="Run the application"
>java -jar target/mp-simple.jar</markup>

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
<p>MicroProfile provides some health check out-of-the-box. You can use <code>curl</code> to
 see the health check indicators.</p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/health</markup>

<p>First create a new class <code>CheckLiveness</code> as follows:</p>

<markup
lang="java"

>@ApplicationScoped <span class="conum" data-value="1" />
@Health <span class="conum" data-value="2" />
public class CheckLiveness implements HealthCheck { <span class="conum" data-value="3" />

    @Inject <span class="conum" data-value="4" />
    private GreetingProvider greeting;

    @Override
    public HealthCheckResponse call() {
        HealthCheckResponseBuilder builder = HealthCheckResponse.builder()
                .name("greetingAlive"); <span class="conum" data-value="5" />
        if (greeting == null || greeting.getMessage().trim().length() == 0) { <span class="conum" data-value="6" />
            builder.down().withData("greeting", "not set or is empty"); <span class="conum" data-value="7" />
        } else {
            builder.up(); <span class="conum" data-value="8" />
        }
        return builder.build(); <span class="conum" data-value="9" />
    }
}</markup>

<ul class="colist">
<li data-value="1">Mark the class as <code>@ApplicationScoped</code>; we need only one instance in the
app.</li>
<li data-value="2">Identify this as a health resource.</li>
<li data-value="3">The class must implement <code>HealthCheck</code>.</li>
<li data-value="4">The field value is injected by <code>CDI</code></li>
<li data-value="5">Set the health check name.</li>
<li data-value="6">The condition for the health check, greeting must be non-empty and non-null
for the check to succeed.</li>
<li data-value="7">Set the health check status to <code>DOWN</code> and provide a description.</li>
<li data-value="8">Set the health check status to <code>UP</code>.</li>
<li data-value="9">Create the health check response object.</li>
</ul>
<p>Rebuild, restart the application and then use <code>curl</code> to test the health check:</p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/health</markup>

<div class="admonition tip">
<p class="admonition-inline">Pipe the result to <code>python -m json.tool</code> in order to format the JSON output</p>
</div>
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
<p>Recall that our custom health check condition is that the greeting be non-null
 and non-empty. We can easily force our server to report an unhealthy state.</p>

<markup
lang="bash"
title="Set the greeting to a blank."
>curl -X PUT http://localhost:8080/greet/greeting/%20</markup>

<p>Then ping the health check endpoint again with the same command as before.</p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/health</markup>

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

>curl -X GET http://localhost:8080/health</markup>

<p>This time the <code>greetingAlive</code> value will be back to <code>UP</code>.</p>

</div>
</div>

<h2 id="_add_a_custom_metric">Add a custom metric</h2>
<div class="section">
<p>MicroProfile provides some metrics out-of-the-box. You can use <code>curl</code> to get
 the metrics data.</p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/metrics</markup>

<div class="admonition note">
<p class="admonition-inline"><code>/metrics/application</code> filters only the application specific metrics
 whereas <code>/metrics</code> shows all metrics</p>
</div>
<p>As a simple illustration of using metrics, this section describes how to update
 the generated greeting service to count how many times a client sends a request
 to the application.</p>

<p>First, add the following dependency to your <code>pom.xml</code>:</p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-metrics&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p>Next, annotate every method in <code>GreetResource.java</code> with the following
 annotation:</p>

<markup
lang="java"

>@Counted(<span class="conum" data-value="1" />
        name = "accessctr", <span class="conum" data-value="2" />
        reusable = true,    <span class="conum" data-value="3" />
        description = "Total greetings accesses",
        displayName = "Access Counter",
        monotonic = true,   <span class="conum" data-value="4" />
        unit = MetricUnits.NONE)</markup>

<ul class="colist">
<li data-value="1">Marks the method as measured by a <code>Counter</code> metric.</li>
<li data-value="2">Declares the unique name for this counter among all metrics.</li>
<li data-value="3">Allows the same counter to accumulate uses of multiple methods.</li>
<li data-value="4">Indicates that the metrics system should increment the counter on each
invocation but <em>not</em> decrement it when the method returns.</li>
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
>curl -X GET http://localhost:8080/metrics/application</markup>

<p>You should see a response with the following item:
 <code>io_helidon_guides_mp_simple_greet_resource_accessctr 4</code></p>

<div class="admonition note">
<p class="admonition-inline">The name of the counter is automatically qualified with the package and
 class name of the JAX-RS resource.</p>
</div>
</div>
</doc-view>
