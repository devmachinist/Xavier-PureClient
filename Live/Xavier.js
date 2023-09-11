(async function(){   class COMPONENTS {
constructor(data){
this.Title = "Xavier | A new frame";
this.Route = '/';
this.ShouldRender = true;
this.Name = "Components";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "07ae690c-0fd1-4f23-8397-b909fe143b1b";
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 
    var hw = Documentation.HelloWorld().then(r => {return r});
    console.log(hw);
    window.hw = hw;
     `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`9f0c8641-83fb-45fb-a9dc-daed599f5dd4${elCount}`].InnerHTML = body;
//  window[`9f0c8641-83fb-45fb-a9dc-daed599f5dd4${elCount}`].Render(window[`9f0c8641-83fb-45fb-a9dc-daed599f5dd4${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`@page
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Xavier | Components<\/title>
  <link rel="stylesheet" href="\/css\/dist\/Site.css" \/>
  <link rel="stylesheet" href="\/css\/fontello\/fontello-330f88e4\/css\/fontello.css">
  <link rel="stylesheet" href="\/css\/site.css">
<\/head>

<body class="bg-gray-100 scrollbar">
    <xnav id="MainNav"
          logo=".\/favicon-96x96.png"
          home="\/"
          name="avier" titlestyle="font-family:cursive; font:1.8em #00F"
          fg="white" bg="#3A3F58"
          menubg="#3A3F58"
          class="top-0 w-screen fixed left-0 flex mx-0 z-[3001]"><\/xnav>


  <div class="container mx-auto mt-24 px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Creating Xavier Components<\/h1>
    <p class="mb-4">Xavier components are the building blocks of your web application. They combine HTML markup, CSS styles, and dynamic behavior to create reusable and modular UI elements. In Xavier, each component consists of two files:<\/p>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Xavier Component (*.xavier):<\/strong> The markup file that defines the structure and appearance of the component.<\/li>
      <li><strong>Code Behind (*.xavier.cs):<\/strong> The code file that contains the logic and behavior of the component.<\/li>
    <\/ul>

    <h2 class="text-2xl font-bold mb-4">Defining Xavier Components<\/h2>
    <p class="mb-4">To create a Xavier component:<\/p>
    <ol class="list-decimal list-inside mb-6">
      <li>Create a new file with the extension <code>.xavier<\/code> and give it a meaningful name. This file will contain the HTML markup and Xavier-specific syntax.<\/li>
      <li>Create a corresponding code-behind file with the extension <code>.xavier.cs<\/code>. This file will contain the C# code that defines the component's behavior and properties.<\/li>
    <\/ol>

    <h2 class="text-2xl font-bold mb-4">Xavier Component Structure<\/h2>
    <p class="mb-4">A Xavier component typically follows this structure:<\/p>
    <div class="bg-white rounded-lg p-4 shadow mb-6">
      <pre class="text-sm"><code>&lt;!-- MyComponent.xavier --&gt;
&lt;template&gt;
  &lt;div class="my-component"&gt;
    &lt;h2&gt;${this.Title}&lt;\/h2&gt;
    &lt;p&gt;${this.Description}&lt;\/p&gt;
  &lt;\/div&gt;
&lt;\/template&gt;<\/code><\/pre>
    <\/div>
    <div class="bg-white text-sm whitespace-pre overflow-x-auto rounded-lg p-4 shadow mb-6">
      \/\/ MyComponent.xavier.cs<br\/>
public class MyComponent : XavierNode { 
    public string Title { get; set; } = "Default Title";    
    public string Description { get; set; } = "Default Description";
    new public bool? ShouldRender { get; set; } = true;

    public MyComponent(){
        \/\/Standard Contructor
    }
    public MyComponent(XavierNode x){
        \/\/Both Constructors must be included
    }
}
    <\/div>

    <h2 class="text-2xl font-bold mb-4">Accessing Attributes in the Template<\/h2>
    <p class="mb-4">To access the component's attributes in the template, use the syntax <code>${this.Attribute}<\/code>. For example, <code>${this.Title}<\/code> and <code>${this.Description}<\/code> in the above code snippet.<\/p>

    <h

2 class="text-2xl font-bold mb-4">Overriding the ShouldRender Property<\/h2>
    <p class="mb-4">To control the rendering behavior of your component in JavaScript, you can override the <code>ShouldRender<\/code> property. This property determines whether the component should render or not.<\/p>
    <div class="bg-white whitespace-pre overflow-x-auto text-sm rounded-lg p-4 shadow mb-6">
      new public bool? ShouldRender { get; set; } = true;
    <\/div>

    <p class="mb-4">By default, the <code>ShouldRender<\/code> property is set to <code>true<\/code>, indicating that the component should render. You can modify this property to control when the component should update its rendering.<\/p>

    <p class="mb-4">Remember that you can override other properties and add additional properties and methods to customize the behavior and functionality of your Xavier components.<\/p>

  <\/div>

    

    <script src="Xavier.js" type="module" async="" >
    <\/script >
  <\/body>
<\/html>`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 
    var hw = Documentation.HelloWorld().then(r => {return r});
    console.log(hw);
    window.hw = hw;
     `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new COMPONENTS()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new COMPONENTS(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('components');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class DOCUMENTATION {
constructor(data){
this.Title = "Xavier | Documentation";
this.Route = '/';
this.ShouldRender = true;
this.Name = "Documentation";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "2fadf9de-535a-4898-8b41-35db36841e27";
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 
    var hw = Documentation.HelloWorld().then(r => {return r});
    console.log(hw);
    window.hw = hw;
     `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`80fde0a2-e864-4e95-88fa-5f85bc0dbf30${elCount}`].InnerHTML = body;
//  window[`80fde0a2-e864-4e95-88fa-5f85bc0dbf30${elCount}`].Render(window[`80fde0a2-e864-4e95-88fa-5f85bc0dbf30${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`@page
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Xavier Framework Documentation<\/title>
  <link rel="stylesheet" href="\/css\/dist\/Site.css" \/>
  <link rel="stylesheet" href="\/css\/fontello\/fontello-330f88e4\/css\/fontello.css">
  <link rel="stylesheet" href="\/css\/site.css">

  <style>
    \/* Custom styles for the documentation page *\/
section{
  padding-top:6rem;

}
    .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.25rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
}

ul,
ol {
  margin-bottom: 1.5rem;
}
code {
  background-color: #34365F;
  color: #CDF;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

pre code {
  display: block;
  overflow-x: auto;
  padding: 1rem;
  background-color: #34365F;
  border-radius: 0.5rem;
  line-height: 1.5;
}

.highlight {
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 0.5rem;
}

.section-title {
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
}

.section-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.section-content {
  margin-bottom: 2rem;
}

.code-snippet {
  margin-bottom: 1.5rem;
}

.api-method {
  margin-bottom: 2rem;
}

.api-method-name {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.api-method-description {
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
}

.api-method-example {
  font-size: 1.125rem;
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 0.5rem;
}
<\/style>
<\/head>

<body>
    <xnav id="MainNav"
          logo=".\/favicon-96x96.png"
          home="\/"
          logoshade="0px 0px 12px #00F"
          name="avier" titlestyle="font-family:cursive; font:1.8em #00F"
          fg="black" bg="white"
          menubg="#FFF"
          class="top-0 w-screen fixed left-0 flex mx-0 z-[3001]"><\/xnav>

<div class="flex min-h-full mt-24 flex-col">
  <div class="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
    <aside class="sticky top-24 hidden w-44 shrink-0 lg:block">
      <!-- Left column area -->
      <nav class="flex flex-1 flex-col" aria-label="Sidebar">
  <ul role="list" class="-mx-2 space-y-1">
    <li>
      <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
      <a href="#getting-started" class="bg-gray-50 text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
        <svg class="h-6 w-6 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" \/>
        <\/svg>
        Getting Started
      <\/a>
    <\/li>
    <li>
      <a href="#Memory" class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
        <svg class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" \/>
        <\/svg>
        Xavier.Memory
      <\/a>
    <\/li>
    <li>
      <a href="#AOT" class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
        <svg class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" \/>
        <\/svg>
        AOT
      <\/a>
    <\/li>
  <\/ul>
<\/nav>

    <\/aside>

    <main class="flex-1">
      <!-- Main area -->
<section id="getting-started">
      <h2 class="section-title">Getting Started<\/h2>
      <p class="section-content">Follow these steps to get started with the Xavier Framework:<\/p>
      <ol class="list-decimal space-y-2 list-inside section-content">
        <li><strong>Installation:<\/strong> Install the Xavier Framework package from NuGet or add it to your project manually.<\/li>
        <li><strong>Setup:<\/strong> Configure the Xavier Framework in your project by adding the <code>&lt;script src="Xavier.js" type="module" async=""&gt;
    &lt;\/script&gt;<\/code> to the index.html at the end of the body.<\/li>
        <li><strong>Component Creation:<\/strong> Create Xavier components by extending the base XavierComponent class and adding the required logic and markup.<\/li>
        <li><strong>Enable SSR:<\/strong> Add the <code>&#64;page<\/code> directive to the first line of your Xavier component to enable server-side rendering.<\/li>
        <li><strong>Static Fallback:<\/strong> Set the static fallback using the <code>Xavier.Memory.StaticFallback<\/code> property to specify the fallback HTML file.<\/li>
        <li><strong>Include Ssr Component:<\/strong> Register the <code>CustomNode<\/code> component in the dependency injection container using <code>builder.Services.AddScoped&lt;CustomNode&gt;()<\/code>.<\/li>
        <li><strong>Map XavierNodes:<\/strong> Use the <code>app.MapXavierNodes({controller}\/{action=index}\/{id}<\/code> method to map your SSR XavierNodes to their respective controllers.<\/li>
        <li><strong>REST API Interoperability:<\/strong> Utilize the <code>EngineController<\/code> to expose public methods of your Xavier component as API endpoints.<\/li>
        <li><strong>Customization and Debugging:<\/strong> Use the browser's developer tools to inspect and customize the included script for your Xavier SSR page.<\/li>
      <\/ol>
      <p class="section-content">By following these steps, you'll be able to leverage the power of the Xavier Framework and build performant and futuristic web applications with ease.<\/p>
    <\/section>
   <section id="Memory">
  <h2 class="section-title">Xavier.Memory<\/h2>
  <p class="section-content">The <code>Xavier.Memory<\/code> namespace is the core pipe for the Xavier Framework:<\/p>
  
  <h3 class="section-subtitle">Initialization<\/h3>
  <p class="section-content">With <code>Xavier.Memory<\/code>, you'll need to initialize your Xavier app in your program.cs file for production like so...
  <code class="whitespace-pre">await memory.Init(root, destination, assembly)
<\/code><\/p>
  
  <p class="section-content">By utilizing the features provided by <code>Xavier.Memory<\/code>, you can optimize memory usage, improve application performance, and enhance user experience in your Xavier-based applications.<\/p>
<\/section>
<section id="AOT">
  <h2 class="section-title">Devmachinist.Xavier.AOT<\/h2>
  <p class="section-content">The <code>Devmachinist.Xavier.AOT<\/code> package in the Xavier Framework enables Ahead-of-Time (AOT) compilation during development. AOT compilation can provide performance benefits by pre-compiling your Xavier components and optimizing them for faster execution. Here's what you need to know about <code>Devmachinist.Xavier.AOT<\/code>:<\/p>
  
  <h3 class="section-subtitle">Installation<\/h3>
  <p class="section-content">To use AOT compilation in your Xavier project, you need to install the <code>Devmachinist.Xavier.AOT<\/code> package. You can install it via NuGet or by adding it manually to your project references.<\/p>
  
  <h3 class="section-subtitle">AOT Compilation Process<\/h3>
  <p class="section-content">During development, when you build your Xavier project, the <code>Devmachinist.Xavier.AOT<\/code> replaces the <code>Xavier.Memory<\/code> initialization. It analyzes the specified Xavier components and generates optimized code ahead of time, reducing the overhead of runtime compilation.<\/p>
  
  <h3 class="section-subtitle">Benefits of AOT Compilation<\/h3>
  <p class="section-content">AOT compilation can offer several advantages and disadvantages for your Xavier application during development:<\/p>
  <ul class="list-disc list-inside section-content">
    <li><strong><span class="text-3xl text-green-300">+  <\/span>Improved Performance:<\/strong> AOT-compiled components are optimized for faster execution, leading to improved performance and reduced startup times.<\/li>
    <li><strong><span class="text-3xl text-red-400">-  <\/span>Excess Memory Usage:<\/strong> AOT-compiled components consume more memory compared to their runtime-compiled counterparts.<\/li>
    <li><strong><span class="text-3xl text-green-300">+  <\/span>Early Detection of Issues:<\/strong> AOT compilation can uncover potential issues and errors in your Xavier components at build time, allowing for quicker resolution.<\/li>
  <\/ul>
  
  <p class="section-content">By utilizing 
  <code class="whitespace-pre">await aot.Init(
    memory, root, destination, null, typeof(Program).Assembly
);
<\/code>, you can take advantage of AOT compilation during development to optimize the performance and efficiency of your Xavier application.<\/p>
<\/section>
    <\/main>

    <aside class="sticky top-8 hidden w-96 shrink-0 xl:block">
      <!-- Right column area -->

    <\/aside>
  <\/div>
<\/div>


    

    <script src="Xavier.js" type="module" async="" >
    <\/script >
  <\/body>
<\/html>`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 
    var hw = Documentation.HelloWorld().then(r => {return r});
    console.log(hw);
    window.hw = hw;
     `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new DOCUMENTATION()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new DOCUMENTATION(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('documentation');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class HOMEPAGE {
constructor(data){
this.Route = '';
this.ShouldRender = true;
this.Name = "Homepage";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "fbb9b061-3d37-47e2-9eb2-41ce4f2a6324";
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`4d72ac51-7596-466a-a095-c48ba9130e30${elCount}`].InnerHTML = body;
//  window[`4d72ac51-7596-466a-a095-c48ba9130e30${elCount}`].Render(window[`4d72ac51-7596-466a-a095-c48ba9130e30${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`
<div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-sans">
    <style>
        \/* Custom styles for this page *\/
        .xavier-logo {
            width: 150px;
            height: 150px;
        }

        .highlight {
            background-color: #ffed4a;
            padding: 2px 4px;
            border-radius: 2px;
        }
    <\/style>
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-32">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1\/2 text-center md:text-left">
                <h2 class="text-3xl font-extrabold mb-4">The Xavier Framework<\/h2>
              <h3>by DEVMACHINIST<\/h3>
              <br\/>
                <p class="text-2xl mb-8">Where code versatility lives.<\/p>
              <br\/>
                <a href="#get-started" class="bg-white hover:bg-blue-400 text-blue-800 hover:text-blue-200 mt-10 font-bold py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">Get Started<\/a>
            <\/div>
            <div class="md:w-1\/2 mt-8 md:mt-0">
                <img src="images\/logo.png" alt="Xavier Framework" class="rounded-lg shadow-2xl">
            <\/div>
        <\/div>
    <\/section>
    <main class="container mx-auto py-8 px-4">
        <section class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-semibold text-gray-800 mb-4">Why Choose the Xavier Framework?<\/h2>
            <p class="text-lg text-gray-700">Tired of the web development language divide? Xavier Framework bridges the gap by allowing you to combine the power of <span class="highlight">C#<\/span>, <span class="highlight">Python<\/span>, and <span class="highlight">JavaScript<\/span> seamlessly in a single web application. Say goodbye to language constraints and embrace the future of web development.<\/p>
        <\/section>

        <section class="bg-blue-500 text-white p-8 mt-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-semibold mb-4">Key Features<\/h2>
            <ul class="list-disc list-inside text-lg">
                <li class="mb-2">🚀 **Versatile Language Support**: Xavier Framework supports C#, Python, and JavaScript, giving you the freedom to choose the right tool for the job.<\/li>
                <li class="mb-2">🔌 **Static Component Library**: Create reusable components that work seamlessly with React, Blazor, or as standalone elements.<\/li>
                <li class="mb-2">🌐 **Server-Side Rendering (SSR)**: Enhance performance and SEO with built-in SSR support for faster loading and better search engine visibility.<\/li>
                <li class="mb-2">🌟 **API Creation Helpers**: Simplify the creation of robust APIs for your web applications.<\/li>
                <li class="mb-2">🏷️ **Tag Helpers for Blazor**: Enjoy uninterrupted rendering in Blazor with Xavier's tag helpers.<\/li>
            <\/ul>
        <\/section>

        <section id="get-started" class="bg-white p-8 mt-24 rounded-lg shadow-lg">
            <h2 class="text-3xl font-semibold text-gray-800 mb-4">Getting Started with Xavier Framework<\/h2>
            <p class="text-lg text-gray-700">To harness the full potential of Xavier Framework, use these syntax markers:<\/p>
            <ul class="list-disc list-inside text-lg text-gray-600">
                <li class="mb-2">🖋️ **C#**: Wrap your C# code with <code class="bg-gray-200 p-1 rounded">x&#123; ... &#125;x<\/code> within your HTML.<\/li>
                <li class="mb-2">🎯 **JavaScript**: Enclose JavaScript code with double curly braces <code class="bg-gray-200 p-1 rounded">&#123;&#123; ... &#125;&#125;<\/code> in your HTML documents.<\/li>
                <li class="mb-2">🐍 **Python**: For Python integration, utilize <code class="bg-gray-200 p-1 rounded">py&#123; ... &#125;py<\/code> markers to embed Python code into your HTML.<\/li>
            <\/ul>
        <\/section>
    <\/main>
<\/div>


`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new HOMEPAGE()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new HOMEPAGE(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('homepage');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class SSR {
constructor(data){
this.Title = "Xavier | A new frame";
this.Route = '/';
this.Description = "How will we know when we\u0027ve reached the stars?";
this.ShouldRender = true;
this.Config = {"Id":"15b39414-b558-4751-8f21-14e4d867b8a4","RestURI":"window.location \u002B \u0027api/\u0027","Name":"Config","Request":"{\u0027id\u0027: \u0027556647\u0027,\u0027dir\u0027:\u0027dir\u0027}","Response":null};
this.item = "This is the item";
this.Name = "Ssr";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "18dbf72c-6d99-4a2c-8906-359e3d1d6f5e";
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 
    var hw = Ssr.HelloWorld().then(r => {return r});
    console.log(hw);
    window.hw = hw;
     `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`e416d46f-1325-42d3-ba3f-79e87d570772${elCount}`].InnerHTML = body;
//  window[`e416d46f-1325-42d3-ba3f-79e87d570772${elCount}`].Render(window[`e416d46f-1325-42d3-ba3f-79e87d570772${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`@page
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Xavier Framework's SSR Capabilities<\/title>
    <link rel="stylesheet" href="\/css\/dist\/Site.css" \/>
    <link rel="stylesheet" href="\/css\/fontello\/fontello-330f88e4\/css\/fontello.css">
    <link rel="stylesheet" href="\/css\/site.css">
    <link href="https:\/\/unpkg.com\/aos@2.3.1\/dist\/aos.css" rel="stylesheet">

  <style>
    \/* Custom styles for a futuristic look *\/
    body {
      background-color: #121212;
      color: #fff;
      font-family: 'Arial', sans-serif;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin-bottom: 1.5rem;
    }

    code {
      background-color: #2d2d2d;
      color: #f8f8f8;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }

    pre code {
      display: block;
      overflow-x: auto;
      padding: 1rem;
      background-color: #2d2d2d;
      border-radius: 0.5rem;
      line-height: 1.5;
    }

    .highlight {
      background-color: #212121;
      padding: 1rem;
      border-radius: 0.5rem;
    }

    .code-snippet {
      margin-bottom: 1.5rem;
    }
  <\/style>
<\/head>

<body class="scrollbar">
    <xnav id="MainNav"
          logo=".\/favicon-96x96.png"
          home="\/"
          name="Xavier" titlestyle="font-family:cursive; font:1.8em #FFF"
          fg="white" bg="#445"
          menubg="#334"
          menufg="#FFF"
          class="top-0 w-screen fixed left-0 flex mx-0 z-[3001]"><\/xnav>

  <div class="container mt-24">
    <h1>Xavier Framework's SSR Capabilities<\/h1>

    <p>The Xavier Framework provides powerful server-side rendering (SSR) capabilities, allowing you to enhance the performance and user experience of your web applications. With SSR, the initial rendering of your pages can be done on the server, providing faster loading times and improved search engine optimization (SEO).<\/p>

    <p>To enable SSR in Xavier, you need to add the <code>&#64;page<\/code> directive to the first line of the Xavier component. Additionally, you need to set the static fallback using the following code:<\/p>

    <div class="code-snippet">
      <pre><code>Xavier.Memory.StaticFallback = Environment.CurrentDirectory + "\/Live\/index.html";<\/code><\/pre>
    <\/div>

    <p>Next, include the page by adding the <code>Ssr<\/code> Xavier component:<\/p>

    <div class="code-snippet">
      <pre><code>builder.Services.AddScoped&lt;MyComponent&gt;();<\/code><\/pre>
    <\/div>

    <p>To map all your SSR XavierNodes to their controllers, use the following code:<\/p>

    <div class="code-snippet">
      <pre><code>app.MapXavierNodes("{controller=Home}\/{action=Index}\/{id?}", Environment.CurrentDirectory + "\/Pages");<\/code><\/pre>
    <\/div>

    <p>To add all the functionality to the page for faux C# interoperability via a REST API, you can use the <code>EngineController<\/code> included in the PureClient Example found on GitHub.<\/p>

    <p>Your controller should look like this:<\/p>

    <div class="code-snippet">
      <pre><code>public class SsrController : EngineController&lt;Ssr&gt;
{
    public Ssr Controller() 
    {
        \/\/ Controller initialization code here
    }
}<\/code><\/pre>
    <\/div>

    <p>This will add all public methods to the API, including getters and setters, allowing seamless integration with your Xavier SSR page.<\/p>

    <p>Remember to open up the developer tools and inspect the script that is included on the page for further customization and debugging.<\/p>

    <div class="highlight">
      <p>For more details and examples, please refer to the <a href="https:\/\/github.com\/example\/xavier-framework">Xavier Framework documentation on GitHub<\/a>.<\/p>
    <\/div>
  <\/div>

    

    <script src="Xavier.js" type="module" async="" >
    <\/script >
  <\/body>
<\/html>`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 
    var hw = Ssr.HelloWorld().then(r => {return r});
    console.log(hw);
    window.hw = hw;
     `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new SSR()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new SSR(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('ssr');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class AUTHCALLBACK {
constructor(data){
this.error = "{}";
this.Route = '';
this.ShouldRender = true;
this.Name = "AuthCallback";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "d4efb2a3-1452-48b9-b692-6b0146146ad9";
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 

var msal = window.msal;

await (async function(){
    try{
        if(window.location.pathname.indexOf('\/auth') == 0){
            console.log("this is the auth page");
            }
    }
    catch(ex){
        console.log(ex);
    }
\/\/ Create the main myMSALObj instance
\/\/ configuration parameters are located at authConfig.js
    var msalConfig = window.msalConfig;
    if(window.AuthService){
        var myMSALObj = window.AuthService;

        let username = "";

\/**
* A promise handler needs to be registered for handling the
* response returned from redirect flow. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/acquire-token.md
*\/
        myMSALObj.handleRedirectPromise()
        .then(handleResponse)
        .catch((error) => {
            console.error(error);
        });
    }
})();
function selectAccount () {
\/**
* See here for more info on account retrieval:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-common\/docs\/Accounts.md
*\/

    var currentAccounts = myMSALObj.getAllAccounts();
    if (currentAccounts.length === 0) {
        return;
    } else if (currentAccounts.length > 1) {
\/\/ Add your account choosing logic here
    console.warn("Multiple accounts detected.");
    } else if (currentAccounts.length === 1) {
        username = currentAccounts[0].username;
        showWelcomeMessage(username);
    }
}
function handleResponse(response) {
    if (response !== null) {
        username = response.account.username;
        showWelcomeMessage(username);
    } else {
        selectAccount();
    }
}

function signIn() {

\/**
* You can pass a custom request object below. This will override the initial configuration. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#request
*\/
myMSALObj.loginRedirect();
}

function signOut() {

\/**
* You can pass a custom request object below. This will override the initial configuration. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#request
*\/

var logoutRequest = {
account: myMSALObj.getAccountByUsername(username),
postLogoutRedirectUri: msalConfig.auth.redirectUri,
};

myMSALObj.logoutRedirect(logoutRequest);
}

function getTokenRedirect(request) {
\/**
* See here for more info on account retrieval:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-common\/docs\/Accounts.md
*\/
request.account = myMSALObj.getAccountByUsername(username);

return myMSALObj.acquireTokenSilent(request)
.catch(error => {
console.warn("silent token acquisition fails. acquiring token using redirect");
if (error instanceof msal.InteractionRequiredAuthError) {
\/\/ fallback to interaction when silent call fails
return myMSALObj.acquireTokenRedirect(request);
} else {
console.warn(error);
}
});
}

function seeProfile() {
getTokenRedirect(loginRequest)
.then(response => {
callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, updateUI);
}).catch(error => {
console.error(error);
});
}

function readMail() {
getTokenRedirect(tokenRequest)
.then(response => {
callMSGraph(graphConfig.graphMailEndpoint, response.accessToken, updateUI);
}).catch(error => {
console.error(error);
});
}
window.msal = msal;

 `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`32c70c48-bdad-44c7-bb36-6bc36904e2b4${elCount}`].InnerHTML = body;
//  window[`32c70c48-bdad-44c7-bb36-6bc36904e2b4${elCount}`].Render(window[`32c70c48-bdad-44c7-bb36-6bc36904e2b4${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',``);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 

var msal = window.msal;

await (async function(){
    try{
        if(window.location.pathname.indexOf('\/auth') == 0){
            console.log("this is the auth page");
            }
    }
    catch(ex){
        console.log(ex);
    }
\/\/ Create the main myMSALObj instance
\/\/ configuration parameters are located at authConfig.js
    var msalConfig = window.msalConfig;
    if(window.AuthService){
        var myMSALObj = window.AuthService;

        let username = "";

\/**
* A promise handler needs to be registered for handling the
* response returned from redirect flow. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/acquire-token.md
*\/
        myMSALObj.handleRedirectPromise()
        .then(handleResponse)
        .catch((error) => {
            console.error(error);
        });
    }
})();
function selectAccount () {
\/**
* See here for more info on account retrieval:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-common\/docs\/Accounts.md
*\/

    var currentAccounts = myMSALObj.getAllAccounts();
    if (currentAccounts.length === 0) {
        return;
    } else if (currentAccounts.length > 1) {
\/\/ Add your account choosing logic here
    console.warn("Multiple accounts detected.");
    } else if (currentAccounts.length === 1) {
        username = currentAccounts[0].username;
        showWelcomeMessage(username);
    }
}
function handleResponse(response) {
    if (response !== null) {
        username = response.account.username;
        showWelcomeMessage(username);
    } else {
        selectAccount();
    }
}

function signIn() {

\/**
* You can pass a custom request object below. This will override the initial configuration. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#request
*\/
myMSALObj.loginRedirect();
}

function signOut() {

\/**
* You can pass a custom request object below. This will override the initial configuration. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#request
*\/

var logoutRequest = {
account: myMSALObj.getAccountByUsername(username),
postLogoutRedirectUri: msalConfig.auth.redirectUri,
};

myMSALObj.logoutRedirect(logoutRequest);
}

function getTokenRedirect(request) {
\/**
* See here for more info on account retrieval:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-common\/docs\/Accounts.md
*\/
request.account = myMSALObj.getAccountByUsername(username);

return myMSALObj.acquireTokenSilent(request)
.catch(error => {
console.warn("silent token acquisition fails. acquiring token using redirect");
if (error instanceof msal.InteractionRequiredAuthError) {
\/\/ fallback to interaction when silent call fails
return myMSALObj.acquireTokenRedirect(request);
} else {
console.warn(error);
}
});
}

function seeProfile() {
getTokenRedirect(loginRequest)
.then(response => {
callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, updateUI);
}).catch(error => {
console.error(error);
});
}

function readMail() {
getTokenRedirect(tokenRequest)
.then(response => {
callMSGraph(graphConfig.graphMailEndpoint, response.accessToken, updateUI);
}).catch(error => {
console.error(error);
});
}
window.msal = msal;

 `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new AUTHCALLBACK()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new AUTHCALLBACK(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('authcallback');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class FORGOTPASSWORD {
constructor(data){
this.Input = null;
this.Name = "ForgotPassword";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "5cb3a400-8931-46e2-a7b3-7dd40bd8193a";
this.Route = '';
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.PyImports = "import json\n";
this.ShouldRender = true;
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`c67d9e1b-161e-4826-8db0-293f20be1b0d${elCount}`].InnerHTML = body;
//  window[`c67d9e1b-161e-4826-8db0-293f20be1b0d${elCount}`].Render(window[`c67d9e1b-161e-4826-8db0-293f20be1b0d${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`<div class="flex flex-col items-center h-full w-full m-0">
<h1 class="text-2xl font-bold">@ViewData["Title"]<\/h1>
<h4>Enter your email.<\/h4>
<hr \/>
<div class="flex flex-col w-full h-full space-y-4 m-0 items-center">
    <div class="w-[100%] h-[100%] space-y-4 py-10 m-0 bg-azure-100 flex flex-col items-center">
        <form class="flex flex-col h-[100%] w-full m-0 space-y-4 items-center" method="post">
            <div asp-validation-summary="All" class="text-danger"><\/div>
            <div class="form-group space-x-3 space-y-4">
                <label asp-for="Input.Email"><\/label>
                <input asp-for="Input.Email" class="form-control rounded-lg" \/>
                <span asp-validation-for="Input.Email" class="text-danger"><\/span>
            <\/div>
            <button type="submit" class="p-2 fixed mb-0 mr-[50%] ml-[50%] mb-10 rounded-xl bg-azure-800 hover:bg-azure-700 text-white">Submit<\/button>
        <\/form>
    <\/div>
<\/div>
<\/div>
`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new FORGOTPASSWORD()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new FORGOTPASSWORD(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('forgotpassword');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class LOGIN {
constructor(data){
this.ShouldRender = true;
this.Route = '/login';
this.Input = null;
this.ExternalLogins = 'null';
this.ReturnUrl = null;
this.ErrorMessage = null;
this.Name = "Login";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "503ee317-42d0-47a1-b79b-b3bcfc4a2635";
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`1d150bd3-3503-4ace-8f10-93efbe1508d0${elCount}`].InnerHTML = body;
//  window[`1d150bd3-3503-4ace-8f10-93efbe1508d0${elCount}`].Render(window[`1d150bd3-3503-4ace-8f10-93efbe1508d0${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`
<div class="flex flex-col md:flex-row items-center align-self-center z-0 pt-10 w-screen">
    <div class="flex flex-col md:w-1\/2 items-center pt-4">
        <section class="rounded-2xl z-0
            animate-fadein flex-col elevation-2 m-5 
            bg-white pt-5 p-10 md:p-20">
              
              <form id="account" class="flex flex-col items-center text-azure-50">
                <div  class="text-redribbon-400"><\/div>
                <div class="flex flex-col items-center form-group">
                    <label class="icon-user-circle elevation-5 rounded-full m-3 text-azure-600"><\/label>
                    <input autocomplete="username" class=" p-2 transitions ease-in-out bg-white text-brandgray-800 elevation-2
                                                        focus:outline-none focus:ring-2 focus:ring-azure-300
                          rounded-xl" \/>
                <\/div>
                <div class="flex flex-col items-center form-group">
                    <label class="icon-key text-yellow-500 stroke-brandgray-700 m-3 mb-1"><\/label>
                    <input type="password" name="password" autocomplete="current-password"  class=" focus:outline-none border-0 bg-white text-brandgray-800 outline-none
                        elevation-2 focus:ring-2 
                                rounded-xl
                       focus:ring-azure-300" \/>
                <\/div>
                <div class="form-group">
                    <div class="checkbox rounded-lg focus:outline-none border-0 
                                 bg-gradient-br p-5">
                        <label content="">
                            <input type="checkbox" class="border-0 text-blue-400 elevation-2 rounded-sm
                                             mr-5 focus:ring-2 focus:ring-azure-200"
                                                  \/>
                          <p class="text-brandgray-800">Remember me?<\/p> 
                        <\/label>
                    <\/div>
                <\/div>
SUBMIT BUTTON 

                <div class="flex flex-col items-center group mt-2 mb-4 w-full">
                    <div onclick="SignIn()" class="rounded-xl hover:animate-pulse focus:animate-pulse bg-aquamarine-400 w-full p-3">
                   <i class="group-hover:hidden icon-lock text-brandgray-400"> <\/i>
                       <i class="hidden group-hover:block hover:animate-pulse icon-lock-open
                                                text-brandgray-400">  <\/i>	    
                    <\/div>
                <\/div>
                <div class="form-group flex flex-col spacing-y-5 items-center">
                    <p class="text-black-800">
                          Don't have an account?
                    <\/p>
                    <p class="m-5">
                        <a class="bg-azure-500 text-bonjour-100 rounded-md p-2 " 
                               Sign Up
                        <\/a>
                    <\/p>
                    <p class="hidden">
                        <a id="resend-confirmation" asp-page=".\/ResendEmailConfirmation">Resend email confirmation<\/a>
                    <\/p>
                    <p>
                        <a id="forgot-password" asp-page=".\/ForgotPassword">Forgot your password?<\/a>
                    <\/p>
                <\/div>
            <\/form>
        <\/section>
    <\/div>

Alternate Login Services
    <div class="flex flex-col items-center w-2\/5 m-5 pt-10 bg-sky-300">
        <section class="flex items-center flex-col">
                        <div class="flex flex-col itmes-center">
                            <p class="text-brandgray-800">
                                There are no external authentication services configured. See <a href="https:\/\/go.microsoft.com\/fwlink\/?LinkID=532715">this article<\/a>
                                for details on setting up this ASP.NET application to support logging in via external services.
                            <\/p>
                        <\/div>
                        <form id="external-account" asp-page=".\/ExternalLogin" asp-route-returnUrl="@Model.ReturnUrl" 
                                 method="post" class="form-horizontal">
                            <div>
                            <\/div>
                        <\/form>
        <\/section>
    <\/div>
<\/div>
`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new LOGIN()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new LOGIN(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('login');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class REGISTER {
constructor(data){
this.Route = '/register';
this.ShouldRender = true;
this.Input = null;
this.ReturnUrl = null;
this.ExternalLogins = 'null';
this.Name = "Register";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "bcd0e145-2567-4602-b111-a04410688cdd";
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`d00a3a1a-3e8d-4d78-bc10-214598b17ba7${elCount}`].InnerHTML = body;
//  window[`d00a3a1a-3e8d-4d78-bc10-214598b17ba7${elCount}`].Render(window[`d00a3a1a-3e8d-4d78-bc10-214598b17ba7${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`<div class="flex inline-flex items-center pt-20 mx-20 text-center sm:mx-28 md:mx-52 lg:mx-144">

    <div class="text-4xl font-extrabold text-center text-azure-800">Create a new account<\/div>
    <\/div>
<div class="flex flex-col ">
    <div class="flex flex-col items-end text-brandgray-800 p-20 py-10 overflow-visible ">
        <div class="absolute w-1\/4 bg-brandgray-400 opacity-10 h-96 rounded-2xl">
        <\/div>
            <div class="absolute w-1\/2 bg-pictonblue-400 top-128 left-10 opacity-10 h-1\/3 rounded-2xl ">
            <\/div>
        <div class="absolute w-1\/4 h-full overflow-visible border-brandgray-400 super-border opacity-10 top-20 right-3 rounded-2xl">
        <\/div>
        <div class="fixed w-full bg-azure-400 top-128 opacity-10 left-20 h-144 rounded-2xl">

        <\/div>
        <div class="absolute w-1\/2 bg-brandgray-400 top-36 right-20 opacity-10 h-1\/3 rounded-2xl">

        <\/div>

        <form class="z-10 flex flex-col items-end self-stretch p-10 space-x-2 space-y-10 text-lg font-medium text-center bg-white opacity-75 md:mr-10 lg:pr-40 form-shadow-white rounded-2xl text-brandgray-700" asp-route-returnUrl="@Model.ReturnUrl" method="post">
            <hr\/>
            <div asp-validation-summary="All" class="text-danger"><\/div>
            <div class="flex flex-row justify-center ">
                <label class="content-center mx-5 my-0 font-bold" asp-for="Input.Email"><\/label>
                <input asp-for="Input.Email" class="border-0 outline-none focus:outline-none elevation-4 focus:ring-2 rounded-xl focus:ring-azure-300"\/>
            <\/div>
            <div class="flex flex-row ">
                <label class="mx-5 my-0 font-bold" asp-for="Input.Password"><\/label>
                <input asp-for="Input.Password" class="border-0 outline-none focus:outline-none elevation-4 focus:ring-2 rounded-xl focus:ring-azure-300"\/>
            <\/div>
            <div class="flex flex-row ">
                <label class="mx-5 font-bold " asp-for="Input.ConfirmPassword"><\/label>
                <input asp-for="Input.ConfirmPassword" class="border-0 outline-none focus:outline-none elevation-4 focus:ring-2 rounded-xl focus:ring-azure-300"\/>
            <\/div>
            <div class="flex flex-row ">
                <label class="mx-5 font-bold ">Organization<\/label>
                <input class="border-0 outline-none focus:outline-none elevation-4 focus:ring-2 rounded-xl focus:ring-azure-300"\/>
            <\/div>
            <div class="">
                <div class="h-5 mx-20 my-5 icon-bar rounded-2xl bg-bonjour-100"><\/div>
            <\/div>

            <button type="submit" class="p-8 rounded-lg align-center hover:ring-2 bg-aquamarine-500 focus:outline-none hover:ring-azure-300 focus:bg-aquamarine-400 hover:bg-aquamarine-400 focus:ring focus:ring-azure-300">Register<\/button>
        <\/form>
    <\/div>
    <div class="flex flex-col">
        <section>
            <hr \/>
<form id='external-account' asp-page='.\/ExternalLogin' returnUrl='${this.ReturnUrl}' method='post' class='form-horizontal'>
                        <div>
                            <p>
                                @foreach (var provider in ExternalLogins)
                                {
                                    <button type="submit" class="btn btn-primary" name="provider" value="@provider.Name" title="Log in using your @provider.DisplayName account">@provider.DisplayName<\/button>
                                }
                            <\/p>
                        <\/div>
                    <\/form>
        <\/section>
    <\/div>
<\/div>
`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new REGISTER()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new REGISTER(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('register');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class RESETPASSWORD {
constructor(data){
this.Input = null;
this.Name = "ResetPassword";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "50cade3a-3fb1-48e8-b54f-ea53c102c68a";
this.Route = '';
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.PyImports = "import json\n";
this.ShouldRender = true;
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`86c6e1f1-da04-4bc1-8c7e-a0bd6f32b045${elCount}`].InnerHTML = body;
//  window[`86c6e1f1-da04-4bc1-8c7e-a0bd6f32b045${elCount}`].Render(window[`86c6e1f1-da04-4bc1-8c7e-a0bd6f32b045${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`<h4>Reset your password.<\/h4>
<hr \/>
<div class="row">
    <div class="col-md-4">
        <form method="post">
            <div asp-validation-summary="ModelOnly" class="text-danger"><\/div>
            <input asp-for="Input.Code" type="hidden" \/>
            <div class="form-group">
                <label asp-for="Input.Email"><\/label>
                <input asp-for="Input.Email" class="form-control" \/>
                <span asp-validation-for="Input.Email" class="text-danger"><\/span>
            <\/div>
            <div class="form-group">
                <label asp-for="Input.Password"><\/label>
                <input asp-for="Input.Password" class="form-control" \/>
                <span asp-validation-for="Input.Password" class="text-danger"><\/span>
            <\/div>
            <div class="form-group">
                <label asp-for="Input.ConfirmPassword"><\/label>
                <input asp-for="Input.ConfirmPassword" class="form-control" \/>
                <span asp-validation-for="Input.ConfirmPassword" class="text-danger"><\/span>
            <\/div>
            <button type="submit" class="btn btn-primary">Reset<\/button>
        <\/form>
    <\/div>
<\/div>
`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new RESETPASSWORD()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new RESETPASSWORD(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('resetpassword');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class ANONYMOUS {
constructor(data){
this.authenticationstate = {"Claims":[],"Identities":[],"Identity":null};
this.ShouldRender = true;
this.Route = '';
this.Name = "Anonymous";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "af57eaf3-114d-43f5-90f3-2214b7dce3f3";
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 
let username = "";
var msalInstance = {};

function showWelcomeMessage(username){
  console.log(username);
}


async function selectAccount() {
var msalInstance = window.AuthService;
\/**
* See here for more info on account retrieval:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-common\/docs\/Accounts.md
*\/
await msalInstance.handleRedirectPromise();
var currentAccounts = msalInstance.getAllAccounts();
if (currentAccounts.length === 0) {
return;
}
else if (currentAccounts.length > 1) {
    \/\/ Add choose account code here
    console.warn("Multiple accounts detected.");
    selectAccount();
  }


  else if (currentAccounts.length === 1) {
    username = currentAccounts[0].username;
    showWelcomeMessage(username);
  }
}
function handleResponse(response) {

\/**
* To see the full list of response object properties, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#response
*\/

if (response !== null) {
username = response.account.username;
showWelcomeMessage(username);
} else {
selectAccount();
}
}

async function signIn() {
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
console.log(window.AuthService);

msalInstance.loginRedirect()
.then(handleResponse)
.catch(error => {
console.error(error);
});
}
window.SignIn = () => signIn(); 
async function signOut() {

\/**
* You can pass a custom request object below. This will override the initial configuration. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#request
*\/
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
const logoutRequest = {
account: msalInstance.getAccountByUsername(username),
postLogoutRedirectUri: msalConfig.auth.redirectUri,
mainWindowRedirectUri: msalConfig.auth.redirectUri
};

msalInstance.logoutRedirect(logoutRequest);
}

window.onload = () => {window.SignOut = signOut; };
async function getTokenRedirect(request) {
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
request.account = msalInstance.getAccountByUsername(username);

return msalInstance.acquireTokenSilent(request)
.catch(error => {
console.warn("silent token acquisition fails. acquiring token using popup");
if (error instanceof msal.InteractionRequiredAuthError) {
\/\/ fallback to interaction when silent call fails
return msalInstance.acquireTokenPopup(request)
.then(tokenResponse => {
console.log(tokenResponse);
return tokenResponse;
}).catch(error => {
console.error(error);
});
} else {
console.warn(error);
}
});
}
async function loadView(){
  console.log("Loading ANON View");
try{
            if (window.AuthService) {
                 msalInstance = window.AuthService;
                msalInstance.handleRedirectPromise().then(handleResponse).catch(err => {
                  console.error(err);
                });
                 console.log(window.AuthService);
var currentAccounts = window.AuthService.getAllAccounts();
if (currentAccounts.length === 0) {
  var res = document.getElementById(\`${this.target}auth\`);
  console.log(res);
  if (res){
  await res.insertAdjacentHTML('afterbegin', username + \`  ${this.InnerHTML}\`)
  }
else if (currentAccounts.length > 1) {
    \/\/ Add choose account code here

      }
    }
   }
   }
catch(ex){console.log(ex);}
}
\/\/ Add an event listener
document.addEventListener("msal-init", function(e) {
loadView();

eval('.\/Xavier.js');
    var ev = new Event("DOMContentLoaded");
        try{
             window.addEventListener("DOMContentLoaded", ()=>{window['${this.Xid}1'].renderXidElements(document.body)});
             window.dispatchEvent(ev);

        }
        catch(ex){console.log(ex)}



});
 `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`28220789-36a4-4e73-8db6-0d8c107843a6${elCount}`].InnerHTML = body;
//  window[`28220789-36a4-4e73-8db6-0d8c107843a6${elCount}`].Render(window[`28220789-36a4-4e73-8db6-0d8c107843a6${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`
  

<div id="${this.target}auth">
<\/div>




`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 
let username = "";
var msalInstance = {};

function showWelcomeMessage(username){
  console.log(username);
}


async function selectAccount() {
var msalInstance = window.AuthService;
\/**
* See here for more info on account retrieval:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-common\/docs\/Accounts.md
*\/
await msalInstance.handleRedirectPromise();
var currentAccounts = msalInstance.getAllAccounts();
if (currentAccounts.length === 0) {
return;
}
else if (currentAccounts.length > 1) {
    \/\/ Add choose account code here
    console.warn("Multiple accounts detected.");
    selectAccount();
  }


  else if (currentAccounts.length === 1) {
    username = currentAccounts[0].username;
    showWelcomeMessage(username);
  }
}
function handleResponse(response) {

\/**
* To see the full list of response object properties, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#response
*\/

if (response !== null) {
username = response.account.username;
showWelcomeMessage(username);
} else {
selectAccount();
}
}

async function signIn() {
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
console.log(window.AuthService);

msalInstance.loginRedirect()
.then(handleResponse)
.catch(error => {
console.error(error);
});
}
window.SignIn = () => signIn(); 
async function signOut() {

\/**
* You can pass a custom request object below. This will override the initial configuration. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#request
*\/
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
const logoutRequest = {
account: msalInstance.getAccountByUsername(username),
postLogoutRedirectUri: msalConfig.auth.redirectUri,
mainWindowRedirectUri: msalConfig.auth.redirectUri
};

msalInstance.logoutRedirect(logoutRequest);
}

window.onload = () => {window.SignOut = signOut; };
async function getTokenRedirect(request) {
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
request.account = msalInstance.getAccountByUsername(username);

return msalInstance.acquireTokenSilent(request)
.catch(error => {
console.warn("silent token acquisition fails. acquiring token using popup");
if (error instanceof msal.InteractionRequiredAuthError) {
\/\/ fallback to interaction when silent call fails
return msalInstance.acquireTokenPopup(request)
.then(tokenResponse => {
console.log(tokenResponse);
return tokenResponse;
}).catch(error => {
console.error(error);
});
} else {
console.warn(error);
}
});
}
async function loadView(){
  console.log("Loading ANON View");
try{
            if (window.AuthService) {
                 msalInstance = window.AuthService;
                msalInstance.handleRedirectPromise().then(handleResponse).catch(err => {
                  console.error(err);
                });
                 console.log(window.AuthService);
var currentAccounts = window.AuthService.getAllAccounts();
if (currentAccounts.length === 0) {
  var res = document.getElementById(\`${this.target}auth\`);
  console.log(res);
  if (res){
  await res.insertAdjacentHTML('afterbegin', username + \`  ${this.InnerHTML}\`)
  }
else if (currentAccounts.length > 1) {
    \/\/ Add choose account code here

      }
    }
   }
   }
catch(ex){console.log(ex);}
}
\/\/ Add an event listener
document.addEventListener("msal-init", function(e) {
loadView();

eval('.\/Xavier.js');
    var ev = new Event("DOMContentLoaded");
        try{
             window.addEventListener("DOMContentLoaded", ()=>{window['${this.Xid}1'].renderXidElements(document.body)});
             window.dispatchEvent(ev);

        }
        catch(ex){console.log(ex)}



});
 `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new ANONYMOUS()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new ANONYMOUS(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('anonymous');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class AUTHORIZE {
constructor(data){
this.authenticationstate = {"Claims":[],"Identities":[],"Identity":null};
this.ShouldRender = true;
this.Route = '';
this.Name = "Authorize";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "9293f6bc-239b-4d6e-ad0a-faf2e105224f";
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 



let username = "";
var msalInstance = {};
var target = '${this.target}'
function showWelcomeMessage(username){
  console.log(username);
}


async function selectAccount() {
var msalInstance = window.AuthService;
\/**
* See here for more info on account retrieval:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-common\/docs\/Accounts.md
*\/
await msalInstance.handleRedirectPromise();
var currentAccounts = msalInstance.getAllAccounts();
if (currentAccounts.length === 0) {
return;
}
else if (currentAccounts.length > 1) {
    \/\/ Add choose account code here
    console.warn("Multiple accounts detected.");
    selectAccount();
  }

  else if (currentAccounts.length === 1) {
    username = currentAccounts[0].username;
    showWelcomeMessage(username);
  var res = document.getElementById(\`${this.target}auth\`);
  res.insertAdjacentHTML('afterbegin', username + \`  ${this.InnerHTML}\`)
  }
}
function handleResponse(response) {

\/**
* To see the full list of response object properties, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#response
*\/

if (response !== null) {
username = response.account.username;
showWelcomeMessage(username);
} else {
selectAccount();
}
}

async function signIn() {
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
console.log(window.AuthService);

msalInstance.loginRedirect()
.then(handleResponse=>{getTokenRedirect(handleResponse)})
.catch(error => {
console.error(error);
});
}
window.SignIn = () => signIn(); 
async function signOut() {

\/**
* You can pass a custom request object below. This will override the initial configuration. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#request
*\/
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
const logoutRequest = {
account: msalInstance.getAccountByUsername(username),
postLogoutRedirectUri: msalConfig.auth.redirectUri,
mainWindowRedirectUri: msalConfig.auth.redirectUri
};

msalInstance.logoutRedirect(logoutRequest);
}

window.onload = () => {window.SignOut = signOut; };

async function getTokenRedirect(request) {
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
request.account = msalInstance.getAccountByUsername(username);

return msalInstance.acquireTokenSilent(request)
.catch(error => {
console.warn("silent token acquisition fails. acquiring token using popup");
if (error instanceof msal.InteractionRequiredAuthError) {
\/\/ fallback to interaction when silent call fails
return msalInstance.acquireTokenPopup(request)
.then(tokenResponse => {
console.log(tokenResponse);
return tokenResponse;
}).catch(error => {
console.error(error);
});
} else {
console.warn(error);
}
});
}

async function loadView(){
  console.log("Loading View");
try{
            if (window.AuthService) {
                msalInstance = window.AuthService;
                msalInstance.handleRedirectPromise().then(handleResponse).catch(err => {
                  console.error(err);
                });
var currentAccounts = window.AuthService.getAllAccounts();
if (currentAccounts.length === 1) {
  var res = document.getElementById(\`${this.target}auth\`);
  console.log(res);
  console.log(window.AuthService);
  if (res){
  await res.insertAdjacentHTML('afterbegin', username + \`  ${this.InnerHTML}\`)
  }
else if (currentAccounts.length > 1) {
    \/\/ Add choose account code here
      }
    }
   }
   }
catch(ex){console.log(ex);}
}
\/\/ Add an event listener
document.addEventListener("msal-init", function(e) {
loadView();

eval('.\/Xavier.js');

});


 `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`4b660a3d-8d39-4ac2-8882-5857d291bcd0${elCount}`].InnerHTML = body;
//  window[`4b660a3d-8d39-4ac2-8882-5857d291bcd0${elCount}`].Render(window[`4b660a3d-8d39-4ac2-8882-5857d291bcd0${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`
<div id="${this.target}auth">
<\/div>

`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 



let username = "";
var msalInstance = {};
var target = '${this.target}'
function showWelcomeMessage(username){
  console.log(username);
}


async function selectAccount() {
var msalInstance = window.AuthService;
\/**
* See here for more info on account retrieval:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-common\/docs\/Accounts.md
*\/
await msalInstance.handleRedirectPromise();
var currentAccounts = msalInstance.getAllAccounts();
if (currentAccounts.length === 0) {
return;
}
else if (currentAccounts.length > 1) {
    \/\/ Add choose account code here
    console.warn("Multiple accounts detected.");
    selectAccount();
  }

  else if (currentAccounts.length === 1) {
    username = currentAccounts[0].username;
    showWelcomeMessage(username);
  var res = document.getElementById(\`${this.target}auth\`);
  res.insertAdjacentHTML('afterbegin', username + \`  ${this.InnerHTML}\`)
  }
}
function handleResponse(response) {

\/**
* To see the full list of response object properties, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#response
*\/

if (response !== null) {
username = response.account.username;
showWelcomeMessage(username);
} else {
selectAccount();
}
}

async function signIn() {
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
console.log(window.AuthService);

msalInstance.loginRedirect()
.then(handleResponse=>{getTokenRedirect(handleResponse)})
.catch(error => {
console.error(error);
});
}
window.SignIn = () => signIn(); 
async function signOut() {

\/**
* You can pass a custom request object below. This will override the initial configuration. For more information, visit:
* https:\/\/github.com\/AzureAD\/microsoft-authentication-library-for-js\/blob\/dev\/lib\/msal-browser\/docs\/request-response-object.md#request
*\/
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
const logoutRequest = {
account: msalInstance.getAccountByUsername(username),
postLogoutRedirectUri: msalConfig.auth.redirectUri,
mainWindowRedirectUri: msalConfig.auth.redirectUri
};

msalInstance.logoutRedirect(logoutRequest);
}

window.onload = () => {window.SignOut = signOut; };

async function getTokenRedirect(request) {
var msalInstance = window.AuthService;
await msalInstance.handleRedirectPromise();
request.account = msalInstance.getAccountByUsername(username);

return msalInstance.acquireTokenSilent(request)
.catch(error => {
console.warn("silent token acquisition fails. acquiring token using popup");
if (error instanceof msal.InteractionRequiredAuthError) {
\/\/ fallback to interaction when silent call fails
return msalInstance.acquireTokenPopup(request)
.then(tokenResponse => {
console.log(tokenResponse);
return tokenResponse;
}).catch(error => {
console.error(error);
});
} else {
console.warn(error);
}
});
}

async function loadView(){
  console.log("Loading View");
try{
            if (window.AuthService) {
                msalInstance = window.AuthService;
                msalInstance.handleRedirectPromise().then(handleResponse).catch(err => {
                  console.error(err);
                });
var currentAccounts = window.AuthService.getAllAccounts();
if (currentAccounts.length === 1) {
  var res = document.getElementById(\`${this.target}auth\`);
  console.log(res);
  console.log(window.AuthService);
  if (res){
  await res.insertAdjacentHTML('afterbegin', username + \`  ${this.InnerHTML}\`)
  }
else if (currentAccounts.length > 1) {
    \/\/ Add choose account code here
      }
    }
   }
   }
catch(ex){console.log(ex);}
}
\/\/ Add an event listener
document.addEventListener("msal-init", function(e) {
loadView();

eval('.\/Xavier.js');

});


 `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new AUTHORIZE()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new AUTHORIZE(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('authorize');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class MAINNAV {
constructor(data){
this.Title = "This is the title";
this.ShouldRender = true;
this.Route = '';
this.JSON = "This is a description";
this.Products = '[]';
this.Name = "MainNav";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "979b3370-2037-49ae-9567-6e23ebbdd802";
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 
import "\/Xavier.ShopLite.js";
      console.log('This is working');
        function Toggle(){
        var menu = document.getElementById("Menu");
        if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        }
        else{
         menu.classList.add("hidden");
        }
      }
      window.Toggle = () => Toggle();
  
window.onload = await function(){
let lastid = {};
  
console.log(lastid);
};
 `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`0833d493-f6ef-404e-90ef-8587c381b540${elCount}`].InnerHTML = body;
//  window[`0833d493-f6ef-404e-90ef-8587c381b540${elCount}`].Render(window[`0833d493-f6ef-404e-90ef-8587c381b540${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`
X{}X

<div class="fixed top-0 w-full z-[10000] mx-0 overflow-hidden shadow-sm">



<div id="Products">
<\/div>
  <div class="isolate bg-white">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1\/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
        <path fill="url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" \/>
        <defs>
          <linearGradient id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC"><\/stop>
            <stop offset="1" stop-color="#FF80B5"><\/stop>
          <\/linearGradient>
        <\/defs>
      <\/svg>
    <\/div>
    <div class="px-6 pt-6 lg:px-8">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="\/" class="-m-1.5 p-1.5">
          <div class="text-2xl bg-gradient-to-br from-gray-700 via-gray-200 to-gray-700 text-white">Xavier | ${this.Title} <\/div>
        <\/a>
        <\/div>
        <div class="flex lg:hidden">
          <button type="button" onclick="Toggle()" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu<\/span>
            <!-- Heroicon name: outline\/bars-3 -->
            <svg class="h-6 w-6" xmlns="http:\/\/www.w3.org\/2000\/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" \/>
            <\/svg>
          <\/button>
        <\/div>
        <div class="hidden lg:flex lg:gap-x-12">


  
    <div>
      <a href='\/' class='text-sm font-semibold leading-6 text-gray-900'>Options<\/a>    
    <\/div>
  
  

  
    <div>
      <a href='\/' class='text-sm font-semibold leading-6 text-gray-900'>Documentation<\/a>    
    <\/div>
  
  

  
    <div>
      <a href='\/' class='text-sm font-semibold leading-6 text-gray-900'>try it out<\/a>    
    <\/div>
  
  

        <\/div>
        <div class='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href="\/" class="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;<\/span>
          <\/a>
        <\/div>
      <\/nav>
      <!-- Mobile menu, show\/hide based on menu open state. -->
      <div role="dialog" aria-modal="true">
        <div focus="true" id="Menu" class="fixed hidden inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div class="flex items-center justify-between">
            <a href="\/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company<\/span>
              <img class="h-8" src="https:\/\/tailwindui.com\/img\/logos\/mark.svg?color=indigo&shade=600" alt=""\/>
          <\/a>
            <button type="button" onclick="Toggle()" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu<\/span>
              <!-- Heroicon name: outline\/x-mark -->
              <svg class="h-6 w-6" xmlns="http:\/\/www.w3.org\/2000\/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" \/>
              <\/svg>
            <\/button>
          <\/div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500\/10">
              <div class="space-y-2 py-6">



          
              <\/div>
              <div class="py-6">
                <a href="\/" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400\/10">Log in<\/a>
              <\/div>
            <\/div>
          <\/div>
        <\/div>
      <\/div>
    <\/div>
  <\/div>
<\/div>
`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 
import "\/Xavier.ShopLite.js";
      console.log('This is working');
        function Toggle(){
        var menu = document.getElementById("Menu");
        if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        }
        else{
         menu.classList.add("hidden");
        }
      }
      window.Toggle = () => Toggle();
  
window.onload = await function(){
let lastid = {};
  
console.log(lastid);
};
 `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new MAINNAV()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new MAINNAV(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('mainnav');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class SIMPLENAV {
constructor(data){
this.ShouldRender = true;
this.Route = '';
this.Name = "SimpleNav";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "d685318b-9c8c-460e-807d-da41e735aafa";
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`88add41f-2b52-43f4-9a23-435c00a28d2c${elCount}`].InnerHTML = body;
//  window[`88add41f-2b52-43f4-9a23-435c00a28d2c${elCount}`].Render(window[`88add41f-2b52-43f4-9a23-435c00a28d2c${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`<div class="flex flex-row">
<nav id="" aria-label="Sidebar" class="fixed left-0 right-0 shadow-brandgray-400 shadow-sm items-center flex-col md:right-auto bottom-0 font-bold md:top-0 z-[2999] bg-white flex-shrink-0">
    <div class="md:h-screen p-3 md:right-auto items-center
                              md:w-14 w-[100%] justify-center md:justify-start
                                flex flex-row md:flex-col md:space-y-3 ">
        <div class="opacity z-[4000] fadein p-2 md:mt-32">
            <div class="Main-btns flex flex-row md:flex-col items-center">
                <div class="camera-btn m-2" id='Main-up'>
                    <navlink href="\/Posts" activeclass=" Main-btn-href" class="Main-btn Main-btn-active flex items-center">
                        <button data-mdb-ripple="true"
                                data-mdb-ripple-color="light" 
                                class="flex flex-col items-center justify-items-center elevation-2 h-14 w-14 ">
                            <div class="relative h-14  m-3   justify-items-center w-14 i POSTICON"><\/div>
                        <\/button>
                    <\/navlink>
                <\/div>
                <div class="camera-btn m-2" id='Main-up'>
                    <navlink href="\/Tv" activeclass=" Tv-btn-href" class="Tv-btn-active Main-btn flex items-center">
                        <button data-mdb-ripple="true"
                                data-mdb-ripple-color="light" onclick=''
                                class=" Main-btn flex flex-col Tv-btn justify-items-center items-center elevation-2 h-14 w-14 ">
                            <div class="relative mx-0 m-3 justify-items-center i TVICON  "><\/div>
                        <\/button>
                    <\/navlink>
                <\/div>
                <div class="camera-btn m-2" id='Cast-up'>
                    <navlink href="\/Casts" activeclass="Cast-btn-href" class="Cast-btn-active Main-btn">
                        <button data-mdb-ripple="true"
                                data-mdb-ripple-color="light" onclick=''
                                class="Main-btn flex flex-col Cast-btn justify-items-center items-center elevation-2 h-14 w-14 ">
                            <div class="relative absolute m-3 i CASTICON"><\/div>
                        <\/button>
                    <\/navlink>
                <\/div>
                <div class="camera-btn m-2" id='Cast-up'>
                    <navlink href="\/Venture" ActiveClass="Business-btn-href" class="Business-btn-active Main-btn">
                        <button data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                class=" elevation-2 flex flex-col justify-items-center items-center h-14 w-14 ">
                            <div class="relative m-3 justify-items-center i ORGICON"><\/div>

                        <\/button>
                    <\/navlink>
                <\/div>
                <div class="camera-btn m-2" id='Cast-up'>
                    <navlink href="\/Market" class="Apollo-btn-active Main-btn">
                        <button data-mdb-ripple="true"
                                data-mdb-ripple-color="light" onclick='' class="elevation-2 flex flex-col h-14 w-14 justify-items-center items-center ">
                            <div class="relative m-3 justify-center i MARKETICON">

                            <\/div>
                        <\/button>
                    <\/navlink>
                <\/div>
            <\/div>
        <\/div>
    <\/div>
<\/nav>
<\/div>`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new SIMPLENAV()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new SIMPLENAV(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('simplenav');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class WORKNAV {
constructor(data){
this.SearchText = "";
this.UserSearchResults = '[]';
this.ComponentSearchResults = '[]';
this.EntitySearchResults = '[]';
this.ShouldRender = true;
this.Name = "WorkNav";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "1fd0a98a-cc10-4c40-83dc-ad2a23af91e6";
this.Route = '';
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`496a276c-410e-4568-9160-b23dd5ea5981${elCount}`].InnerHTML = body;
//  window[`496a276c-410e-4568-9160-b23dd5ea5981${elCount}`].Render(window[`496a276c-410e-4568-9160-b23dd5ea5981${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`<header class="flex w-full top-0 py-2 px-4 fixed bg-gradient-to-br
            from-bonjour-200 to-white
        transitions ease-in duration-200 md:flex md:items-center
        md:justify-between pb-0 shadow-md mx-0 z-[3000]">
    <!-- Logo text or image -->
      <div class="flex items-center my-1 justify-between ">
        <div class="relative rounded-lg overflow-hidden h-10 w-10 ">
            <!-- <div class="LoadingRainbow"><\/div> -->
            <img class="w-10 absolute  " src="\/images\/logo.png"\/>
          <a href="\/" class="absolute rounded-lg overflow-hidden h-10 w-10 ">
          <\/a>
        <\/div>
        <div class="relative h-12 justify-items-center">
              <img src="\/images\/Name.png" class="mx-5 scale-y-90"\/>
           <a class="text-lg absolute mx-0 my-0 text-brandgray-500 h-full w-full " href="\/">
           <\/a>
        <\/div>
          <!--Toggle for the Navigation on mobile-->
    <\/div>
    <!-- Search field -->
    <form id="search-form" class=" hidden flex flex-col grow p-2 items-center overflow-y-auto transitions ease-in-out scrollbar duration-400 md:flex md:mb-0 md:w-1\/4 ">
        <label class="hidden" for="search-form">Search<\/label>
        <input class=" outline-none elevation-2 border-0 focus:ring-2 focus:ring-azure-300
                     p-2 rounded-lg
                   w-full" placeholder="Search" type="text">

        <button class="hidden">Submit<\/button>
        <div class=" bg-white scrollbar w-screen border-b-4 border-azure-600 shadow-md right-0 p-3 mt-24 h-144 hidden overflow-y-auto">

        <\/div>
    <\/form>
    <div>
        <div class="grid space-y-1 grid-col-1 animation">
            <i class="icon-bar w-39 bg-brandgray-50 position-static mt-3
                h-1 "><\/i>

        <\/div>
    <\/div>

    <!-- END Search field -->
    <!-- Global navigation -->
    <nav id="Menu" class="transitions ease-in-out duration-400 md:flex">
        <div  class="m-1">
            <LoginDisplay\/>
        <\/div>
    <\/nav>


        <button onclick="Toggle()" class="absolute flex h-8 w-8 m-2 right-0.5 overflow-hidden border-4 border-brandgray-400 elevation-2 
                rounded-[50%] text-indigo-500 md:hidden">
          <div  class="flex space-y-1 items-center justify-items-center flex-col ">
            <i class="icon-bar bg-brandgray-600 position-static right-1 top-1
                 w-7 h-1 "><\/i>
            <i class="icon-bar bg-brandgray-600 position-static right-1 top-1
                         w-7 h-1 "><\/i>
            <i class="icon-bar bg-brandgray-600 position-static right-1 top-1
                 w-7 h-1 "><\/i>
            <i class="icon-bar bg-brandgray-600 position-static right-1 top-1
                 w-7 h-1 "><\/i>
          <\/div>
          <div  class="absolute ring-4 animate-fadein overflow-none ring @IsNavToggled transition-transform
                    transform:rotate-90 rounded-[50%] bg-white overflow-hidden flex flex-col transition ease-in-out 
                 duration-300 space-x-1 grid-col-1 transform">
            <div class="w-20 LoadingRainbow h-20">

            <\/div>
          <\/div>
        <\/button>
        <!-- END Global navigation -->
  
<\/header>

`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new WORKNAV()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new WORKNAV(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('worknav');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class XBUILDER {
constructor(data){
this.ShouldRender = true;
this.lstm = null;
this.Name = "XBuilder";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "e4e14b5f-7da5-44d5-9b13-3d829cbe2139";
this.Route = '';
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 
    import ".\/Xavier.js";
   \/\/JavaScript Here

var page = {
    "div": {
      "class": "flex justify-items-center max-w-5xl items-center flex-wrap",
      "children": [
        {
           "login": {}
        },
        {
          "div": {
            "class": "flex flex-row",
            "children": [
              {
                "xcard": {
                  "id": "getstarted",
                  "height": "40vh",
                  "href": "get_started",
                  "img": ".\/images\/1280px-stripe_logo.png",
                  "title": "get started",
                  "titlestyle": "color:#89f;font-size:1em;",
                  "description": "learn how to use xavier!",
                  "textstyle": "margin:10 auto; font-size:.7em; display:flex; flex-direction:row; justify-content:center",
                  "color1": "#44a",
                  "color2": "#88a",
                  "color3": "#33a",
                  "bg": "white",
                  "fg": "black"
                }
              },
              {
                "xcard": {
                  "id": "docs",
                  "href": "documentation",
                  "img": ".\/images\/infinityflag.png",
                  "height": "50vh",
                  "class": "text-brandgray-700",
                  "title": "documentation",
                  "description": "learn how to use xavier!",
                  "color1": "#447",
                  "color2": "#f34",
                  "color3": "#433",
                  "bg": "white"
                }
              },
              {
                "xcard": {
                  "id": "why",
                  "href": "Ssr",
                  "class": "text-brandgray-700",
                  "height": "40vh",
                  "img":".\/images\/AILOGO.svg",
                  "title": "SSR",
                  "description": "the SSR deep dive",
                  "color1": "#43f",
                  "color2": "#f3f",
                  "color3": "#4ff",
                  "bg": "white"
                }
              }
            ]
          }
        }
      ]
    }
  }
;

\/\/ Fetch the file.
function superget(request){fetch(request)
  .then(response => {
    \/\/ Return the response as a JSON value.
    return response;
  })
  .then(data => {
        page = data.div;
    });
}
\/\/page = get(request);
    var builder = window['${this.Xid}1'];
\/\/    var pushState = window.history.pushState;


\/\/     builder.renderXidElements(document.getElementById('XavierContent'));

     function jsonToHTML(json){
  \/\/ Create variable to store resulting HTML
  let html = '';

  \/\/ Create a loop to iterate over JSON object
  for (let element in json) {
    \/\/If the element in the JSON object is an array, add the element to HTML
    if (Array.isArray(json[element])) {
      html += \`<\`+element.toLowerCase()+\`>\`;
      \/\/ For each element in the array
      for(let child of json[element]) {
        \/\/ Recursively call jsonToHTML
        html += jsonToHTML(child);
      }
      \/\/ Close the element when all children have been added to HTML
      html += \`<\/\`+element.toLowerCase()+\`>\`;
    }
    \/\/ If the element in the JSON object is an object
    else if (typeof json[element] === 'object') {
      \/\/ Add the element to HTML
      html += \`<\`+element.toLowerCase()+\` \`;
      \/\/ For each attribute in the element object
      for(let attribute in json[element]) {
        \/\/ Add the attribute to HTML
        html += attribute.toLowerCase()+ \` = "\`+json[element][attribute]+\`"\`;
      }
      \/\/ Close the element tag
      html += '>';
      \/\/ If the element has children
      if (json[element]['children']) {
        \/\/ For each child in the element
        for(let child of json[element]['children']) {
          \/\/ Recursively call jsonToHTML
          html += jsonToHTML(child);
        }
      }
      \/\/ Close the element when all children have been added to HTML
      html += \`<\/\`+element.toLowerCase()+\`>\`;
    }
    \/\/ If the elements in the JSON object are strings
    else if (typeof json[element] === 'string') {
      \/\/ Add the element to HTML
      html += \`<\`+element.toLowerCase()+\`>\`+json[element]+\`<\/\`+element.toLowerCase()+\`>\`;
    }
  }
  \/\/ Return result HTML
  return html;
};
    var ele = document.getElementById("${this.appid}");
    var newele = document.createElement('div');
    var ev = new Event("DOMContentLoaded");
        try{
            newele.innerHTML = jsonToHTML(page);
            ele.appendChild(newele);
             window.addEventListener("DOMContentLoaded", ()=>{window['${this.Xid}1'].renderXidElements(newele)});
             window.dispatchEvent(ev);

        }
        catch(ex){console.log(ex)}

 `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`f2ccd1f9-944b-4bb3-8a5c-839ff902f487${elCount}`].InnerHTML = body;
//  window[`f2ccd1f9-944b-4bb3-8a5c-839ff902f487${elCount}`].Render(window[`f2ccd1f9-944b-4bb3-8a5c-839ff902f487${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`
<div id="${this.appid}">

<\/div>




`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 
    import ".\/Xavier.js";
   \/\/JavaScript Here

var page = {
    "div": {
      "class": "flex justify-items-center max-w-5xl items-center flex-wrap",
      "children": [
        {
           "login": {}
        },
        {
          "div": {
            "class": "flex flex-row",
            "children": [
              {
                "xcard": {
                  "id": "getstarted",
                  "height": "40vh",
                  "href": "get_started",
                  "img": ".\/images\/1280px-stripe_logo.png",
                  "title": "get started",
                  "titlestyle": "color:#89f;font-size:1em;",
                  "description": "learn how to use xavier!",
                  "textstyle": "margin:10 auto; font-size:.7em; display:flex; flex-direction:row; justify-content:center",
                  "color1": "#44a",
                  "color2": "#88a",
                  "color3": "#33a",
                  "bg": "white",
                  "fg": "black"
                }
              },
              {
                "xcard": {
                  "id": "docs",
                  "href": "documentation",
                  "img": ".\/images\/infinityflag.png",
                  "height": "50vh",
                  "class": "text-brandgray-700",
                  "title": "documentation",
                  "description": "learn how to use xavier!",
                  "color1": "#447",
                  "color2": "#f34",
                  "color3": "#433",
                  "bg": "white"
                }
              },
              {
                "xcard": {
                  "id": "why",
                  "href": "Ssr",
                  "class": "text-brandgray-700",
                  "height": "40vh",
                  "img":".\/images\/AILOGO.svg",
                  "title": "SSR",
                  "description": "the SSR deep dive",
                  "color1": "#43f",
                  "color2": "#f3f",
                  "color3": "#4ff",
                  "bg": "white"
                }
              }
            ]
          }
        }
      ]
    }
  }
;

\/\/ Fetch the file.
function superget(request){fetch(request)
  .then(response => {
    \/\/ Return the response as a JSON value.
    return response;
  })
  .then(data => {
        page = data.div;
    });
}
\/\/page = get(request);
    var builder = window['${this.Xid}1'];
\/\/    var pushState = window.history.pushState;


\/\/     builder.renderXidElements(document.getElementById('XavierContent'));

     function jsonToHTML(json){
  \/\/ Create variable to store resulting HTML
  let html = '';

  \/\/ Create a loop to iterate over JSON object
  for (let element in json) {
    \/\/If the element in the JSON object is an array, add the element to HTML
    if (Array.isArray(json[element])) {
      html += \`<\`+element.toLowerCase()+\`>\`;
      \/\/ For each element in the array
      for(let child of json[element]) {
        \/\/ Recursively call jsonToHTML
        html += jsonToHTML(child);
      }
      \/\/ Close the element when all children have been added to HTML
      html += \`<\/\`+element.toLowerCase()+\`>\`;
    }
    \/\/ If the element in the JSON object is an object
    else if (typeof json[element] === 'object') {
      \/\/ Add the element to HTML
      html += \`<\`+element.toLowerCase()+\` \`;
      \/\/ For each attribute in the element object
      for(let attribute in json[element]) {
        \/\/ Add the attribute to HTML
        html += attribute.toLowerCase()+ \` = "\`+json[element][attribute]+\`"\`;
      }
      \/\/ Close the element tag
      html += '>';
      \/\/ If the element has children
      if (json[element]['children']) {
        \/\/ For each child in the element
        for(let child of json[element]['children']) {
          \/\/ Recursively call jsonToHTML
          html += jsonToHTML(child);
        }
      }
      \/\/ Close the element when all children have been added to HTML
      html += \`<\/\`+element.toLowerCase()+\`>\`;
    }
    \/\/ If the elements in the JSON object are strings
    else if (typeof json[element] === 'string') {
      \/\/ Add the element to HTML
      html += \`<\`+element.toLowerCase()+\`>\`+json[element]+\`<\/\`+element.toLowerCase()+\`>\`;
    }
  }
  \/\/ Return result HTML
  return html;
};
    var ele = document.getElementById("${this.appid}");
    var newele = document.createElement('div');
    var ev = new Event("DOMContentLoaded");
        try{
            newele.innerHTML = jsonToHTML(page);
            ele.appendChild(newele);
             window.addEventListener("DOMContentLoaded", ()=>{window['${this.Xid}1'].renderXidElements(newele)});
             window.dispatchEvent(ev);

        }
        catch(ex){console.log(ex)}

 `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new XBUILDER()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new XBUILDER(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('xbuilder');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class XCARD {
constructor(data){
this.Title = "Xavier | A new frame";
this.Route = '';
this.Description = "How will we know when we\u0027ve reached the stars?";
this.ShouldRender = true;
this.Config = null;
this.item = "This is the item";
this.Name = "XCard";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "7220866a-3269-476e-8d3d-c7431b32b1f3";
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`3bf4f542-e5fb-4804-90e0-09c7c9e612b1${elCount}`].InnerHTML = body;
//  window[`3bf4f542-e5fb-4804-90e0-09c7c9e612b1${elCount}`].Render(window[`3bf4f542-e5fb-4804-90e0-09c7c9e612b1${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`<style>
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}
:root {
  --card-height: ${this.height};
  --card-width: calc(var(--card-height) \/ 1.5);
}
.card${this.id} {
  background-color: ${this.bg};
  width: var(--card-width);
  height: var(--card-height);
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction:column;
  font-size: 1.5em;
  margin:1em;
  color: rgb(${this.fg} \/ 50%);
  cursor: pointer;
  font-family: Arial;
}

.card${this.id}:hover {
  color: rgb(88 199 250 \/ 100%);
  transition: color 1s;
}
.card${this.id}:hover:before, .card:hover:after {
  opacity: 0;
}
@keyframes FadeIn{
  0%{
    opacity: 0%;
  }
  100%{
    opacity:100%;
  }
}
.card${this.id}::before {
  content: "";
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , ${this.color1}, ${this.color2} 43%, ${this.color3});
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: ${this.id}spin 9.5s linear infinite;
}

.card${this.id}::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) \/ 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 10 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) \/ 6));
  background-image: linear-gradient(
    var(--rotate)
    , ${this.color1}, ${this.color2} 43%, ${this.color3});
    opacity: 1;
  transition: opacity .5s;
  animation: ${this.id}spin 9.5s linear infinite;
}
.card${this.id}:hover:before {
  content: "";
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , ${this.color1}, ${this.color2} 43%, ${this.color3});
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 9.5s linear infinite;
}
.card${this.id}:hover:after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) \/ 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 10 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) \/ 6));
  background-image: linear-gradient(
    var(--rotate)
    , ${this.color1}, ${this.color2} 43%, ${this.color3});
    opacity: 1;
  transition: opacity .5s;
  animation: ${this.id}spin 9.5s linear infinite;
}
@keyframes ${this.id}spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

<\/style>
<a href="${this.href}" class="card${this.id}" style="background:${this.bg};color:${this.fg};
${this.style}">
  <img src="${this.img}">
  <\/img>
  <div style="${this.titlestyle}">
    ${this.title}
  <\/div>
  <div style="${this.textstyle}">
    ${this.description}
  <\/div>
<\/a>`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new XCARD()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new XCARD(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('xcard');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class MAINFOOTER {
constructor(data){
this.Title = "Xavier | A new frame";
this.Route = '';
this.Description = "How will we know when we\u0027ve reached the stars?";
this.ShouldRender = true;
this.Config = null;
this.item = "This is the item";
this.Name = "MainFooter";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "1bd6a774-3635-4dbf-b311-afeb63d75ba8";
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`4941845f-3b9d-4ee3-a25b-a0aea9913ade${elCount}`].InnerHTML = body;
//  window[`4941845f-3b9d-4ee3-a25b-a0aea9913ade${elCount}`].Render(window[`4941845f-3b9d-4ee3-a25b-a0aea9913ade${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`<footer class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
    <div class="flex justify-center space-x-6 md:order-2">
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Facebook<\/span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" \/>
        <\/svg>
      <\/a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Instagram<\/span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" \/>
        <\/svg>
      <\/a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Twitter<\/span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" \/>
        <\/svg>
      <\/a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">GitHub<\/span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" \/>
        <\/svg>
      <\/a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">YouTube<\/span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" \/>
        <\/svg>
      <\/a>
    <\/div>
    <div class="mt-8 md:order-1 md:mt-0">
      <p class="text-center text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.<\/p>
    <\/div>
  <\/div>
<\/footer>
`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new MAINFOOTER()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new MAINFOOTER(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('mainfooter');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class XNAV {
constructor(data){
this.Title = "This is the title";
this.ShouldRender = true;
this.Route = '';
this.JSON = "This is a description";
this.Products = '[]';
this.Name = "XNav";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "96776fdf-172e-49ea-818f-ffb7aaffaba1";
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 

     `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`937b7a9b-c27f-4f6d-8e96-11a309ebb204${elCount}`].InnerHTML = body;
//  window[`937b7a9b-c27f-4f6d-8e96-11a309ebb204${elCount}`].Render(window[`937b7a9b-c27f-4f6d-8e96-11a309ebb204${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`
    
<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

\/* =====================
    Base styles
====================== *\/
.main-header {
    width: 100%;
    background: ${this.bg};
		box-shadow: 0px 1px 2px 0px rgba(0,0,0,.4);
}
.menu-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 15px;
}
.logo{
    box-shadow: ${this.logoshade}
}
.logo-wrap {
    width: 50px;
    min-height: 40px;
}
.logo-wrap img {
    display: block;
    width: 100%;
    height: 100%;
    z-index: 500;
}

\/* =====================
    Mobile ${this.id}-nav closed
====================== *\/
.main-${this.id}-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0vh;
    
    transition: height .0s ease-out .4s, opacity .2s ease-out .2s, padding-left .2s ease-in 0s;
    opacity: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 400;

    overflow: hidden;
    background: ${this.menubg};
    padding-left: 100%;
}
.${this.id}-nav-item {
    display: block;
    padding: 7px 10px;
    margin: 5px auto;
    color: ${this.fg};
    font-size: 20px;
    width: 100%;
    text-align: center;
    z-index: 100;
}
.${this.id}-nav-item:first-of-type {
    margin-top: 20vh;
}

\/* Hamburger btn *\/
.drop-trigger {
    \/* Changing these will automatically adjust bars *\/
    height: 34px;
    width: 50px;
    color: ${this.fg};
    \/* For btn bars *\/
    position: relative;
    background: rgba(0,0,0,0);
    transition: all .1s ease-out 0s;
    z-index: 450;
    border-width: 0;
    margin-left: auto;
}
\/* Hamburger bars *\/
.drop-trigger .btn-bar {
    position: absolute;
    display: block;
    top: 20%;
    left: 50%;
    height: 4px;
    width: 60%;
    transition: all .4s ease-in 0s;
    background: ${this.fg};
    margin: 0 auto;
    transform-origin: 50% 50%;
    transform: translateX(-50%) translateY(-0%) rotate(-0deg);
}
.btn-bar.middle {
    top: 51%;
    transform: translateX(-50%)  translateY(-50%) rotate(0deg);
}
.btn-bar.bottom {
    top: calc(80% - 3px);
}
\/* Fills background of ${this.id}-nav and is linked to the checkbox toggle *\/
.${this.id}-nav-revert {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0);
    z-index: 1;
}

\/* Checkbox used for toggle *\/
#${this.id}-nav-tog {
    display: none;
}
\/* =====================
    Mobile ${this.id}-nav open
====================== *\/
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar {
    transition-timing-function: ease-out;
}
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar {
    top: 50%;
    background: ${this.fg};
}
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar.top {
    transform: translateX(-50%)  translateY(-50%) rotate(-315deg);
}
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar.middle {
    transform: translateX(-50%)  translateY(-50%) rotate(-225deg);
}
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar.bottom {
    transform: translateX(-50%) translateY(-50%) rotate(-225deg);
}
#${this.id}-nav-tog:checked ~ .main-${this.id}-nav {
    transition: height .0s ease-in 0s, opacity .2s ease-in 0s, padding-left .23s ease-out .21s;
    opacity: 1;
    height: 100vh;
    padding-left: 0%;
}
\/* ============================
    Large screen main-${this.id}-nav
============================= *\/
@media screen and (min-width: 800px){
    \/* Hides mobile-specific elements *\/
    .drop-trigger,
    .${this.id}-nav-revert {
        display: none;
    }
    .main-${this.id}-nav {
        height: auto;
        position: relative;
        margin:0px;
        padding-left: 0%;
        flex-direction: row;
        justify-content: flex-end;
        opacity: 1;
        background: ${this.bg};
    }
    .${this.id}-nav-item:first-of-type{
        margin-top: 0;
    }
    .${this.id}-nav-item {
        font-size: 18px;
        margin: 0 5px;
        color: ${this.fg};
        width: auto;
    }
    .${this.id}-nav-item span{
        color:${this.menufg}
    }
\/* =====================
    Mobile ${this.id}-nav open
====================== *\/
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar {
    transition-timing-function: ease-out;
}
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar {
    top: 50%;
    background: ${this.fg};
}
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar.top {
    transform: translateX(-50%)  translateY(-50%) rotate(-315deg);
}
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar.middle {
    transform: translateX(-50%)  translateY(-50%) rotate(-225deg);
}
#${this.id}-nav-tog:checked ~ .drop-trigger .btn-bar.bottom {
    transform: translateX(-50%) translateY(-50%) rotate(-225deg);
}
#${this.id}-nav-tog:checked ~ .main-${this.id}-nav {
    transition: height .0s ease-in 0s, opacity .2s ease-in 0s, padding-left .23s ease-out .21s;
    opacity: 1;
    height: 100vh;
    padding-left: 0%;
    dislay:none;
}
}

<\/style>
<header class='main-header'>
    <div class="menu-wrap">
        <!-- Logo container -->
        <a href='${this.home}' class="logo-wrap" style="display:flex; flex-direction:row;">
            <img class="logo" src="${this.logo}" alt="Logo" >
            <text style="color:${this.fg};z-index:500; display:flex; font-size:1.5em; margin-left:3px; align-items:center; ${this.titlestyle}">${this.name}<\/text>
        <\/a>
        <!-- When this is checked, ${this.id}-nav menu is dropped -->
        <input type='checkbox' id='${this.id}-nav-tog'>

        <!-- Hamburger btn -->
        <label for='${this.id}-nav-tog'  class="drop-trigger">
            <!-- Hamburg bars -->
            <span class="btn-bar top"><\/span>
            <span class='btn-bar middle'><\/span>
            <span class='btn-bar bottom'><\/span>
        <\/label>

        <!-- Menu -->
        <nav class="main-${this.id}-nav">
            <!-- This covers the whole background of the dropped menu -->
            <label for='${this.id}-nav-tog' class='${this.id}-nav-revert'><\/label>
            
                    <a href='\/Components' class='${this.id}-nav-item'>
                        <span> Components <\/span>
                    <\/a>
                

                    <a href='\/Ssr' class='${this.id}-nav-item'>
                        <span> Ssr <\/span>
                    <\/a>
                

                    <a href='\/React' class='${this.id}-nav-item'>
                        <span> React <\/span>
                    <\/a>
                

                    <a href='\/Documentation' class='${this.id}-nav-item'>
                        <span> Documentation <\/span>
                    <\/a>
                

        <\/nav>
    <\/div>
<\/header>`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 

     `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new XNAV()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new XNAV(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('xnav');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class XTERMINAL {
constructor(data){
this.Route = '';
this.ShouldRender = true;
this.TerminalTitle = "";
this.OpenAIKey = null;
this.Name = "XTerminal";
this.Path = '';
this.dataset = null;
this.ContentType = "text/html";
this.Xid = "c1c5c628-93d3-4470-aa5d-2413b8732b10";
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 
function Terminal(){
  \/\/ Variables
  this.currentDirectory = "\/"
  this.log = [];
  this.history = {};
  this.commands = {}; \/\/ Empty object to store command functions
  this.promptText = ''; \/\/ Prompt text
  this.input = ''; \/\/ User input text
  this.output = 'Hello, user... This is the new tailwind prompt from Xavier.... It can be a challenge to make cool toys... this one we think has great potential'; \/\/ Output text
  this.history = [];
  this.localStorageKey = 'powerShellLikeFileSystem';
  this.fileSystem = {};
  this.saveFileSystem = () => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.fileSystem));
  }
  \/\/ Add Command Function
  this.addCommand = (commandName, commandFunc) => {
    this.commands[commandName] = commandFunc;
  };

  \/\/ Execute Command Function
  this.executeCommand = (commandText) => {
    var commandName = commandText.split(' ')[0];
    var commandArgs = commandText.split(' ').slice(1);
try{
    \/\/ Check if command exists
    if (this.commands[commandName]) {
      \/\/ Execute command
      this.commands[commandName](commandArgs);

    } else {
      \/\/ Set output text
      this.output = \`Command not recognized: \`+commandName;
    }
}catch(ex){this.output = "Error Detected: " + ex}
  };
  this.renderHTML = () => {
    let htmlText = '';
    let log = '';
    this.log.forEach((p) => {log += \`<div class="block">\`+p+\`<\/div>\`});
    htmlText += \`<div class="terminal-sim flex flex-col items-start">\`;
    htmlText += log;
    htmlText += \`  <div class="relative prompt z-10">\`+this.promptText+\`<\/div>\`;
    htmlText += \`<\/div>\`;
    return htmlText;
  }
  \/\/ Insert HTML Function
  this.insertHTML = (parentElement) => {
    parentElement.innerHTML = this.renderHTML();
  };

  \/\/ Built-In Commands
    \/\/ Command functions

  \/\/ Change directory
  this.cd = (args) => {
    var preDir = this.currentDirectory;
    var newPath = args[0] || '\/';
    var pathParts = newPath.split('\/');
    var currentPath = {};
    \/\/ Resolve relative paths
    if (newPath.startsWith('.')) {
      const currentPathParts = this.currentDirectory.split('\/');
      currentPathParts.pop(); \/\/ Remove current directory
      pathParts.forEach((part) => {
        if (part === '..') {
          currentPathParts.pop();
        } else {
          currentPathParts.push(part);
        }
      });
      this.currentDirectory = currentPathParts.join('\/');
    } else {
      this.currentDirectory = newPath;
    }
currentPath = this.fileSystem[this.currentDirectory]
    if (!currentPath || !currentPath.isDirectory) {
      this.output = this.currentDirectory+' Directory not found.';
      this.currentDirectory = preDir;
      return;
    }

    this.output = 'Current directory: '+this.currentDirectory;
  }

  \/\/ List files and directories
  this.ls = (args) => {
  this.output = "";
  var currentPath = this.fileSystem[this.currentDirectory];
    if (!currentPath || !currentPath.isDirectory) {
      this.output = 'Directory not found.';
      return;
    }
    currentPath.content.items.forEach((name) => {
      const item = this.fileSystem[item.fullname];
      const type = item.isDirectory ? 'Directory' : 'File';
      this.output = "";
      this.log.push(name + " " + type);
    });
  }

  \/\/ Create a new directory
  this.md = (args) => {
    var dirName = args[0];
    if (!dirName) {
      this.output = 'Please provide a directory name.';
      return;
    }
    var path = this.currentDirectory + '\/' + dirName;
    path.replace(".\/","");
    
    if(dirName[0] === "\/"){
    path = dirName
    }
    if (this.fileSystem[path]) {
      console.log('Directory already exists.');
      return;
    }
    var pathParts = path.split("\/");
        pathParts.pop();
    var parPath = pathParts.join("\/");
    if(this.currentDirectory === '\/'){
      parPath = this.currentDirectory;
    }
    console.log(parPath)
    
    parent = this.fileSystem[parPath];
    parent.content.items = [];
    parent.content.items.push({fullname: path})
    this.fileSystem[path] = { isDirectory: true, content: {} };
    this.saveFileSystem();
    this.output = 'Created directory: '+path;
  }
  this.clear = () =>{
    this.log = [];
    this.output = "";
  }

  \/\/ Remove a file or directory
  this.rm = (args) => {
    var targetName = args[0];
    if (!targetName) {
      this.output = 'Please provide a target name.';
      return;
    }
    var targetPath = this.currentDirectory + '\/' + targetName;
    var target = this.fileSystem[targetPath];
    if (!target) {
      this.output = 'File or directory not found.';
      return;
    }
    if (target.isDirectory) {
      if (Object.keys(target.content).length > 0) {
        this.output = 'Directory is not empty. Use "rm -Force" to delete it.';
        return;
      }
      delete this.fileSystem[targetPath];
      this.saveFileSystem();
      this.output = 'Deleted directory: ' +targetPath;
    } else {
      delete this.fileSystem[targetPath];
      this.saveFileSystem();
      this.output = 'Deleted file: ' + targetPath;
    }
  }

  \/\/ Create a new file
  this.newFile = (args) => {
    var fileName = args[0];
    if (!fileName) {
      console.log('Please provide a file name.');
      return;
    }
    var filePath = this.currentDirectory + '\/' + fileName;
    if (this.fileSystem[filePath]) {
      this.output = 'File already exists.';
      return;
    }
    this.fileSystem[filePath] = { isDirectory: false, content: '' };
    this.saveFileSystem();
    this.output = 'Created file: '+ filePath;
  }
}

var term = document.getElementById("terminal");
var termback = new Terminal();
\/\/ termback.addCommand('cd', termback.cd.bind(termback));
\/\/ termback.addCommand('ls', termback.ls.bind(termback));
\/\/ termback.addCommand('md', termback.md.bind(termback));
\/\/ termback.addCommand('rm', termback.rm.bind(termback));
\/\/ termback.addCommand('del', termback.rm.bind(termback))
\/\/ termback.addCommand('clear', termback.clear.bind(termback))

\/\/ termback.addCommand('new-item', termback.newFile.bind(termback));
    \/\/ Load file system from localStorage if available
    var savedFileSystem = localStorage.getItem(termback.localStorageKey);
    if (savedFileSystem) {
      termback.fileSystem = JSON.parse(savedFileSystem);
    }

var inString = false;
var bookmark = -1;
termback.insertHTML(term);
var input = document.getElementById("input");

if(input){
termback.addCommand('clear',() => termback.clear());
termback.addCommand('askai',async () => await handleUserInput(input));
    input.addEventListener('keyup', (e) => {
        console.log(e);
        termback.input = input.value;
            if (e.keyCode == 38 || e.key === 'ArrowUp')
            {
                bookmark++
                if(bookmark > termback.history.length-1){
                    bookmark = termback.history.length;
                }
                input.value = termback.history[bookmark];
            }
            if (e.keyCode == 40 || e.key === 'ArrowDown')
            {
                bookmark--
                if(bookmark < 0){
                    bookmark = -1;
                       input.value = "";
                }
                else{
                    input.value = termback.history[bookmark];
                }
            }
        
            if (e.keyCode == 10 || e.keyCode == 13) \/\/ && e.ctrlKey to add the control key
            {
                console.log("Exectuting Command: " + input.value);
                try{
                    termback.log.push(termback.input);
                    termback.history.unshift(termback.input);
                    if(!term.inString){
                        var commands = input.value.slice(";");
                        if(Array.isArray(commands)){
                            commands.forEach((Input) => {
                                termback.executeCommand(Input);
                                termback.log.push(termback.output);
                            });
                        }
                        else{
                            termback.executeCommand(termback.input);
                            termback.log.push(termback.output);
                        }
                    }
                }catch(ex){termback.log.push(ex);}
                termback.insertHTML(term);
            }
      });
}
else{
  console.log("no input detected... make sure to add your id tag");
}
\/\/ gpt4Chat.js

var apiKey = '${this.OpenAIKey}'; \/\/ Replace with your actual API key
var apiEndpoint = 'https:\/\/api.openai.com\/v1\/chat\/completions';

console.log(apiKey);
async function generateResponse(messages) {
  var hedrs = new Headers();
  hedrs.append("Content-Type","application\/json");
  hedrs.append("Authorization", "Bearer " + apiKey)
  
  const requestBody = messages;


  const req =  JSON.stringify({"model":"gpt-4", "messages": requestBody})
  var reqOpts = {
    method: 'POST',
    headers: hedrs,
    body: req,
    redirect: 'follow'
  }
    console.log(req);
  try {
    const response = await fetch(apiEndpoint, reqOpts);
  console.log(requestBody);
    if (!response.ok) {
      console.log(response);
      throw new Error('Failed to generate response from GPT-4.');
    }
    const { choices } = await response.json();
    const chatbotResponse = choices[0].message.content;
    return chatbotResponse;
  } catch (error) {
    termback.log.push('Error: '+ error.message);
    return "";
  }
}

\/\/ Helper function to render a message in the chat window
function renderMessage(sender, content) {
  termback.input = "";
  termback.output = "";
  termback.log.push('<strong>'+sender+':<\/strong> '+content);
  termback.insertHTML(term);
}

\/\/ Retrieve messages from localStorage if any
const storedMessages = localStorage.getItem('chatMessages')?? "";
const chatMessages = storedMessages ? JSON.parse(storedMessages) : [];
function rmMessages(){
  localStorage.removeItem('chatMessages');
}
termback.addCommand("clear-gpt", () => {rmMessages()});

\/\/ Helper function to save messages to localStorage
function saveMessages() {
  localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
}
\/\/ Load GPT-4 model (Assuming you have GPT-4 implemented as a separate file)
\/\/ Function to handle user input and generate responses
async function handleUserInput(_userInput) {
  var userInput = _userInput.value;
  var message = _userInput.value.split(" ");
  var midmessage = message.splice(1);
  console.log("message = "+message);
  console.log("midmessage = "+midmessage);
  var transformMessage = "";
  midmessage.forEach((word)=>{transformMessage += " "+word})

  \/\/ Save user input to messages
  chatMessages.push({ role: 'user', content: transformMessage });
  saveMessages();

  \/\/ Render user message
  renderMessage('user', userInput);

  \/\/ Generate response using GPT-4 model
  const response = await generateResponse(chatMessages);
  if(response.length > 0){
  \/\/ Save the response to messages
  chatMessages.push({ role: 'assistant', content: response });
  saveMessages();
  }
  \/\/ Render chatbot response
  renderMessage('assistant', response);

  \/\/ Clear user input field
  document.getElementById('input').value = '';
}



\/\/ Load chat messages from localStorage and render them
function loadChatMessages() {
  chatMessages.forEach(message => {
    renderMessage(message.role, message.content);
  });
}

\/\/ Call the function to load chat messages when the page loads
loadChatMessages();


 `;
this.PyImports = "import json\n";
this.NodeJS = false;
this.JSClientApi = true;
this.BaseUrl = null;
this.Authorize = false;
this.XAssembly = null;
this.XHelper = null;
this.XTagContext = null;
this.XTagOutput = null;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
  // Add it to the InnerHTML property of the object
//  window[`26b19082-57f2-47c7-8bf6-0a348c8f5a6a${elCount}`].InnerHTML = body;
//  window[`26b19082-57f2-47c7-8bf6-0a348c8f5a6a${elCount}`].Render(window[`26b19082-57f2-47c7-8bf6-0a348c8f5a6a${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`  
  <!-- component -->

<style>
textarea:focus{
  outline:none;
}
.xin{
    background:black;
    color:white;
    width:100%;
    border:none !important;
    outline:none !important;
    resize:none;
    margin-top:20px;
    min-height:300px;
}

.xin:focus{
    background:black;
    color:white;
    width:100%;
    border:none !important;
    outline:none !important;
    --tw-ring-color: #0000;
}
.prompt{
    margin-bottom: -4em;
}
.terminal-sim{
    width:100%;
    margin:0px;
    padding-bottom:20px;
}
#terminal{
    background:black;
    color:white;
    margin-top:20px;
    padding-bottom:20px;
}

#terminal::after {
   content:"$";
   position: absolute;
   display:inline-block;
   margin: 40px 0px 0px 5px;
   color:blue;
   z-index:10;
}

<\/style>
  <div class="flex mx-0 w-full">
    <div class="flex w-full items-center mt-32 rounded-2xl shadow-2xl scrollbar subpixel-antialiased bg-black border-black mx-auto overflow-none flex-col">
      <div class="flex items-center h-6 mx-0 w-full rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
        <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
        <\/div>
        <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
        <\/div>
        <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
        <\/div>
        <div class="mx-auto pr-16" id="terminaltitle">
          <p class="text-center text-sm">${this.TerminalTitle}<\/p>

        <\/div>
      <\/div>
      <div id="terminal" class="scrollbar flex flex-col m-0 w-full rounded-2xl ">
        
      <\/div>
      <textarea id="input" class="scrollbar flex rounded-2xl p-4 mx-0 xin overflow ring-0 focus:ring-0 focus:outline-0" type="text"><\/textarea>
    <\/div>
  <form class="mt-24" id="user-input-form">
    <input type="text" id="user-input" \/>
    <button type="submit">Send<\/button>
  <\/form>
  <div id="chat-window"><\/div>
  <\/div>


  
`);
                
    window.addEventListener('DOMContentLoaded', (event) => {
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 
function Terminal(){
  \/\/ Variables
  this.currentDirectory = "\/"
  this.log = [];
  this.history = {};
  this.commands = {}; \/\/ Empty object to store command functions
  this.promptText = ''; \/\/ Prompt text
  this.input = ''; \/\/ User input text
  this.output = 'Hello, user... This is the new tailwind prompt from Xavier.... It can be a challenge to make cool toys... this one we think has great potential'; \/\/ Output text
  this.history = [];
  this.localStorageKey = 'powerShellLikeFileSystem';
  this.fileSystem = {};
  this.saveFileSystem = () => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.fileSystem));
  }
  \/\/ Add Command Function
  this.addCommand = (commandName, commandFunc) => {
    this.commands[commandName] = commandFunc;
  };

  \/\/ Execute Command Function
  this.executeCommand = (commandText) => {
    var commandName = commandText.split(' ')[0];
    var commandArgs = commandText.split(' ').slice(1);
try{
    \/\/ Check if command exists
    if (this.commands[commandName]) {
      \/\/ Execute command
      this.commands[commandName](commandArgs);

    } else {
      \/\/ Set output text
      this.output = \`Command not recognized: \`+commandName;
    }
}catch(ex){this.output = "Error Detected: " + ex}
  };
  this.renderHTML = () => {
    let htmlText = '';
    let log = '';
    this.log.forEach((p) => {log += \`<div class="block">\`+p+\`<\/div>\`});
    htmlText += \`<div class="terminal-sim flex flex-col items-start">\`;
    htmlText += log;
    htmlText += \`  <div class="relative prompt z-10">\`+this.promptText+\`<\/div>\`;
    htmlText += \`<\/div>\`;
    return htmlText;
  }
  \/\/ Insert HTML Function
  this.insertHTML = (parentElement) => {
    parentElement.innerHTML = this.renderHTML();
  };

  \/\/ Built-In Commands
    \/\/ Command functions

  \/\/ Change directory
  this.cd = (args) => {
    var preDir = this.currentDirectory;
    var newPath = args[0] || '\/';
    var pathParts = newPath.split('\/');
    var currentPath = {};
    \/\/ Resolve relative paths
    if (newPath.startsWith('.')) {
      const currentPathParts = this.currentDirectory.split('\/');
      currentPathParts.pop(); \/\/ Remove current directory
      pathParts.forEach((part) => {
        if (part === '..') {
          currentPathParts.pop();
        } else {
          currentPathParts.push(part);
        }
      });
      this.currentDirectory = currentPathParts.join('\/');
    } else {
      this.currentDirectory = newPath;
    }
currentPath = this.fileSystem[this.currentDirectory]
    if (!currentPath || !currentPath.isDirectory) {
      this.output = this.currentDirectory+' Directory not found.';
      this.currentDirectory = preDir;
      return;
    }

    this.output = 'Current directory: '+this.currentDirectory;
  }

  \/\/ List files and directories
  this.ls = (args) => {
  this.output = "";
  var currentPath = this.fileSystem[this.currentDirectory];
    if (!currentPath || !currentPath.isDirectory) {
      this.output = 'Directory not found.';
      return;
    }
    currentPath.content.items.forEach((name) => {
      const item = this.fileSystem[item.fullname];
      const type = item.isDirectory ? 'Directory' : 'File';
      this.output = "";
      this.log.push(name + " " + type);
    });
  }

  \/\/ Create a new directory
  this.md = (args) => {
    var dirName = args[0];
    if (!dirName) {
      this.output = 'Please provide a directory name.';
      return;
    }
    var path = this.currentDirectory + '\/' + dirName;
    path.replace(".\/","");
    
    if(dirName[0] === "\/"){
    path = dirName
    }
    if (this.fileSystem[path]) {
      console.log('Directory already exists.');
      return;
    }
    var pathParts = path.split("\/");
        pathParts.pop();
    var parPath = pathParts.join("\/");
    if(this.currentDirectory === '\/'){
      parPath = this.currentDirectory;
    }
    console.log(parPath)
    
    parent = this.fileSystem[parPath];
    parent.content.items = [];
    parent.content.items.push({fullname: path})
    this.fileSystem[path] = { isDirectory: true, content: {} };
    this.saveFileSystem();
    this.output = 'Created directory: '+path;
  }
  this.clear = () =>{
    this.log = [];
    this.output = "";
  }

  \/\/ Remove a file or directory
  this.rm = (args) => {
    var targetName = args[0];
    if (!targetName) {
      this.output = 'Please provide a target name.';
      return;
    }
    var targetPath = this.currentDirectory + '\/' + targetName;
    var target = this.fileSystem[targetPath];
    if (!target) {
      this.output = 'File or directory not found.';
      return;
    }
    if (target.isDirectory) {
      if (Object.keys(target.content).length > 0) {
        this.output = 'Directory is not empty. Use "rm -Force" to delete it.';
        return;
      }
      delete this.fileSystem[targetPath];
      this.saveFileSystem();
      this.output = 'Deleted directory: ' +targetPath;
    } else {
      delete this.fileSystem[targetPath];
      this.saveFileSystem();
      this.output = 'Deleted file: ' + targetPath;
    }
  }

  \/\/ Create a new file
  this.newFile = (args) => {
    var fileName = args[0];
    if (!fileName) {
      console.log('Please provide a file name.');
      return;
    }
    var filePath = this.currentDirectory + '\/' + fileName;
    if (this.fileSystem[filePath]) {
      this.output = 'File already exists.';
      return;
    }
    this.fileSystem[filePath] = { isDirectory: false, content: '' };
    this.saveFileSystem();
    this.output = 'Created file: '+ filePath;
  }
}

var term = document.getElementById("terminal");
var termback = new Terminal();
\/\/ termback.addCommand('cd', termback.cd.bind(termback));
\/\/ termback.addCommand('ls', termback.ls.bind(termback));
\/\/ termback.addCommand('md', termback.md.bind(termback));
\/\/ termback.addCommand('rm', termback.rm.bind(termback));
\/\/ termback.addCommand('del', termback.rm.bind(termback))
\/\/ termback.addCommand('clear', termback.clear.bind(termback))

\/\/ termback.addCommand('new-item', termback.newFile.bind(termback));
    \/\/ Load file system from localStorage if available
    var savedFileSystem = localStorage.getItem(termback.localStorageKey);
    if (savedFileSystem) {
      termback.fileSystem = JSON.parse(savedFileSystem);
    }

var inString = false;
var bookmark = -1;
termback.insertHTML(term);
var input = document.getElementById("input");

if(input){
termback.addCommand('clear',() => termback.clear());
termback.addCommand('askai',async () => await handleUserInput(input));
    input.addEventListener('keyup', (e) => {
        console.log(e);
        termback.input = input.value;
            if (e.keyCode == 38 || e.key === 'ArrowUp')
            {
                bookmark++
                if(bookmark > termback.history.length-1){
                    bookmark = termback.history.length;
                }
                input.value = termback.history[bookmark];
            }
            if (e.keyCode == 40 || e.key === 'ArrowDown')
            {
                bookmark--
                if(bookmark < 0){
                    bookmark = -1;
                       input.value = "";
                }
                else{
                    input.value = termback.history[bookmark];
                }
            }
        
            if (e.keyCode == 10 || e.keyCode == 13) \/\/ && e.ctrlKey to add the control key
            {
                console.log("Exectuting Command: " + input.value);
                try{
                    termback.log.push(termback.input);
                    termback.history.unshift(termback.input);
                    if(!term.inString){
                        var commands = input.value.slice(";");
                        if(Array.isArray(commands)){
                            commands.forEach((Input) => {
                                termback.executeCommand(Input);
                                termback.log.push(termback.output);
                            });
                        }
                        else{
                            termback.executeCommand(termback.input);
                            termback.log.push(termback.output);
                        }
                    }
                }catch(ex){termback.log.push(ex);}
                termback.insertHTML(term);
            }
      });
}
else{
  console.log("no input detected... make sure to add your id tag");
}
\/\/ gpt4Chat.js

var apiKey = '${this.OpenAIKey}'; \/\/ Replace with your actual API key
var apiEndpoint = 'https:\/\/api.openai.com\/v1\/chat\/completions';

console.log(apiKey);
async function generateResponse(messages) {
  var hedrs = new Headers();
  hedrs.append("Content-Type","application\/json");
  hedrs.append("Authorization", "Bearer " + apiKey)
  
  const requestBody = messages;


  const req =  JSON.stringify({"model":"gpt-4", "messages": requestBody})
  var reqOpts = {
    method: 'POST',
    headers: hedrs,
    body: req,
    redirect: 'follow'
  }
    console.log(req);
  try {
    const response = await fetch(apiEndpoint, reqOpts);
  console.log(requestBody);
    if (!response.ok) {
      console.log(response);
      throw new Error('Failed to generate response from GPT-4.');
    }
    const { choices } = await response.json();
    const chatbotResponse = choices[0].message.content;
    return chatbotResponse;
  } catch (error) {
    termback.log.push('Error: '+ error.message);
    return "";
  }
}

\/\/ Helper function to render a message in the chat window
function renderMessage(sender, content) {
  termback.input = "";
  termback.output = "";
  termback.log.push('<strong>'+sender+':<\/strong> '+content);
  termback.insertHTML(term);
}

\/\/ Retrieve messages from localStorage if any
const storedMessages = localStorage.getItem('chatMessages')?? "";
const chatMessages = storedMessages ? JSON.parse(storedMessages) : [];
function rmMessages(){
  localStorage.removeItem('chatMessages');
}
termback.addCommand("clear-gpt", () => {rmMessages()});

\/\/ Helper function to save messages to localStorage
function saveMessages() {
  localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
}
\/\/ Load GPT-4 model (Assuming you have GPT-4 implemented as a separate file)
\/\/ Function to handle user input and generate responses
async function handleUserInput(_userInput) {
  var userInput = _userInput.value;
  var message = _userInput.value.split(" ");
  var midmessage = message.splice(1);
  console.log("message = "+message);
  console.log("midmessage = "+midmessage);
  var transformMessage = "";
  midmessage.forEach((word)=>{transformMessage += " "+word})

  \/\/ Save user input to messages
  chatMessages.push({ role: 'user', content: transformMessage });
  saveMessages();

  \/\/ Render user message
  renderMessage('user', userInput);

  \/\/ Generate response using GPT-4 model
  const response = await generateResponse(chatMessages);
  if(response.length > 0){
  \/\/ Save the response to messages
  chatMessages.push({ role: 'assistant', content: response });
  saveMessages();
  }
  \/\/ Render chatbot response
  renderMessage('assistant', response);

  \/\/ Clear user input field
  document.getElementById('input').value = '';
}



\/\/ Load chat messages from localStorage and render them
function loadChatMessages() {
  chatMessages.forEach(message => {
    renderMessage(message.role, message.content);
  });
}

\/\/ Call the function to load chat messages when the page loads
loadChatMessages();


 `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new XTERMINAL()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('DOMContentLoaded', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new XTERMINAL(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
        console.log(`${this.Name} Changed!`);
        console.log(this);
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('xterminal');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
 var Components = new COMPONENTS();if(window.location.pathname === Components.Route && Components.ShouldRender === true || Components.Route === '' && Components.ShouldRender === true){await Components.renderXidElements(document.body);}var Documentation = new DOCUMENTATION();if(window.location.pathname === Documentation.Route && Documentation.ShouldRender === true || Documentation.Route === '' && Documentation.ShouldRender === true){await Documentation.renderXidElements(document.body);}var Homepage = new HOMEPAGE();if(window.location.pathname === Homepage.Route && Homepage.ShouldRender === true || Homepage.Route === '' && Homepage.ShouldRender === true){await Homepage.renderXidElements(document.body);}var Ssr = new SSR();if(window.location.pathname === Ssr.Route && Ssr.ShouldRender === true || Ssr.Route === '' && Ssr.ShouldRender === true){await Ssr.renderXidElements(document.body);}var AuthCallback = new AUTHCALLBACK();if(window.location.pathname === AuthCallback.Route && AuthCallback.ShouldRender === true || AuthCallback.Route === '' && AuthCallback.ShouldRender === true){await AuthCallback.renderXidElements(document.body);}var ForgotPassword = new FORGOTPASSWORD();if(window.location.pathname === ForgotPassword.Route && ForgotPassword.ShouldRender === true || ForgotPassword.Route === '' && ForgotPassword.ShouldRender === true){await ForgotPassword.renderXidElements(document.body);}var Login = new LOGIN();if(window.location.pathname === Login.Route && Login.ShouldRender === true || Login.Route === '' && Login.ShouldRender === true){await Login.renderXidElements(document.body);}var Register = new REGISTER();if(window.location.pathname === Register.Route && Register.ShouldRender === true || Register.Route === '' && Register.ShouldRender === true){await Register.renderXidElements(document.body);}var ResetPassword = new RESETPASSWORD();if(window.location.pathname === ResetPassword.Route && ResetPassword.ShouldRender === true || ResetPassword.Route === '' && ResetPassword.ShouldRender === true){await ResetPassword.renderXidElements(document.body);}var Anonymous = new ANONYMOUS();if(window.location.pathname === Anonymous.Route && Anonymous.ShouldRender === true || Anonymous.Route === '' && Anonymous.ShouldRender === true){await Anonymous.renderXidElements(document.body);}var Authorize = new AUTHORIZE();if(window.location.pathname === Authorize.Route && Authorize.ShouldRender === true || Authorize.Route === '' && Authorize.ShouldRender === true){await Authorize.renderXidElements(document.body);}var MainNav = new MAINNAV();if(window.location.pathname === MainNav.Route && MainNav.ShouldRender === true || MainNav.Route === '' && MainNav.ShouldRender === true){await MainNav.renderXidElements(document.body);}var SimpleNav = new SIMPLENAV();if(window.location.pathname === SimpleNav.Route && SimpleNav.ShouldRender === true || SimpleNav.Route === '' && SimpleNav.ShouldRender === true){await SimpleNav.renderXidElements(document.body);}var WorkNav = new WORKNAV();if(window.location.pathname === WorkNav.Route && WorkNav.ShouldRender === true || WorkNav.Route === '' && WorkNav.ShouldRender === true){await WorkNav.renderXidElements(document.body);}var XBuilder = new XBUILDER();if(window.location.pathname === XBuilder.Route && XBuilder.ShouldRender === true || XBuilder.Route === '' && XBuilder.ShouldRender === true){await XBuilder.renderXidElements(document.body);}var XCard = new XCARD();if(window.location.pathname === XCard.Route && XCard.ShouldRender === true || XCard.Route === '' && XCard.ShouldRender === true){await XCard.renderXidElements(document.body);}var MainFooter = new MAINFOOTER();if(window.location.pathname === MainFooter.Route && MainFooter.ShouldRender === true || MainFooter.Route === '' && MainFooter.ShouldRender === true){await MainFooter.renderXidElements(document.body);}var XNav = new XNAV();if(window.location.pathname === XNav.Route && XNav.ShouldRender === true || XNav.Route === '' && XNav.ShouldRender === true){await XNav.renderXidElements(document.body);}var XTerminal = new XTERMINAL();if(window.location.pathname === XTerminal.Route && XTerminal.ShouldRender === true || XTerminal.Route === '' && XTerminal.ShouldRender === true){await XTerminal.renderXidElements(document.body);} Array.prototype.Where = function(predicate){
	 var result = [];
	 for(var i=0; i < this.length; i++){
	 	 if(predicate(this[i])){
	 	 	 result.push(this[i]);
	 	 }
	 }
	 return result;
}

 Array.prototype.First = function(predicate){
	 var result = [];
	 for(var i=0; i < this.length; i++){
	 	 if(predicate(this[i])){
	 	 	 result.push(this[i]);
	 	 }
	 }
	 return result[0];
}

 Array.prototype.SingleOrDefault = function(predicate){
	 for(var i=0; i < this.length; i++){
	 	 if(predicate(this[i])){
	 	 	 return this[i];
	 	 }
	 }
	 return null;
}

 })()