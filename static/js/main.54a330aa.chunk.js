(this.webpackJsonpgdrive=this.webpackJsonpgdrive||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a.n(c),i=a(27),n=a.n(i),l=(a(85),a(7)),o=(a(86),a.p+"static/media/glogo.42e0a7e4.png"),j=a(58),r=a.n(j),d=a(66),f=a.n(d),A=a(67),b=a.n(A),h=a(68),O=a.n(h),x=a(69),u=a.n(x),m=a(128),p=a(65),v=a.n(p),F=a(1);var K=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(!0),j=Object(l.a)(n,2),d=j[0];return j[1],Object(F.jsxs)(F.Fragment,{children:[d?Object(F.jsx)("div",{class:"banner",children:Object(F.jsx)("div",{class:"banner__content",children:Object(F.jsxs)("div",{class:"banner__text",children:[Object(F.jsx)("strong",{children:"Note:"})," The backend has been temporarily disabled for demo purposes."]})})}):null,Object(F.jsxs)("div",{className:"header",children:[Object(F.jsxs)("div",{className:"header__logo",children:[Object(F.jsx)("img",{src:o,alt:""}),Object(F.jsx)("span",{children:"E-Drive "})]}),Object(F.jsxs)("div",{className:"header__search",children:[Object(F.jsx)("button",{onClick:function(){console.log("search for ".concat(s," was made.")),""!==s&&(e.setsearchState(!0),e.setsearchValue(s))},children:Object(F.jsx)(r.a,{})}),Object(F.jsx)("input",{value:s,type:"text",placeholder:"search in drive",onChange:function(e){i(e.target.value)}}),""===s?null:Object(F.jsx)("button",{onClick:function(){i(""),e.setsearchState(!1)},children:Object(F.jsx)(v.a,{})}),Object(F.jsx)(f.a,{className:"AlignIcon"})]}),Object(F.jsxs)("div",{className:"header__icons",children:[Object(F.jsx)("span",{children:Object(F.jsx)(b.a,{})}),Object(F.jsx)("span",{id:"SettingsIcon",children:Object(F.jsx)(O.a,{})}),Object(F.jsx)("span",{children:Object(F.jsx)(u.a,{})}),Object(F.jsx)("span",{children:Object(F.jsx)(m.a,{src:e.photoURL})})]})]})]})},R=(a(93),a.p+"static/media/addfile.c8772922.png"),U=a.p+"static/media/newfile.6a7f6e79.ico",P=a(70),N=a.n(P),g=a(71),C=a.n(g),B=a(72),w=a.n(B),H=a(73),D=a.n(H),y=a(74),Q=a.n(y),S=a(126),k=a(29),X=k.a.initializeApp({apiKey:"AIzaSyBBfJRjyg2mKQauPbP7L-XGE8R2kWzVNEI",authDomain:"gdrive-dev-2021.firebaseapp.com",projectId:"gdrive-dev-2021",storageBucket:"gdrive-dev-2021.appspot.com",messagingSenderId:"37814276828",appId:"1:37814276828:web:65733372d919cec3fada19"}).firestore(),L=k.a.storage(),z=k.a.auth(),I=new k.a.auth.GoogleAuthProvider;var M=function(e){var t=Object(c.useState)(!1),a=Object(l.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(!1),o=Object(l.a)(n,2),j=o[0],r=o[1],d=Object(c.useState)(!1),f=Object(l.a)(d,2),A=f[0],b=f[1],h=Object(c.useState)(null),O=Object(l.a)(h,2),x=O[0],u=O[1],m=Object(c.useState)(!1),p=Object(l.a)(m,2),v=p[0],K=p[1],P=Object(c.useState)(""),g=Object(l.a)(P,2),B=g[0],H=g[1];return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(S.a,{open:s,onClose:function(){i(!1),K(!1)},children:Object(F.jsx)("div",{className:"modal_pop",children:Object(F.jsxs)("form",{children:[Object(F.jsx)("div",{className:"modalHeading",children:Object(F.jsx)("h3",{children:"Select the file you want to upload"})}),Object(F.jsx)("div",{className:"modalBody",children:j?Object(F.jsx)("p",{className:"uploading",children:"Uploading"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("input",{className:"file",type:"file",onChange:function(e){e.target.files[0]&&u(e.target.files[0])}}),Object(F.jsx)("input",{type:"submit",value:"UPLOAD",className:"post_submit",onClick:function(t){t.preventDefault(),r(!0),L.ref("Myfiles/".concat(e.userData.displayName,"/").concat(x.name)).put(x).then((function(t){L.ref("Myfiles/".concat(e.userData.displayName)).child(x.name).getDownloadURL().then((function(a){X.collection("".concat(e.userData.displayName)).add({timestamp:k.a.firestore.FieldValue.serverTimestamp(),filename:x.name,fileURL:a,username:e.userData.displayName,userId:e.userData.uid,size:t._delegate.bytesTransferred,parentFolderID:e.folderID,folderID:"",type:"file"}),r(!1),u(null),i(!1)}))}))}})]})})]})})}),Object(F.jsx)(S.a,{open:v,onClose:function(){K(!1)},children:Object(F.jsx)("div",{className:"modal_pop",children:Object(F.jsxs)("form",{children:[Object(F.jsx)("div",{className:"modalHeading",children:Object(F.jsx)("h3",{children:"Create Folder"})}),Object(F.jsx)("div",{className:"modalBody",children:A?Object(F.jsx)("p",{className:"uploading",children:"Creating"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("label",{className:"headtext",children:"Enter the Folder name here"}),Object(F.jsx)("input",{className:"headtext",type:"input",value:B,onChange:function(e){H(e.target.value)}}),Object(F.jsx)("input",{type:"submit",value:"Create",className:"post_submit",onClick:function(t){t.preventDefault(),b(!0),H(B);for(var a="",c="abcdefghijklmnopqrstuvwxyz",s=0;s<5;s++)a+=c[Math.floor(Math.random()*c.length)];L.ref("Myfiles/".concat(e.userData.displayName,"/").concat(B)).put(x).then((function(t){L.ref("Myfiles/".concat(e.userData.displayName)).child(B).getDownloadURL().then((function(t){X.collection("".concat(e.userData.displayName)).add({timestamp:k.a.firestore.FieldValue.serverTimestamp(),filename:B,fileURL:t,userId:e.userData.uid,size:0,parentFolderID:e.folderID,folderID:a,type:"folder"}),H(""),b(!1),K(!1)}))}))}})]})})]})})}),Object(F.jsxs)("div",{className:"sidebar",children:[Object(F.jsxs)("div",{className:"sidebar_btn",children:[Object(F.jsxs)("button",{onClick:function(){i(!0)},children:[Object(F.jsx)("img",{src:U,alt:""}),Object(F.jsx)("span",{children:"New File"})]}),Object(F.jsxs)("button",{onClick:function(){K(!0)},children:[Object(F.jsx)("img",{src:R,alt:""}),Object(F.jsx)("span",{children:"New Folder"})]})]}),Object(F.jsxs)("div",{className:"sidebar__options",children:[Object(F.jsxs)("div",{className:"sidebar__option sidebaroptionActive",children:[Object(F.jsx)(N.a,{}),Object(F.jsx)("span",{children:Object(F.jsx)("b",{children:"My Drive"})})]}),Object(F.jsxs)("div",{className:"sidebar__option",children:[Object(F.jsx)(C.a,{}),Object(F.jsx)("span",{children:"Computers"})]}),Object(F.jsxs)("div",{className:"sidebar__option",children:[Object(F.jsx)(w.a,{}),Object(F.jsx)("span",{children:"Shared with me"})]}),Object(F.jsxs)("div",{className:"sidebar__option",children:[Object(F.jsx)(D.a,{}),Object(F.jsx)("span",{children:"Recent"})]})]}),Object(F.jsx)("hr",{}),Object(F.jsxs)("div",{className:"sidebar__options",children:[Object(F.jsxs)("div",{className:"sidebar__option",children:[Object(F.jsx)(Q.a,{}),Object(F.jsx)("span",{children:"Storage"})]}),Object(F.jsxs)("div",{className:"progress_bar",children:[Object(F.jsx)("progress",{size:"tiny",value:0===e.totalSize?0:e.totalSize/1048576+750,max:15e3}),Object(F.jsxs)("span",{children:[function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=1024,c=t<0?0:t,s=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,i)).toFixed(c))+" "+s[i]}(e.totalSize)," of 15GB used"]})]})]}),Object(F.jsx)("buttton",{onClick:function(){return e.loginState(null)},children:Object(F.jsx)("div",{className:"sidebar_btn logout",children:"Logout"})})]})]})},V=(a(98),a(42)),J=a.n(V),W=a(43),T=a.n(W),q=a(45),E=a.n(q),Y=a(44),Z=a.n(Y),G=a(47),_=a.n(G),$=a(46),ee=a.n($),te=a(48),ae=a.n(te),ce=a(41),se="data:image/jpeg;base64,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";var ie=function(e){var t=0,a=Object(c.useState)([]),s=Object(l.a)(a,2),i=s[0],n=s[1],o=Object(c.useState)(null),j=Object(l.a)(o,2),r=j[0],d=j[1],f=Object(c.useState)(!1),A=Object(l.a)(f,2),b=A[0],h=A[1],O=Object(c.useState)(null),x=Object(l.a)(O,2),u=x[0],m=x[1],p=Object(c.useState)(!1),v=Object(l.a)(p,2),K=v[0],R=v[1],U=Object(c.useState)(!1),P=Object(l.a)(U,2),N=P[0],g=P[1];function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=1024,c=t<0?0:t,s=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,i)).toFixed(c))+" "+s[i]}Object(c.useEffect)((function(){X.collection("".concat(e.userData.displayName)).onSnapshot((function(e){n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);var B=function(t,a,c){h(!0),console.log("File ".concat(t," was deleted")),X.collection("".concat(e.userData.displayName)).where("fileURL","==",a).get().then((function(e){e.forEach((function(e){e.ref.delete()}))}));var s=0;setTimeout((function(){for(s=0;s<i.length;s++)if(i[s].data.fileURL===a){i.splice(s,1);break}y(),d(null),h(!1)}),2e3)},w=function(){d(null)},H=function(){m(null)},D=function(){R(!0),setTimeout((function(){m(null),R(!1)}),2e3)},y=function(){i.map((function(a){"folder"!==a.data.type&&e.settotalSize(t+=a.data.size),0===Q(i)&&e.settotalSize(0)}))},Q=function(e){var t=0,a=0;for(t=0;t<e.length;t++)"file"===e[t].data.type&&a++;return a};return y(),e.searchState?N?Object(F.jsxs)("div",{className:"data",children:[Object(F.jsxs)("div",{className:"data__header",children:[Object(F.jsxs)("div",{className:"data__headerLeft",children:[Object(F.jsx)("p",{children:"My Drive"}),Object(F.jsx)("button",{className:"Root-Btn",onClick:function(){e.setFolderID("/"),g(!1)},children:"Root"})]}),Object(F.jsxs)("div",{className:"data__headerRight",children:[Object(F.jsx)(J.a,{}),Object(F.jsx)(T.a,{})]})]}),Object(F.jsxs)("div",{className:"data__content",children:[Object(F.jsx)("div",{className:"FolderHeading",children:"Folders:"}),Object(F.jsx)("div",{className:"data_grid folder",children:i.map((function(t){if(t.data.parentFolderID===e.folderID&&"folder"===t.data.type)return t.data.filename.toLowerCase().includes(String(e.searchValue))?Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:"data_file",children:Object(F.jsxs)("a",{onClick:function(){e.setFolderID("".concat(t.data.folderID)),g(!0)},children:[Object(F.jsx)("img",{src:se}),Object(F.jsx)("p",{children:t.data.filename})]})})}):null}))}),Object(F.jsxs)("div",{className:"data_list",children:[Object(F.jsxs)("div",{className:"detailsrow",children:[Object(F.jsx)("p",{children:Object(F.jsxs)("b",{children:["Name ",Object(F.jsx)(Z.a,{})]})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Owner"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Created At"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"File Size"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Share"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Delete"})})]}),i.map((function(t){var a;if(t.data.parentFolderID===e.folderID&&"file"===t.data.type)return t.data.filename.toLowerCase().includes(String(e.searchValue))?Object(F.jsxs)("div",{className:"detailsrow",children:[Object(F.jsxs)("p",{children:[" ",Object(F.jsxs)("a",{href:t.data.fileURL,target:"_blank",children:[Object(F.jsx)(E.a,{}),t.data.filename]})]}),Object(F.jsx)("p",{children:t.data.username}),Object(F.jsx)("p",{children:new Date(1e3*(null===(a=t.data.timestamp)||void 0===a?void 0:a.seconds)).toUTCString()}),Object(F.jsx)("p",{children:C(t.data.size)}),Object(F.jsx)("p",{children:Object(F.jsx)("button",{className:"delete",onClick:function(){return m(t.data.fileURL)},children:Object(F.jsx)(ee.a,{})})}),Object(F.jsx)(S.a,{open:t.data.fileURL===u,onClose:H,children:Object(F.jsx)("div",{className:"modal_pop",children:Object(F.jsxs)("form",{children:[Object(F.jsx)("div",{className:"modalHeading",children:Object(F.jsx)("h3",{children:"Copy the Below Link to Share"})}),Object(F.jsx)("div",{className:"modalBody",children:K?Object(F.jsx)("p",{className:"uploading",children:"Copying to Clipboard"}):Object(F.jsxs)(F.Fragment,{children:[" ",Object(F.jsxs)("label",{children:[Object(F.jsx)("input",{className:"link",type:"text",value:u,disabled:!0}),Object(F.jsx)(ce.CopyToClipboard,{text:u,children:Object(F.jsx)("button",{className:"delete",onClick:function(){return D()},children:Object(F.jsx)(_.a,{})})}),Object(F.jsx)("button",{className:"Close",onClick:function(){return m(!1)},children:"Close"})]})]})})]})})}),Object(F.jsx)("div",{className:"del",children:Object(F.jsx)("p",{children:Object(F.jsx)("button",{className:"delete",onClick:function(){return d(t.data.fileURL)},children:Object(F.jsx)(ae.a,{})})})}),Object(F.jsx)(S.a,{open:t.data.fileURL===r,onClose:w,children:Object(F.jsx)("div",{className:"modal_pop",children:Object(F.jsxs)("form",{children:[Object(F.jsx)("div",{className:"modalHeading",children:Object(F.jsx)("h3",{children:"Confirm Delete Operation?"})}),Object(F.jsx)("div",{className:"modalBody",children:b?Object(F.jsx)("p",{className:"uploading",children:"Deleting"}):Object(F.jsxs)(F.Fragment,{children:["  ",Object(F.jsxs)("label",{children:[Object(F.jsx)("button",{className:"Yes",onClick:function(){B(t.data.filename,t.data.fileURL,t.data.size),e.settotalSize(e.totalSize-t.data.size)},children:"Yes"}),Object(F.jsx)("button",{className:"No",onClick:function(){return d(null)},children:"No"})]})]})})]})})})]}):null}))]})]})]}):Object(F.jsxs)("div",{className:"data",children:[Object(F.jsxs)("div",{className:"data__header",children:[Object(F.jsxs)("div",{className:"data__headerLeft",children:[Object(F.jsx)("p",{children:"My Drive"}),Object(F.jsx)("button",{className:"Root-Btn",onClick:function(){e.setFolderID("/"),g(!1)},children:"Root"})]}),Object(F.jsxs)("div",{className:"data__headerRight",children:[Object(F.jsx)(J.a,{}),Object(F.jsx)(T.a,{})]})]}),Object(F.jsx)("div",{className:"data__content",children:Object(F.jsxs)("div",{className:"data_list",children:[Object(F.jsxs)("div",{className:"detailsrow",children:[Object(F.jsx)("p",{children:Object(F.jsxs)("b",{children:["Name ",Object(F.jsx)(Z.a,{})]})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Owner"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Created At"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"File Size"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Share"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Delete"})})]}),i.map((function(t){var a;return t.data.filename.toLowerCase().includes(String(e.searchValue))?Object(F.jsxs)("div",{className:"detailsrow",children:[Object(F.jsxs)("p",{children:[" ",Object(F.jsxs)("a",{href:t.data.fileURL,target:"_blank",children:[Object(F.jsx)(E.a,{}),t.data.filename]})]}),Object(F.jsx)("p",{children:t.data.username}),Object(F.jsx)("p",{children:new Date(1e3*(null===(a=t.data.timestamp)||void 0===a?void 0:a.seconds)).toUTCString()}),Object(F.jsx)("p",{children:C(t.data.size)}),Object(F.jsx)("p",{children:Object(F.jsx)("button",{className:"delete",onClick:function(){return m(t.data.fileURL)},children:Object(F.jsx)(ee.a,{})})}),Object(F.jsx)(S.a,{open:t.data.fileURL===u,onClose:H,children:Object(F.jsx)("div",{className:"modal_pop",children:Object(F.jsxs)("form",{children:[Object(F.jsx)("div",{className:"modalHeading",children:Object(F.jsx)("h3",{children:"Copy the Below Link to Share"})}),Object(F.jsx)("div",{className:"modalBody",children:K?Object(F.jsx)("p",{className:"uploading",children:"Copying to Clipboard"}):Object(F.jsxs)(F.Fragment,{children:[" ",Object(F.jsxs)("label",{children:[Object(F.jsx)("input",{className:"link",type:"text",value:u,disabled:!0}),Object(F.jsx)(ce.CopyToClipboard,{text:u,children:Object(F.jsx)("button",{className:"delete",onClick:function(){return D()},children:Object(F.jsx)(_.a,{})})}),Object(F.jsx)("button",{className:"Close",onClick:function(){return m(!1)},children:"Close"})]})]})})]})})}),Object(F.jsx)("div",{className:"del",children:Object(F.jsx)("p",{children:Object(F.jsx)("button",{className:"delete",onClick:function(){return d(t.data.fileURL)},children:Object(F.jsx)(ae.a,{})})})}),Object(F.jsx)(S.a,{open:t.data.fileURL===r,onClose:w,children:Object(F.jsx)("div",{className:"modal_pop",children:Object(F.jsxs)("form",{children:[Object(F.jsx)("div",{className:"modalHeading",children:Object(F.jsx)("h3",{children:"Confirm Delete Operation?"})}),Object(F.jsx)("div",{className:"modalBody",children:b?Object(F.jsx)("p",{className:"uploading",children:"Deleting"}):Object(F.jsxs)(F.Fragment,{children:["  ",Object(F.jsxs)("label",{children:[Object(F.jsx)("button",{className:"Yes",onClick:function(){B(t.data.filename,t.data.fileURL,t.data.size),e.settotalSize(e.totalSize-t.data.size)},children:"Yes"}),Object(F.jsx)("button",{className:"No",onClick:function(){return d(null)},children:"No"})]})]})})]})})})]}):null}))]})})]}):Object(F.jsxs)("div",{className:"data",children:[Object(F.jsxs)("div",{className:"data__header",children:[Object(F.jsxs)("div",{className:"data__headerLeft",children:[Object(F.jsx)("p",{children:"My Drive"}),Object(F.jsx)("button",{className:"Root-Btn",onClick:function(){e.setFolderID("/"),g(!1)},children:"Root"})]}),Object(F.jsxs)("div",{className:"data__headerRight",children:[Object(F.jsx)(J.a,{}),Object(F.jsx)(T.a,{})]})]}),Object(F.jsxs)("div",{className:"data__content",children:[Object(F.jsx)("div",{className:"FolderHeading",children:"Folders:"}),Object(F.jsx)("div",{className:"data_grid  folder",children:i.map((function(t){if(t.data.parentFolderID===e.folderID&&"folder"===t.data.type)return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:"data_file",children:Object(F.jsxs)("a",{onClick:function(){e.setFolderID("".concat(t.data.folderID)),g(!0)},children:[Object(F.jsx)("img",{src:se}),Object(F.jsx)("p",{children:t.data.filename})]})})})}))}),Object(F.jsxs)("div",{className:"data_list",children:[Object(F.jsxs)("div",{className:"detailsrow",children:[Object(F.jsx)("p",{children:Object(F.jsxs)("b",{children:["Name ",Object(F.jsx)(Z.a,{})]})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Owner"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Created At"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"File Size"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Share"})}),Object(F.jsx)("p",{children:Object(F.jsx)("b",{children:"Delete"})})]}),i.map((function(t){var a;if(t.data.parentFolderID===e.folderID&&"file"===t.data.type)return Object(F.jsxs)("div",{className:"detailsrow",children:[Object(F.jsxs)("p",{children:[" ",Object(F.jsxs)("a",{href:t.data.fileURL,target:"_blank",rel:"noreferrer",children:[Object(F.jsx)(E.a,{}),t.data.filename]})]}),Object(F.jsx)("p",{children:t.data.username}),Object(F.jsx)("p",{children:new Date(1e3*(null===(a=t.data.timestamp)||void 0===a?void 0:a.seconds)).toUTCString()}),Object(F.jsx)("p",{children:C(t.data.size)}),Object(F.jsx)("p",{children:Object(F.jsx)("button",{className:"delete",onClick:function(){return m(t.data.fileURL)},children:Object(F.jsx)(ee.a,{})})}),Object(F.jsx)(S.a,{open:t.data.fileURL===u,onClose:H,children:Object(F.jsx)("div",{className:"modal_pop",children:Object(F.jsxs)("form",{children:[Object(F.jsx)("div",{className:"modalHeading",children:Object(F.jsx)("h3",{children:"Copy the Below Link to Share"})}),Object(F.jsx)("div",{className:"modalBody",children:K?Object(F.jsx)("p",{className:"uploading",children:"Copying to Clipboard"}):Object(F.jsxs)(F.Fragment,{children:[" ",Object(F.jsxs)("label",{children:[Object(F.jsx)("input",{className:"link",type:"text",value:u,disabled:!0}),Object(F.jsx)(ce.CopyToClipboard,{text:u,children:Object(F.jsx)("button",{className:"delete",onClick:function(){return D()},children:Object(F.jsx)(_.a,{})})}),Object(F.jsx)("button",{className:"Close",onClick:function(){return m(!1)},children:"Close"})]})]})})]})})}),Object(F.jsx)("div",{className:"del",children:Object(F.jsx)("p",{children:Object(F.jsx)("button",{className:"delete",onClick:function(){return d(t.data.fileURL)},children:Object(F.jsx)(ae.a,{})})})}),Object(F.jsx)(S.a,{open:t.data.fileURL===r,onClose:w,children:Object(F.jsx)("div",{className:"modal_pop",children:Object(F.jsxs)("form",{children:[Object(F.jsx)("div",{className:"modalHeading",children:Object(F.jsx)("h3",{children:"Confirm Delete Operation?"})}),Object(F.jsx)("div",{className:"modalBody",children:b?Object(F.jsx)("p",{className:"uploading",children:"Deleting"}):Object(F.jsxs)(F.Fragment,{children:["  ",Object(F.jsxs)("label",{children:[Object(F.jsx)("button",{className:"Yes",onClick:function(){return B(t.data.filename,t.data.fileURL,t.data.size)},children:"Yes"}),Object(F.jsx)("button",{className:"No",onClick:function(){return d(null)},children:"No"})]})]})})]})})})]})}))]})]})]})};var ne=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(!1),n=Object(l.a)(i,2),j=n[0],r=n[1],d=Object(c.useState)(""),f=Object(l.a)(d,2),A=f[0],b=f[1],h=Object(c.useState)(0),O=Object(l.a)(h,2),x=O[0],u=O[1],m=Object(c.useState)("/"),p=Object(l.a)(m,2),v=p[0],R=p[1],U=Object(c.useState)(["/"]),P=Object(l.a)(U,2),N=P[0],g=P[1];return Object(c.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("current-user"));s(e)}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("current-user",JSON.stringify(a))})),Object(F.jsx)(F.Fragment,{children:a?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(K,{photoURL:a.photoURL,loginState:s,userData:a,searchState:j,setsearchState:r,searchValue:A,setsearchValue:b}),Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)(M,{loginState:s,userData:a,totalSize:x,folderID:v,setFolderID:R}),Object(F.jsx)(ie,{loginState:s,userData:a,searchState:j,setsearchState:r,searchValue:A,totalSize:x,settotalSize:u,folderID:v,setFolderID:R,path:N,setPath:g})]})]}):Object(F.jsxs)("div",{className:"loginwrap",children:[Object(F.jsx)("img",{src:o,alt:"img"}),Object(F.jsx)("p",{className:"head",children:"E-Drive - A File Management System"}),Object(F.jsx)("button",{onClick:function(){z.signInWithPopup(I).then((function(e){var t=e.user;s(t)})).catch((function(e){alert(e.message)}))},children:"Login to E-Drive"})]})})};a(102);n.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(ne,{})}),document.getElementById("root"))},85:function(e,t,a){},86:function(e,t,a){},93:function(e,t,a){},98:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.54a330aa.chunk.js.map