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

const Title = "Mario Kart: Double Dash!! Password Decoder";

const Version = "1.2.2";
const VersionDate = "14 April 2024";

// Functions

function _SetTitle() {
	var SplitTitle = Title.split(" ");
	
	var FinalTitle = "<i>";
	
	for (var i=0;i<SplitTitle.length;i++) {
		if (SplitTitle[i].toLowerCase().search("password") > -1)
			FinalTitle += "</i>";
		
		FinalTitle += SplitTitle[i];
		
		if (i + 1 < SplitTitle.length)
			FinalTitle += " ";
	}
	
	document.getElementById("title").innerHTML = FinalTitle;
}

function _SetVersion() {
	document.getElementById("version").innerHTML = "Version " + Version;
}

function _SetVersionDate() {
	document.getElementById("version").innerHTML = VersionDate;
}

// To be executed

_SetTitle();

_SetVersion();