/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 * A hamburger menu for mobile websites
 *
 * Created by Thomas Zinnbauer YMC AG  |  http://www.ymc.ch
 * Date: 21.05.13
 *
 * Modifications by AJ Farkas 2014
 */

jQuery(document).ready(function() {

    //Open the menu
    jQuery('#hamburger').click(function() {

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = jQuery('#display').width();

        //set the content with the width that it has originally
        jQuery('#display').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        jQuery('#contentLayer').css('display', 'block');
        jQuery('#hamburger').css('display', 'none');
        jQuery('#side').css({
            'box-shadow': '0 0 195px 25px #333',
            '-moz-box-shadow': '0 0 195px 25px #333',
            '-webkit-box-shadow': '0 0 195px 25px #333'
        });
        //disable all scrolling on mobile devices while menu is shown
        jQuery('#display').bind('touchmove', function(e){e.preventDefault()});

        //set margin for the whole container with a jquery UI animation
        jQuery('#side').animate({'left': ['0', 'easeOutExpo']}, {
            duration: 700
        });
        jQuery('#display').animate({'marginLeft': ['50%', 'easeOutExpo']}, {
            duration: 700
        });

    });

    //close the menu
    jQuery('#contentLayer').click(function() {

        //hide menu
        jQuery('#hamburger').css('display', 'block');
        //enable all scrolling on mobile devices when menu is closed
        jQuery('#display').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        jQuery('#side').animate({'left': ['-50%', 'easeOutExpo']}, {
            duration: 700
        });
        jQuery('#display').animate({'marginLeft': ['0', 'easeOutExpo']}, {
            duration: 700,
            complete: function() {
                jQuery('#display').css('width', 'auto');
                jQuery('#contentLayer').css('display', 'none');
                jQuery('#side').css({
                    'box-shadow': 'none',
                    '-moz-box-shadow': 'none',
                    '-webkit-box-shadow': 'none' 
                });

            }
        });
    });

});