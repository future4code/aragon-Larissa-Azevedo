import { Request, Response } from "express";
import connection from "../database/connection";

export const editUserNickname = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = Number(req.params.userId)
        const newNickname = req.body.newNickname

        if (!newNickname) {
            throw new Error("Error: Empty field. Please add a new nickname");
        }

        if (typeof newNickname !== "string") {
            errorCode = 406
            throw new Error("Error: Nickname must be a string.");
        }

        if (newNickname.length < 3) {
            errorCode = 400
            throw new Error("Error: Nickname must be at least 3 characters long.");
        }

        const [checksUserId] = await connection.raw(`
        SELECT * FROM Users
        WHERE id = ${id}`)

        if (!checksUserId[0]) {
            throw new Error("Error: User doesn't exist in our database.");
        }

        await connection.raw(`
        UPDATE Users
        SET nickname = "${newNickname}"
        WHERE id = ${id}
        `)

        res.status(200).send({ message: "Nickname successfully updated!" })


    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
}