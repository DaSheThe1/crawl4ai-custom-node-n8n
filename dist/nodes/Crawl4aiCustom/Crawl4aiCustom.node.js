"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Crawl4aiCustom {
    constructor() {
        this.description = {
            displayName: 'Crawl4AI Custom',
            name: 'crawl4aiCustom',
            icon: 'file:crawl4ai.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["url"]}}',
            description: 'Custom web scraping and crawling with AI-powered extraction',
            defaults: {
                name: 'Crawl4AI',
            },
            inputs: ["main" /* NodeConnectionType.Main */],
            outputs: ["main" /* NodeConnectionType.Main */],
            credentials: [
                {
                    name: 'crawl4AIApi',
                    required: true,
                },
            ],
            properties: [
                // Operation Selection
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    options: [
                        {
                            name: 'Crawl',
                            value: 'crawl',
                            description: 'Crawl a single page',
                        },
                        {
                            name: 'Batch Crawl',
                            value: 'batchCrawl',
                            description: 'Crawl multiple URLs',
                        },
                    ],
                    default: 'crawl',
                    description: 'The operation to perform',
                },
                // Single URL for crawl operation
                {
                    displayName: 'URL',
                    name: 'url',
                    type: 'string',
                    default: '',
                    required: true,
                    description: 'The URL to crawl',
                    displayOptions: {
                        show: {
                            operation: ['crawl'],
                        },
                    },
                },
                // Multiple URLs for batch crawl
                {
                    displayName: 'URLs',
                    name: 'urls',
                    type: 'string',
                    typeOptions: {
                        rows: 5,
                    },
                    default: '',
                    required: true,
                    description: 'Enter URLs to crawl (one per line or comma-separated)',
                    placeholder: 'https://example.com\nhttps://example.org\nhttps://example.net',
                    displayOptions: {
                        show: {
                            operation: ['batchCrawl'],
                        },
                    },
                },
                // Output Configuration
                {
                    displayName: 'Output Format',
                    name: 'outputFormat',
                    type: 'multiOptions',
                    options: [
                        {
                            name: 'Markdown',
                            value: 'markdown',
                        },
                        {
                            name: 'HTML',
                            value: 'html',
                        },
                        {
                            name: 'Cleaned HTML',
                            value: 'cleaned_html',
                        },
                        {
                            name: 'Extracted Content',
                            value: 'extracted_content',
                        },
                        {
                            name: 'Metadata',
                            value: 'metadata',
                        },
                        {
                            name: 'Links',
                            value: 'links',
                        },
                        {
                            name: 'Media',
                            value: 'media',
                        },
                        {
                            name: 'Screenshot',
                            value: 'screenshot',
                        },
                        {
                            name: 'PDF',
                            value: 'pdf',
                        },
                        {
                            name: 'MHTML',
                            value: 'mhtml',
                        },
                        {
                            name: 'Response Headers',
                            value: 'response_headers',
                        },
                        {
                            name: 'JS Execution Result',
                            value: 'js_execution_result',
                        },
                        {
                            name: 'Error Message',
                            value: 'error_message',
                        },
                    ],
                    default: ['markdown'],
                    description: 'Select which outputs to include in the response',
                },
                // Browser Configuration
                {
                    displayName: 'Browser Options',
                    name: 'browserOptions',
                    type: 'collection',
                    placeholder: 'Add Browser Option',
                    default: {},
                    options: [
                        {
                            displayName: 'Headless',
                            name: 'headless',
                            type: 'boolean',
                            default: true,
                            description: 'Whether to run browser in headless mode',
                        },
                        {
                            displayName: 'User Agent',
                            name: 'userAgent',
                            type: 'string',
                            default: '',
                            description: 'Custom user agent string',
                        },
                        {
                            displayName: 'Wait For',
                            name: 'waitFor',
                            type: 'string',
                            default: '',
                            description: 'CSS selector to wait for before considering page loaded',
                        },
                        {
                            displayName: 'Page Timeout',
                            name: 'pageTimeout',
                            type: 'number',
                            default: 30000,
                            description: 'Maximum time to wait for page load (ms)',
                        },
                        {
                            displayName: 'JavaScript Enabled',
                            name: 'jsEnabled',
                            type: 'boolean',
                            default: true,
                            description: 'Whether to enable JavaScript execution',
                        },
                        {
                            displayName: 'Block Resources',
                            name: 'blockResources',
                            type: 'multiOptions',
                            options: [
                                { name: 'Images', value: 'image' },
                                { name: 'Stylesheets', value: 'stylesheet' },
                                { name: 'Fonts', value: 'font' },
                                { name: 'Media', value: 'media' },
                            ],
                            default: [],
                            description: 'Resource types to block for faster loading',
                        },
                        {
                            displayName: 'Extra Headers',
                            name: 'extraHeaders',
                            type: 'json',
                            default: '{}',
                            description: 'Additional headers as JSON object',
                        },
                        {
                            displayName: 'Cookies',
                            name: 'cookies',
                            type: 'json',
                            default: '[]',
                            description: 'Cookies to set as JSON array',
                        },
                        {
                            displayName: 'Raw Browser Config (JSON)',
                            name: 'rawBrowserConfig',
                            type: 'json',
                            default: '{}',
                            description: 'Additional browser configuration as JSON (will be merged with above options)',
                        },
                    ],
                },
                // Crawler Configuration
                {
                    displayName: 'Crawler Options',
                    name: 'crawlerOptions',
                    type: 'collection',
                    placeholder: 'Add Crawler Option',
                    default: {},
                    options: [
                        {
                            displayName: 'Cache Mode',
                            name: 'cacheMode',
                            type: 'options',
                            options: [
                                { name: 'Enabled', value: 'enabled' },
                                { name: 'Bypass', value: 'bypass' },
                                { name: 'Disabled', value: 'disabled' },
                            ],
                            default: 'bypass',
                            description: 'How to handle caching',
                        },
                        {
                            displayName: 'Word Count Threshold',
                            name: 'wordCountThreshold',
                            type: 'number',
                            default: 10,
                            description: 'Minimum word count for content extraction',
                        },
                        {
                            displayName: 'Excluded Tags',
                            name: 'excludedTags',
                            type: 'string',
                            default: '',
                            description: 'Comma-separated list of HTML tags to exclude',
                        },
                        {
                            displayName: 'Excluded Classes',
                            name: 'excludedClasses',
                            type: 'string',
                            default: '',
                            description: 'Comma-separated list of CSS classes to exclude',
                            placeholder: 'sidebar,advertisement,popup',
                        },
                        {
                            displayName: 'Excluded IDs',
                            name: 'excludedIds',
                            type: 'string',
                            default: '',
                            description: 'Comma-separated list of element IDs to exclude',
                            placeholder: 'header,footer,ads',
                        },
                        {
                            displayName: 'Only Main Content',
                            name: 'onlyMainContent',
                            type: 'boolean',
                            default: true,
                            description: 'Whether to extract only main content',
                        },
                        {
                            displayName: 'Remove Scripts',
                            name: 'removeScripts',
                            type: 'boolean',
                            default: true,
                            description: 'Whether to remove script tags',
                        },
                        {
                            displayName: 'JS Code',
                            name: 'jsCode',
                            type: 'json',
                            default: '[]',
                            description: 'JavaScript code to execute as array of commands',
                            placeholder: '[\n  "document.querySelector(\'button\').click();",\n  "await new Promise(resolve => setTimeout(resolve, 500));"\n]',
                        },
                        {
                            displayName: 'Screenshot',
                            name: 'screenshot',
                            type: 'boolean',
                            default: false,
                            description: 'Whether to take a screenshot',
                        },
                        {
                            displayName: 'Screenshot Wait (ms)',
                            name: 'screenshotWait',
                            type: 'number',
                            default: 1000,
                            description: 'Time to wait before taking screenshot',
                            displayOptions: {
                                show: {
                                    screenshot: [true],
                                },
                            },
                        },
                        {
                            displayName: 'PDF',
                            name: 'pdf',
                            type: 'boolean',
                            default: false,
                            description: 'Whether to generate PDF',
                        },
                        {
                            displayName: 'PDF Options',
                            name: 'pdfOptions',
                            type: 'json',
                            default: '{\n  "format": "A4",\n  "printBackground": true\n}',
                            description: 'PDF generation options as JSON',
                            displayOptions: {
                                show: {
                                    pdf: [true],
                                },
                            },
                        },
                        {
                            displayName: 'Process IFrames',
                            name: 'processIframes',
                            type: 'boolean',
                            default: false,
                            description: 'Whether to process content inside iframes',
                        },
                        {
                            displayName: 'Remove Forms',
                            name: 'removeForms',
                            type: 'boolean',
                            default: false,
                            description: 'Whether to remove form elements',
                        },
                        {
                            displayName: 'Media Handling',
                            name: 'mediaHandling',
                            type: 'options',
                            options: [
                                { name: 'Include', value: 'include' },
                                { name: 'Download', value: 'download' },
                                { name: 'Ignore', value: 'ignore' },
                            ],
                            default: 'include',
                            description: 'How to handle media files',
                        },
                        {
                            displayName: 'Link Handling',
                            name: 'linkHandling',
                            type: 'options',
                            options: [
                                { name: 'Absolute', value: 'absolute' },
                                { name: 'Relative', value: 'relative' },
                                { name: 'Remove', value: 'remove' },
                            ],
                            default: 'absolute',
                            description: 'How to handle links in content',
                        },
                        {
                            displayName: 'Raw Crawler Config (JSON)',
                            name: 'rawCrawlerConfig',
                            type: 'json',
                            default: '{}',
                            description: 'Additional crawler configuration as JSON (will be merged with above options)',
                        },
                    ],
                },
                // Extraction Strategy
                {
                    displayName: 'Extraction Strategy',
                    name: 'extractionStrategy',
                    type: 'options',
                    options: [
                        {
                            name: 'None',
                            value: 'none',
                            description: 'No structured extraction',
                        },
                        {
                            name: 'CSS Selector',
                            value: 'css',
                            description: 'Extract using CSS selectors',
                        },
                        {
                            name: 'XPath',
                            value: 'xpath',
                            description: 'Extract using XPath selectors',
                        },
                        {
                            name: 'LLM Extraction',
                            value: 'llm',
                            description: 'Extract using LLM',
                        },
                        {
                            name: 'JSON-LD',
                            value: 'jsonld',
                            description: 'Extract JSON-LD structured data',
                        },
                        {
                            name: 'Custom',
                            value: 'custom',
                            description: 'Use raw extraction strategy JSON',
                        },
                    ],
                    default: 'none',
                    description: 'Strategy for structured data extraction',
                },
                // Base Selector for CSS
                {
                    displayName: 'Base Selector',
                    name: 'baseSelector',
                    type: 'string',
                    default: '',
                    description: 'Base CSS selector for all field extractions',
                    placeholder: 'div.main-content',
                    displayOptions: {
                        show: {
                            extractionStrategy: ['css'],
                        },
                    },
                },
                // CSS Extraction Options
                {
                    displayName: 'CSS Selectors',
                    name: 'cssSelectors',
                    type: 'fixedCollection',
                    typeOptions: {
                        multipleValues: true,
                    },
                    default: {},
                    options: [
                        {
                            name: 'selector',
                            displayName: 'Selector',
                            values: [
                                {
                                    displayName: 'Name',
                                    name: 'name',
                                    type: 'string',
                                    default: '',
                                    description: 'Field name',
                                },
                                {
                                    displayName: 'Selector',
                                    name: 'selector',
                                    type: 'string',
                                    default: '',
                                    description: 'CSS selector',
                                },
                                {
                                    displayName: 'Type',
                                    name: 'type',
                                    type: 'options',
                                    options: [
                                        {
                                            name: 'Text',
                                            value: 'text',
                                        },
                                        {
                                            name: 'Attribute',
                                            value: 'attribute',
                                        },
                                        {
                                            name: 'HTML',
                                            value: 'html',
                                        },
                                        {
                                            name: 'Nested List',
                                            value: 'nested_list',
                                        },
                                    ],
                                    default: 'text',
                                    description: 'Type of data to extract',
                                },
                                {
                                    displayName: 'Attribute',
                                    name: 'attribute',
                                    type: 'string',
                                    default: 'href',
                                    description: 'Attribute to extract (for attribute type)',
                                    displayOptions: {
                                        show: {
                                            type: ['attribute'],
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                    displayOptions: {
                        show: {
                            extractionStrategy: ['css'],
                        },
                    },
                },
                // XPath Extraction Options
                {
                    displayName: 'XPath Selectors',
                    name: 'xpathSelectors',
                    type: 'fixedCollection',
                    typeOptions: {
                        multipleValues: true,
                    },
                    default: {},
                    options: [
                        {
                            name: 'selector',
                            displayName: 'Selector',
                            values: [
                                {
                                    displayName: 'Name',
                                    name: 'name',
                                    type: 'string',
                                    default: '',
                                    description: 'Field name',
                                },
                                {
                                    displayName: 'XPath',
                                    name: 'xpath',
                                    type: 'string',
                                    default: '',
                                    description: 'XPath expression',
                                },
                                {
                                    displayName: 'Attribute',
                                    name: 'attribute',
                                    type: 'string',
                                    default: 'text',
                                    description: 'Attribute to extract',
                                },
                                {
                                    displayName: 'Multiple',
                                    name: 'multiple',
                                    type: 'boolean',
                                    default: false,
                                    description: 'Whether to extract multiple elements',
                                },
                            ],
                        },
                    ],
                    displayOptions: {
                        show: {
                            extractionStrategy: ['xpath'],
                        },
                    },
                },
                // LLM Extraction Options
                {
                    displayName: 'LLM Options',
                    name: 'llmOptions',
                    type: 'collection',
                    placeholder: 'Add LLM Option',
                    default: {},
                    displayOptions: {
                        show: {
                            extractionStrategy: ['llm'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Provider',
                            name: 'provider',
                            type: 'options',
                            options: [
                                { name: 'OpenAI', value: 'openai' },
                                { name: 'Claude', value: 'claude' },
                                { name: 'Custom', value: 'custom' },
                            ],
                            default: 'openai',
                            description: 'LLM provider to use',
                        },
                        {
                            displayName: 'Model',
                            name: 'model',
                            type: 'string',
                            default: 'gpt-4',
                            description: 'Model to use for extraction',
                        },
                        {
                            displayName: 'Prompt',
                            name: 'prompt',
                            type: 'string',
                            typeOptions: {
                                rows: 4,
                            },
                            default: '',
                            description: 'Extraction prompt',
                        },
                        {
                            displayName: 'Schema',
                            name: 'schema',
                            type: 'json',
                            default: '{}',
                            description: 'Expected output schema as JSON',
                        },
                        {
                            displayName: 'Temperature',
                            name: 'temperature',
                            type: 'number',
                            typeOptions: {
                                minValue: 0,
                                maxValue: 2,
                                numberStepSize: 0.1,
                            },
                            default: 0.7,
                            description: 'Temperature for LLM generation',
                        },
                    ],
                },
                // Custom Extraction Strategy Options
                {
                    displayName: 'Extraction Strategy JSON',
                    name: 'customExtractionStrategy',
                    type: 'json',
                    default: '{}',
                    description: 'Complete extraction strategy configuration as JSON',
                    placeholder: '{\n  "type": "JsonCssExtractionStrategy",\n  "params": {\n    "schema": {\n      ...\n    }\n  }\n}',
                    displayOptions: {
                        show: {
                            extractionStrategy: ['custom'],
                        },
                    },
                },
                // Raw Extraction Strategy Override (for CSS/XPath/LLM)
                {
                    displayName: 'Raw Extraction Strategy (JSON)',
                    name: 'rawExtractionStrategy',
                    type: 'json',
                    default: '{}',
                    description: 'Raw extraction strategy configuration as JSON (will override above settings)',
                    displayOptions: {
                        show: {
                            extractionStrategy: ['css', 'xpath', 'llm'],
                        },
                    },
                },
                // Advanced Options
                {
                    displayName: 'Advanced Options',
                    name: 'advancedOptions',
                    type: 'collection',
                    placeholder: 'Add Advanced Option',
                    default: {},
                    options: [
                        {
                            displayName: 'Session ID',
                            name: 'sessionId',
                            type: 'string',
                            default: '',
                            description: 'Session ID for maintaining state across requests',
                        },
                        {
                            displayName: 'Cache',
                            name: 'cache',
                            type: 'boolean',
                            default: false,
                            description: 'Whether to use cached results',
                        },
                        {
                            displayName: 'Force Refresh',
                            name: 'forceRefresh',
                            type: 'boolean',
                            default: false,
                            description: 'Whether to force refresh cached content',
                        },
                        {
                            displayName: 'Proxy',
                            name: 'proxy',
                            type: 'string',
                            default: '',
                            description: 'Proxy URL to use',
                        },
                        {
                            displayName: 'Custom JavaScript',
                            name: 'customJs',
                            type: 'string',
                            typeOptions: {
                                rows: 4,
                            },
                            default: '',
                            description: 'Custom JavaScript to execute on page',
                        },
                        {
                            displayName: 'Wait After Load',
                            name: 'waitAfterLoad',
                            type: 'number',
                            default: 0,
                            description: 'Time to wait after page load (ms)',
                        },
                    ],
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const credentials = await this.getCredentials('crawl4AIApi');
        for (let i = 0; i < items.length; i++) {
            try {
                const operation = this.getNodeParameter('operation', i);
                const outputFormats = this.getNodeParameter('outputFormat', i);
                // Get URLs based on operation type
                let urlsToProcess = [];
                if (operation === 'crawl') {
                    const url = this.getNodeParameter('url', i);
                    urlsToProcess = [url];
                }
                else if (operation === 'batchCrawl') {
                    const urlsInput = this.getNodeParameter('urls', i);
                    // Split by newlines or commas, trim whitespace, and filter empty strings
                    urlsToProcess = urlsInput
                        .split(/[\n,]+/)
                        .map(url => url.trim())
                        .filter(url => url.length > 0);
                }
                // Build browser configuration
                const browserOptions = this.getNodeParameter('browserOptions', i);
                const rawBrowserConfig = browserOptions.rawBrowserConfig ? JSON.parse(browserOptions.rawBrowserConfig) : {};
                const browserConfig = {
                    headless: browserOptions.headless !== false,
                    ...rawBrowserConfig,
                };
                if (browserOptions.userAgent) {
                    browserConfig.user_agent = browserOptions.userAgent;
                }
                if (browserOptions.waitFor) {
                    browserConfig.wait_for = browserOptions.waitFor;
                }
                if (browserOptions.pageTimeout) {
                    browserConfig.timeout = browserOptions.pageTimeout;
                }
                if (browserOptions.jsEnabled === false) {
                    browserConfig.javascript_enabled = false;
                }
                if (browserOptions.extraHeaders) {
                    browserConfig.extra_headers = JSON.parse(browserOptions.extraHeaders);
                }
                if (browserOptions.cookies) {
                    browserConfig.cookies = JSON.parse(browserOptions.cookies);
                }
                if (browserOptions.blockResources?.length > 0) {
                    browserConfig.block_resources = browserOptions.blockResources;
                }
                // Build crawler configuration
                const crawlerOptions = this.getNodeParameter('crawlerOptions', i);
                const rawCrawlerConfig = crawlerOptions.rawCrawlerConfig ? JSON.parse(crawlerOptions.rawCrawlerConfig) : {};
                const crawlerConfig = {
                    ...rawCrawlerConfig,
                };
                // Only add parameters if they are explicitly set
                if (crawlerOptions.cacheMode) {
                    crawlerConfig.cache_mode = crawlerOptions.cacheMode;
                }
                if (crawlerOptions.wordCountThreshold !== undefined) {
                    crawlerConfig.word_count_threshold = crawlerOptions.wordCountThreshold;
                }
                if (crawlerOptions.onlyMainContent !== undefined) {
                    crawlerConfig.only_main_content = crawlerOptions.onlyMainContent;
                }
                if (crawlerOptions.removeScripts !== undefined) {
                    crawlerConfig.remove_scripts = crawlerOptions.removeScripts;
                }
                if (crawlerOptions.excludedTags) {
                    crawlerConfig.excluded_tags = crawlerOptions.excludedTags.split(',').map((tag) => tag.trim());
                }
                if (crawlerOptions.excludedClasses) {
                    crawlerConfig.excluded_classes = crawlerOptions.excludedClasses.split(',').map((cls) => cls.trim());
                }
                if (crawlerOptions.excludedIds) {
                    crawlerConfig.excluded_ids = crawlerOptions.excludedIds.split(',').map((id) => id.trim());
                }
                if (crawlerOptions.processIframes !== undefined) {
                    crawlerConfig.process_iframes = crawlerOptions.processIframes;
                }
                if (crawlerOptions.removeForms !== undefined) {
                    crawlerConfig.remove_forms = crawlerOptions.removeForms;
                }
                if (crawlerOptions.mediaHandling) {
                    crawlerConfig.media_handling = crawlerOptions.mediaHandling;
                }
                if (crawlerOptions.linkHandling) {
                    crawlerConfig.link_handling = crawlerOptions.linkHandling;
                }
                // Handle JS Code - must be an array for the API
                if (crawlerOptions.jsCode) {
                    try {
                        const jsCodeArray = JSON.parse(crawlerOptions.jsCode);
                        if (Array.isArray(jsCodeArray)) {
                            crawlerConfig.js_code = jsCodeArray;
                        }
                    }
                    catch (e) {
                        // If JSON parse fails, treat as single command
                        crawlerConfig.js_code = [crawlerOptions.jsCode];
                    }
                }
                // Handle screenshot and PDF
                if (crawlerOptions.screenshot || outputFormats.includes('screenshot')) {
                    crawlerConfig.screenshot = true;
                    if (crawlerOptions.screenshotWait) {
                        crawlerConfig.screenshot_wait = crawlerOptions.screenshotWait;
                    }
                }
                if (crawlerOptions.pdf || outputFormats.includes('pdf')) {
                    crawlerConfig.pdf = true;
                    if (crawlerOptions.pdfOptions) {
                        crawlerConfig.pdf_options = JSON.parse(crawlerOptions.pdfOptions);
                    }
                }
                if (outputFormats.includes('mhtml')) {
                    crawlerConfig.mhtml = true;
                }
                // Build extraction strategy
                const extractionStrategy = this.getNodeParameter('extractionStrategy', i);
                let extraction = null;
                if (extractionStrategy !== 'none') {
                    const rawExtractionStrategy = this.getNodeParameter('rawExtractionStrategy', i, '{}');
                    const rawExtraction = rawExtractionStrategy ? JSON.parse(rawExtractionStrategy) : {};
                    switch (extractionStrategy) {
                        case 'css':
                            const baseSelector = this.getNodeParameter('baseSelector', i, '');
                            const cssSelectors = this.getNodeParameter('cssSelectors', i);
                            // If raw extraction strategy is provided, use it entirely
                            if (Object.keys(rawExtraction).length > 0) {
                                extraction = rawExtraction;
                            }
                            else {
                                // Build from UI inputs
                                const fields = cssSelectors.selector || [];
                                extraction = {
                                    type: 'JsonCssExtractionStrategy',
                                    params: {
                                        schema: {
                                            type: 'dict',
                                            value: {
                                                ...(baseSelector ? { baseSelector } : {}),
                                                fields: fields.map((field) => ({
                                                    name: field.name,
                                                    selector: field.selector,
                                                    type: field.type || 'text',
                                                    ...(field.attribute && field.type === 'attribute' ? { attribute: field.attribute } : {}),
                                                })),
                                            },
                                        },
                                    },
                                };
                            }
                            break;
                        case 'xpath':
                            const xpathSelectors = this.getNodeParameter('xpathSelectors', i);
                            extraction = {
                                type: 'xpath',
                                selectors: xpathSelectors.selector || [],
                                ...rawExtraction,
                            };
                            break;
                        case 'llm':
                            const llmOptions = this.getNodeParameter('llmOptions', i);
                            extraction = {
                                type: 'llm',
                                provider: llmOptions.provider,
                                model: llmOptions.model,
                                prompt: llmOptions.prompt,
                                schema: llmOptions.schema ? JSON.parse(llmOptions.schema) : undefined,
                                temperature: llmOptions.temperature,
                                ...rawExtraction,
                            };
                            break;
                        case 'custom':
                            const customExtractionStrategy = this.getNodeParameter('customExtractionStrategy', i);
                            extraction = JSON.parse(customExtractionStrategy);
                            break;
                        case 'jsonld':
                            extraction = {
                                type: 'jsonld',
                                ...rawExtraction,
                            };
                            break;
                    }
                    if (extraction) {
                        crawlerConfig.extraction_strategy = extraction;
                    }
                }
                // Build advanced options
                const advancedOptions = this.getNodeParameter('advancedOptions', i);
                if (advancedOptions.sessionId) {
                    crawlerConfig.session_id = advancedOptions.sessionId;
                }
                if (advancedOptions.cache) {
                    crawlerConfig.cache = true;
                }
                if (advancedOptions.forceRefresh) {
                    crawlerConfig.force_refresh = true;
                }
                if (advancedOptions.proxy) {
                    browserConfig.proxy = advancedOptions.proxy;
                }
                if (advancedOptions.customJs) {
                    crawlerConfig.js = advancedOptions.customJs;
                }
                if (advancedOptions.waitAfterLoad) {
                    crawlerConfig.wait_after_load = advancedOptions.waitAfterLoad;
                }
                // Prepare request body
                const body = {
                    urls: urlsToProcess,
                    crawler_config: {
                        type: 'CrawlerRunConfig',
                        params: crawlerConfig,
                    },
                    browser_config: {
                        type: 'BrowserConfig',
                        params: browserConfig,
                    },
                };
                // Add LLM configuration if needed
                if (extractionStrategy === 'llm' && credentials.llmApiKey) {
                    body.llm_params = {
                        api_key: credentials.llmApiKey,
                        // Add other LLM params as needed
                    };
                }
                // Make the request
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64'),
                    },
                    body: JSON.stringify(body),
                    uri: `${credentials.baseUrl}/crawl`,
                    json: false,
                    timeout: 120000, // 2 minutes timeout
                };
                console.log('Request to Crawl4AI:', options.uri);
                console.log('Request body:', JSON.stringify(body, null, 2));
                const response = await this.helpers.request(options);
                const result = JSON.parse(response);
                console.log('Crawl4AI Response structure:', JSON.stringify(Object.keys(result), null, 2));
                if (result.results && result.results.length > 0) {
                    console.log('First result keys:', JSON.stringify(Object.keys(result.results[0]), null, 2));
                }
                // Process results based on selected output formats
                if (result.results) {
                    const results = Array.isArray(result.results) ? result.results : [result.results];
                    for (const crawlResult of results) {
                        const outputData = {
                            url: crawlResult.url || urlsToProcess[0],
                        };
                        // Add requested outputs
                        if (outputFormats.includes('markdown') && crawlResult.markdown) {
                            outputData.markdown = crawlResult.markdown;
                        }
                        if (outputFormats.includes('html') && crawlResult.html) {
                            outputData.html = crawlResult.html;
                        }
                        if (outputFormats.includes('cleaned_html') && crawlResult.cleaned_html) {
                            outputData.cleaned_html = crawlResult.cleaned_html;
                        }
                        if (outputFormats.includes('extracted_content') && crawlResult.extracted_content) {
                            outputData.extracted_content = crawlResult.extracted_content;
                        }
                        if (outputFormats.includes('metadata') && crawlResult.metadata) {
                            outputData.metadata = crawlResult.metadata;
                        }
                        if (outputFormats.includes('links') && crawlResult.links) {
                            outputData.links = crawlResult.links;
                        }
                        if (outputFormats.includes('media') && crawlResult.media) {
                            outputData.media = crawlResult.media;
                        }
                        if (outputFormats.includes('screenshot') && crawlResult.screenshot !== undefined) {
                            outputData.screenshot = crawlResult.screenshot;
                        }
                        if (outputFormats.includes('pdf') && crawlResult.pdf !== undefined) {
                            outputData.pdf = crawlResult.pdf;
                        }
                        if (outputFormats.includes('mhtml') && crawlResult.mhtml !== undefined) {
                            outputData.mhtml = crawlResult.mhtml;
                        }
                        if (outputFormats.includes('response_headers') && crawlResult.response_headers) {
                            outputData.response_headers = crawlResult.response_headers;
                        }
                        if (outputFormats.includes('js_execution_result') && crawlResult.js_execution_result) {
                            outputData.js_execution_result = crawlResult.js_execution_result;
                        }
                        if (outputFormats.includes('error_message') && crawlResult.error_message !== undefined) {
                            outputData.error_message = crawlResult.error_message;
                        }
                        returnData.push({
                            json: outputData,
                            pairedItem: { item: i },
                        });
                    }
                }
                else if (result) {
                    // If the response structure is different, try to handle it
                    returnData.push({
                        json: result,
                        pairedItem: { item: i },
                    });
                }
            }
            catch (error) {
                console.error('Crawl4AI Error:', error);
                if (this.continueOnFail()) {
                    // Fixed: Get operation safely for error reporting
                    let errorUrl = 'Unknown URL';
                    try {
                        const op = this.getNodeParameter('operation', i);
                        errorUrl = op === 'crawl' ? this.getNodeParameter('url', i) : 'Multiple URLs';
                    }
                    catch (e) {
                        // If we can't get parameters, use default
                    }
                    returnData.push({
                        json: {
                            error: error instanceof Error ? error.message : 'Unknown error occurred',
                            url: errorUrl,
                            details: error instanceof Error ? error.toString() : JSON.stringify(error),
                        },
                        pairedItem: { item: i },
                    });
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
module.exports = { Crawl4aiCustom };
//# sourceMappingURL=Crawl4aiCustom.node.js.map