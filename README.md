# n8n-nodes-crawl4ai-custom

<p align="center">
  <img src="https://raw.githubusercontent.com/yourusername/n8n-nodes-crawl4ai-custom/main/src/icons/crawl4ai.svg" alt="Crawl4AI Logo" width="120">
</p>

<p align="center">
  <strong>A powerful n8n custom node for Crawl4AI web scraping with AI-powered extraction</strong>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#features">Features</a> •
  <a href="#usage">Usage</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#examples">Examples</a> •
  <a href="#support">Support</a>
</p>

## 🚀 Overview

This custom n8n node integrates [Crawl4AI](https://github.com/unclecode/crawl4ai) directly into your n8n workflows, providing a user-friendly interface for advanced web scraping and AI-powered content extraction without writing complex HTTP requests.

### Why Use This Node?

- ✅ **No Code Required**: Visual interface for complex web scraping configurations
- ✅ **AI-Powered**: Built-in support for LLM-based content extraction
- ✅ **Flexible**: Multiple extraction strategies (CSS, XPath, LLM, JSON-LD)
- ✅ **Efficient**: Batch processing and smart caching capabilities
- ✅ **Production-Ready**: Error handling, retries, and session management

## 📦 Installation

### Prerequisites

- n8n (v1.0.0 or higher)
- Crawl4AI instance running (local or remote)
- Docker (optional, for containerized setup)

### Install via npm

```bash
# Navigate to your n8n custom nodes directory
cd ~/.n8n/nodes

# Install the package
npm install n8n-nodes-crawl4ai-custom
```

### Install from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/n8n-nodes-crawl4ai-custom.git
cd n8n-nodes-crawl4ai-custom

# Install dependencies
npm install

# Build the node
npm run build

# Copy to n8n custom nodes
cp -r . ~/.n8n/nodes/node_modules/n8n-nodes-crawl4ai-custom
```

### Docker Installation

```bash
# For n8n Docker containers
docker cp ./n8n-nodes-crawl4ai-custom n8n-container:/home/node/.n8n/nodes/node_modules/
docker restart n8n-container
```

## ✨ Features

### 🎯 Core Capabilities

- **Single & Batch Crawling**: Process one or multiple URLs in a single operation
- **Smart Extraction**: CSS selectors, XPath, LLM-powered, and JSON-LD extraction
- **Browser Control**: Headless mode, custom user agents, JavaScript execution
- **Content Processing**: Exclude elements, filter content, handle media
- **Output Formats**: Markdown, HTML, structured data, screenshots, PDFs

### 🛠️ Advanced Features

- **JavaScript Injection**: Execute custom JS code on pages
- **Session Management**: Maintain state across requests
- **Proxy Support**: Route requests through proxy servers
- **Cache Control**: Smart caching for efficient re-crawling
- **Resource Blocking**: Improve performance by blocking unnecessary resources

## 📖 Usage

### Basic Web Scraping

1. Add the **Crawl4AI Custom** node to your workflow
2. Configure credentials (Crawl4AI server URL and authentication)
3. Set the operation type (Crawl or Batch Crawl)
4. Enter your target URL(s)
5. Select output formats
6. Execute the node

### Structured Data Extraction

1. Choose an extraction strategy (CSS, XPath, LLM, etc.)
2. Configure extraction rules:
   - **CSS**: Define selectors and field mappings
   - **LLM**: Set prompt and expected schema
   - **XPath**: Specify XPath expressions
3. Map extracted data to your workflow

## ⚙️ Configuration

### Credentials Setup

```javascript
{
  "baseUrl": "http://localhost:8080",  // Your Crawl4AI instance
  "username": "admin",                  // Basic auth username
  "password": "password",               // Basic auth password
  "llmApiKey": "sk-...",               // Optional: For LLM extraction
  "llmProvider": "openai"              // Optional: LLM provider
}
```

### Node Options

#### Browser Configuration
- Headless mode control
- Custom user agents
- Page timeouts
- Resource blocking
- Cookie management

#### Crawler Options
- Cache strategies
- Content filtering
- JavaScript execution
- Screenshot/PDF generation
- Media handling

#### Extraction Strategies
- CSS selectors with nested support
- XPath expressions
- LLM-powered extraction
- JSON-LD parsing
- Custom JSON strategies

## 📚 Examples

### Example 1: Extract Product Information

```json
{
  "operation": "crawl",
  "url": "https://example-shop.com/product",
  "extractionStrategy": "css",
  "cssSelectors": {
    "selector": [
      {
        "name": "title",
        "selector": "h1.product-title",
        "type": "text"
      },
      {
        "name": "price",
        "selector": ".price-tag",
        "type": "text"
      },
      {
        "name": "image",
        "selector": ".product-image img",
        "type": "attribute",
        "attribute": "src"
      }
    ]
  }
}
```

### Example 2: AI-Powered Review Extraction

```json
{
  "operation": "crawl",
  "extractionStrategy": "llm",
  "llmOptions": {
    "provider": "openai",
    "model": "gpt-4",
    "prompt": "Extract all customer reviews with ratings",
    "schema": {
      "reviews": [{
        "rating": "number",
        "author": "string",
        "content": "string",
        "date": "string"
      }]
    }
  }
}
```

### Example 3: Batch Processing with JavaScript

```json
{
  "operation": "batchCrawl",
  "urls": "url1.com\nurl2.com\nurl3.com",
  "crawlerOptions": {
    "jsCode": [
      "window.scrollTo(0, document.body.scrollHeight);",
      "await new Promise(r => setTimeout(r, 2000));"
    ]
  }
}
```

## 🔧 Development

### Building from Source

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Format code
npm run format
```

### Project Structure

```
├── src/
│   ├── nodes/           # Node implementation
│   ├── credentials/     # Credential definitions
│   └── icons/          # Node icons
├── package.json
├── tsconfig.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Crawl4AI](https://github.com/unclecode/crawl4ai) - The powerful crawling and extraction engine
- [n8n](https://n8n.io) - The workflow automation platform
- All contributors who have helped improve this node

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/n8n-nodes-crawl4ai-custom/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/n8n-nodes-crawl4ai-custom/discussions)
- **Documentation**: [Wiki](https://github.com/yourusername/n8n-nodes-crawl4ai-custom/wiki)

## 🔗 Links

- [Crawl4AI Documentation](https://docs.crawl4ai.com)
- [n8n Documentation](https://docs.n8n.io)
- [Example Workflows](https://github.com/yourusername/n8n-crawl4ai-workflows)

---

Made with ❤️ for the n8n community
