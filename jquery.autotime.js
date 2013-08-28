/**
 * Autotime is a jQuery plugin, which transform a given timestamp in a constanly
 * updating human readable format ("2 days, 19 minutes, 36 seconds ago John said:"
 *
 * @name autotime
 * @version 0.1.0
 * @author Venelin Manchev
 * @link https://github.com/vmanchev
 * @license MIT - http://opensource.org/licenses/MIT
 */
(function($) {
    $.fn.autotime = function(options) {

        $.fn.autotime.defaults = {
            output_container: '.autotime-updated',
            refresh_time: 5, //seconds
            suffix: '',
            labels: {
                prefixAgo: '',
                suffixAgo: 'ago',
                hour: 'hour',
                hours: 'hours',
                minute: 'minute',
                minutes: 'minutes',
                second: 'second',
                seconds: 'seconds',
                day: 'day',
                days: 'days',
                month: 'month',
                months: 'months',
                year: 'year',
                years: 'years'
            }
        };

        settings = $.extend({}, $.fn.autotime.defaults, options);

        if (!jQuery.isEmptyObject($.fn.autotime.labels)) {
            settings.labels = $.extend(settings.labels, $.fn.autotime.labels);
        }

        settings.time_container_selector = this.selector;
        settings.time_container_attr = this.selector.substr(1, this.selector.length - 2);

        autoupdate_time();
        setInterval(autoupdate_time, settings.refresh_time * 1000);

        function date_calc(seconds) {
            // Set the unit values in milliseconds.
            var msecPerMinute = 1000 * 60;
            var msecPerHour   = msecPerMinute * 60;
            var msecPerDay    = msecPerHour * 24;
            var msecPerYear   = msecPerDay * 365;

            var result = {
                d: 0,
                h: 0,
                i: 0,
                s: 0
            };

            // Set a date and get the milliseconds
            var date = new Date(seconds * 1000);
            dateMsec = date.getTime();

            // Get the difference in milliseconds.
            var interval = new Date().getTime() - dateMsec;


            // Calculate how many days the interval contains. Subtract that
            // many days from the interval to determine the remainder.
            result.d = Math.floor(interval / msecPerDay);
            interval = interval - (result.d * msecPerDay);

            // Calculate the hours, minutes, and seconds.
            result.h = Math.floor(interval / msecPerHour);
            interval = interval - (result.h * msecPerHour);

            result.i = Math.floor(interval / msecPerMinute);
            interval = interval - (result.i * msecPerMinute);

            result.s = Math.floor(interval / 1000);

            return format(result);


        }

        function format(r) {

            var result = [];
            var txt = '';

            if (settings.labels.prefixAgo.length > 0)
                txt = settings.labels.prefixAgo + ' ';
            
            if (r.d > 0)
                result.push(r.d + " " + (r.d > 1 ? settings.labels.days : settings.labels.day));
            if (r.h > 0)
                result.push(r.h + " " + (r.h > 1 ? settings.labels.hours : settings.labels.hour));
            if (r.i > 0)
                result.push(r.i + " " + (r.i > 1 ? settings.labels.minutes : settings.labels.minute));
            if (r.s > 0)
                result.push(r.s + " " + (r.s > 1 ? settings.labels.seconds : settings.labels.second));

            txt += result.join(', ');

            if (settings.labels.suffixAgo.length > 0)
                txt += ' ' + settings.labels.suffixAgo;

            return txt;
        }

        function autoupdate_time() {

            $that = this;

            $(settings.time_container_selector).each(function() {

                $(this).find(settings.output_container).text(
                        date_calc($(this).attr(settings.time_container_attr))
                        );
            });
        }



        return this;
    };


}(jQuery));
