function shPath(){var e=arguments,t=[];for(var n=0;n<e.length;n++)t.push(e[n].replace("@",DIS.shJsUrl));return t}$(function(){SyntaxHighlighter.autoloader.apply(null,shPath("applescript            @shBrushAppleScript.js","actionscript3 as3      @shBrushAS3.js","bash shell             @shBrushBash.js","coldfusion cf          @shBrushColdFusion.js","cpp c                  @shBrushCpp.js","c# c-sharp csharp      @shBrushCSharp.js","css                    @shBrushCss.js","delphi pascal          @shBrushDelphi.js","diff patch pas         @shBrushDiff.js","erl erlang             @shBrushErlang.js","groovy                 @shBrushGroovy.js","java                   @shBrushJava.js","jfx javafx             @shBrushJavaFX.js","js jscript javascript  @shBrushJScript.js","perl pl                @shBrushPerl.js","php                    @shBrushPhp.js","text plain             @shBrushPlain.js","py python              @shBrushPython.js","ruby rails ror rb      @shBrushRuby.js","sass scss              @shBrushSass.js","scala                  @shBrushScala.js","sql                    @shBrushSql.js","vb vbnet               @shBrushVb.js","xml xhtml xslt html    @shBrushXml.js"));SyntaxHighlighter.config.stripBrs=!1;SyntaxHighlighter.config.toolbar=!1;SyntaxHighlighter.all()});