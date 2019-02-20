<doc-view>

<v-layout row wrap>
<v-flex xs12 sm10 lg10>
<v-card class="section-def" v-bind:color="$store.state.currentColor">
<v-card-text class="pa-3">
<v-card class="section-def__card">
<v-card-text>
<dl>
<dt slot=title>Deploying Helidon to Oracle Container Engine for Kubernetes</dt>
<dd slot="desc"><p>Pushing Helidon applications to the Oracle Registry Service and deploying to Oracle Container Engine for Kubernetes.</p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_will_learn">What You Will Learn</h2>
<div class="section">
<p>You&#8217;ll learn how to push the Docker image of your Helidon application to the Oracle Registry Service (OCIR) and deploy from the Registry Service to Oracle Container Engine for Kubernetes (OKE).</p>

</div>

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
<td><router-link to="/getting-started/01_prerequisites">Helidon Prerequisites</router-link></td>
</tr>
<tr>
<td>Access to <a id="" title="" target="_blank" href="http://www.oracle.com/webfolder/technetwork/tutorials/obe/oci/oke-full/index.html">Oracle Container Engine for Kubernetes (OKE)</a></td>
</tr>
<tr>
<td><a id="" title="" target="_blank" href="https://kubernetes.io/docs/tasks/tools/install-kubectl/">Kubectl</a></td>
</tr>
<tr>
<td><a id="" title="" target="_blank" href="https://docs.docker.com/install/">Docker</a></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_create_your_application_using_the_creating_docker_images_guide">Create Your Application Using The Creating Docker Images Guide</h2>
<div class="section">
<p>Follow the instructions on the <router-link to="#getting-started/05_Dockerfile.adoc" @click.native="this.scrollFix('#getting-started/05_Dockerfile.adoc')">Quickstart page</router-link>
to create a Docker image for your Helidon SE project. Once you have the image come back here.</p>

</div>

<h2 id="_pushing_the_image_to_ocir">Pushing the Image to OCIR</h2>
<div class="section">
<p>You will need to log into your Oracle Cloud Infrastructure console and make sure you have a native OCI user. Currently federated users are not supported by OCIR. Your user will either need to be a part of the tenancy&#8217;s Administrators group or another group with the <code>REPOSITORY_CREATE</code> permission. After confirming you have the proper permissions, generate an auth token for your user. Copy the token to a notepad as you will not be able to access it again.</p>

<p>Navigate to the Registry (OCIR) tab and choose the region to which you would like to push the image. Log into the Registry service Docker CLI with docker login <code>&lt;region-code&gt;.ocir.io</code>. When prompted, enter your username in the format <code>&lt;tenancy_name&gt;/&lt;username&gt;</code>. When prompted, enter the auth token copied earlier as the password.</p>

<p>The next step is to tag the quickstart image we are going to push to the registry:</p>

<p><code>docker tag quickstart-se:latest &lt;region-code&gt;.ocir.io/&lt;tenancy-name&gt;/&lt;repo-name&gt;/&lt;image-name&gt;:&lt;tag&gt;`</code></p>

<p>Finally we push the image to the Registry:</p>

<p><code>docker push &lt;region-code&gt;.ocir.io/&lt;tenancy-name&gt;/&lt;repo-name&gt;/&lt;image-name&gt;:&lt;tag&gt;`</code></p>

<p><code>&lt;region-code&gt;</code>
<code>&lt;region-code&gt;</code> corresponds to the code for the Oracle Cloud Infrastructure Registry region you&#8217;re using, as follows:</p>

<ul class="ulist">
<li>
<p>enter <code>fra</code> as the region code for Frankfurt</p>

</li>
<li>
<p>enter <code>iad</code> as the region code for Ashburn</p>

</li>
<li>
<p>enter <code>lhr</code> as the region code for London</p>

</li>
<li>
<p>enter <code>phx</code> as the region code for Phoenix</p>

</li>
</ul>
<p><code>ocir.io</code> is the Oracle Cloud Infrastructure Registry name.
<code>&lt;tenancy-name&gt;</code> is the name of the tenancy that owns the repository to which you want to push the image, for example <code>acme-dev</code>. Note that your user must have access to the tenancy.
<code>&lt;repo-name&gt;</code>, if specified, is the name of a repository to which you want to push the image ,for example, <code>project01</code>. Note that specifying a repository is optional. If you don&#8217;t specify a repository name, the name of the image is used as the repository name in Oracle Cloud Infrastructure Registry.
<code>&lt;image-name&gt;</code> is the name you want to give the image in Oracle Cloud Infrastructure Registry, for example, helloworld.
<code>&lt;tag&gt;</code> is an image tag you want to give the image in Oracle Cloud Infrastructure Registry, for example, latest.</p>

<p>Within the Registry UI you will see the newly created repository. By default, the repository will be set to private. If you would like to continue with a private repository, you will have to add an image pull secret which allows Kubernetes to authenticate with a container registry to pull a private image. Let&#8217;s first create a namespace for this project called <code>helidon</code> with <code>kubectl</code> create namespace helidon. We will deploy our application to this namespace. Next we will create the secret with:</p>

<p><code>kubectl create secret docker-registry ocirsecret --docker-server=&lt;region-code&gt;.ocir.io --docker-username='&lt;tenancy-name&gt;/&lt;oci-username&gt;' --docker-password='&lt;oci-auth-token&gt;' --docker-email='&lt;email-address&gt; --namespace helidon</code></p>

<p>Open up your <code>/target/app.yaml</code> file created with Maven and under spec next to containers in the deployment section add the following:</p>

<markup
lang="yaml"

>imagePullSecrets:
        - name: ocirsecret</markup>

<p>In the same file also under spec in the deployment section add the path listed on the Registry page to image under containers:</p>

<p><code>&lt;region-code.ocir.io&gt;/&lt;tenancy-name&gt;/&lt;quickstart-project-name&gt;</code></p>

<p>The final version will look something like this:</p>

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

<p>To make your life a little easier, you can skip past the secret creation step and simply make your registry public. You will still need to add the image location to your app.yaml file, but you will not need to create a secret or add <code>imagePullSecrets</code> to the yaml file.</p>


<h3 id="_deploying_to_kubernetes">Deploying to Kubernetes</h3>
<div class="section">
<p>Change to your quickstart-se directory and run <code>kubectl create -f target/app.yaml -n helidon</code> to deploy the application to the helidon namespace within your Kubernetes cluster.</p>

<p>Run <code>kubectl get svc -n helidon</code> to get the NodePort for your new pod. Run <code>kubectl get nodes</code> to get the IP address for your cluster nodes. Add the port number to the IP address of your node to get access to the deployed pod. If you browse to or cURL the same /greet endpoint you will see the same JSON output as you did when the application was deployed locally.</p>

</div>
</div>
</doc-view>
