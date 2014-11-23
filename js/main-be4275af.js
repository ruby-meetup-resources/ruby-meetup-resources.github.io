/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.3
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */
+function(t){"use strict";function s(e,i){var n,o=t.proxy(this.process,this);this.$element=t(e).is("body")?t(window):t(e),this.$body=t("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",o),this.options=t.extend({},s.DEFAULTS,i),this.selector=(this.options.target||(n=t(e).attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=t([]),this.targets=t([]),this.activeTarget=null,this.refresh(),this.process()}s.DEFAULTS={offset:10},s.prototype.refresh=function(){var s=this.$element[0]==window?"offset":"position";this.offsets=t([]),this.targets=t([]);var e=this;this.$body.find(this.selector).map(function(){var i=t(this),n=i.data("target")||i.attr("href"),o=/^#\w/.test(n)&&t(n);return o&&o.length&&[[o[s]().top+(!t.isWindow(e.$scrollElement.get(0))&&e.$scrollElement.scrollTop()),n]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},s.prototype.process=function(){var t,s=this.$scrollElement.scrollTop()+this.options.offset,e=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,i=e-this.$scrollElement.height(),n=this.offsets,o=this.targets,a=this.activeTarget;if(s>=i)return a!=(t=o.last()[0])&&this.activate(t);for(t=n.length;t--;)a!=o[t]&&s>=n[t]&&(!n[t+1]||s<=n[t+1])&&this.activate(o[t])},s.prototype.activate=function(s){this.activeTarget=s,t(this.selector).parents(".active").removeClass("active");var e=this.selector+'[data-target="'+s+'"],'+this.selector+'[href="'+s+'"]',i=t(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")};var e=t.fn.scrollspy;t.fn.scrollspy=function(e){return this.each(function(){var i=t(this),n=i.data("bs.scrollspy"),o="object"==typeof e&&e;n||i.data("bs.scrollspy",n=new s(this,o)),"string"==typeof e&&n[e]()})},t.fn.scrollspy.Constructor=s,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=e,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var s=t(this);s.scrollspy(s.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: collapse.js v3.0.3
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */
+function(t){"use strict";var s=function(e,i){this.$element=t(e),this.options=t.extend({},s.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};s.DEFAULTS={toggle:!0},s.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},s.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){var e=this.$parent&&this.$parent.find("> .panel > .in");if(e&&e.length){var i=e.data("bs.collapse");if(i&&i.transitioning)return;e.collapse("hide"),i||e.data("bs.collapse",null)}var n=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[n](0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("in")[n]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return o.call(this);var a=t.camelCase(["scroll",n].join("-"));this.$element.one(t.support.transition.end,t.proxy(o,this)).emulateTransitionEnd(350)[n](this.$element[0][a])}}},s.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var s=t.Event("hide.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?(this.$element[e](0).one(t.support.transition.end,t.proxy(i,this)).emulateTransitionEnd(350),void 0):i.call(this)}}},s.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var e=t.fn.collapse;t.fn.collapse=function(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),o=t.extend({},s.DEFAULTS,i.data(),"object"==typeof e&&e);n||i.data("bs.collapse",n=new s(this,o)),"string"==typeof e&&n[e]()})},t.fn.collapse.Constructor=s,t.fn.collapse.noConflict=function(){return t.fn.collapse=e,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(s){var e,i=t(this),n=i.attr("data-target")||s.preventDefault()||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),o=t(n),a=o.data("bs.collapse"),l=a?"toggle":i.data(),r=i.attr("data-parent"),h=r&&t(r);a&&a.transitioning||(h&&h.find('[data-toggle=collapse][data-parent="'+r+'"]').not(i).addClass("collapsed"),i[o.hasClass("in")?"addClass":"removeClass"]("collapsed")),o.collapse(l)})}(jQuery),function(){}.call(this);