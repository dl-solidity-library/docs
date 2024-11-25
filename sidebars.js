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
const fs = require("fs");
const path = "reference/contracts/";
const dirs = fs.readdirSync("docs/" + path);

const categories = () => {
  const categoryArray = [];
  for (const dir of dirs) {
    if (dir !== "mock") {
      if (dir.includes(".")) {
        const fileName = dir.split(".")[0];
        categoryArray.push({
          type: "doc",
          label: fileName,
          id: path + fileName,
        });
      } else {
        categoryArray.push({
          type: "category",
          label: dir,
          items: [
            {
              type: "autogenerated",
              dirName: path + dir,
            },
          ],
        });
      }
    }
  }

  return categoryArray;
};

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docGettingStarted: [
    "getting-started/Overview",
    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "category",
          label: "Access",
          items: [{ type: "autogenerated", dirName: "getting-started/guides/access" }],
        },
        {
          type: "category",
          label: "Contracts Registry",
          items: [{ type: "autogenerated", dirName: "getting-started/guides/contracts-registry" }],
        },
        {
          type: "category",
          label: "Diamond",
          items: [{ type: "autogenerated", dirName: "getting-started/guides/diamond" }],
        },
        {
          type: "category",
          label: "Finance",
          items: [
            {
              type: "category",
              label: "Compound Rate Keeper",
              items: [{ type: "autogenerated", dirName: "getting-started/guides/finance/compound-rate-keeper" }],
            },
            {
              type: "category",
              label: "Staking",
              items: [{ type: "autogenerated", dirName: "getting-started/guides/finance/staking" }],
            },
            {
              type: "category",
              label: "Vesting",
              items: [{ type: "autogenerated", dirName: "getting-started/guides/finance/vesting" }],
            },
          ],
        },
        {
          type: "category",
          label: "Libs",
          items: [
            {
              type: "category",
              label: "Arrays",
              items: [{ type: "autogenerated", dirName: "getting-started/guides/libs/arrays" }],
            },
            {
              type: "category",
              label: "Crypto",
              items: [{ type: "autogenerated", dirName: "getting-started/guides/libs/crypto" }],
            },
            {
              type: "category",
              label: "Data Structures",
              items: [{ type: "autogenerated", dirName: "getting-started/guides/libs/data-structures" }],
            },
            {
              type: "category",
              label: "Utils",
              items: [{ type: "autogenerated", dirName: "getting-started/guides/libs/utils" }],
            },
            {
              type: "category",
              label: "ZK Proofs",
              items: [{ type: "autogenerated", dirName: "getting-started/guides/libs/zkp" }],
            },
          ],
        },
        {
          type: "category",
          label: "Oracles",
          items: [{ type: "autogenerated", dirName: "getting-started/guides/oracles" }],
        },
        {
          type: "category",
          label: "Proxy",
          items: [{ type: "autogenerated", dirName: "getting-started/guides/proxy" }],
        },
        {
          type: "category",
          label: "Tokens",
          items: [{ type: "autogenerated", dirName: "getting-started/guides/tokens" }],
        },
        {
          type: "category",
          label: "Utils",
          items: [{ type: "autogenerated", dirName: "getting-started/guides/utils" }],
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Contribution",
      items: [{ type: "autogenerated", dirName: "getting-started/contribution" }],
    },
  ],
  docReference: ["reference/Overview", ...categories()],
};

module.exports = sidebars;
