(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),s=a.n(l),o=(a(95),a(96),a(97),a(98),a(15)),c=a(16),m=a(18),i=a(17),u=a(2),d=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},E="http://localhost:3001/",f=a(9);function h(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(d,null):n?r.a.createElement("h4",null,n):r.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{src:E+t.image,alt:t.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),t.designation?r.a.createElement(u.i,null,t.designation):null,r.a.createElement(u.j,null,t.description))))}var p=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(h,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(h,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErr})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(h,{item:e.leader,isLoading:e.leadLoading,errMess:e.leadFail}))))},g=a(4);function b(e){var t=e.dish;e.onClick;return r.a.createElement(u.d,null,r.a.createElement(g.b,{to:"/menu/".concat(t.id)},r.a.createElement(u.g,{width:"100%",src:E+t.image,alt:t.name}),r.a.createElement(u.h,null,r.a.createElement(u.k,null,t.name))))}var N=function(e){var t=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.Id},r.a.createElement(b,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))};function v(e){var t=e.leader;return r.a.createElement("div",{key:t.Id,className:"col-12 mt-5"},r.a.createElement(u.s,{tag:"li"},r.a.createElement(u.s,{middle:!0,left:!0},r.a.createElement(u.s,{object:!0,src:E+t.image,alt:t.name})),r.a.createElement(u.s,{body:!0,className:"ml-5"},r.a.createElement(u.s,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description))))}var y=function(e){var t;return e.leaders.isLoading?r.a.createElement(d,null):e.leaders.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.leaders.errMess))):(t=e.leaders.leaders.map((function(e){return r.a.createElement(f.Stagger,{in:!0},r.a.createElement(f.Fade,{in:!0},r.a.createElement(v,{leader:e})))})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.d,null,r.a.createElement(u.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(u.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.d,null,r.a.createElement(u.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.s,{list:!0},t)))))},O=a(14),w=a(7),M=function(e){return e&&e.length},L=function(e){return function(t){return!t||t.length<=e}},k=function(e){return function(t){return t&&t.length>=e}},j=function(e){return!isNaN(Number(e))},C=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},F=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){this.props.resetFeedbackForm(),this.props.postMessage(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"/#"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(w.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(f.Stagger,{in:!0},r.a.createElement(f.Fade,{in:!0},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(u.l,{md:10},r.a.createElement(w.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:M,minLength:k(3),maxLength:L(15)}}),r.a.createElement(w.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})))),r.a.createElement(f.Fade,{in:!0},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(u.l,{md:10},r.a.createElement(w.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:M,minLength:k(3),maxLength:L(15)}}),r.a.createElement(w.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})))),r.a.createElement(f.Fade,{in:!0},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(u.l,{md:10},r.a.createElement(w.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:M,minLength:k(3),maxLength:L(15),isNumber:j}}),r.a.createElement(w.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})))),r.a.createElement(f.Fade,{in:!0},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(u.l,{md:10},r.a.createElement(w.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:M,validEmail:C}}),r.a.createElement(w.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})))),r.a.createElement(f.Fade,{in:!0},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(u.r,{check:!0},r.a.createElement(w.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(u.l,{md:{size:3,offset:1}},r.a.createElement(w.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email"))))),r.a.createElement(f.Fade,{in:!0},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(u.l,{md:10},r.a.createElement(w.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})))),r.a.createElement(f.Fade,{in:!0},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:10,offset:2}},r.a.createElement(u.c,{type:"submit",color:"primary"},"Send Feedback")))))))))}}]),a}(n.Component),S=function(e){return e&&e.length},D=function(e){return function(t){return!t||t.length<=e}},x=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.submitComment=n.submitComment.bind(Object(O.a)(n)),n}return Object(c.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"submitComment",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"}),r.a.createElement("span",null," Submit Comment   ")),r.a.createElement(u.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.v,{toggle:this.toggleModal},"Comment Form"),r.a.createElement(u.u,null,r.a.createElement(w.LocalForm,{onSubmit:function(e){return t.submitComment(e)}},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,null,r.a.createElement(u.r,{htmlFor:"rating"},"Rating"),r.a.createElement(w.Control.select,{model:".rating",id:"rating",name:"rating",className:"col-12 form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,null,r.a.createElement(u.r,{htmlFor:"author"},"Your Name"),r.a.createElement(w.Control.text,{model:".author",className:"col-12 form-control",name:"author",id:"author",placeholder:"Name",validators:{required:S,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:D(10)}}),r.a.createElement(w.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 3",maxLength:"Must be less than 10"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,null,r.a.createElement(u.r,{htmlFor:"comment"},"Comments"),r.a.createElement(w.Control.textarea,{model:".comment",rows:"6",className:"col-12 form-control",name:"comment",id:"comment",placeholder:"Comments"}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:6,offset:1}},r.a.createElement(u.c,{className:"btn-success"},"Submit")))))))}}]),a}(n.Component);function A(e){var t=e.dish;return r.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{top:!0,width:"100%",src:E+t.image,alt:t.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),r.a.createElement(u.j,null,t.description))))}function I(e){var t=e.comments,a=e.postComment,n=e.dishId;return null!=t?r.a.createElement("div",{className:"col-12 col-md-7 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(f.Stagger,{in:!0},t.map((function(e){return r.a.createElement(f.Fade,null,r.a.createElement("li",{key:e.Id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"--",e.author,",",new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))})))),r.a.createElement(x,{dishId:n,postComment:a})):r.a.createElement("div",null)}var T=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(u.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(A,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(I,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)},R=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(O.a)(n)),n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleLogin=n.handleLogin.bind(Object(O.a)(n)),n}return Object(c.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Firstname: "+this.firstname.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(u.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(u.A,{onClick:this.toggleNav}),r.a.createElement(u.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(u.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(u.w,{navbar:!0},r.a.createElement(u.x,null,r.a.createElement(g.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(u.x,null,r.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(u.x,null,r.a.createElement(g.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(u.x,null,r.a.createElement(g.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us")))),r.a.createElement(u.w,{className:"ml-auto",navbar:!0},r.a.createElement(u.x,null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login"))))),r.a.createElement(u.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))),r.a.createElement(u.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.v,{toggle:this.toggleModal},"Login"),r.a.createElement(u.u,null,r.a.createElement(u.n,{onSubmit:this.handleLogin},r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"firstname"},"First Name"),r.a.createElement(u.p,{type:"text",id:"firstname",name:"firstname",placeholder:"First Name",innerRef:function(t){return e.firstname=t}})),r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"password"},"Password"),r.a.createElement(u.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(u.o,{check:!0},r.a.createElement(u.r,{check:!0},r.a.createElement(u.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(u.c,{type:"submit",value:"submit",color:"primary"},"Login"))))))))}}]),a}(n.Component);var _=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},q=a(20),B=function(){return{type:"DISHES_LOADING"}},P=function(e){return{type:"DISHES_FAILED",payload:e}},H=function(e){return{type:"ADD_DISHES",payload:e}},G=function(e){return{type:"ADD_COMMENTS",payload:e}},W=function(e){return{type:"COMMENTS_FAILED",payload:e}},Y=function(e){return{type:"ADD_PROMOS",payload:e}},K=function(e){return{type:"FAILED_PROMOS",payload:e}},U=function(){return{type:"LOADING_PROMOS"}},z=function(e){return{type:"ADD_LEADERS",payload:e}},J=function(e){return{type:"FAILED_LEADERS",payload:e}},Z=function(){return{type:"LOADING_LEADERS"}},$=a(44),Q=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchLeaders(),this.props.fetchPromos()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement($.TransitionGroup,null,r.a.createElement($.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:500},r.a.createElement(g.f,null,r.a.createElement(g.e,{path:"/home",component:function(){return r.a.createElement(p,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErr:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadLoading:e.props.leaders.isLoading,leadFail:e.props.leaders.errMess})}}),r.a.createElement(g.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(N,{dishes:e.props.dishes})}}),r.a.createElement(g.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(T,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),postComment:e.props.postComment,commentsErr:e.props.comments.errMess})}}),r.a.createElement(g.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(F,{resetFeedbackForm:e.props.resetFeedbackForm,postMessage:e.props.postMessage})}}),r.a.createElement(g.e,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(y,{leaders:e.props.leaders})}}),r.a.createElement(g.d,{to:"/home"})))),r.a.createElement(_,null))}}]),a}(n.Component),V=Object(g.g)(Object(q.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(E+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r))},postMessage:function(t,a,n,r,l,s,o){return e(function(e,t,a,n,r,l,s){return function(o){var c={firstname:e,lastname:t,telnum:a,email:n,agree:r,contactType:l,message:s};return c.date=(new Date).toISOString(),fetch(E+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return o({type:"ADD_FEEDBACK",payload:e})})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r,l,s,o))},fetchDishes:function(){e((function(e){return e(B(!0)),fetch(E+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(H(t))})).catch((function(t){return e(P(t.message))}))}))},resetFeedbackForm:function(){e(w.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(E+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(G(t))})).catch((function(t){return e(W(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(Z()),fetch(E+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(z(t))})).catch((function(t){return e(J(t.message))}))}))},fetchPromos:function(){e((function(e){return e(U()),fetch(E+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Y(t))})).catch((function(t){return e(K(t.message))}))}))}}}))(Q)),X=(a(151),a(5)),ee=a(21),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(X.a)(Object(X.a)({},e),{},{errMess:null,comments:t.payload});case"ADD_COMMENT":var a=t.payload;return console.log("Comment: ",a),Object(X.a)(Object(X.a)({},e),{},{comments:e.comments.concat(a),errMess:null});case"COMMENTS_FAILED":return Object(X.a)(Object(X.a)({},e),{},{comments:[],errMess:t.payload});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_LEADERS":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case"ADD_LEADERS":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case"FAILED_LEADERS":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!1,errMess:t.payload,leaders:[]});default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_PROMOS":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"ADD_PROMOS":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case"FAILED_PROMOS":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!1,errMess:t.payload,promotions:[]});default:return e}},le=a(88),se=a(89),oe=a.n(se),ce={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",Id:""},me=Object(ee.createStore)(Object(ee.combineReducers)(Object(X.a)({dishes:te,comments:ae,leaders:ne,promotions:re},Object(w.createForms)({feedback:ce}))),Object(ee.applyMiddleware)(le.a,oe.a)),ie=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(q.Provider,{store:me},r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(V,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(152)},98:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.74a1caea.chunk.js.map