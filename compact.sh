# compact.sh
# Compact webGraphEd files into one .js, then is minified.

# 1. Compile Closure Library
CALCDEPS_PATH=./external/closure-library/closure/bin  
JAR_PATH=./external/closure-compiler           
CLOSURE_PATH=./external/closure-library    
$CALCDEPS_PATH/calcdeps.py \
    --path $CLOSURE_PATH \
    --path . \
    --compiler_jar $JAR_PATH/compiler.jar \
    --input lib/closure-requires.js \
    --output_mode compiled \
    > temp/closure.min.js

# 2. Concatenate all JavaScript files and minify them
cat \
    external/d3/d3.v3.min.js \
    external/jquery/jquery-2.1.0.min.js \
    external/FileSaver/FileSaver.js \
    external/jQuery-Impromptu/dist/jquery-impromptu.min.js \
    lib/global.js \
    lib/utils.js \
    lib/debug.js \
    lib/benchmark.js \
    lib/dom_utils.js \
    lib/file_utils.js \
    lib/math_utils.js \
    lib/string_utils.js \
    core/gml_file.js \
    core/graphml_file.js \
    core/json2.js \
    core/graph_drawing.js \
    core/tree.js \
    layout/layout.js \
    layout/custom-layout.js \
    layout/force-directed.js \
    layout/radial-tree.js \
    layout/horizontal-tree.js \
    layout/vertical-tree.js \
    temp/closure.min.js \
    > temp/webGraphEd.js
java -jar $JAR_PATH/compiler.jar --js=temp/webGraphEd.js --js_output_file=webGraphEd.min.js

# 3. Concatenate all CSS files and minify them
cat \
    external/closure-library/closure/goog/css/common.css \
    external/closure-library/closure/goog/demos/css/demo.css \
    external/closure-library/closure/goog/css/menu.css \
    external/closure-library/closure/goog/css/menubar.css \
    external/closure-library/closure/goog/css/menubutton.css \
    external/closure-library/closure/goog/css/menuitem.css \
    external/closure-library/closure/goog/css/menuseparator.css \
    external/closure-library/closure/goog/css/dialog.css \
    external/closure-library/closure/goog/css/checkbox.css \
    external/jQuery-Impromptu/dist/themes/base.css \
    css/webGraphEd.css \
    > temp/webGraphEd.css
#jsmin < temp/webGraphEd.css > webGraphEd.min.css


