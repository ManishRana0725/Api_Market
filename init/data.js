const sampleAPIs = [
    {
        name: 'Weather Data API',
        description: 'Provides real-time weather updates for any location.',
        category: 'Weather',
        pricing: {
            free: true,
            paid: {
                basic: '$10/month',
                pro: '$30/month',
                enterprise: null,
            },
        },
        endpoints: [
            { url: '/getWeather', method: 'GET', description: 'Fetch current weather data.' },
            { url: '/forecast', method: 'GET', description: 'Fetch 7-day weather forecast.' },
        ],
        rating: 4.5,
        popularity: 1200,
        createdBy: 'OpenWeather',
        documentationLink: 'https://docs.weatherapi.com',
    },
    {
        name: 'Stock Market API',
        description: 'Access real-time stock market data.',
        category: 'Finance',
        pricing: {
            free: false,
            paid: {
                basic: '$20/month',
                pro: '$50/month',
                enterprise: '$100/month',
            },
        },
        endpoints: [
            { url: '/getStocks', method: 'GET', description: 'Fetch stock prices.' },
            { url: '/getHistory', method: 'POST', description: 'Fetch historical stock data.' },
        ],
        rating: 4.8,
        popularity: 800,
        createdBy: 'FinanceX',
        documentationLink: 'https://docs.stockmarketapi.com',
    },
    {
        name: 'Currency Exchange API',
        description: 'Provides real-time currency exchange rates.',
        category: 'Finance',
        pricing: {
            free: true,
            paid: {
                basic: '$15/month',
                pro: '$40/month',
                enterprise: null,
            },
        },
        endpoints: [
            { url: '/exchangeRate', method: 'GET', description: 'Fetch current exchange rates.' },
        ],
        rating: 4.2,
        popularity: 600,
        createdBy: 'ForexData',
        documentationLink: 'https://docs.currencyapi.com',
    },
    {
        name: 'Recipe Finder API',
        description: 'Find recipes based on ingredients and preferences.',
        category: 'Food',
        pricing: {
            free: true,
            paid: {
                basic: null,
                pro: '$25/month',
                enterprise: '$75/month',
            },
        },
        endpoints: [
            { url: '/search', method: 'GET', description: 'Search recipes by ingredients.' },
            { url: '/details/:id', method: 'GET', description: 'Fetch recipe details.' },
        ],
        rating: 4.6,
        popularity: 450,
        createdBy: 'FoodieHub',
        documentationLink: 'https://docs.recipeapi.com',
    },
    {
        name: 'Movie Database API',
        description: 'Get information about movies, TV shows, and actors.',
        category: 'Entertainment',
        pricing: {
            free: true,
            paid: {
                basic: null,
                pro: '$30/month',
                enterprise: '$100/month',
            },
        },
        endpoints: [
            { url: '/movies', method: 'GET', description: 'Fetch popular movies.' },
            { url: '/tv-shows', method: 'GET', description: 'Fetch popular TV shows.' },
            { url: '/actors/:id', method: 'GET', description: 'Get details of an actor.' },
        ],
        rating: 4.7,
        popularity: 1100,
        createdBy: 'CineWorld',
        documentationLink: 'https://docs.moviedbapi.com',
    },
    {
        name: 'News Headlines API',
        description: 'Access the latest news from around the world.',
        category: 'News',
        pricing: {
            free: true,
            paid: {
                basic: '$5/month',
                pro: '$20/month',
                enterprise: null,
            },
        },
        endpoints: [
            { url: '/headlines', method: 'GET', description: 'Fetch top headlines.' },
            { url: '/category/:type', method: 'GET', description: 'Get news by category.' },
        ],
        rating: 4.3,
        popularity: 900,
        createdBy: 'GlobalNews',
        documentationLink: 'https://docs.newsapi.com',
    },
    {
        name: 'Fitness Tracker API',
        description: 'Track workouts, calories, and fitness goals.',
        category: 'Health',
        pricing: {
            free: true,
            paid: {
                basic: null,
                pro: '$25/month',
                enterprise: '$80/month',
            },
        },
        endpoints: [
            { url: '/workouts', method: 'POST', description: 'Log a new workout.' },
            { url: '/stats', method: 'GET', description: 'Get fitness stats for a user.' },
        ],
        rating: 4.4,
        popularity: 700,
        createdBy: 'FitLife',
        documentationLink: 'https://docs.fitnessapi.com',
    },
    {
        name: 'E-Commerce API',
        description: 'Build e-commerce functionality into your applications.',
        category: 'Business',
        pricing: {
            free: false,
            paid: {
                basic: '$50/month',
                pro: null,
                enterprise: '$150/month',
            },
        },
        endpoints: [
            { url: '/products', method: 'GET', description: 'Fetch a list of products.' },
            { url: '/checkout', method: 'POST', description: 'Handle checkout process.' },
        ],
        rating: 4.8,
        popularity: 500,
        createdBy: 'ShopEasy',
        documentationLink: 'https://docs.ecommerceapi.com',
    },
    {
        name: 'Translation API',
        description: 'Translate text between different languages.',
        category: 'Language',
        pricing: {
            free: true,
            paid: {
                basic: null,
                pro: '$10/month',
                enterprise: '$50/month',
            },
        },
        endpoints: [
            { url: '/translate', method: 'POST', description: 'Translate text.' },
            { url: '/languages', method: 'GET', description: 'List supported languages.' },
        ],
        rating: 4.5,
        popularity: 750,
        createdBy: 'LingoTech',
        documentationLink: 'https://docs.translationapi.com',
    },
    {
        name: 'Travel Planner API',
        description: 'Plan your trips with travel routes, flights, and hotels.',
        category: 'Travel',
        pricing: {
            free: true,
            paid: {
                basic: null,
                pro: '$35/month',
                enterprise: '$120/month',
            },
        },
        endpoints: [
            { url: '/routes', method: 'GET', description: 'Get travel routes.' },
            { url: '/hotels', method: 'GET', description: 'Search for hotels.' },
            { url: '/flights', method: 'GET', description: 'Search for flights.' },
        ],
        rating: 4.6,
        popularity: 600,
        createdBy: 'TripAdvisor',
        documentationLink: 'https://docs.travelplannerapi.com',
    },
];
module.exports = { data: sampleAPIs };
