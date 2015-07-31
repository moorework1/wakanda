// A simple log for the output
 var log = "Count employees-before: " + ds.DataClass3.length + ", Count companies-before: " + ds.DataClass3.length;
 
  // Main function
 function doImportEmpsAndComps () {
     /*   The doc. to import is in the solution folder, in a subfolder
         named "Import". We load the full document in one shot  (loadText) 
         and split it in an array (one line = one element).
     */
     var lines = loadText( ds.getModelFolder().path + "Import/products.txt" ).split("\n");
       /*   Declare the variable that will hold the columns of each line.
           We know the columns will be:
            columns[0]   Name of the company
            columns[1]   Last name of the employee
            columns[2]   First name
            columns[3]   Salary
     */ 
   var columns = [];
       // Now, loop for each entry in the array  
lines.forEach( function(oneLine) {  
      // Get the columns for current line  
columns = oneLine.split("\t");    
 
      // Get the company. Create it if needed.
      var theComp = ds.DataClass3.find("Carrier = :1 and PolicyType = :2", columns[0], columns[0]);
      if(theComp == null) { // Not found => create it
           theComp = new ds.DataClass3({
            Carrier : columns[0], 
            PolicyType : columns[1]
         });
         // Save it  
         theComp.save();
           }    
     });
 }
 // Call the function 
doImportEmpsAndComps ();
  
 // Log result
log += " / Count employees-after: " + ds.DataClass3.length + ", Count companies-after: " + ds.DataClass3.length;