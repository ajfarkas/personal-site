/*Mobile hamburger menu
 * AJ Farkas 2014
 * Thanks to Thomas Zinnbauer YMC AG  |  http://www.ymc.ch 
 */

$(document).ready(function() {

    //Open the menu
    $('#hamburger').click(function() {
        //set the width of the main section
        var contentWidth = $('#display').width();

        //give the main section a numerical width
        $('#display').css('width', contentWidth);

        //create overlay to disable action on main section while menu visible & hide hamburger
        $('#contentLayer').css('display', 'block');
        $('#hamburger').css('display', 'none');
        $('#side').fadeIn(350, 'linear');
        //disable scrolling on mobile devices while menu is shown
        $('#display').bind('touchmove', function(e){e.preventDefault()});

        //animate the main section and menu to slide in from the left
        $('#side').animate({'left': '0'}, 700, 'linear');
        $('#display').animate({'marginLeft': '50%'}, 700, 'linear');
    });

    //close the menu
    $('#contentLayer').click(function() {
        //show the hamburger and enable scrolling
        $('#hamburger').css('display', 'block');
        $('#display').unbind('touchmove');

        //animate the main section and menu to return to the left and hide overlay
        $('#side').animate({'left': '-50%'}, 700, 'linear');
        $('#side').fadeOut(350, 'linear');
        $('#display').animate({'marginLeft': '0'}, 700, 'linear', function() {
            $('#display').css('width', 'auto');
            $('#contentLayer').css('display', 'none');
        });

    });
});
