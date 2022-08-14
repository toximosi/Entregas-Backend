const isAdmin = (req, res, next) => {
    if (req.params.admin == true) { 
        next();
    };
}

export default isAdmin;