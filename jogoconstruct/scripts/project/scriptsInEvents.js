

const scriptsInEvents = {

	async FolhaJogo_Event20_Act2(runtime, localVars)
	{
		runtime.globalVars.moedas++;
		const moeda = runtime.objects.Moedas?.getFirstPickedInstance();
		if (Moedas) {
		    Moedas.destroy();
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
