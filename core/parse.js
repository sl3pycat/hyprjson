hypr.parse = function Parse(json, target){
  //parses a json object or insert it into the target
  if(typeof json === "object" && json !== null){
    if(Array.isArray(json))json.forEach(entry=>hypr.parse_item(entry,target))
    else hypr.parse_item(json,target)
  } else target.innerText = String(json)
}