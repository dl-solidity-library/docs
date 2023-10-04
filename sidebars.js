/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const fs = require('fs');
const path = "reference/contracts/";
const dirs = fs.readdirSync("docs/"+path);

const categories = () => {
  const categoryArray = [];
  for (const dir of dirs) {
      if (dir !== "mock") {
          if (dir.includes(".")){
              const fileName = dir.split(".")[0];
              categoryArray.push({
                  type: 'doc',
                  label: fileName,
                  id: path + fileName,
              })
          } else {
              categoryArray.push(
                  {
                      type: "category",
                      label: dir,
                      items: [{
                          type: "autogenerated",
                          dirName: path + dir
                      }]
                  }
              );
          }
      }
  }


  return categoryArray;
}


const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],


  // But you can create a sidebar manually

    docGettingStarted: [{type: 'autogenerated', dirName: 'getting-started'}],
    docReference: categories(),

};

module.exports = sidebars;
