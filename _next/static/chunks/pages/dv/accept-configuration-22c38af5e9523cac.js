(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{16411:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dv/accept-configuration",function(){return i(41970)}])},98064:function(e,s,i){"use strict";i.d(s,{I:function(){return c}});var t=i(85893),r=i(39618),n=i(63029),a=i(62971);let o=[{accessorKey:"operator",header:"Address"},{accessorKey:"split",header:"Split",css:{width:"70px"}}],c=e=>{let{recipients:s,type:i,validatorsSize:c}=e,l=(0,n.Z)(s.map(e=>e.address));return"Principal & Rewards"===i?(0,t.jsx)(r.iA,{columns:[...o,{accessorKey:"principal",header:"Principal",css:{width:"70px"}}],rows:s.map((e,s)=>({operator:(0,t.jsx)(a.M,{ensName:l[s],address:e.address}),split:"".concat(e.split||e.percentAllocation," %"),principal:"".concat(Number(e.split||e.percentAllocation)/100*32*c)}))}):(0,t.jsx)(r.iA,{columns:o,rows:s.map((e,s)=>({operator:(0,t.jsx)(a.M,{ensName:l[s],address:e.address}),split:"".concat(e.split||e.percentAllocation," %")}))})}},887:function(e,s,i){"use strict";i.d(s,{I:function(){return o}});var t=i(85893),r=i(98064),n=i(39618),a=i(9324);let o=e=>{let{splitId:s,recipients:i,withdrawalAddress:o,account:c,validatorsSize:l}=e,d=s===o?"Principal & Rewards":"Rewards";return(0,t.jsxs)(n.W2,{className:"withdrawal-section",css:{gap:"$xl"},alignItems:"start",children:[(0,t.jsx)(n.xv,{variant:"h4",children:"Split Details"}),(0,t.jsx)(r.I,{recipients:i,type:d,validatorsSize:l}),"Rewards"===d&&(0,t.jsxs)(n.W2,{variant:"card",className:"enr-section",alignItems:"start",css:{gap:"$sm",p:"$sm"},children:[(0,t.jsx)(n.xv,{color:"body",variant:"subline",css:{lineHeight:"$lg",textTransform:"uppercase",letterSpacing:"1px"},children:"Optimistic Withdrawal Recipient Address"}),(0,t.jsx)(n.IK,{readOnly:!0,value:o}),(0,t.jsxs)(n.rU,{href:"https://".concat(a.pn,".etherscan.io/address/").concat(o,"#code"),target:"_blank",children:["View on Etherscan ",(0,t.jsx)(n.ZJ,{})]})]}),(0,t.jsxs)(n.W2,{variant:"card",className:"enr-section",alignItems:"start",css:{gap:"$sm",p:"$sm"},children:[(0,t.jsx)(n.xv,{color:"body",variant:"subline",css:{lineHeight:"$lg",textTransform:"uppercase",letterSpacing:"1px"},children:"Splitter Address"}),(0,t.jsx)(n.IK,{readOnly:!0,value:s}),(0,t.jsxs)(n.rU,{href:"https://".concat(a.pn,".etherscan.io/address/").concat(s,"#code"),target:"_blank",children:["View on Etherscan ",(0,t.jsx)(n.ZJ,{})]})]})]})}},41970:function(e,s,i){"use strict";i.r(s);var t=i(85893),r=i(71866),n=i(39618),a=i(77136),o=i(9324),c=i(41518),l=i(87536),d=i(2504),h=i(21237),u=i(80050),x=i(11163),p=i(59734),g=i(67294),m=i(82609),j=i(28106),v=i(887),f=i(37005);let w=()=>{let{account:e,provider:s,chainId:i}=(0,d.kR)(),{control:w,handleSubmit:b,formState:{isDirty:$,isValid:C}}=(0,l.cI)({mode:"onChange"}),_=(0,x.useRouter)(),[y,k]=(0,g.useState)(!1),[N,I]=(0,g.useState)(!1),[S,A]=(0,g.useState)(),[R,W]=(0,g.useState)(""),E=(0,c.o)(e=>e.clusterDefinitionData),T=(0,c.o)(e=>e.updateJoinFirstStep),P=(0,c.o)(e=>e.completeOperatorStep),z=(0,c.o)(e=>e.enableOperatorStep),K=()=>{P("dv-accept-config");let e=z("dv-dkg");_.push(e.href)};(null==E?void 0:E.config_hash)&&T("/dv#".concat(null==E?void 0:E.config_hash));let O=async t=>{if(!N)try{W(""),I(!0);let r={operator_config_hash:null==E?void 0:E.config_hash},n=await (0,h.AM)(s,i,e,r),a={enr:t.enr},c=await (0,h.Ol)(s,i,e,a),l={address:e,enr:t.enr,enr_signature:c,fork_version:o.se,version:null==E?void 0:E.version},{data:d}=await (0,u.R)({token:n,data:l,configHash:null==E?void 0:E.config_hash});A(d),I(!1)}catch(e){var r,n;console.log(e),W(null===(r=e.response)||void 0===r?void 0:null===(n=r.data)||void 0===n?void 0:n.message),I(!1)}},{data:D}=(0,p.ZP)("/dv/".concat(null==E?void 0:E.config_hash),u.FU,{refreshInterval:e=>(null==e?void 0:e.definition_hash)?0:1e3}),[Z]=(null==E?void 0:E.validators)||[],F=null==Z?void 0:Z.fee_recipient_address,L=(0,d.DS)(F);if(!D)return(0,t.jsx)(n.xv,{children:"Loading..."});let M="".concat(o.yK,"/dv#").concat(D.config_hash),Y=()=>(0,t.jsx)(n.W2,{className:"cluster-details",alignItems:"start",children:(0,t.jsxs)(n.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,t.jsx)(j.uo,{flow:"joinClusterFlow"}),(0,t.jsx)(j.SS,{operators:null==D?void 0:D.operators})]})}),G=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.kC,{css:{backgroundColor:"$bg03",borderRadius:"$1",gap:"$xs",p:"$sm",boxSizing:"border-box",width:"$full"},children:[(0,t.jsx)(n.xu,{children:(0,t.jsx)(n.nQ,{})}),(0,t.jsx)(n.xv,{variant:"body",css:{fontWeight:"$bold",color:"$light"},children:"Confirmation signature successfully submitted"})]}),(0,t.jsxs)(n.kC,{css:{backgroundColor:"$bg03",borderRadius:"$1",gap:"$xs",p:"$sm",boxSizing:"border-box",width:"$full"},children:[(0,h.YC)(null==D?void 0:D.operators)?(0,t.jsx)(n.xu,{children:(0,t.jsx)(n.nQ,{})}):(0,t.jsx)(n.xu,{children:(0,t.jsx)(n.ZG,{})}),(0,t.jsx)(n.kC,{css:{fd:"column",gap:"$xs"},children:(0,t.jsx)(n.xv,{variant:"body",css:{fontWeight:"$bold",color:"$light"},children:"Awaiting all group signatures to proceed to Distributed Key Generation."})})]}),(0,t.jsx)(a.DM,{heading:"Group Invite Link",content:M})]}),H=()=>(0,t.jsxs)(n.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,t.jsx)(n.xv,{variant:"h3",children:"Accept Configuration"}),(0,t.jsx)(a.qN,{}),(0,t.jsxs)(n.W2,{className:"success-section",alignItems:"start",css:{gap:"$xs"},children:[(0,t.jsxs)(n.kC,{css:{backgroundColor:"$bg03",borderRadius:"$1",gap:"$xs",p:"$sm",boxSizing:"border-box",width:"$full"},children:[(0,t.jsx)(n.xu,{children:(0,t.jsx)(n.nQ,{})}),(0,t.jsx)(n.xv,{variant:"body",css:{fontWeight:"$bold",color:"$light"},children:(0,f.c)("biaClaimPage")?"\n            The Bia testnet is now complete, please proceed to claiming testnet ETH.":" All operators can now proceed to the Distributed Key Generation\n            phase"})]}),(0,t.jsx)(n.kC,{css:{gap:"$lg"},children:(0,f.c)("biaClaimPage")?(0,t.jsx)(n.zx,{as:"a",fullWidth:!0,href:"/bia-claim?configHash=".concat(D.config_hash),children:"Continue to BIA Claim"}):(0,t.jsx)(n.zx,{fullWidth:!0,onClick:()=>K(),children:"Continue to DKG"})})]})]});if((0,h.YC)(null==D?void 0:D.operators)&&(null==D?void 0:D.definition_hash))return(0,t.jsx)(H,{});let Q=D.operators.find(s=>{var i;return(null==s?void 0:null===(i=s.address)||void 0===i?void 0:i.toLowerCase())===(null==e?void 0:e.toLowerCase())});return(0,h._h)(Q)&&!S&&A(Q),(0,t.jsxs)(n.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,t.jsx)(n.xv,{variant:"h3",children:S?"Waiting for all participants to accept configuration":"Accept Configuration"}),(0,t.jsx)(r.l0,{onSubmit:b(O),children:(0,t.jsxs)(n.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,t.jsx)(Y,{}),((0,f.c)("reward_split_withdrawal_flow")||(0,f.c)("split_withdrawal_flow"))&&(null==L?void 0:L.recipients)&&(0,t.jsx)(v.I,{recipients:null==L?void 0:L.recipients,splitId:F,withdrawalAddress:null==Z?void 0:Z.withdrawal_address,account:e,validatorsSize:D.num_validators}),S?(0,t.jsx)(n.W2,{className:"waiting-section",alignItems:"start",css:{gap:"$lg"},children:(0,t.jsx)(G,{})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,t.jsxs)(n.kC,{direction:"column",css:{gap:"$sm"},children:[(0,t.jsxs)(n.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,t.jsx)(n.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"Your Charon client ENR"}),(0,t.jsx)(n.KZ,{content:'An ENR is an "Ethereum Node Record" used to identify your client to the other clients in the cluster"',children:(0,t.jsx)(n.xu,{css:{display:"flex"},children:(0,t.jsx)(n.by,{})})})]}),(0,t.jsx)(m.i,{control:w,name:"enr"})]}),(0,t.jsxs)(n.rU,{href:"https://docs.obol.tech/docs/next/int/faq/errors#enrs-keys",target:"_blank",children:["More on Ethereum Node Records ",(0,t.jsx)(n.ZJ,{})]})]}),!(null==L?void 0:L.recipients)&&(0,t.jsxs)(n.W2,{className:"withdrawal-section",css:{gap:"$sm"},alignItems:"start",children:[(0,t.jsx)(j.nB,{heading:"Principal Address",description:"The withdrawal address or contract will receive 100%.",value:null==Z?void 0:Z.withdrawal_address,className:"single-address-section"}),(0,t.jsx)(j.nB,{heading:"Fee Recipient Address",description:"Address to receive transaction fees from block proposals.",value:null==Z?void 0:Z.fee_recipient_address,className:"fee-recipient-address-section"})]}),(0,t.jsxs)(n.W2,{className:"confirm-details-section",alignItems:"start",css:{gap:"$lg"},children:[(0,t.jsx)(n.xv,{variant:"h4",children:"Confirm Details"}),(0,t.jsxs)(n.kC,{css:{gap:"$xs",width:"$full"},children:[(0,t.jsx)(n.xu,{children:(0,t.jsx)(n.XZ,{checked:y,onCheckedChange:()=>k(!y)})}),(0,t.jsx)(n.xv,{variant:"body",children:"You will be prompted to sign a message with your wallet. This signature is attesting to the fact that:"})]}),(0,t.jsx)(n.sQ,{heading:"You have confirmed the withdrawal address for the validators to be created is correct. If this address is a contract, you have confirmed the contract implementation is correct. If this address is an externally-owned account, you have confirmed that the EOA custody is secure. This address is where the principal and rewards for all created validators will be credited to and the address cannot be modified."}),(0,t.jsx)(n.sQ,{heading:"You have submitted your charon node's Ethereum Node Record (ENR) correctly. This signature is the authorisation of this charon client to act on your behalf."}),R&&(0,t.jsxs)(n.mh,{css:{backgroundColor:"$test"},children:[(0,t.jsx)(n.xu,{children:(0,t.jsx)(n.zM,{size:"lg",color:"body"})}),(0,t.jsx)(n.kC,{direction:"column",css:{gap:"$sm"},children:(0,t.jsx)(n.kC,{direction:"column",css:{gap:"$xs"},children:(0,t.jsx)(n.xv,{color:"textLight",children:R})})})]}),(0,t.jsxs)(n.kC,{direction:"column",children:[(0,t.jsx)(n.zx,{color:"primary",type:"submit",css:{"& div":{m:0}},disabled:!$||!C||!e||!y,children:(0,t.jsxs)(t.Fragment,{children:[N&&(0,t.jsx)(n.yC,{}),"Confirm and Sign"]})}),!e&&(0,t.jsx)(n.xv,{variant:"metadata",color:"test",children:"Please connect your wallet"})]})]})]})]})})]})};s.default=w,w.layout="OperatorProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=16411)}),_N_E=e.O()}]);