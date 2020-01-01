(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(1),o=t(9),a=(t(0),t(150)),i={id:"serializing",title:"Serializing"},c={id:"concepts/serializing",title:"Serializing",description:"### Serializing",source:"@site/docs/concepts/serializing.md",permalink:"/r/docs/concepts/serializing"},l=[{value:"Serializing",id:"serializing",children:[]},{value:"Resolvers",id:"resolvers",children:[]}],s={rightToc:l},p="wrapper";function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"serializing"},"Serializing"),Object(a.b)("p",null,"We can serialize the editor's current state of Nodes into JSON by calling the ",Object(a.b)("inlineCode",{parentName:"p"},"serialize")," method provided by the ",Object(a.b)("inlineCode",{parentName:"p"},"useEditor")," hook"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Toolbar = () => {\n  const { query } = useEditor();\n\n  return (\n    <a onClick={() => console.log(query.serialize())}>Serialize</a>\n  )\n}\n")),Object(a.b)("h2",{id:"resolvers"},"Resolvers"),Object(a.b)("p",null,"Craft.js exports the nodes in its internal state into a serialzable JSON format. For this to be possible, complex objects such as functions cannot be included - which means User Components cannot be serialised. "),Object(a.b)("p",null,"To overcome this is why when setting up Craft.js with your React application, one of the first things you have to do is to specify a map of user components in the ",Object(a.b)("inlineCode",{parentName:"p"},"resolver")," prop of the ",Object(a.b)("inlineCode",{parentName:"p"},"Manager")," component."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import {Text, Hero, Container} from ".../myproject/components";\n\nconst App = () => {\n  return (\n    <Manager resolvers={{\n      "MyText" : Text\n    }}>\n      <Frame>\n        <Canvas is="div">\n          <h1>Hi</h1>\n          <Text text="Hi" />\n        </Canvas>\n      </Frame>\n    </Manager>\n  )\n}\n')),Object(a.b)("p",null,"Given the above example, when a ",Object(a.b)("inlineCode",{parentName:"p"},"Node")," that is of the type  ",Object(a.b)("inlineCode",{parentName:"p"},"Text")," is serialised, it will return something like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"node-randomId": {\n  "type": {\n    "resolvedName": "MyText"\n  },\n  "props": {\n    "text" : "Hi World!"\n  },\n  "parent": "canvas-ROOT",\n  "displayName": "Card"\n  ...\n}\n')),Object(a.b)("p",null,"Notice how the ",Object(a.b)("inlineCode",{parentName:"p"},"resolvedName")," is ",Object(a.b)("inlineCode",{parentName:"p"},"MyText")," rather than the name of the component, ",Object(a.b)("inlineCode",{parentName:"p"},"Text"),". This is because in our ",Object(a.b)("inlineCode",{parentName:"p"},"resolver"),", we mapped ",Object(a.b)("inlineCode",{parentName:"p"},"MyText")," to our Text component. Now, when we deserialize - Craft.js is easily able to find ",Object(a.b)("inlineCode",{parentName:"p"},"MyText")," in our resolver, and knows the component it refers to."))}b.isMDXComponent=!0},150:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return t?o.a.createElement(m,c({ref:n},s,{components:t})):o.a.createElement(m,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);