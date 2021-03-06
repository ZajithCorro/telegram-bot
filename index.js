import 'dotenv/config';
import { Telegraf } from 'telegraf';
import cron from 'node-cron';

const bot = new Telegraf(process.env.BOT_TOKEN);

const devs = ['Alina π©βπ«', 'Alexis π', 'Arelis πͺ', 'Γngel π€', 'Alfredo  π', 'Zajith πΎ'];
const commands = [
	{
		name: 'hi',
		description: 'Mensaje de saludo β',
	},
	{
		name: 'pickone',
		description: 'Elige uno de nosotros π',
	},
	{
		name: 'actividades',
		description: 'Manda un mensaje de recordatorio de actividades π',
	},
];

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) =>
	ctx.reply(commands.map((command) => `/${command.name} - ${command.description}`).join('\n'))
);

bot.command('hi', (ctx) => {
	const { username } = ctx.from;
	ctx.reply(`Hola ${username}, soy un devsaurio bot πΎπ¨βπ»π©βπ»`);
});

bot.command('pickone', (ctx) => {
	const random = Math.floor(Math.random() * devs.length);
	ctx.reply(`${devs[random]}`);
});

bot.command('actividades', (ctx) => ctx.reply('Chicos, recuerden poner sus actividades (Voz Are)'));

bot.launch();
