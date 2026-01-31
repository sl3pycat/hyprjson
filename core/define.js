//CREATES DEFINITIONS FOR SETS
hypr.define = function(options={}){
  //checks if a set type exists then saves it if it does
  Object.keys(hypr.sets).forEach(entry=>options[entry]?hypr.sets[entry][options[entry]]=options.value:"")
}