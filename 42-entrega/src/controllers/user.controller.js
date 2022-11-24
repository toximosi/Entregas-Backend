import { usersService } from '../services/services.js';

const getAll = async (req, res) => {
    console.log('--> Run user getAll');

    let result = await usersService.getAll();
    res.send({ status: "success", payload: result })
}

const getBy = async (req, res) => {
    console.log('--> Run user getBy');

    const data = req.params;
    const id = data.id;
    const result = await usersService.getBy({_id:id});
    if (!result) return res.status(404).send({ status: "error", error: "User don't find" });
    res.send({ status: "success", payload: result })
}

export default {
    getAll,
    getBy
}