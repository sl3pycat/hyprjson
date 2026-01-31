window.onload = function(){
  //when app is ready execute the entry json.
  const initial_json = JSON.parse(hypr.manifest.entry_script)
  hypr.parse(initial_json,document.body)
  //bench how fast hypr initiated
  console.timeEnd("HyprJSON")
}