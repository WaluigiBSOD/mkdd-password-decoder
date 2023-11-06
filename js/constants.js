// Mario Kart: Double Dash!! Password Decoder
// Copyright (C) 2021-present WaluigiBSOD (waluigibsod.github.io)
//
// This file is part of Mario Kart: Double Dash!! Password Decoder.
//
// Mario Kart: Double Dash!! Password Decoder is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Mario Kart: Double Dash!! Password Decoder is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

// Constants

const PasswordCharacterTable = "G6EQTXYN4WRHBFKOIJAPCD5S8V7UZ3LM";		// 345678ABCDEFGHIJKLMNOPQRSTUVWXYZ

const KartNames = [
	"Red Fire",
	"DK Jumbo",
	"Turbo Yoshi",
	"Koopa Dasher",
	"Hearth Coach",
	"Goo-Goo Buggy",
	"Wario Car",
	"Koopa King",
	"Green Fire",
	"Barrel Train",
	"Turbo Birdo",
	"Para Wing",
	"Bloom Coach",
	"Rattle Buggy",
	"Waluigi Racer",
	"Bullet Blaster",
	"Toad Kart",
	"Toadette Kart",
	"Boo Pipes",
	"Piranha Pipes",
	"Parade Kart",
	""
];

// Race Track Entry Format
//
// 0: Name
// 1: Total number of laps

const RaceTracks = [
	[
		"Luigi Circut",			// Name
		3						// Total number of laps
	],
	
	[
		"Peach Beach",			// Name
		3						// Total number of laps
	],
	
	[
		"Baby Park",			// Name
		7						// Total number of laps
	],
	
	[
		"Dry Dry Desert",		// Name
		3						// Total number of laps
	],
	
	[
		"Mushroom Bridge",		// Name
		3						// Total number of laps
	],
	
	[
		"Mario Circut",			// Name
		3						// Total number of laps
	],
	
	[
		"Daisy Cruiser",		// Name
		3						// Total number of laps
	],
	
	[
		"Waluigi Stadium",		// Name
		3						// Total number of laps
	],
	
	[
		"Sherbet Land",			// Name
		3						// Total number of laps
	],
	
	[
		"Mushroom City",		// Name
		3						// Total number of laps
	],
	
	[
		"Yoshi Circut",			// Name
		3						// Total number of laps
	],
	
	[
		"DK Mountain",			// Name
		3						// Total number of laps
	],
	
	[
		"Wario Colosseum",		// Name
		2						// Total number of laps
	],
	
	[
		"Dino Dino Jungle",		// Name
		3						// Total number of laps
	],
	
	[
		"Bowser\'s Castle",		// Name
		3						// Total number of laps
	],
	
	[
		"Rainbow Road",			// Name
		3						// Total number of laps
	]
];

const CharacterNames = [
	"",
	"Baby Mario",
	"Baby Luigi",
	"Paratroopa",
	"Koopa Troopa",
	"Peach",
	"Daisy",
	"Mario",
	"Luigi",
	"Wario",
	"Waluigi",
	"Yoshi",
	"Birdo",
	"DK",
	"Diddy Kong",
	"Bowser",
	"Bowser Jr.",
	"Toad",
	"Toadete",
	"King Boo",
	"Petey Piranha"
];

// Oddities
//
// For some reason character numbering starts from 1 instead of 0,
// and an extra kart is mentioned in the Flash-based decoder.
//
// Zeroth character is named "Racer 0" and the extra kart "Cart 21" (sic).
//
// As they're not used under normal circumstances, I've blanked out them.

const KartMinimum = 0;
const KartMaximum = 20;

const DriverMinimum = 1;
const DriverMaximum = 20;

const RaceTrackMinimum = 0;
const RaceTrackMaximum = 15;

// Result Table Entry Format
//
// 0: Caption
// 1: Caption ID (optional)
// 2: Area ID (to be filled by the decoder)

const ResultEntries = [
	[
		"Track",					// Caption
		"",							// Caption ID
		"track-name"				// Area ID
	],
	
	[
		"",							// Caption
		"",							// Caption ID
		""							// Area ID
	],
	
	[
		"Total Time",				// Caption
		"",							// Caption ID
		"time-total"				// Area ID
	],
	
	[
		"Best Lap Time",			// Caption
		"",							// Caption ID
		"time-lap"					// Area ID
	],
	
	[
		"",							// Caption
		"",							// Caption ID
		""							// Area ID
	],
	
	[
		"Kart",						// Caption
		"",							// Caption ID
		"kart"						// Area ID
	],
	
	[
		"Driver #1",				// Caption
		"",							// Caption ID
		"driverX"					// Area ID
	],
	
	[
		"Driver #2",				// Caption
		"",							// Caption ID
		"driverY"					// Area ID
	]
];