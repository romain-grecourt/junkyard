<doc-view>

<v-layout row wrap>
<v-flex xs12 sm10 lg10>
<v-card class="section-def" v-bind:color="$store.state.currentColor">
<v-card-text class="pa-3">
<v-card class="section-def__card">
<v-card-text>
<dl>
<dt slot=title>Deploying to OKE</dt>
<dd slot="desc"><p>Push a Docker image of your Helidon application to Oracle Cloud Infrastructure Registry (OCIR), and deploy the image from the registry to Oracle Cloud Infrastructure Container Engine for Kubernetes (OKE).</p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need">What You Need</h2>
<div class="section">

<div class="table__overflow elevation-1 ">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td>About 10 minutes</td>
</tr>
<tr>
<td><router-link to="/getting-started/01_prerequisites">Helidon prerequisites</router-link></td>
</tr>
<tr>
<td>An OKE cluster. See <a id="" title="" target="_blank" href="http://www.oracle.com/webfolder/technetwork/tutorials/obe/oci/oke-full/index.html">Creating a Cluster with Oracle Cloud Infrastructure Container Engine for Kubernetes</a>.</td>
</tr>
<tr>
<td>A docker image of your application. See <a id="" title="" target="_blank" href="05_Dockerfile.adoc">Creating Docker Images</a>.</td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_push_your_image_to_ocir">Push Your Image to OCIR</h2>
<div class="section">
<ol style="margin-left: 15px;">
<li>
Sign in to the Oracle Cloud Infrastructure (OCI) web console.
<ul class="ulist">
<li>
<p>You must be either a local user created by an administrator in OCI Identity and Access Management or a synchronized user created automatically by a federated identity provider.</p>

</li>
<li>
<p>You must in the <code>Administrators</code> group or another group that has the <code>REPOSITORY_CREATE</code> permission.</p>

</li>
</ul>
</li>
<li>
Generate an authentication token.
<p>See <a id="" title="" target="_blank" href="https://docs.cloud.oracle.com/iaas/Content/Registry/Tasks/registrygettingauthtoken.htm">Getting an Auth Token</a>.</p>

<div class="admonition note">
<p class="admonition-inline">Remember to copy the generated token. You won&#8217;t be able to access it again.</p>
</div>
</li>
<li>
Log in to the OCIR Docker CLI:
<ol style="margin-left: 15px;">
<li>
In a terminal window, enter:
<code>docker login &lt;region-code&gt;.ocir.io</code>
<ul class="ulist">
<li>
<p><code>&lt;region-code&gt;</code> is the code for the OCI region that you&#8217;re using.</p>
<p>For example, the region code for Phoenix is <code>phx</code>. See <a id="" title="" target="_blank" href="https://docs.cloud.oracle.com/iaas/Content/General/Concepts/regions.htm">Regions and Availability Domains</a>.</p>

</li>
<li>
<p><code>ocir.io</code> is the OCI registry name.</p>

</li>
</ul>
</li>
<li>
At the <code>username</code> prompt, enter your user name in the format <code>&lt;tenancy_name&gt;/&lt;username&gt;</code>.

</li>
<li>
At the <code>password</code> prompt, enter the auth token that you generated earlier.

</li>
</ol>
</li>
<li>
Tag the image that you want to push to the registry:
<markup


>docker tag quickstart-se:latest &lt;region-code&gt;.ocir.io/&lt;tenancy-name&gt;/&lt;repo-name&gt;/&lt;image-name&gt;:&lt;tag&gt;</markup>

</li>
<li>
Push the image to the Registry:
<markup


>docker push &lt;region-code&gt;.ocir.io/&lt;tenancy-name&gt;/&lt;repo-name&gt;/&lt;image-name&gt;:&lt;tag&gt;</markup>

<ul class="ulist">
<li>
<p><code>&lt;region-code&gt;</code> is the code for the OCI region that you&#8217;re using. See <a id="" title="" target="_blank" href="https://docs.cloud.oracle.com/iaas/Content/General/Concepts/regions.htm">Regions and Availability Domains</a>.</p>

</li>
<li>
<p><code>ocir.io</code> is the OCI registry name.</p>

</li>
<li>
<p><code>&lt;tenancy-name&gt;</code> is the name of the tenancy that owns the repository to which you want to push the image.</p>

</li>
<li>
<p><code>&lt;repo-name&gt;</code> is optional. It is the name of a repository to which you want to push the image (for example, <code>project01</code>). If you don&#8217;t specify a repository name, the name of the image is used as the repository name in OCIR.</p>

</li>
<li>
<p><code>&lt;image-name&gt;</code> is the name you want to give the image in OCIR (for example, <code>helloworld</code>).</p>

</li>
<li>
<p><code>&lt;tag&gt;</code> is an image tag you want to assign the image in OCIR (for example, <code>latest</code>).</p>

</li>
</ul>
</li>
<li>
Get the full path of the image in OCIR:
<ol style="margin-left: 15px;">
<li>
In the OCI web console, navigate to <strong>Developer Services</strong>, and select <strong>Registry (OCIR)</strong>.

</li>
<li>
Select the repository and image that you created.

</li>
<li>
Copy the value displayed in the <strong>Full Path</strong> field.
<p>The path is in the format <code>&lt;tenancy&gt;/&lt;repository&gt;/&lt;image&gt;:&lt;tag&gt;</code></p>

<p>Example: <code>oracle-cloudnative/example/quickstart-se:latest</code></p>

</li>
</ol>
</li>
<li>
Create a namespace (for example, <code>helidon</code>) for the project:
<markup


>kubectl create namespace helidon</markup>

</li>
<li>
(Optional) Create an image-pull secret.
<div class="admonition note">
<p class="admonition-inline">By default, the repository that you created is private. To allow Kubernetes to authenticate with the container registry and pull the private image, you must create and use an image-pull secret. If you choose to make your repository public, then skip this step.</p>
</div>
<markup


>kubectl create secret docker-registry ocirsecret --docker-server=&lt;region-code&gt;.ocir.io --docker-username='&lt;tenancy-name&gt;/&lt;oci-username&gt;' --docker-password='&lt;oci-auth-token&gt;' --docker-email='&lt;email-address&gt; --namespace helidon</markup>

</li>
<li>
In the application&#8217;s <code>/target/app.yaml</code> file (created with Maven), add the following fields under <code>spec</code> in the <code>deployment</code> section:
<ol style="margin-left: 15px;">
<li>
(Optional) Add the image-pull secret that you created in the previous step:
<p>This step is necessary only if you created an image-pull secret and want to keep the repository private.</p>

<markup
lang="yaml"

>imagePullSecrets:
        - name: ocirsecret</markup>

</li>
<li>
In the <code>image</code> field under <code>containers</code>, specify the image path that you copied earlier from the OCI console, in the following format:
<p><code>&lt;region-code&gt;.ocir.io/&lt;tenancy&gt;/&lt;repository&gt;/&lt;image&gt;:&lt;tag&gt;</code></p>

<p>Here&#8217;s an example of an updated yaml file after adding the image-pull secret and the image path:</p>

<markup
lang="yaml"

>    spec:
      imagePullSecrets:
      - name: ocirsecret
      containers:
      - name: helidon-se
        image: phx.ocir.io/oracle-cloudnative/example/quickstart-se:latest
        imagePullPolicy: Always
        ports:
        - containerPort: 8080</markup>

</li>
</ol>
</li>
</ol>

<h3 id="_deploy_the_image_to_kubernetes">Deploy the Image to Kubernetes</h3>
<div class="section">
<ol style="margin-left: 15px;">
<li>
Change to the <code>quickstart-se directory</code>.

</li>
<li>
Deploy the application to the <code>helidon</code> namespace within your Kubernetes cluster:
<markup


>kubectl create -f target/app.yaml -n helidon</markup>

</li>
<li>
Get the <code>NodePort</code> number for your new pod:
<markup


>kubectl get svc -n helidon</markup>

</li>
<li>
Get the IP address for your cluster nodes:
<markup


>kubectl get nodes</markup>

</li>
<li>
Construct the URL of the deployed pod as follows:

</li>
</ol>
<markup


>http://&lt;NodeIpAddress&gt;:&lt;NodePort&gt;</markup>

<p>Browse to (or cURL) the <code><a id="" title="" target="_blank" href="http://&lt;NodeIpAddress&gt;:&lt;NodePort&gt;/greet">http://&lt;NodeIpAddress&gt;:&lt;NodePort&gt;/greet</a></code> endpoint. It returns the same JSON response as when the application was deployed locally.</p>

</div>
</div>
</doc-view>
