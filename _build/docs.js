'use strict';

require('shelljs/global');

rm('-rf','docs');
mkdir('docs');

cp('-R', 'boi-docs/_book/assets/*','assets');
cp('-R', 'boi-docs/_book/styles/*','css');
cp('-R','boi-docs/_book/docs/*','docs');
cp('-R','boi-docs/_book/gitbook/','gitbook');
cp('-f','boi-docs/_book/index.html','_includes/doc.html');
cp('-f','boi-docs/_book/search_index.json','docs/search_index.json');

sed('-i', 'gitbook/','/gitbook/','_includes/doc.html');
sed('-i', 'docs/','/docs/','_includes/doc.html');
sed('-i', 'assets/','/assets/','_includes/doc.html');
sed('-i', 'styles/','/css/','_includes/doc.html');
sed('-i', 'https://cdnjs.cloudflare.com/ajax/libs/URI.js/1.16.1/URI.min.js','/js/libs/URI.min.js','_includes/doc.html');

ls('docs/*.html').forEach((file)=>{
  sed('-i', 'gitbook/','/gitbook/',file);
  sed('-i', 'docs/','/docs/',file);
  sed('-i', 'assets/','/assets/',file);
  sed('-i', 'styles/','/css/',file);
  sed('-i', 'https://cdnjs.cloudflare.com/ajax/libs/URI.js/1.16.1/URI.min.js','/js/libs/URI.min.js',file);
});
