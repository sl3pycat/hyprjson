hypr.execute = function Exec(options){
  //executes a set value if it exists
  Object.keys(hypr.sets).forEach(entry=>options[entry]?hypr.sets[entry][options[entry]](options):"")
}