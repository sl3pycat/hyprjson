console.time("HyprJSON")
window.hypr = {
  //build version
  version:0.0,
  sets:{
    primary:{},
    secondary:{},
    func:{},
    var:{},
    const:{},
    rule:{}
  }
}

/**@docs Core
 * ### Manifest
 * These are optional tags on the main script that helps define the app:
 * Key | Value | Description
 * --- | --- | ---
 * import | StringList | A space seperated list that imports script tags into the app.
 * 
 * 
 * example:
 * ```html
 * <script src="path/to/hyprjson.min.js" import="/index.js https://example.com/example.js"></script>
 * ```
 **/
//get app manifest into a single object for convenience
hypr.manifest = Object.fromEntries(Array.from(document.currentScript.attributes).map(attr => [attr.name, attr.value]))
//store the entry json script
//TODO: test if entry script should be innerText or innerHTML, which one preserves more data.
hypr.manifest.entry_script = document.currentScript.innerText
//imports scripts into the app
if(hypr.manifest.import)hypr.manifest.import.split(" ").filter(entry=>entry).forEach(entry=>{
  const script = document.createElement("script")
  script.src = entry
  script.async = false
  document.head.appendChild(script)
})