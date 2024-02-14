const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', (request, response) =>
{
    console.log(request.query.name);
    response.send("User List");
});

router.get('/new', (request, response) =>
{
    response.render("users/new");
})

router.get('/new', (request, response) =>
{
    response.send("User New Form");
});

router.post('/', (request, response) =>
{
    const isValid = true;
    if(isValid){
        users.push({firstName: request.body.firstName});
        response.redirect(`/users/${users.length - 1}`);
    }
    else
    {
        console.log("Error");
        response.render("users/new", {firstName: request.body.firstName});
    }
});

router.route('/:id')
    .get((request, response) =>
    {
        // console.log(request.user);
        console.log(request.user);
        response.send(`Get User with id: ${request.params.id}`);    
    })
    .put((request, response) =>
    {
        response.send(`Put User with id: ${request.params.id}`);
    })
    .delete((request, response) =>
    {
        response.send(`Delete User with id: ${request.params.id}`);
    });

// router.get('/:id', (request, response) =>
// {
//     response.send(`Get User with id: ${request.params.id}`);
// });

// router.put('/:id', (request, response) =>
// {
//     response.send(`Put User with id: ${request.params.id}`);
// });

// router.delete('/:id', (request, response) =>
// {
//     response.send(`Delete User with id: ${request.params.id}`);
// });

const users = [{name: "Kyle"}, {name: "Sally"}];
router.param("id", (request, response, next, id) =>
{
    request.user = users[id];
    next();
});

function logger(request, response, next)
{
    console.log(request.originalUrl);
    next();
}

module.exports = router;