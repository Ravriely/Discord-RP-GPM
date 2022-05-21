/*jshint esversion: 8 */

function ToggleView(line) {
	var x = document.getElementById(line);
	var y = document.getElementsByClassName(line + '-btn');
	console.log(y);
	if (x.style.visibility === 'hidden') {
	  x.style.visibility = 'visible';
	  for (var i = 0; i < y.length ; i++) {
		y[i].style.visibility = 'hidden';
	  }
	} else {
	  x.style.visibility = 'hidden';
	  for (var j = 0; j < y.length ; j++) {
		y[j].style.visibility = 'visible';
	  }
	}
}

function createLinkWindow(id, state) {
	if (id == 'all') {
		document.getElementById('viewer-gpm').style.bottom = '-105%';
		document.getElementById('viewer-rd').style.bottom = '-105%';
		document.getElementById('viewer-vier').style.bottom = '-105%';
		document.getElementById('viewer-sv').style.bottom = '-105%';
	}
	var vwr = document.getElementById(id);
	if (state == 'close') {
		vwr.style.bottom = '-105%';
	} else {
		if (id == 'viewer-gpm') {
			vwr.src = 'https://omsi-gpm.fr';
			vwr.style.bottom = '-3.5%';
		} else if (id == 'viewer-rd') {
			vwr.style.bottom = '-7%';
		} else if (id == 'viewer-vier') {
			vwr.style.bottom = '-7%';
		} else if (id == 'viewer-sv') {
			vwr.style.bottom = '-7%';
		}
	}
}

function getStamp(line_super) {
	if (line_super == "91_06a") {
		return 44;
	}
	if (line_super == "91_06b") {
		return 54;
	}
	if (line_super == "91_06c") {
		return 25;
	}
	if (line_super == "91_06d") {
		return 15;
	}
	if (line_super == "7") {
		return 15;
	}
	if (line_super == "8") {
		return 24;
	}
	if (line_super == "s8") {
		return 18;
	}
	if (line_super == "9") {
		return 0;
	}
	if (line_super == "11") {
		return 0;
	}
	if (line_super == "11s") {
		return 0;
	}
	if (line_super == "14") {
		return 0;
	}
	if (line_super == "17") {
		return 17;
	}
	if (line_super == "17s") {
		return 11;
	}
	if (line_super == "h") {
		return 14;
	}
}

var infos = true;


var intervalId = window.setInterval(function(){
	if (infos == true) infos = false;
	else infos = true;
	setActivity('None','None','None','None','None',0);
  }, 5000);


const clientId = '939437409773428737';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });
const date = Date.now();

DiscordRPC.register(clientId);

var precedent_rpc = ['None','None','None','None','None','None','None'];
var date_stamp = 'None';

async function setActivity(departure,destination,repaint,bus,line,line_super) {
	if (!RPC) return;

	if (line_super == 0) {
		departure = precedent_rpc[0];
		destination = precedent_rpc[1];
		repaint = precedent_rpc[2];
		bus = precedent_rpc[3];
		line = precedent_rpc[4];
		line_super = precedent_rpc[5];
		console.log(precedent_rpc, precedent_rpc[0]);
	} else {
		date_stamp = new Date().getMinutes() + getStamp(line_super);
		precedent_rpc = [departure,destination,repaint,bus,line,line_super,date_stamp];
	}

	if (infos == true) {
		repaint = document.getElementById('repaint').value;
		bus = document.getElementById('bus').value;
		info_state = String(repaint + ' - ' + bus);
	} else if (line_super != null && line_super != 'None' && line_super != 'sv') {
		info_state = String('Arrivée prévue dans ' + (date_stamp - new Date().getMinutes()) + ' minutes');
	}

	if ((departure == destination || destination == '') && line_super == 'sv') {
		RPC.setActivity({
			details: '> ' + departure,
			state: info_state,
			startTimestamp: date,
			largeImageKey: 'gpm-logo',
			largeImageText: 'Grand Paris-Moulon',
			smallImageKey: line_super,
			smallImageText: line,
			instance: false,
		});
	} else if ((departure == destination || destination == '') && line_super != 'sv') {
		RPC.setActivity({
			details: '> ' + destination,
			state: info_state,
			startTimestamp: date,
			largeImageKey: 'gpm-logo',
			largeImageText: 'Grand Paris-Moulon',
			smallImageKey: line_super,
			smallImageText: 'Ligne ' + line,
			instance: false,
		});
	} else {
		RPC.setActivity({
			details: departure + ' > ' + destination,
			state: info_state,
			startTimestamp: date,
			largeImageKey: 'gpm-logo',
			largeImageText: 'Grand Paris-Moulon',
			smallImageKey: line_super,
			smallImageText: 'Ligne ' + line,
			instance: false,
		});
	}
}

RPC.on('ready', async () => {
	setActivity('None','None','None','None','None','None');
});

RPC.login({ clientId }).catch(err => console.error(err));