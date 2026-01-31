hypr.parse_item = function Parse(item, target){
  
  //sets the targets attributes as default action when no matching secondary sets are found.
  Object.keys(item).forEach(entry=>{
    entry = entry.split(".")
    //checks if a secondary set exists, then executes it
    if(hypr.sets.secondary[entry[0]])hypr.execute({secondary:entry[0],value:item[entry.join(".")],extension:entry[1],item,target})
    //else sets it as a normal attribute
    else target.setAttribute(entry[0],item[entry.join(".")])
    
  })
}