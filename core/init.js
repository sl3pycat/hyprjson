console.time("HyprJSON")
window.hypr = {
  //build version
  version:0.0
}

/**@docs Core
 * #### Manifest
 * Add these to the hyprjson script tag:
 * Key | Value | Description
 * --- | --- | ---
 * import | StringList | A space seperated list that imports script tags into the app.
 * 
 * example:
 * ```html
 * <script src="path/to/hyprjson.min.js" import="/index.js https://example.com/example.js"></script>
 * ```
 **/
//get app manifest into a single object for convenience
hypr.manifest = Object.fromEntries(Array.from(document.currentScript.attributes).map(attr => [attr.name, attr.value]))
//imports scripts into the app
if(hypr.manifest.import)hypr.manifest.import.split(" ").filter(entry=>entry).forEach(entry=>{
  const script = document.createElement("script")
  script.src = entry
  script.async = false
  document.head.appendChild(script)
})

//TODO: at manifest add title support