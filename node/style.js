hypr.define({
  secondary:"style",
  value:(options)=>{
    //setting style bulk
    if(options.extension === undefined)options.target.setAttribute("style",options.value)
    //setting style one by one
    else options.target.style[options.extension] = options.value
  }
})

/**@docs Node
 * ### Styles
 * Styles can be set in bulk or one by one:
 * ```json
 * {
 *  "style":"color:blue;background:red",
 *  "style.color":"blue",
 *  "style.background":"red"
 * }
 * ```
 **/