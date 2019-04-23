#File-Preprocessor-loader

a Webpack loader that uses file-preprocessor (C++ like preprocessor syntax) to allow various scripts to be preprocessed before being added to webpack.

Please Note: this does NOT WORK for typescript files in angular 6/7, since @ngtools/webpack doesn't play nice with other loaders, disobeying the rules for webpack loaders.


