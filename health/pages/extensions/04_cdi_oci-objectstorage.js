<doc-view>

<v-layout row wrap>
<v-flex xs12 sm10 lg10>
<v-card class="section-def" v-bind:color="$store.state.currentColor">
<v-card-text class="pa-3">
<v-card class="section-def__card">
<v-card-text>
<dl>
<dt slot=title>CDI extension for OCI Object storage</dt>
<dd slot="desc"><p>This <a id="" title="" target="_blank" href="https://docs.jboss.org/cdi/spec/2.0/cdi-spec.html#spi">CDI portable extension</a> provides support for
 injecting an <a id="" title="" target="_blank" href="https://docs.cloud.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm">Oracle Cloud Infrastructure Object Storage client</a>
 in your Helidon MicroProfile applications.</p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequisites">Prerequisites</h2>
<div class="section">
<p>To install the extension for Oracle Cloud Infrastructure Object Storage clients,
 you must first clone and install the Oracle Cloud Infrastructure Java SDK because
 it is not available, currently, in Maven Central.</p>

<p>Clone the SDK:</p>

<markup
lang="bash"

>  git clone --depth 1 --branch v1.2.44 https://github.com/oracle/oci-java-sdk.git</markup>

<p>Install the SDK:</p>

<markup
lang="bash"

>  cd oci-java-sdk &amp;&amp; mvn -B -U -f oci-java-sdk/pom.xml \
          -Dmaven.test.skip=true \
          -Dmaven.source.skip=true \
          -Dmaven.javadoc.skip=true \
          -Dlombok.delombok.skip=true \
          -pl bmc-objectstorage \
          -am \
          install</markup>

<p>Declare the following dependency in your project:</p>

<markup
lang="xml"

>      &lt;dependency&gt;
           &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
           &lt;artifactId&gt;helidon-integrations-cdi-oci-objectstorage&lt;/artifactId&gt;
      &lt;/dependency&gt;</markup>

</div>

<h2 id="_injecting_an_object_storage_client">Injecting an Object Storage client</h2>
<div class="section">
<markup
lang="java"
title="Field-injection example"
> @Inject
 private ObjectStorage client;</markup>

<markup
lang="java"
title="Constructor-injection example"
> private final ObjectStorage client;
 @Inject
 public YourConstructor(@Named("orders") ObjectStorage client) {
   super();
   this.client = client;
 }</markup>

<p>The extension implements this injection point by creating an Object Storage client
 object in the <a id="" title="" target="_blank" href="{cdi-applicationscoped-api-url}">application scope</a>.</p>

<p>You can configure the object using
 <router-link to="/microprofile/02_server-configuration">MicroProfile config</router-link>. For example,
 the Object Storage client created above can be configured as follows:</p>

<markup
lang="properties"
title="META-INF/microprofile-config.properties"
>oci.auth.fingerprint=
oci.auth.keyFile=
oci.auth.passphraseCharacters=
oci.auth.user=
oci.auth.tenancy=
oci.objectstorage.region=
oci.objectstorage.namespace=</markup>

<p>These properties are described in the
 <a id="" title="" target="_blank" href="https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/javasdk.htm">Oracle Cloud Infrastructure Object Storage Java SDK documentation</a>.</p>

</div>
</doc-view>
