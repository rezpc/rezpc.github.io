//Filename:  java_util.js
//Written By: Ryan Martinez
//Description:  Various javascript methods for passing and
//   receiving information through query strings

//Functions available:
//   queryField(fieldname)
//   plustospace(string)
//   linkWithQuery(url, txt)




// Function name:  queryField(fieldname)
// Description:  Extracts a specific field from a query string
// Notes:  The query string has the form: ?<fldname>=<value>&<fldname>=<value>
function queryField(opt)
{
  var keyloc
  var nextkey
  var start
  var opts
  var optval
  
  opts=location.search
  keyloc = opts.indexOf("&" + opt + "=")

  if(keyloc == -1) {
    keyloc = opts.indexOf("?" + opt + "=")
  }
  if (keyloc == -1) {
    return ""
  } 

  nextkey = opts.indexOf("&",keyloc+1)  

  if (nextkey == -1) {
    nextkey = opts.length
  }

  if (nextkey < keyloc) {
    return ""
  }  
  sval = keyloc+2+opt.length
  optval = plustospace(unescape(opts.substring(sval,nextkey)))
  return optval
} //End of queryField()




// Function name:  plustospace(string)
// Description:  Converts all the plus signs in a string to spaces.
// Notes:  none
function plustospace(txt)
{
  if (txt == "") { return txt }
  
  var newtxt=""
  var pos=0
  var prev=0
  var done=false

  while (!done) {
    pos = txt.indexOf("+",prev)
    if (prev >= txt.length) {
      done = true
    }
    else if (pos == 0) {
      prev=1
      newtxt += " "
    }
    else if ((pos < 0) || (pos == "")) {
      done = true
    }
    else {
      if (pos>prev) { newtxt += txt.substring(prev,pos) }
      newtxt += " "
      prev=pos+1
    }
  }
  newtxt += txt.substring(prev,txt.length)
  return newtxt  
}  // End of plustospace()






// Function name:  linkWithQuery(url, txt)
// Description:  Creates link while passing current query
// Notes:  none
function linkWithQuery(url,txt)
{
   return "<a href=\"" + url + location.search + "\">" + txt + "</a>"
}