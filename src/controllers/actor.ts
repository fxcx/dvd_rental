import { NotFoundError } from "elysia";
import { prisma } from "../lib/prisma";

export const createActor = async(data: any) => {
    const { first_name, last_name } = data;
    try {
        const actor = await prisma.actor.create({
            data: {
                first_name,
                last_name
            },
        });
        if (!actor) {
            throw new NotFoundError("Todo not found");
        }
        return actor;
    } catch (error) {
        throw new NotFoundError()
    }
}

export const getActors = async() => {
    try {
        return await prisma.actor.findMany();
    } catch (error) {
        console.error("Error getting Todos ", error);
    }
}


export const getActorById = async(id: number) => {
    try {
        const actor = await prisma.actor.findUnique({
            where: {
                actor_id: id
            }
        });
        if (!actor) {
            throw new NotFoundError("Todo not found");
        }
        return actor;
    } catch (error) {
        console.error("Error getting Todo with id ", id, error);
    }
}

export const updateActor = async(id: number, data: any) => {
    try {
        const { first_name, last_name } = data;
        const actor = await prisma.actor.update({
            where: {
                actor_id: id
            },
            data: {
                first_name,
                last_name
            },
        });
        if (!actor) {
            throw new NotFoundError("Todo not found");
        }
        return actor;
    } catch (error) {
        console.error("Error updating Todo with id ", id, error);
    }
}

export const deleteActor = async (id: number) => {
    try {
        const actor = await prisma.actor.delete({
            where: {
                actor_id: id
            }
        });
        if (!actor) {
            throw new NotFoundError("Todo not found");
        }
        return actor;
    } catch (error) {
        console.error("Error deleting Todo with id ", id, error);
    }
}