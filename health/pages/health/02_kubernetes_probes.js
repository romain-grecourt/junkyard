<doc-view>

<h2 id="_health_with_kubernetes">Health with Kubernetes</h2>
<div class="section">
<p>A well-behaved microservice reports on its own health.
Two common approaches for checking health, often used together, are:</p>

<ul class="ulist">
<li>
<p>readiness - a simple verification that the service has been started, has
initialized itself, and is ready to respond to requests; and</p>

</li>
<li>
<p>liveness - often a more thorough assessment of whether
and how well the service can do its job.</p>

</li>
</ul>
<p>For example, Kubernetes can ping your service&#8217;s readiness endpoint after it
 starts the pod containing the service to determine when the service is ready to
 accept requests, withholding traffic until the readiness endpoint reports
 success.</p>

<p>Kubernetes can use the liveness endpoint to find out if the service considers
 itself able to function, attempting a pod restart if the endpoint reports a
 problem.</p>

<p>In general a liveness check might assess:</p>

<ul class="ulist">
<li>
<p>service health - whether the service itself can do its job correctly</p>

</li>
<li>
<p>host health - if the host has sufficient resources (for example, disk space)
for the service to operate</p>

</li>
<li>
<p>health of other, dependent services - if other services on which this service
depends are themselves OK.</p>

</li>
</ul>
<p>We will add an app-specific liveness check. Our greeting service does not depend
 on any host resources (like disk space) or any other services. So for this
example we define our service as "alive" in a very trivial way:
if the greeting text has been assigned
<em>and is not empty</em> when trimmed of leading or trailing white space. Otherwise we
consider the service to be unhealthy, in which case the service will
still respond but its answers might not be what we want.</p>

<p>Normally we would
write our service to make
sure that a newly-assigned greeting is non-empty <em>before</em>
accepting it. But omitting that validation lets us create an easy health check
that we can use by simply setting the greeting to blank from
a <code>curl</code> command.</p>

</div>
</doc-view>
