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

const PasswordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ345678";

const PasswordCharactersTable = "G6EQTXYN4WRHBFKOIJAPCD5S8V7UZ3LM";

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
// 1: Number of laps

const RaceTracks = [
	[
		"Luigi Circut", 3
	],
	
	[
		"Peach Beach", 3
	],
	
	[
		"Baby Park", 7
	],
	
	[
		"Dry Dry Desert", 3
	],
	
	[
		"Mushroom Bridge", 3
	],
	
	[
		"Mario Circut", 3
	],
	
	[
		"Daisy Cruiser", 3
	],
	
	[
		"Waluigi Stadium", 3
	],
	
	[
		"Sherbet Land", 3
	],
	
	[
		"Mushroom City", 3
	],
	
	[
		"Yoshi Circut", 3
	],
	
	[
		"DK Mountain", 3
	],
	
	[
		"Wario Colosseum", 2
	],
	
	[
		"Dino Dino Jungle", 3
	],
	
	[
		"Bowser\'s Castle", 3
	],
	
	[
		"Rainbow Road", 3
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
// Zeroth character is named "Racer 0" and the extra kart "Cart 21" (sic).
// As they're not used under normal circumstances, I've blanked out them

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
// 2: ID of the area to be filled by the decoder

const ResultEntries = [
	[
		"Track", "", "track-name"
	],
	
	[
		"Total Laps in Track", "", "track-laps"
	],
	
	[
		"Kart", "", "kart"
	],
	
	[
		"Driver #1", "", "driverX"
	],
	
	[
		"Driver #2", "", "driverY"
	],
	
	[
		"Total Time", "", "time-total"
	],
	
	[
		"Best Lap Time", "", "time-lap"
	]
];