# NYT and Unsplash Exercise

Sign up for new API keys at both *New York Times* and *Unsplash*

### Unsplash
* Create a developer account here - https://unsplash.com/developers
* Next, create an application here - https://unsplash.com/oauth/applications this will give you an "Application ID" that you'll need to make requests
* You will need to authenticate with the API by including your API token with every request in the header. Check out that info here: "https://unsplash.com/documentation#public-actions"

### The New York Times
* Create a developer account here - https://developer.nytimes.com/
* They'll email you your api-key (you'll need this to make requests)
* Check out the article search section of the API https://developer.nytimes.com/article_search_v2.json
* Also check out the API Experiment page to try the API and see some of the associated code - https://developer.nytimes.com/article_search_v2.json#/Console/GET/articlesearch.json

### Typicode JSON PlaceHolder
* No developer account required! https://jsonplaceholder.typicode.com/

----

1) Using the unsplash API, write code to have your app search for photos of your favorite animal and output the first page worth of images onto your page.
2) Similar to how we added the Unsplash image to the page. Search for a single page (10 articles), using your same favorite animal, from the NY Times API. Create a link on the page that links back to the article, and include the snippet about the article below the link.
3) Create some inputs that accepts the following information `title`, `body` and `userId`. Submit this to the `/posts` endpoint of [this API](https://jsonplaceholder.typicode.com/). Check out this [link](https://github.com/typicode/jsonplaceholder#how-to
) for some usage information. Once it's been successful, update the page to indicate the submission was successful and include the ID of the new post that was created. Do not use a `form` to surround your inputs, otherwise you may find you get into some troubles.

It's worth checking out Udacity 4.7 - Ajax with Fetch again if you want to know more about using the Javascript fetch API.
