(this["webpackJsonpshop-app"]=this["webpackJsonpshop-app"]||[]).push([[0],{37:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},65:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(23),r=c.n(n),i=(c(55),c(56),c(8)),o=c(9),l=c(96),d=c(10),b=c(2),j=c(42),u=c(43),m=c(50),h=c(49),x=c(1),p=a.a.createContext(),O=function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={user:[],data:[]},e.addUser=function(t,c){var s=e.state.data;return t&&!/\S+@\S+\.\S+/.test(t)?i.b.error("Your Email not Valid!"):c.length<4?i.b.error("Password must be at least 4 characters long"):localStorage.getItem(t)?i.b.error("The user is already registered for the system"):(s.push({password:c}),localStorage.setItem(t,JSON.stringify(s)),Object(i.b)("Wellcome ".concat(t," \u2764")),void e.setState({user:[{email:t,password:c}]}))},e.checkUser=function(e,t){var c=localStorage.getItem(e),s=JSON.parse(c);if(s)return s.find((function(e){return!!e.password.includes(t)}))},e.login=function(t,c){"null"==typeof localStorage.getItem(t)&&i.b.error("Email or Password is incorrect");"undefined"==typeof e.checkUser(t,c)?i.b.error("Email or Password is incorrect"):(Object(i.b)("Wellcome ".concat(t," \u2764")),e.setState({user:[{email:t,password:c}]}))},e.logout=function(){e.setState({user:[]})},e.changePassword=function(t){var c=e.state.user;if(t<4)return i.b.error("password must be between 4 characters");var s={password:t};localStorage.setItem(c[0].email,JSON.stringify([s])),e.setState({user:[{email:c[0].email,password:s.password}]}),i.b.success("password changed successfully")},e}return Object(u.a)(c,[{key:"render",value:function(){return Object(x.jsx)(p.Provider,{value:Object(b.a)(Object(b.a)({},this.state),{},{addUser:this.addUser,login:this.login,logout:this.logout,changePassword:this.changePassword}),children:this.props.children})}}]),c}(s.Component),f=function(){var e=Object(s.useContext)(p).user;return Object(x.jsx)("div",{className:"titlesPages mt-5",style:{textAlign:"center"},children:Object(x.jsx)("div",{className:"d-flex justify-content-center mt-5",children:e.length?e.map((function(e){return Object(x.jsx)("div",{className:"mt-5",children:Object(x.jsxs)("h2",{children:["Welcome",Object(x.jsx)(d.b,{className:"ms-2",style:{textDecoration:"none"},to:"/profile",children:e.email})]})},e)})):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Login or Register"}),Object(x.jsxs)("div",{className:"mt-5",children:[Object(x.jsx)(l.a,{className:"me-2",children:Object(x.jsx)(d.b,{style:{color:"white",textDecoration:"none"},to:"/login",children:"Login"})}),Object(x.jsx)(l.a,{className:"ms-2",children:Object(x.jsx)(d.b,{style:{color:"white",textDecoration:"none"},to:"/register",children:"register"})})," "]})]})})})},g=function(e){return console.log(e),Object(x.jsx)("div",{className:"titlesPages mt-5",style:{textAlign:"center"},children:Object(x.jsx)("h2",{className:"mt-5",children:"About"})})},y=function(e){return console.log(e),Object(x.jsx)("div",{className:"titlesPages mt-5",style:{textAlign:"center"},children:Object(x.jsx)("h2",{className:"mt-5",children:"Contact"})})},N=function(){return Object(x.jsx)("div",{className:"titlesPages mt-5 pt-5 text-center",children:Object(x.jsxs)("h2",{className:"text-danger ",children:["Page Not Found ",Object(x.jsx)("i",{className:"bi bi-exclamation-circle-fill"})]})})},v=c(48),C=c(26),w=c(7),S=a.a.createContext(),I=function(e){var t=e.children,c=Object(s.useState)([{id:1,price:700,title:"product 1",body:"body product 1",category:"category 1",amount:0,src:"https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg",discount:!1},{id:2,price:100,title:"product 2",body:"body product 2",category:"category 2",amount:0,src:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",discount:!1},{id:3,price:700,title:"product 3",body:"body product 3",category:"category 3",amount:0,src:"https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg",discount:!1},{id:4,price:700,title:"product 4",body:"body product 4",category:"category 4",amount:0,src:"https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg",discount:!1},{id:5,price:700,title:"product 1",body:"body product 1",category:"category 1",amount:0,src:"https://images.unsplash.com/photo-1570993492903-ba4c3088f100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",discount:!1},{id:6,price:100,title:"product 2",body:"body product 2",category:"category 2",amount:0,src:"https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",discount:!1},{id:7,price:700,title:"product 3",body:"body product 3",category:"category 3",amount:0,src:"https://images.unsplash.com/photo-1505739718967-6df30ff369c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",discount:!1},{id:8,price:700,title:"product 4",body:"body product 4",category:"category 4",amount:0,src:"https://cdn.pixabay.com/photo/2014/02/22/19/45/camera-272263_960_720.jpg",discount:!1}]),a=Object(w.a)(c,2),n=a[0],r=a[1],o=Object(s.useState)([]),l=Object(w.a)(o,2),d=l[0],j=l[1],u=Object(s.useState)(["one","two"]),m=Object(w.a)(u,2),h=m[0],p=(m[1],Object(s.useState)(.5)),O=Object(w.a)(p,2),f=O[0],g=(O[1],{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});return Object(x.jsx)(S.Provider,{value:{addToCart:function(e){var t=n.map((function(t){if(t.id===e&&0!==t.amount){var c=d.findIndex((function(t){return t.id===e}));return-1!==c?(d[c].amount+=t.amount,i.b.success("Item added successfully",g)):(j([].concat(Object(C.a)(d),[Object(b.a)({},t)])),i.b.success("Item added successfully",g)),Object(b.a)(Object(b.a)({},t),{},{amount:0})}return t.id===e&&0===t.amount&&i.b.error("must one product !",g),Object(b.a)({},t)}));r(t)},cart:Object(C.a)(d),products:Object(C.a)(n),handleDecrement:function(e){var t=n.map((function(t){return t.id===e&&t.amount>0&&t.id===e?Object(b.a)(Object(b.a)({},t),{},{amount:t.amount-1}):t}));r(t)},handleIncrement:function(e){var t=n.map((function(t){return t.id===e?Object(b.a)(Object(b.a)({},t),{},{amount:t.amount+1}):t}));r(t)},handleIncrementCart:function(e){var t=d.map((function(t){return t.id===e?Object(b.a)(Object(b.a)({},t),{},{amount:t.amount+1}):t}));j(t)},handleDecrementCart:function(e){var t=d.map((function(t){return t.id===e&&t.amount>1?Object(b.a)(Object(b.a)({},t),{},{amount:t.amount-1}):t.id===e&&t.amount<=1?(i.b.error("need at least one product !",g),t):t}));j(t)},handleClearCart:function(){i.b.info("The cart was cleaned",g),window.scrollTo(0,0),j([])},userLogout:function(){j([])},handleDeleteItemCart:function(e){i.b.info("The Item was deleted",g);var t=d.filter((function(t){return t.id!==e}));j(t)},addCoupon:function(e){var t=!1;if(h.includes(e)){var c=d.map((function(e){return 0==e.discount?(t=!0,Object(b.a)(Object(b.a)({},e),{},{price:e.price*f,discount:!0})):e}));!0===t&&i.b.success("You received a discount"),!1===t&&i.b.info("The coupon is redeemed!"),j(c)}else i.b.info("Invalid coupon code")}},children:t})},D=(c(65),function(){var e=Object(s.useContext)(p),t=Object(s.useContext)(S),c=e.user,a=e.logout,n=t.cart,r=t.userLogout;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(v.a,{className:"justify-content-center fixed-top bg-dark",activeKey:"/home",children:[Object(x.jsx)(d.b,{className:"tabs",to:"/",children:"Home"}),Object(x.jsx)(d.b,{className:"tabs",to:"/about",children:"about"}),Object(x.jsx)(d.b,{className:"tabs",to:"/contact",children:"Contact"}),c.length?Object(x.jsxs)(x.Fragment,{children:[c.map((function(e){return Object(x.jsx)(d.b,{to:"/profile",className:"tabs",children:Object(x.jsx)("i",{className:"bi bi-person-circle",children:Object(x.jsx)("span",{className:"ms-2",children:e.email})})},e)})),Object(x.jsx)(d.b,{className:"tabs",to:"/shop",children:"Shop"}),Object(x.jsxs)(d.b,{className:"tabs",to:"/cart",children:[Object(x.jsx)("i",{className:"bi bi-cart-fill"}),Object(x.jsx)("span",{style:{position:"relative",bottom:"13px",right:"2px",color:"gold",fontSize:"10px",fontWeight:"bold"},children:n.length})]}),Object(x.jsx)(d.b,{className:"tabs",to:"/",onClick:function(){return a()+r()},children:"Logout"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(d.b,{className:"tabs",to:"/register",children:"Register"}),Object(x.jsx)(d.b,{className:"tabs",to:"/login",children:"Login"})]})]})})}),P=c(98),k=c(46),B=function(){var e=Object(s.useContext)(p),t=e.user,c=e.changePassword,a=Object(s.useState)(""),n=Object(w.a)(a,2),r=n[0],i=n[1];return Object(x.jsx)("div",{style:{marginTop:"20px"},children:t.map((function(e){return Object(x.jsxs)("div",{style:{marginTop:"120px",display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column"},children:[Object(x.jsxs)("h1",{children:[Object(x.jsx)("i",{className:"bi bi-person-circle"})," Profile"]}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Email:"})," ",e.email]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Password:"})," ",e.password]}),Object(x.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),c(r),e.target.reset()}(e)},children:Object(x.jsxs)(P.a,{className:"mt-5",style:{width:"90%"},children:[Object(x.jsx)(k.a,{placeholder:"new password","aria-label":"new password","aria-describedby":"basic-addon1",onChange:function(e){return i(e.target.value)}}),Object(x.jsx)(l.a,{type:"submit",children:"Submit"})]})})]},e)}))})},T=(c(37),function(){var e=Object(s.useContext)(S),t=e.handleIncrement,c=e.handleDecrement,a=(e.cart,e.products),n=e.addToCart;return Object(x.jsxs)("div",{className:"col-12 col-xl-12 col-md-12 p-5 text-center ",children:[Object(x.jsxs)("div",{className:"text-center mt-5",children:[Object(x.jsxs)("h1",{children:["Shop",Object(x.jsx)("i",{className:"bi bi-cart2 ms-2"})]}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)("hr",{style:{width:"70px"},className:"my-4"})}),Object(x.jsx)("br",{})]}),Object(x.jsx)("div",{className:"row",children:a.map((function(e){return Object(x.jsx)("div",{className:"col-12 col-xl-6 col-lg-6 col-md-6",children:Object(x.jsx)("div",{className:"card-deck mb-3",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("img",{className:"card-img-top",src:e.src,alt:"Card image cap"}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:e.title}),Object(x.jsx)("p",{className:"card-text",children:e.body}),Object(x.jsx)("span",{children:e.category}),Object(x.jsxs)("span",{className:"ms-3",children:[e.price," $ "]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"text-center mt-4 d-flex justify-content-center",children:Object(x.jsxs)("div",{className:"col-xl-3 col-4",children:[Object(x.jsx)("button",{className:"btn btn-primary float-start",onClick:function(){return t(e.id)},children:"+"}),Object(x.jsx)("span",{className:"amount",children:e.amount}),Object(x.jsx)("button",{className:"btn btn-danger float-end",onClick:function(){return c(e.id)},children:"-"})]})}),Object(x.jsx)(l.a,{variant:"success",className:"mt-2",onClick:function(){return n(e.id)},children:"addToCart"})]})]})})},e.id)}))})]})}),H=c(47),M=c(97),A=function(e){Object(H.a)(e);var t=Object(s.useContext)(S),c=Object(s.useState)(""),a=Object(w.a)(c,2),n=a[0],r=a[1],i=t.handleClearCart,o=t.handleDecrementCart,d=t.handleIncrementCart,b=t.cart,j=t.handleDeleteItemCart,u=t.addCoupon;return Object(x.jsx)("div",{className:"mt-5",children:Object(x.jsxs)("div",{className:" text-center ",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"text-center mt-5",children:[Object(x.jsxs)("h1",{children:["Cart",Object(x.jsx)("i",{className:"bi bi-cart2 ms-2"})]}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)("hr",{style:{width:"70px"},className:"my-4"})}),Object(x.jsx)("br",{})]}),b.length?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(P.a,{className:"mb-3 addCoupons",children:[Object(x.jsx)(M.a.Control,{value:n,onChange:function(e){return r(e.target.value)}}),Object(x.jsx)(l.a,{disabled:!n.length,onClick:function(){return u(n)+r("")},children:"Coupon"})]}),Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{className:"hideItemCart",scope:"col",children:"#"}),Object(x.jsx)("th",{scope:"col",children:"Product"}),Object(x.jsx)("th",{className:"",scope:"col ",children:"Amount"}),Object(x.jsx)("th",{scope:"col",children:"price"}),Object(x.jsx)("th",{scope:"col"})]})}),b.map((function(e){return Object(x.jsx)("tbody",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{className:"hideItemCart",scope:"row",children:Object(x.jsx)("img",{style:{width:"70px"},className:"img-thumbnail rounded",src:e.src,alt:""})}),Object(x.jsx)("td",{className:"pt-xl-3 pt-lg-3 pt-md-3",children:e.title}),Object(x.jsx)("td",{className:"pt-xl-3 pt-lg-3 pt-md-3",children:Object(x.jsxs)("span",{className:"containerBtnsCart",children:[Object(x.jsx)("button",{onClick:function(){return o(e.id)},className:"btnCart1 btn btn-danger me-1 me-xl-3 rr BtnsCart",children:Object(x.jsx)("i",{className:"bi bi-dash btnMinIcon"})}),e.amount,Object(x.jsx)("button",{className:"btn btn-success ms-1 ms-xl-3 BtnsCart",onClick:function(){return d(e.id)},children:Object(x.jsx)("i",{className:"bi bi-plus btnPluIcon"})})]})}),Object(x.jsx)("td",{className:"pt-xl-3 pt-lg-3 pt-md-3 tt",children:e.price*e.amount}),Object(x.jsx)("td",{className:"pt-xl-3 pt-lg-3 pt-md-3",children:Object(x.jsx)("button",{onClick:function(){return j(e.id)},className:"btn btn-danger ms-xl-4 btnDelCart BtnsCart",children:Object(x.jsx)("i",{className:"bi bi-trash deleteCartIcon"})})})]})},e.id)}))]})]}):Object(x.jsx)("p",{className:"pt-5 mt-5",children:"The cart is empty"}),Object(x.jsx)("br",{}),b.length?Object(x.jsxs)("div",{className:"text-primary",children:[Object(x.jsxs)("div",{className:"",children:[Object(x.jsxs)("span",{className:"text-start",children:["Total amount :",Object(x.jsx)("span",{className:"ms-1",children:Object.keys(b).reduce((function(e,t){return e+b[t].amount}),0)})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("span",{children:["Total price :",Object(x.jsx)("span",{className:"ms-1 me-1",children:Object.keys(b).reduce((function(e,t){return e+b[t].price*b[t].amount}),0)}),"$"]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:i,className:"btn btn-primary mt-2 mb-4 clearBtnCart",children:"Clear Cart"})]}):null]})})},F=function(){var e=Object(s.useContext)(p),t=e.login,c=e.user,a=Object(s.useState)(""),n=Object(w.a)(a,2),r=n[0],i=n[1],d=Object(s.useState)(""),b=Object(w.a)(d,2),j=b[0],u=b[1];return c.length?Object(x.jsx)(o.a,{to:"/profile"}):Object(x.jsx)("div",{className:"titlesPages",style:{textAlign:"center"},children:Object(x.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(r,j)}(e)},style:{marginTop:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(x.jsx)(P.a,{className:"mb-3",style:{width:"90%"},children:Object(x.jsx)(k.a,{placeholder:"email","aria-label":"userName","aria-describedby":"basic-addon1",onChange:function(e){return i(e.target.value)}})}),Object(x.jsx)(P.a,{className:"mb-3",style:{width:"90%"},children:Object(x.jsx)(k.a,{placeholder:"password","aria-label":"password","aria-describedby":"basic-addon1",type:"password",onChange:function(e){return u(e.target.value)}})}),Object(x.jsx)(l.a,{type:"submit",children:"Login"})]})]})})})},L=function(){var e=Object(s.useContext)(p),t=Object(s.useState)(""),c=Object(w.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(""),i=Object(w.a)(r,2),d=i[0],b=i[1],j=e.addUser,u=e.user;return u.length?Object(x.jsx)(o.a,{to:"/profile"}):Object(x.jsx)("div",{className:"titlesPages",style:{textAlign:"center"},children:Object(x.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Register"}),Object(x.jsxs)("form",{onSubmit:function(e){return(t=e).preventDefault(),j(a,d),void t.target.reset();var t},style:{marginTop:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(x.jsx)(P.a,{className:"mb-3",style:{width:"90%"},children:Object(x.jsx)(k.a,{onChange:function(e){return n(e.target.value)},placeholder:"email","aria-label":"userName","aria-describedby":"basic-addon1"})}),Object(x.jsx)(P.a,{className:"mb-3",style:{width:"90%"},children:Object(x.jsx)(k.a,{onChange:function(e){return b(e.target.value)},placeholder:"password","aria-label":"password","aria-describedby":"basic-addon1",type:"password"})}),Object(x.jsx)(l.a,{type:"submit",children:"Register"})]})]})})})},G=function(){var e=Object(s.useContext)(p).user;return console.log(e.length),Object(x.jsxs)("div",{children:[Object(x.jsx)(D,{}),Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{exact:!0,path:"/",component:f}),Object(x.jsx)(o.b,{path:"/about",component:g}),Object(x.jsx)(o.b,{path:"/login",component:F}),Object(x.jsx)(o.b,{path:"/register",component:L}),Object(x.jsx)(o.b,{path:"/contact",component:y}),e.length?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.b,{path:"/profile",component:B}),Object(x.jsx)(o.b,{path:"/shop",component:T}),Object(x.jsx)(o.b,{path:"/cart",component:A})]}):null,Object(x.jsx)(o.b,{path:"*",component:N})]})]})},W=function(){return Object(x.jsx)("div",{className:"text-center fixed-bottom font-weight-bold",children:"By Roi Lopez"})};var U=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(O,{children:Object(x.jsxs)(I,{children:[Object(x.jsx)(G,{}),Object(x.jsx)("footer",{children:Object(x.jsx)(W,{})})]})})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,99)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};c(38),c(68),c(69),c(90),c(91);r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(i.a,{}),Object(x.jsx)(U,{})]})}),document.getElementById("root")),Y()}},[[93,1,2]]]);
//# sourceMappingURL=main.2b9d4326.chunk.js.map