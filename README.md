# n8n-nodes-crawl4ai

This is an n8n community node that provides integration with Crawl4AI for advanced web scraping and AI-powered content extraction.

## Features

- 🌐 **Web Crawling**: Single page and batch crawling capabilities
- 🎯 **Multiple Extraction Strategies**: CSS selectors, XPath, LLM-based extraction, JSON-LD, and custom schemas
- 🔧 **Flexible Configuration**: UI options with JSON override capability for advanced users
- 📊 **Multiple Output Formats**: Markdown, HTML, extracted content, metadata, links, media, and screenshots
- 🤖 **AI-Powered**: Integrated LLM support for intelligent content extraction
- ⚡ **Performance Options**: Resource blocking, headless mode, custom JavaScript execution
- 🔐 **Authentication**: Basic auth and LLM API key support

## Installation

### Local Development

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the node:
   ```bash
   npm run build
   ```
4. Copy the built files to your n8n custom nodes directory:
   ```bash
   # Create custom nodes directory if it doesn't exist
   mkdir -p ~/.n8n/custom/nodes
   
   # Copy the built node
   cp -r dist/* ~/.n8n/custom/nodes/
   ```
5. Restart n8n

### Docker Installation

If you're running n8n in Docker, mount the custom nodes directory:

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  -v /path/to/n8n-nodes-crawl4ai/dist:/home/node/.n8n/custom/nodes/n8n-nodes-crawl4ai \
  n8nio/n8n
```

## Directory Structure

Create the following directory structure:

```
n8n-nodes-crawl4ai/
├── src/
│   ├── nodes/
│   │   └── Crawl4AI/
│   │       └── Crawl4AI.node.ts
│   ├── credentials/
│   │   └── Crawl4AIApi.credentials.ts
│   └── icons/
│       └── crawl4ai.svg
├── package.json
├── tsconfig.json
└── README.md
```

## Configuration

### Credentials

1. In n8n, go to Credentials
2. Create new "Crawl4AI API" credentials
3. Configure:
   - **Base URL**: Your Crawl4AI instance URL (e.g., `http://localhost:8000`)
   - **Username**: Basic auth username
   - **Password**: Basic auth password
   - **LLM API Key**: (Optional) API key for LLM extraction features
   - **LLM Provider**: OpenAI, Claude, or Custom

### Node Options

#### Basic Configuration
- **URL**: Target URL to crawl
- **Operation**: Single crawl or batch crawl
- **Output Format**: Select which data to return (markdown, HTML, extracted content, etc.)

#### Browser Options
- UI controls for common settings (headless, user agent, timeouts)
- Raw JSON field for advanced browser configuration

#### Crawler Options
- Content filtering options (word count threshold, excluded tags)
- Media and link handling
- Raw JSON field for advanced crawler configuration

#### Extraction Strategy
- **None**: Basic crawling without extraction
- **CSS**: Extract using CSS selectors
- **XPath**: Extract using XPath expressions
- **LLM**: AI-powered extraction with custom prompts
- **JSON-LD**: Extract structured data
- **Schema**: Custom schema-based extraction

Each extraction method includes a raw JSON field for advanced configuration.

## Usage Examples

### Basic Web Crawling
```json
{
  "url": "https://example.com",
  "outputFormat": ["markdown", "metadata"]
}
```

### CSS Selector Extraction
```json
{
  "url": "https://example.com",
  "extractionStrategy": "css",
  "cssSelectors": [
    {
      "name": "title",
      "selector": "h1",
      "attribute": "text"
    },
    {
      "name": "links",
      "selector": "a",
      "attribute": "href",
      "multiple": true
    }
  ]
}
```

### LLM Extraction with Schema
```json
{
  "url": "https://example.com",
  "extractionStrategy": "llm",
  "llmOptions": {
    "provider": "openai",
    "model": "gpt-4",
    "prompt": "Extract product information from this page",
    "schema": {
      "type": "object",
      "properties": {
        "productName": { "type": "string" },
        "price": { "type": "number" },
        "description": { "type": "string" }
      }
    }
  }
}
```

### Advanced Configuration with Raw JSON
```json
{
  "url": "https://example.com",
  "browserOptions": {
    "headless": true,
    "rawBrowserConfig": {
      "viewport": { "width": 1920, "height": 1080 },
      "userAgent": "Custom User Agent"
    }
  },
  "crawlerOptions": {
    "rawCrawlerConfig": {
      "scroll": true,
      "scrollDistance": 1000,
      "scrollDelay": 500
    }
  }
}
```

## Development

### Building
```bash
npm run build
```

### Watch Mode
```bash
npm run dev
```

### Linting
```bash
npm run lint
npm run lintfix
```

## Troubleshooting

### Common Issues

1. **Timeout Error**: The original repos had issues with timeout parameters. This version fixes that by properly handling the timeout in the browser configuration.

2. **Viewport Issue**: The viewport configuration issue from the second repo is fixed by properly structuring the browser parameters.

3. **Authentication Failed**: Ensure your Crawl4AI instance is running and the credentials are correct.

4. **LLM Extraction Not Working**: Make sure you've added the LLM API key in the credentials.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
