/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* Test suite covering the RSS feeds definitions,
     * the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed in the allFeeds object and
         * ensures it has a URL defined and that the URL is not empty.
         */
         it('have a URL defined', function() {
           for(const feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }
         })

        /* Loops through each feed in the allFeeds object and
         * ensures it has a name defined and that the name is not empty.
         */
         it('have a name defined', function() {
           for(const feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           }
         })
    });


    /* Test suite covering the side menu */
    describe('The menu', function() {
        let body,
            menuIcon = $('.menu-icon-link');
        beforeEach(function(done) {
          body = $('body');
          done();
        })
        /* Test that the menu element is hidden by default.
         */
         it('is hidden by default', function() {
           expect(body.attr('class')).toEqual('menu-hidden');
           // Not sure if this is robust enough?
           // What if the properties within the class are changed?
           // TODO: Investigate ways to check if element is visible on screen
         })

         /* Test that the menu changes visibility when the menu icon is clicked.
          */
          it('toggles visibility when icon is clicked', function() {
            menuIcon.click();
            expect(body.attr('class')).not.toEqual('menu-hidden');
            menuIcon.click();
            expect(body.attr('class')).toEqual('menu-hidden');
          })
    });


    /* Test suite covering the initial feed entries */
    describe('Initial Entries', function() {
          beforeEach(function(done) {
            loadFeed(0, done);
          });
        /* Tests that when the loadFeed() is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
         it('contain at least one entry', function() {
           const entry = $('.feed .entry');
           expect(entry.length).toBeGreaterThan(0); // .feed contains at least one .entry
         })
    })

    /* Test suite covering new feed selection */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         it('changes the page content', function() {

         })
    })

}());
