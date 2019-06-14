1.  Explain the differences between `client-side routing` and `server-side routing`.

- SS routing: every request results in a full page refresh and can take a while for the page to be rendered
- CS routing: uses JS to maintain the state withint he application which in turn tells the browser what to display when a request is made.; 
                routing between views is faster; extra code must be written since server-side routing is the standard; smooth transitions and animations between views are easier to implement.

1.  What does HTTP stand for?

-   Hyper-Text Markup Language

1.  What does CRUD stand for?

-   Create, Read, Update and Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

-   Create = .post()
    Read    =   .get()
    Update  =   .put()
    Delete  =   .delete()

1.  Mention three tools we can use to make AJAX requests

-   .fetch(),   .then(),    .catch()