const { PrismaClient } = require('@prisma/client');
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.POSTGRES_PRISMA_URL,
});

/* client.connect()
    .then(() => {
        console.log('Connected to the database successfully!');
        return client.query('SELECT NOW()');
    })
    .then((res) => {
        console.log('Current time:', res.rows[0]);
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    })
    .finally(() => {
        client.end();
    });
 */
const pageName = 'kinematics-of-rigid-body-motion';

const prisma = new PrismaClient({
    log: ['info'],
  })

const findPage = async (pageName) => {
    const page = await prisma.pages.findUnique({
        where: {
            pageName: pageName,
        },
        select: {
            id: true,
            pageName: true,
            link: true,
        }
    });


    if (page) {
        return {
            ...page,
            message: 'Page found'
        };
    }

    return null;
}
 

async function main1() {
    const pages = await prisma.pages.findMany();
    console.log(pages);
  }

main1();

const main = async () => {

    try {
      const page = await findPage(pageName);
      console.log(page);
    } catch (err) {
      console.error(err);
    } finally {
      await prisma.$disconnect();
    }
  };
 
