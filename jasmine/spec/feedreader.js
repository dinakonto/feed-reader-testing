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


    // Test suite covering the side menu
    describe('The menu', function() {
        let body = $('body');
            menuIcon = $('.menu-icon-link');
        // Test that the menu element is hidden by default.
         it('is hidden by default', function() {
           expect(body.hasClass('menu-hidden')).toBe(true);
         })

         // Test that the menu changes visibility when the menu icon is clicked.
          // it('toggles visibility when icon is clicked', function() {
          //   menuIcon.click();
          //   expect(body.hasClass('menu-hidden')).toBe(false);
          //   menuIcon.click();
          //   expect(body.hasClass('menu-hidden')).toBe(true);
          // })
    });


    // Test suite covering the initial feed entries
    describe('Initial Entries', function() {
          beforeEach(function(done) {
            loadFeed(0, done);
          });
        /* Tests that when the loadFeed() is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
         it('contain at least one entry', function() {
           const entry = $('.feed .entry');
           expect(entry.length).toBeGreaterThan(0);
         })
    })

    // Test suite covering new feed selection
    describe('New Feed Selection', function() {
        let oldLink,
            newLink;

        beforeEach(function(done) {
          // Load first feed, get link
          loadFeed(0, function() {
            oldLink = $('.entry-link').attr('href');
          });
          // Load second feed, get link
          loadFeed(1, function() {
            newLink = $('.entry-link').attr('href');
            done();
          });
        });
        /* Test when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */
         it('changes the page content', function() {
           // Make sure newLink actually got a link
           expect(newLink).not.toBe(undefined);
           // Compare old and new
           expect(oldLink === newLink).toBe(false);
         })
    })
}());
