"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[77689],{13668:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-cf91ebce",path:"/devices/SLT3C.html",title:"Hive SLT3C control via MQTT",lang:"en-US",frontmatter:{title:"Hive SLT3C control via MQTT",description:"Integrate your Hive SLT3C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-12-10T12:47:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SLT3C.md",git:{updatedTime:1649520405e3}}},89923:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="hive-slt3c" tabindex="-1"><a class="header-anchor" href="#hive-slt3c" aria-hidden="true">#</a> Hive SLT3C</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SLT3C</td></tr><tr><td>Vendor</td><td>Hive</td></tr><tr><td>Description</td><td>Heating thermostat remote control</td></tr><tr><td>Exposes</td><td>battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SLT3C.jpg" alt="Hive SLT3C"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ol><li>Remove the thermostat (SLT) from the wall and remove a battery to turn it off.</li><li>Turn boiler off at the mains in order to turn off the hive receiver (SLR).</li><li>Turn the boiler on and receiver.</li><li>Hold down the central heating button for 10 seconds on the Hive receiver until light turns pink, then release.</li><li>Hold down the central heating button again until the light turns amber with double flashing.</li><li>Pair with Zigbee2mqtt using &quot;Permit Join (all)&quot;.</li><li>The amber double flash may change to a single flash.</li><li>The receiver will be added to zigbee2mqtt. Rename it to something like &quot;Hive Receiver&quot;.</li><li>Replace the battery in the thermostat and allow to boot.</li><li>Press and hold the menu and back buttons to factory reset the device. Allow the countdown to finish and release when you see &#39;welcome&#39; - after selecting - a language, it will enter pairing mode.</li><li>In Zigbee2Mqtt use the dropdown arrow next to &quot;Permit Join&quot; to select the Hive receiver device you added earlier.</li><li>Start pairing with the newly labelled &quot;Permit join (Hive Receiver)&quot; button.</li><li>Wait around 30 seconds</li><li>The thermostat should now pair to the boiler receiver. The amber light should turn green, and the thermostat will go through the getting started wizard.</li></ol><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),r={},o=(0,i(83744).Z)(r,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);