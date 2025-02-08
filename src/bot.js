require("dotenv").config();
const {createBot, createProvider, createFlow} = require("@bot-whatsapp/bot");
const baileysProvider = require("./providers/baileysProviders");

// Importar Flujos
const welcomeFlow = require("./flows/welcomeFlow");
const menuFlow = require("./flows/menuFlow");
const consultsFlow = require("./flows/consultsFlow");

// Crear el bot con los flows
const main = async () => {
    // Se configuran los adaptadores de los procesos
    const adapterFlow = createFlow([welcomeFlow, menuFlow, consultsFlow]);
    const adapterProvider = createProvider(baileysProvider);

    // Se crea el bot
    createBot({
        flow: adapterFlow,
        provider: adapterProvider
    });

    console.log("Bot iniciado...");
};

main().then(r => r);