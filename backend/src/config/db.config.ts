
import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaNeon } from "@prisma/adapter-neon";
import { DATABASE_URL } from "./server.config.ts";

const adapter = new PrismaNeon({
    connectionString : DATABASE_URL
})

export const prisma = new PrismaClient({adapter})