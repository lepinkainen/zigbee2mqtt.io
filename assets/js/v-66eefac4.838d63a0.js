"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[91801],{85047:(e,o,t)=>{t.r(o),t.d(o,{data:()=>d});const d={key:"v-66eefac4",path:"/devices/ZM-AM02_cover.html",title:"Zemismart ZM-AM02_cover control via MQTT",lang:"en-US",frontmatter:{title:"Zemismart ZM-AM02_cover control via MQTT",description:"Integrate your Zemismart ZM-AM02_cover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-03-01T09:06:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Options (composite)",slug:"options-composite",children:[]},{level:3,title:"Motor_working_mode (enum)",slug:"motor-working-mode-enum",children:[]},{level:3,title:"Percent_state (numeric)",slug:"percent-state-numeric",children:[]},{level:3,title:"Mode (enum)",slug:"mode-enum",children:[]},{level:3,title:"Motor_direction (enum)",slug:"motor-direction-enum",children:[]},{level:3,title:"Border (enum)",slug:"border-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZM-AM02_cover.md",git:{updatedTime:1649520405e3}}},84775:(e,o,t)=>{t.r(o),t.d(o,{default:()=>s});var d=t(66252);const i=(0,d.uE)('<h1 id="zemismart-zm-am02-cover" tabindex="-1"><a class="header-anchor" href="#zemismart-zm-am02-cover" aria-hidden="true">#</a> Zemismart ZM-AM02_cover</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZM-AM02_cover</td></tr><tr><td>Vendor</td><td>Zemismart</td></tr><tr><td>Description</td><td>Zigbee/RF curtain converter</td></tr><tr><td>Exposes</td><td>cover (state, position), options, motor_working_mode, percent_state, mode, motor_direction, border, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZM-AM02_cover.jpg" alt="Zemismart ZM-AM02_cover"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),r=(0,d.Uk)("How to use device type specific configuration"),a=(0,d.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="options-composite" tabindex="-1"><a class="header-anchor" href="#options-composite" aria-hidden="true">#</a> Options (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;options&quot;: {&quot;motor_speed&quot;: VALUE}}</code></p><ul><li><code>motor_speed</code> (numeric): Motor speed.</li></ul><h3 id="motor-working-mode-enum" tabindex="-1"><a class="header-anchor" href="#motor-working-mode-enum" aria-hidden="true">#</a> Motor_working_mode (enum)</h3><p>Value can be found in the published state on the <code>motor_working_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_working_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>continuous</code>, <code>intermittently</code>.</p><h3 id="percent-state-numeric" tabindex="-1"><a class="header-anchor" href="#percent-state-numeric" aria-hidden="true">#</a> Percent_state (numeric)</h3><p>Value can be found in the published state on the <code>percent_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum" aria-hidden="true">#</a> Mode (enum)</h3><p>Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>morning</code>, <code>night</code>.</p><h3 id="motor-direction-enum" tabindex="-1"><a class="header-anchor" href="#motor-direction-enum" aria-hidden="true">#</a> Motor_direction (enum)</h3><p>Value can be found in the published state on the <code>motor_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>forward</code>, <code>back</code>.</p><h3 id="border-enum" tabindex="-1"><a class="header-anchor" href="#border-enum" aria-hidden="true">#</a> Border (enum)</h3><p>Value can be found in the published state on the <code>border</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;border&quot;: NEW_VALUE}</code>. The possible values are: <code>up</code>, <code>down</code>, <code>down_delete</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),c={},s=(0,t(83744).Z)(c,[["render",function(e,o){const t=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[r])),_:1})])]),a],64)}]])},83744:(e,o)=>{o.Z=(e,o)=>{for(const[t,d]of o)e[t]=d;return e}}}]);