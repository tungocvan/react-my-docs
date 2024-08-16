/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const TANSTACK_QUERY_COUNT = 12;
let items=[];
for (var i = 0; i < TANSTACK_QUERY_COUNT; i++) {
  items.push('tanstack-query/tanstack-query-' + ('0' + (i + 1)).slice(-2));
}
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure  
  tutorialSidebar: [
    { type: "autogenerated", dirName: "tutorial" },    
  ],
  htmlSidebar: [    
    {
      type: "category",
      label: "HTML / CSS",
      items: ["html-css/tai-lieu-tham-khao-hoc-html-css-co-ban"],
    },
    {
      type: "category",
      label: "HTML / TREE",
      items: ["html-tree/layout-1", "html-tree/layout-2"],
    },   
    {
      type: "category",
      label: "Javascript",
      items: [
        "javascript/js-02-01",
        "javascript/js-02-02",
        "javascript/js-02-03",
        "javascript/js-02-04",
        "javascript/js-04-06",
        "javascript/js-04-08",
        "javascript/js-04-09",
        "javascript/js-04-10",
        "javascript/js-04-11",
      ],
    },
    {
      type: "category",
      label: "Tanstack Query2",
      items: items,
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
