#!/bin/sh
wrap=`cat < src/wrap.js`
java com.google.javascript.jscomp.CommandLineRunner --js src/jspreadsheet.js --js_output_file src/jspreadsheet.min.js --output_wrapper "$wrap"
