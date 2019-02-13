function createConfig() {
    return {
        home: "about/01_introduction",
        release: "1.0.0-SNAPSHOT",
        releases: [
            "1.0.0-SNAPSHOT"
        ],
        pathColors: {
            "*": "blue-grey"
        },
        theme: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
        },
        navTitle: 'Helidon',
        navIcon: null,
        navLogo: 'images/helidon_logo_dark.svg'
    };
}

function createRoutes(){
    return [
        {
            path: '/about/01_introduction',
            meta: {
                h1: 'Introduction',
                title: 'Introduction',
                description: 'about Helidon',
                keywords: 'helidon, java, microservices, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-01_introduction', '/about/01_introduction', {})
        },
        {
            path: '/getting-started/01_prerequisites',
            meta: {
                h1: 'Prerequisites',
                title: 'Prerequisites',
                description: 'Helidon pre-requisites',
                keywords: 'helidon',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('getting-started-01_prerequisites', '/getting-started/01_prerequisites', {})
        },
        {
            path: '/getting-started/02_base-example',
            meta: {
                h1: 'Quickstart Examples',
                title: 'Quickstart Examples',
                description: 'Helidon Quickstart examples',
                keywords: 'helidon',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('getting-started-02_base-example', '/getting-started/02_base-example', {})
        },
        {
            path: '/getting-started/03_managing-dependencies',
            meta: {
                h1: 'Managing Dependencies',
                title: 'Managing Dependencies',
                description: 'Managing Maven dependencies',
                keywords: 'bom, dependency management',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('getting-started-03_managing-dependencies', '/getting-started/03_managing-dependencies', {})
        },
        {
            path: '/getting-started/04_kubernetes',
            meta: {
                h1: 'Kubernetes on your Desktop',
                title: 'Kubernetes on your Desktop',
                description: 'Running Kubernetes on your desktop.',
                keywords: 'kubernetes',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('getting-started-04_kubernetes', '/getting-started/04_kubernetes', {})
        },
        {
            path: '/webserver/01_introduction',
            meta: {
                h1: 'WebServer Introduction',
                title: 'WebServer Introduction',
                description: 'Helidon Reactive WebServer Introduction',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('webserver-01_introduction', '/webserver/01_introduction', {})
        },
        {
            path: '/webserver/02_configuration',
            meta: {
                h1: 'WebServer Configuration',
                title: 'WebServer Configuration',
                description: 'Helidon Reactive Webserver Configuration',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('webserver-02_configuration', '/webserver/02_configuration', {})
        },
        {
            path: '/webserver/03_routing',
            meta: {
                h1: 'Routing',
                title: 'Routing',
                description: 'Helidon Reactive WebServer Routing',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('webserver-03_routing', '/webserver/03_routing', {})
        },
        {
            path: '/webserver/04_request-handling',
            meta: {
                h1: 'Request Handling',
                title: 'Request Handling',
                description: 'Helidon Reactive WebServer request handling',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('webserver-04_request-handling', '/webserver/04_request-handling', {})
        },
        {
            path: '/webserver/05_error-handling',
            meta: {
                h1: 'Error Handling',
                title: 'Error Handling',
                description: 'Helidon Reactive WebServer error handling',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('webserver-05_error-handling', '/webserver/05_error-handling', {})
        },
        {
            path: '/webserver/06_static-content-support',
            meta: {
                h1: 'Static Content Support',
                title: 'Static Content Support',
                description: 'Helidon Reactive WebServer static content support',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('webserver-06_static-content-support', '/webserver/06_static-content-support', {})
        },
        {
            path: '/webserver/07_jersey-support',
            meta: {
                h1: 'Jersey (JAX-RS) Support',
                title: 'Jersey (JAX-RS) Support',
                description: 'Helidon Reactive WebServer Jersey JAX-RS support',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('webserver-07_jersey-support', '/webserver/07_jersey-support', {})
        },
        {
            path: '/webserver/08_json-support',
            meta: {
                h1: 'JSON Support',
                title: 'JSON Support',
                description: 'Helidon Reactive WebServer JSON support',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('webserver-08_json-support', '/webserver/08_json-support', {})
        },
        {
            path: '/config/01_introduction',
            meta: {
                h1: 'The Configuration Component',
                title: 'The Configuration Component',
                description: 'Helidon config introduction',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('config-01_introduction', '/config/01_introduction', {})
        },
        {
            path: '/config/02_config-sources',
            meta: {
                h1: 'Loading Configuration: Config Sources and Parsers',
                title: 'Loading Configuration: Config Sources and Parsers',
                description: 'A summary of Helidon config sources and parsers',
                keywords: 'Helidon, config, sources, parsers',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('config-02_config-sources', '/config/02_config-sources', {})
        },
        {
            path: '/config/03_hierarchical-features',
            meta: {
                h1: 'Hierarchical Features',
                title: 'Hierarchical Features',
                description: 'Helidon hierarchical features',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('config-03_hierarchical-features', '/config/03_hierarchical-features', {})
        },
        {
            path: '/config/04_property-mapping',
            meta: {
                h1: 'Property Mapping',
                title: 'Property Mapping',
                description: 'Helidon config property mapping',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('config-04_property-mapping', '/config/04_property-mapping', {})
        },
        {
            path: '/config/05_mutability-support',
            meta: {
                h1: 'Mutability Support',
                title: 'Mutability Support',
                description: 'Helidon mutability support',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('config-05_mutability-support', '/config/05_mutability-support', {})
        },
        {
            path: '/config/06_advanced-configuration',
            meta: {
                h1: 'Advanced Configuration Topics',
                title: 'Advanced Configuration Topics',
                description: 'Helidon config advanced configuration',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('config-06_advanced-configuration', '/config/06_advanced-configuration', {})
        },
        {
            path: '/config/07_extensions',
            meta: {
                h1: 'Extensions',
                title: 'Extensions',
                description: 'Helidon config extensions',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('config-07_extensions', '/config/07_extensions', {})
        },
        {
            path: '/config/08_supported-formats',
            meta: {
                h1: 'Additional Supported Formats and Sources',
                title: 'Additional Supported Formats and Sources',
                description: 'Helidon config supported formats and sources',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('config-08_supported-formats', '/config/08_supported-formats', {})
        },
        {
            path: '/security/01_introduction',
            meta: {
                h1: 'Security Introduction',
                title: 'Security Introduction',
                description: 'Helidon Security introduction',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('security-01_introduction', '/security/01_introduction', {})
        },
        {
            path: '/security/02_providers',
            meta: {
                h1: 'Security Providers',
                title: 'Security Providers',
                description: 'Helidon Security providers',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('security-02_providers', '/security/02_providers', {})
        },
        {
            path: '/security/03_containers-integration',
            meta: {
                h1: 'Containers Integration',
                title: 'Containers Integration',
                description: 'Helidon Security containers integration',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('security-03_containers-integration', '/security/03_containers-integration', {})
        },
        {
            path: '/security/04_tools',
            meta: {
                h1: 'Security Tools',
                title: 'Security Tools',
                description: 'Helidon Security Tools',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('security-04_tools', '/security/04_tools', {})
        },
        {
            path: '/security/05_extensibility',
            meta: {
                h1: 'Extending Security',
                title: 'Extending Security',
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('security-05_extensibility', '/security/05_extensibility', {})
        },
        {
            path: '/microprofile/01_introduction',
            meta: {
                h1: 'Microprofile Introduction',
                title: 'Microprofile Introduction',
                description: 'Helidon Microprofile introduction',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('microprofile-01_introduction', '/microprofile/01_introduction', {})
        },
        {
            path: '/microprofile/02_server-configuration',
            meta: {
                h1: 'Configuring the Server',
                title: 'Configuring the Server',
                description: 'Helidon MicroProfile server configuration',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('microprofile-02_server-configuration', '/microprofile/02_server-configuration', {})
        },
        {
            path: '/microprofile/03_application-configuration',
            meta: {
                h1: 'Configuring the Application',
                title: 'Configuring the Application',
                description: 'Helidon MicroProfile application configuration',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('microprofile-03_application-configuration', '/microprofile/03_application-configuration', {})
        },
        {
            path: '/microprofile/04_static-content',
            meta: {
                h1: 'Serving Static Content',
                title: 'Serving Static Content',
                description: 'Helidon Microprofile static content',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('microprofile-04_static-content', '/microprofile/04_static-content', {})
        },
        {
            path: '/microprofile/05_security',
            meta: {
                h1: 'Adding Security',
                title: 'Adding Security',
                description: 'Helidon MicroProfile security',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('microprofile-05_security', '/microprofile/05_security', {})
        },
        {
            path: '/microprofile/06_configuration',
            meta: {
                h1: 'Configuration Secrets',
                title: 'Configuration Secrets',
                description: 'Helidon MicroProfile configuration secrets',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('microprofile-06_configuration', '/microprofile/06_configuration', {})
        },
        {
            path: '/extensions/01_overview',
            meta: {
                h1: 'Extensions Overview',
                title: 'Extensions Overview',
                description: 'Helidon extensions',
                keywords: 'helidon, java, microservices, microprofile, extensions',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('extensions-01_overview', '/extensions/01_overview', {})
        },
        {
            path: '/extensions/02_cdi_datasource-hikaricp',
            meta: {
                h1: 'CDI extension for HikariCP',
                title: 'CDI extension for HikariCP',
                description: 'Helidon CDI extension for HikariCP',
                keywords: 'helidon, java, microservices, microprofile, extensions, cdi, hikaricp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('extensions-02_cdi_datasource-hikaricp', '/extensions/02_cdi_datasource-hikaricp', {})
        },
        {
            path: '/extensions/03_cdi_jedis',
            meta: {
                h1: 'CDI extension for Jedis',
                title: 'CDI extension for Jedis',
                description: 'Helidon CDI extension for Jedis',
                keywords: 'helidon, java, microservices, microprofile, extensions, cdi, jedis, redis',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('extensions-03_cdi_jedis', '/extensions/03_cdi_jedis', {})
        },
        {
            path: '/extensions/04_cdi_oci-objectstorage',
            meta: {
                h1: 'CDI extension for OCI Object storage',
                title: 'CDI extension for OCI Object storage',
                description: 'Helidon CDI extension for HikariCP',
                keywords: 'helidon, java, microservices, microprofile, extensions, cdi, oci, object storage',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('extensions-04_cdi_oci-objectstorage', '/extensions/04_cdi_oci-objectstorage', {})
        },
        {
            path: '/metrics/01_metrics',
            meta: {
                h1: 'Metrics',
                title: 'Metrics',
                description: 'Helidon metrics',
                keywords: 'helidon, metrics',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('metrics-01_metrics', '/metrics/01_metrics', {})
        },
        {
            path: '/metrics/02_prometheus',
            meta: {
                h1: 'Prometheus Metrics',
                title: 'Prometheus Metrics',
                description: 'Helidon Prometheus metrics',
                keywords: 'helidon, metrics, prometheus',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('metrics-02_prometheus', '/metrics/02_prometheus', {})
        },
        {
            path: '/tracing/01_Tracing',
            meta: {
                h1: 'Tracing',
                title: 'Tracing',
                description: 'Helidon Tracing Support',
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('tracing-01_Tracing', '/tracing/01_Tracing', {})
        },
        {
            path: '/tracing/02_Zipkin',
            meta: {
                h1: 'Zipkin Tracing',
                title: 'Zipkin Tracing',
                description: 'Helidon Tracing Support',
                keywords: 'helidon, tracing',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('tracing-02_Zipkin', '/tracing/02_Zipkin', {})
        },
        {
            path: '/health/01_health',
            meta: {
                h1: 'Health Checks',
                title: 'Health Checks',
                description: 'Helidon health checks',
                keywords: 'helidon, health-checks, health, check',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('health-01_health', '/health/01_health', {})
        },
        {
            path: '/guides/01_overview',
            meta: {
                h1: 'Guides Overview',
                title: 'Guides Overview',
                description: 'Helidon guides',
                keywords: 'helidon, java, microservices, microprofile, guides',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('guides-01_overview', '/guides/01_overview', {})
        },
        {
            path: '/guides/02_SE_REST_web-service',
            meta: {
                h1: 'SE REST Application',
                title: 'SE REST Application',
                description: 'Helidon guide restful web application',
                keywords: 'helidon, guide, rest, example',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('guides-02_SE_REST_web-service', '/guides/02_SE_REST_web-service', {})
        },
        {
            path: '/guides/03_MP_REST_web-service',
            meta: {
                h1: 'MP REST Web Service',
                title: 'MP REST Web Service',
                description: 'Helidon guide restful web service MP',
                keywords: 'helidon, guide, rest, web, service, example, MP',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('guides-03_MP_REST_web-service', '/guides/03_MP_REST_web-service', {})
        },
        {
            path: '/guides/05_Dockerfile',
            meta: {
                h1: 'Creating Docker Images',
                title: 'Creating Docker Images',
                description: 'Helidon Docker Guide',
                keywords: 'helidon, guide, docker',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('guides-05_Dockerfile', '/guides/05_Dockerfile', {})
        },
        {
            path: '/', redirect: '/about/01_introduction'
        },
        {
            path: '*', redirect: '/'
        }
    ];
}

function createNav(){
    return [
        { header: 'Core documentation' },
        {
            title: 'About',
            action: 'weekend',
            group: '/about',
            items: [
                { href: '/about/01_introduction', title: 'Introduction' }
            ]
        },
        {
            title: 'Getting Started',
            action: 'assistant',
            group: '/getting-started',
            items: [
                { href: '/getting-started/01_prerequisites', title: 'Prerequisites' },
                { href: '/getting-started/02_base-example', title: 'Quickstart Examples' },
                { href: '/getting-started/03_managing-dependencies', title: 'Managing Dependencies' },
                { href: '/getting-started/04_kubernetes', title: 'Kubernetes on your Desktop' }
            ]
        },
        {
            title: 'Reactive webserver',
            action: 'settings_ethernet',
            group: '/webserver',
            items: [
                { href: '/webserver/01_introduction', title: 'WebServer Introduction' },
                { href: '/webserver/02_configuration', title: 'WebServer Configuration' },
                { href: '/webserver/03_routing', title: 'Routing' },
                { href: '/webserver/04_request-handling', title: 'Request Handling' },
                { href: '/webserver/05_error-handling', title: 'Error Handling' },
                { href: '/webserver/06_static-content-support', title: 'Static Content Support' },
                { href: '/webserver/07_jersey-support', title: 'Jersey (JAX-RS) Support' },
                { href: '/webserver/08_json-support', title: 'JSON Support' }
            ]
        },
        {
            title: 'Config',
            action: 'settings',
            group: '/config',
            items: [
                { href: '/config/01_introduction', title: 'The Configuration Component' },
                { href: '/config/02_config-sources', title: 'Loading Configuration: Config Sources and Parsers' },
                { href: '/config/03_hierarchical-features', title: 'Hierarchical Features' },
                { href: '/config/04_property-mapping', title: 'Property Mapping' },
                { href: '/config/05_mutability-support', title: 'Mutability Support' },
                { href: '/config/06_advanced-configuration', title: 'Advanced Configuration Topics' },
                { href: '/config/07_extensions', title: 'Extensions' },
                { href: '/config/08_supported-formats', title: 'Additional Supported Formats and Sources' }
            ]
        },
        {
            title: 'Security',
            action: 'security',
            group: '/security',
            items: [
                { href: '/security/01_introduction', title: 'Security Introduction' },
                { href: '/security/02_providers', title: 'Security Providers' },
                { href: '/security/03_containers-integration', title: 'Containers Integration' },
                { href: '/security/04_tools', title: 'Security Tools' },
                { href: '/security/05_extensibility', title: 'Extending Security' }
            ]
        },
        {
            title: 'Microprofile',
            action: 'widgets',
            group: '/microprofile',
            items: [
                { href: '/microprofile/01_introduction', title: 'Microprofile Introduction' },
                { href: '/microprofile/02_server-configuration', title: 'Configuring the Server' },
                { href: '/microprofile/03_application-configuration', title: 'Configuring the Application' },
                { href: '/microprofile/04_static-content', title: 'Serving Static Content' },
                { href: '/microprofile/05_security', title: 'Adding Security' },
                { href: '/microprofile/06_configuration', title: 'Configuration Secrets' }
            ]
        },
        {
            title: 'Extensions',
            action: 'extension',
            group: '/extensions',
            items: [
                { href: '/extensions/01_overview', title: 'Extensions Overview' },
                { href: '/extensions/02_cdi_datasource-hikaricp', title: 'CDI extension for HikariCP' },
                { href: '/extensions/03_cdi_jedis', title: 'CDI extension for Jedis' },
                { href: '/extensions/04_cdi_oci-objectstorage', title: 'CDI extension for OCI Object storage' }
            ]
        },
        {
            title: 'Metrics',
            action: 'av_timer',
            group: '/metrics',
            items: [
                { href: '/metrics/01_metrics', title: 'Metrics' },
                { href: '/metrics/02_prometheus', title: 'Prometheus Metrics' }
            ]
        },
        {
            title: 'Tracing',
            action: 'timeline',
            group: '/tracing',
            items: [
                { href: '/tracing/01_Tracing', title: 'Tracing' },
                { href: '/tracing/02_Zipkin', title: 'Zipkin Tracing' }
            ]
        },
        {
            title: 'Health Checks',
            action: 'favorite_outline',
            group: '/health',
            items: [
                { href: '/health/01_health', title: 'Health Checks' }
            ]
        },
        {
            title: 'Guides',
            action: 'explore',
            group: '/guides',
            items: [
                { href: '/guides/01_overview', title: 'Guides Overview' },
                { href: '/guides/02_SE_REST_web-service', title: 'SE REST Application' },
                { href: '/guides/03_MP_REST_web-service', title: 'MP REST Web Service' },
                { href: '/guides/05_Dockerfile', title: 'Creating Docker Images' }
            ]
        },
        {
            title: 'Javadocs',
            action: 'library_books',
            href: 'apidocs/index.html?overview-summary.html',
            target: '_blank'
        },
        { divider: true },
        { header: 'Additional resources' },
        {
            title: 'Community',
            action: 'fa-slack',
            href: 'https://join.slack.com/t/helidon/shared_invite/enQtNDM1NjU3MjkyNDg2LTFkZTM4NmI3OWUyNjUxYWQ5Njc0NGNiMzY3MTZiZmMwNzAxYmI4YzUzOWNkNzNlZTEwNDRkZGU4YzMzZjhkNTE',
            target: '_blank'
        }
    ];
}