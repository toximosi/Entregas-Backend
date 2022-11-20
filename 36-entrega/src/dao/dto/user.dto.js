export default class userDtoPresenter { 
    constructor(user) { 
        this.id = user._id,
        this.fullname = `${user.first_name} ${user.last_name}`,
        this.email = user.email,
        this.rol = user.rol || 'user',
        this.image = user.image       
    }
}

export class UserDtoInsert { 
    constructor(user) { 
        this.age = parseInt(user.age)
    }
}