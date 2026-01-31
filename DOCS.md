# ⚡ HyprJSON API Documentation

*Last Sync: 2026-01-31 02:42:52*

## 📌 Navigation
- [Core](#core)
- [Node](#node)

---
## Core
**Source File:** `./core/init.js`

#### Manifest
Add these to the hyprjson script tag:
Key | Value | Description
--- | --- | ---
import | StringList | A space seperated list that imports script tags into the app.
example:
```html
<script src="path/to/hyprjson.min.js" import="/index.js https://example.com/example.js"></script>
```

---
## Node
**Source File:** `./node/misc.js`

Some misc code

---
**Source File:** `./node/misc.js`

@name: PinkButton
@type: Component
@params: { text: "string", onClick: "function" }
@example: { "type": "button", "text": "Click Me" }
@desc: Renders a standard HyprJSON button using #e91e63.

---
