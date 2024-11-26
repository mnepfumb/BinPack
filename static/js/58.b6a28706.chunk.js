(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[58],{531:function(e,t){var r="undefined"!==typeof self?self:this,n=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();!function(e){!function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,a="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),i="FormData"in e,o="ArrayBuffer"in e;if(o)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&s.indexOf(Object.prototype.toString.call(e))>-1};function u(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function c(e){return"string"!==typeof e&&(e=String(e)),e}function h(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function y(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function p(e){var t=new FileReader,r=f(t);return t.readAsArrayBuffer(e),r}function b(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:a&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():o&&a&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=b(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=b(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var e=y(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var e=y(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=f(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=u(e),t=c(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},d.prototype.delete=function(e){delete this.map[u(e)]},d.prototype.get=function(e){return e=u(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(u(e))},d.prototype.set=function(e,t){this.map[u(e)]=c(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),h(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),h(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),h(e)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var O=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function j(e,t){var r=(t=t||{}).body;if(e instanceof j){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=function(e){var t=e.toUpperCase();return O.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function g(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),a=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(a))}})),t}function v(e){var t=new d;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var a=r.join(":").trim();t.append(n,a)}})),t}function x(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}j.prototype.clone=function(){return new j(this,{body:this._bodyInit})},m.call(j.prototype),m.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];x.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(T){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function A(e,r){return new Promise((function(n,i){var o=new j(e,r);if(o.signal&&o.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function l(){s.abort()}s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:v(s.getAllResponseHeaders()||"")};e.url="responseURL"in s?s.responseURL:e.headers.get("X-Request-URL");var t="response"in s?s.response:s.responseText;n(new x(t,e))},s.onerror=function(){i(new TypeError("Network request failed"))},s.ontimeout=function(){i(new TypeError("Network request failed"))},s.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},s.open(o.method,o.url,!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&a&&(s.responseType="blob"),o.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),o.signal&&(o.signal.addEventListener("abort",l),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",l)}),s.send("undefined"===typeof o._bodyInit?null:o._bodyInit)}))}A.polyfill=!0,e.fetch||(e.fetch=A,e.Headers=d,e.Request=j,e.Response=x),t.Headers=d,t.Request=j,t.Response=x,t.fetch=A,Object.defineProperty(t,"__esModule",{value:!0})}({})}(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var a=n;(t=a.fetch).default=a.fetch,t.fetch=a.fetch,t.Headers=a.Headers,t.Request=a.Request,t.Response=a.Response,e.exports=t},715:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r(5),i=r(171),o=r(67),s=r(11),l=r(33),u=r(46),c=r(13),h=r(709),d=r(268),y=r(251),f=r(531),p=r.n(f),b=r(1),m=r.n(b),O=r(2),j=Object(a.a)(h.a)((function(){return{width:300}}));function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){return setTimeout(t,e)}))}function v(){var e=m.a.useState(!1),t=Object(c.a)(e,2),r=t[0],n=t[1],a=m.a.useState([]),i=Object(c.a)(a,2),o=i[0],h=i[1],f=r&&0===o.length;return m.a.useEffect((function(){var e=!0;if(f)return Object(u.a)(Object(l.a)().mark((function t(){var r,n;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()("https://country.register.gov.uk/records.json?page-size=5000");case 2:return r=t.sent,t.next=5,g(3e3);case 5:return t.next=7,r.json();case 7:n=t.sent,e&&h(Object.keys(n).map((function(e){return n[e].item[0]})));case 9:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[f]),m.a.useEffect((function(){r||h([])}),[r]),Object(O.jsx)(j,{open:r,options:o,loading:f,id:"asynchronous-demo",onOpen:function(){return n(!0)},onClose:function(){return n(!1)},getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(O.jsx)(d.a,Object(s.a)(Object(s.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Asynchronous",InputProps:Object(s.a)(Object(s.a)({},e.InputProps),{},{endAdornment:Object(O.jsxs)(m.a.Fragment,{children:[f?Object(O.jsx)(y.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}var x=r(679),w=Object(a.a)(h.a)((function(){return{width:300,marginBottom:"16px"}})),A=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}],T=Object(x.a)(),B=function(){var e=m.a.useState(null),t=Object(c.a)(e,2),r=t[0],n=t[1];return Object(O.jsxs)(b.Fragment,{children:[Object(O.jsx)(w,{options:A,getOptionLabel:function(e){return e.label},renderInput:function(e){return Object(O.jsx)(d.a,Object(s.a)(Object(s.a)({},e),{},{label:"Combo box",variant:"outlined",fullWidth:!0}))}}),Object(O.jsx)(w,{value:r,options:A,onChange:function(e,t){t&&t.inputValue?n({label:t.inputValue}):n(t)},filterOptions:function(e,t){var r=T(e,t);return""!==t.inputValue&&r.push({inputValue:t.inputValue,label:'Add "'.concat(t.inputValue,'"')}),r},getOptionLabel:function(e){return"string"===typeof e?e:e.inputValue?e.inputValue:e.label},renderOption:function(e){return e.label},style:{width:300},freeSolo:!0,renderInput:function(e){return Object(O.jsx)(d.a,Object(s.a)(Object(s.a)({},e),{},{label:"Free solo with text demo",variant:"outlined",fullWidth:!0}))}}),Object(O.jsx)(w,{options:A,getOptionLabel:function(e){return e.label},getOptionDisabled:function(e){return e===A[0]||e===A[2]},renderInput:function(e){return Object(O.jsx)(d.a,Object(s.a)(Object(s.a)({},e),{},{label:"Disabled option",variant:"outlined",fullWidth:!0}))}})]})},S=r(641),E=r(59),P=r(173),I=function(){var e=Object(E.a)();return Object(O.jsxs)(P.a,{sx:{width:500,"& > * + *":{marginTop:e.spacing(3)}},children:[Object(O.jsx)(h.a,{multiple:!0,id:"tags-standard",options:D,getOptionLabel:function(e){return e.title},defaultValue:[D[13]],renderInput:function(e){return Object(O.jsx)(d.a,Object(s.a)(Object(s.a)({},e),{},{variant:"standard",label:"Multiple values",placeholder:"Favorites",fullWidth:!0}))}}),Object(O.jsx)(h.a,{multiple:!0,id:"tags-outlined",options:D,getOptionLabel:function(e){return e.title},defaultValue:[D[13]],filterSelectedOptions:!0,renderInput:function(e){return Object(O.jsx)(d.a,Object(s.a)(Object(s.a)({},e),{},{variant:"outlined",label:"filterSelectedOptions",placeholder:"Favorites",fullWidth:!0}))}}),Object(O.jsx)(h.a,{multiple:!0,id:"tags-filled",options:D.map((function(e){return e.title})),defaultValue:[D[13].title],freeSolo:!0,renderTags:function(e,t){return e.map((function(e,r){return Object(O.jsx)(S.a,Object(s.a)({variant:"outlined",label:e},t({index:r})))}))},renderInput:function(e){return Object(O.jsx)(d.a,Object(s.a)(Object(s.a)({},e),{},{variant:"filled",label:"freeSolo",placeholder:"Favorites",fullWidth:!0}))}})]})},D=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"L\xe9on: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL\xb7E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Am\xe9lie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],_=Object(a.a)("div")((function(e){var t,r=e.theme;return t={margin:"30px"},Object(n.a)(t,r.breakpoints.down("sm"),{margin:"16px"}),Object(n.a)(t,"& .breadcrumb",Object(n.a)({marginBottom:"30px"},r.breakpoints.down("sm"),{marginBottom:"16px"})),t}));t.default=function(){return Object(O.jsxs)(_,{children:[Object(O.jsx)(i.a,{className:"breadcrumb",children:Object(O.jsx)(o.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Autocomplete"}]})}),Object(O.jsx)(o.k,{title:"autocomplete combo",children:Object(O.jsx)(B,{})}),Object(O.jsx)(i.a,{py:"12px"}),Object(O.jsx)(o.k,{title:"Asyncronous Autocomplete",children:Object(O.jsx)(v,{})}),Object(O.jsx)(i.a,{py:"12px"}),Object(O.jsx)(o.k,{title:"Asyncronous Autocomplete",children:Object(O.jsx)(I,{})})]})}}}]);