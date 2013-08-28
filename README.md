# Autotime

Autotime is a jQuery plugin, which transform a given timestamp in a constanly
updating human readable format ("2 days, 19 minutes, 36 seconds ago John said:"

## Basic usage:

## Usage example
Check the related [Wiki page](https://github.com/vmanchev/autotime/wiki/Usage-example)

1. Simple html code:
    ```html
    <ul>
        <li data-autotime="1377674598"><span class="autotime-updated"></span> Peter said: Hello!</li>
        <li data-autotime="1377686962"><span class="autotime-updated"></span> John said: Hi!</li>
        <li data-autotime="1377082162"><span class="autotime-updated"></span> Olivia said: Who's there?</li>
    </ul>
    ```

2. Add some Javascript code. Put jQuery at the top, than jquery.autotime.js

    ```html
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
    <script src="jquery.autotime.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function(){
            $("[data-autotime]").autotime({
                refresh_time: 1
            });
        });
    </script>
    ```


3. Now you should see something like:
<pre>
11 hours, 44 minutes, 39 seconds ago Peter said: Hello!
8 hours, 18 minutes, 35 seconds ago John said: Hi!
7 days, 8 hours, 18 minutes, 35 seconds ago Olivia said: Who's there?
</pre>

4. The default language is English and there is a Bulgarian language version as well. 
to localise it in your language, create a new file with the below structure, 
put the translation into the now empty quotes and include it after jquery.autotime.js

Name the file after the language, for example, the translation in Spanish should be:

<pre>jquery.autotime.es.js</pre>

    ```javascript
    $.fn.autotime.labels = {
		prefixAgo: '',
		suffixAgo: '',
		hour:      '',
		hours:     '',
		minute:    '',
		minutes:   '',
		second:    '',
		seconds:   '',
		day:       '',
		days:      '',
		month:     '',
		months:    '',
		year:      '',
		years:     ''
    };
    ```


