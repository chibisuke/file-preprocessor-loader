#File-Preprocessor-loader

a Webpack loader that uses file-preprocessor (C++ like preprocessor syntax) to allow various scripts to be preprocessed before being added to webpack.

Please Note: this does NOT WORK for typescript files in angular 6/7, since @ngtools/webpack doesn't play nice with other loaders, disobeying the rules for webpack loaders.
To make use of file-preprocessor in typescript, there is a patch for @ngtools/webpack that can be applied by the npm module patch-packets in the GIT repositotory here: 
https://github.com/chibisuke/file-preprocessor/blob/master/patches/%40ngtools%2Bwebpack%2B7.3.8.patch

