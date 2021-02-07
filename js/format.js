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

// Functions

function _FormatTime(Time) {
	var TimeMilliSec;
	var TimeSec;
	var TimeMin;
			
	TimeMilliSec = Time % 1000;
	TimeSec = Math.floor(Time / 1000);
	TimeMin = Math.floor(TimeSec / 60);

	TimeSec %= 60;
	
	while (TimeMilliSec.toString().length < 3)
		TimeMilliSec = "0" + TimeMilliSec;
			
	while (TimeSec.toString().length < 2)
		TimeSec = "0" + TimeSec;
			
	while (TimeMin.toString().length < 2)
		TimeMin = "0" + TimeMin;
			
	return TimeMin + " : " + TimeSec + " . " + TimeMilliSec;
}