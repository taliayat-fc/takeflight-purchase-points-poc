# TakeFlight Purchase Points POC

## Overview

This repository demonstrates an end-to-end workflow for converting Figma designs into production code using Claude Desktop with MCP (Model Context Protocol) integrations.

## Workflow

```
Figma Design → Claude Desktop (Figma MCP) → Generated Code → GitHub (GitHub MCP) → Staging → Production
```

## Components

This POC includes the TakeFlight design system components:

- **Button** - Primary, secondary, and other variants
- **Typography** - Heading and body text styles
- **Container** - Layout wrapper with responsive breakpoints
- **InputText** - Form input fields

## Design System

See `docs/design-system.md` for complete component documentation and design tokens.

## Getting Started

```bash
npm install
npm run dev
```

## Screens

1. **Purchase Points** - Select points amount with slider
2. **Checkout** - Payment form and confirmation
3. **Success** - Purchase confirmation

## Tech Stack

- React + TypeScript
- Vite
- TakeFlight Design System
- React Router

## Workflow Tools

- **Figma MCP** - Direct design integration
- **GitHub MCP** - Automated code pushes and PR creation
- **Claude Desktop** - AI-powered code generation

---

**Created using Claude Desktop with Figma and GitHub MCP integration** 🚀
