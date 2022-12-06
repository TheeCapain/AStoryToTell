import bcrypt from 'bcrypt'

const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

export async function passwordHashing(password) {
    const hashedPW = bcrypt.hashSync(password, salt);
    return hashedPW
}

export async function passwordCompare(loginPassword, encrypedPassword) {
    return await bcrypt.compare(loginPassword, encrypedPassword);
}