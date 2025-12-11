# TakeFlight Designer Workflow Guide
## Figma to Production in Minutes

This guide documents the complete end-to-end workflow for converting Figma designs into production-ready code using Claude Desktop with MCP integrations.

---

## 🎯 Workflow Overview

```
Figma Design 
    ↓ (Figma MCP)
Claude Desktop generates code
    ↓ (GitHub MCP)
Pushed to GitHub + PR created
    ↓ (Developer Review)
Approved & merged
    ↓ (Vercel Auto-deploy)
Live in Production
```

**Time:** Design to live site in **< 10 minutes**

---

## 📋 Prerequisites

### Required Tools

1. **Figma Desktop App** - Download from figma.com/downloads
2. **Claude Desktop** - Your AI coding assistant
3. **GitHub Account** - For version control
4. **Vercel Account** - For deployment (free tier)

### Required Setup (One-Time)

See full setup instructions in the artifact above or visit:
- Figma MCP: https://developers.figma.com/docs/figma-mcp-server/
- GitHub MCP: https://github.com/github/github-mcp-server

---

## 🚀 Quick Start

### The 5-Step Process

1. **Design** - Create in Figma using TakeFlight components
2. **Generate** - Ask Claude to implement (upload design-system.md)
3. **Review** - Check code in artifact preview
4. **Push** - Claude pushes to GitHub automatically
5. **Deploy** - Vercel auto-deploys on merge

### Example Command

```
"I've uploaded my design system. Implement this Figma design 
using TakeFlight components: [paste Figma link]"
```

Claude will:
- Extract design specs
- Generate code
- Use your components
- Show preview

Then:
```
"Push this to my repo as src/pages/NewScreen.tsx 
on branch feature/new-screen"
```

---

## 📝 Real Example

**Purchase Points Flow POC:**
- 3 screens generated in 15 minutes
- Live site: https://takeflight-purchase-points-7hi0ijp1x-talias-projects-608e7f0d.vercel.app/
- Full design system compliance
- **Traditional method: 2-3 days → Now: 15 minutes**

---

## 🎨 Best Practices

1. Keep `design-system.md` updated
2. Review code before pushing
3. Use meaningful branch names
4. Test preview URLs before merging
5. Collect metrics to prove value

---

## 🔧 Troubleshooting

**Claude can't access Figma?**
- Ensure Figma Desktop app is running
- Check MCP server enabled in Figma preferences

**Push to GitHub failed?**
- Verify GitHub token is valid
- Check token has `repo` scope

**Vercel deployment failed?**
- Check build logs for specific errors
- Ensure all dependencies in package.json

---

## 📊 Success Metrics

Track these to measure impact:
- ⏱️ Time savings (design → production)
- 🎯 Design system compliance rate
- 👥 Designer adoption rate
- 📈 Screens shipped per sprint

---

**For complete documentation, see `docs/WORKFLOW.md` in this repository**

**Questions?** Open an issue or ask in #design-systems channel
