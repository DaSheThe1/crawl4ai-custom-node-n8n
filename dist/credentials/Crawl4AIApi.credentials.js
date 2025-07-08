"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Crawl4AIApi {
    constructor() {
        this.name = 'crawl4AIApi';
        this.displayName = 'Crawl4AI API';
        this.documentationUrl = 'https://docs.crawl4ai.com';
        this.properties = [
            {
                displayName: 'Base URL',
                name: 'baseUrl',
                type: 'string',
                default: 'http://localhost:8080',
                placeholder: 'http://localhost:8080',
                description: 'The base URL of your Crawl4AI instance',
                required: true,
            },
            {
                displayName: 'Username',
                name: 'username',
                type: 'string',
                default: '',
                placeholder: 'admin',
                description: 'Username for basic authentication',
                required: true,
            },
            {
                displayName: 'Password',
                name: 'password',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                description: 'Password for basic authentication',
                required: true,
            },
            {
                displayName: 'LLM API Key',
                name: 'llmApiKey',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                description: 'API key for LLM extraction (optional - only needed if using LLM extraction)',
                required: false,
            },
            {
                displayName: 'LLM Provider',
                name: 'llmProvider',
                type: 'options',
                options: [
                    {
                        name: 'OpenAI',
                        value: 'openai',
                    },
                    {
                        name: 'Claude',
                        value: 'claude',
                    },
                    {
                        name: 'Custom',
                        value: 'custom',
                    },
                ],
                default: 'openai',
                description: 'LLM provider for extraction features',
            },
        ];
    }
}
module.exports = { Crawl4AIApi };
//# sourceMappingURL=Crawl4AIApi.credentials.js.map