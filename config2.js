
// All About Ghost
// Get the first 2 sections of our eBook for free! More Info
//
// Ghost for Beginners
//
// All About Ghost
//
// All Ghost Themes
//
// How to Install Ghost
// Using Ghost
// Update Ghost
// Configuration
// Themes
// Apache/Nginx
// News
// Ghost config.js - Broken Down
// Last Update on 03 November 2014
// To somebody just starting out with Ghost, the configuration file, config.js can be a little intimidating. Here we will break down the config.js file and show you what every option does.
// First, some will ask "Whats the difference between config.example.js and config.js?" Each release of Ghost ships with a config.example.js which has all of the current configuration defaults. When you start Ghost it checks if you have manually created a config.js, and if not Ghost copies config.example.js to config.js. As of Ghost 0.5.3 the config.example.js looks like this:
// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
production: {
        url: 'http://my-ghost-blog.com',
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },

        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    },

    // ### Development **(default)**
        development: {
            // The url to use when providing links to the site, E.g. in RSS and email.
            // Change this to your Ghost blogs published URL.
            url: 'http://localhost:2368',

            // Example mail config
            // Visit http://support.ghost.org/mail for instructions
            // ```
            //  mail: {
           //      transport: 'SMTP',
            //      options: {
            //          service: 'Mailgun',
            //          auth: {
            //              user: '', // mailgun username
            //              pass: ''  // mailgun password
            //          }
            //      }
            //  },
            // ```

            database: {
                client: 'sqlite3',
                connection: {
                    filename: path.join(__dirname, '/content/data/ghost-dev.db')
                },
                debug: false
            },
            server: {
                // Host to be passed to node's `net.Server#listen()`
                host: '127.0.0.1',
                // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
                port: '2368'
           },
            paths: {
                contentPath: path.join(__dirname, '/content/')
            }
        },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

// Export config
module.exports = config;
// In the config.js when they say // **Developers only need to edit below here**, they are serious, you do not ever have to make changes below that line. The Testing, Testing MySQL, and Testing pg sections allow the Ghost developers and automated processes to test Ghost.
// production
// url - This allows us to tell Ghost what it's URL is. This value can be used in a theme to link back to the homepage
// mail - This section is empty by default but allows you to tell Ghost how it can send mail. Examples of how you can configure this section can be found in our How to Configure Ghost to Send Email post
// database - Just like mail this section defines how and what database Ghost should connect to. The default database is sqlite3 but you can see an example of how to connect to a MySQL database in our example.
// debug - In the database section the debug flag allows you to log all database queries. Queries are logged to stdout from the processes that is running Ghost. This does not ever need to be set to true unless you are experiencing an issue with Ghost and you are trying to gather more information to create a GitHub ticket.
// server
// host - This is the IP address that Ghost will respond to requests from. THIS NEEDS TO BE MADE MORE CLEAR!!!!!! If you are using Nginx or Apache (see port section below) use 2368 and if you are not put in "0.0.0.0"
// port - This is the port that Ghost is listening on. By default 2368 is used because they expect users to have Nginx or Apache in front of Ghost proxying request from 80 -> 2368.
// All configurations are accepted in the development section but if you are running a Ghost blog in production make sure you start Ghost with npm start --production!
//
//
// Deploy Ghost Updates With Git
// We have started to see an increased number of people inside and outside of the Ghost community that are…
// Lessons Learned After a Year of Blogging About Ghost
// How to Install Ghost launched on the same day that Ghost was made public, Oct. 14, 2013. In the…
//
// Ghost for Beginners eBook
//
//
//
// Ghost for Beginners eBook
// Get the first two sections of our Ghost eBook for free!
//
// First Name
//
// Email Address
//  Subscribe
// Resource Page
//
// Check out our resource page for a list of all the resources we use to make the How to Ghost network possible.
// About Us
//
// Find out how the How to Ghost network was created and learn about our background with Ghost.
// Our Other Sites
//
// Ghost for Beginners
// How to Install Ghost
// All Ghost Themes
// Contact Us
//
// Twitter: @howtoghost
// Email: info@howtoinstallghost.com
