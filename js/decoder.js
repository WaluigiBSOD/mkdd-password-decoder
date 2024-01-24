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

function _DecodePassword(Password) {
	ValidPassword = false;
	
	if (Password.length == 16) {
		var PasswordBuffer = Array(16).fill(0);
		var DecodedData = Array(10).fill(0);
		
		var X = 0;
		var Y = 0;
		var Z = 0;
		
		var Kart = 0;
		var DriverX = 0;
		var DriverY = 0;
		var RaceTrack = 0;
		var RaceTrackName = 0;
		var RaceTrackLaps = 0;
		var TotalTime = 0;
		
		var Checksum;
		var TestChecksum = 0;
		
		var Temporary = 0;
		
		// Character-to-decimal digit conversion

		for (var i=0;i<16;i++) {
			Temporary = PasswordCharacterTable.indexOf(Password.charAt(i));
			
			if (Temporary > -1)
				PasswordBuffer[i] = Temporary;
			else {
				_WriteError("Wrong character(s) in password");
				
				return;
			}
		}
		
		// Decoding
		
        DecodedData[0] = ((PasswordBuffer[0] << 3) | (PasswordBuffer[1] >> 2)) & 0xFF;
        DecodedData[1] = ((PasswordBuffer[1] << 6) | (PasswordBuffer[2] << 1) | (PasswordBuffer[3] >> 4)) & 0xFF;
        DecodedData[2] = ((PasswordBuffer[3] << 4) | (PasswordBuffer[4] >> 1)) & 0xFF;
        DecodedData[3] = ((PasswordBuffer[4] << 7) | (PasswordBuffer[5] << 2) + (PasswordBuffer[6] >> 3)) & 0xFF;
        DecodedData[4] = ((PasswordBuffer[6] << 5) | PasswordBuffer[7]) & 0xFF;
        DecodedData[5] = ((PasswordBuffer[8] << 3) | (PasswordBuffer[9] >> 2)) & 0xFF;
        DecodedData[6] = ((PasswordBuffer[9] << 6) | (PasswordBuffer[10] << 1) | (PasswordBuffer[11] >> 4)) & 0xFF;
        DecodedData[7] = ((PasswordBuffer[11] << 4) | (PasswordBuffer[12] >> 1)) & 0xFF;
        DecodedData[8] = ((PasswordBuffer[12] << 7) | (PasswordBuffer[13] << 2) + (PasswordBuffer[14] >> 3)) & 0xFF;
        DecodedData[9] = ((PasswordBuffer[14] << 5) | PasswordBuffer[15]) & 0xFF;
		
		// This way of scrambling things is pretty weird (considering
		// also that the alphabet is shuffled).
		
		X = (DecodedData[8] << 8) | DecodedData[9];
		
		for (var i=0;i<8;i++) {		
			DecodedData[i] = (DecodedData[i] ^ (X >>> 8)) & 0xFF;
			
			Y = ((67983421 * X) + 1) & 0xFFFFFFFF;
			
			Z = (Y / 100000000) & 0xFFFFFFFF;
			Z = (Z * 100000000) & 0xFFFFFFFF;
			
			X = Y - Z;
		}
		
		// Kart
		
		Kart = (DecodedData[6] >> 1) & 0x1F;
		
		// Driver #1
		
		DriverX = ((DecodedData[7] >> 4) | (DecodedData[6] << 4)) & 0x1F;
		
		// Driver #2
		
		DriverY = ((DecodedData[2] << 3) | (DecodedData[3] >> 5)) & 0x1F;
		
		// Race Track
		
		RaceTrack = DecodedData[7] & 0xF;
		
		// Time (total)
		//
		// What you see after decompiling the SWF file is incorrect
		// as 16 and 8 left-shifts must be replaced by 11 and 3 (decremented by 5).
		// If you don't do this, you put 5 always-zero bits starting from
		// the 3rd bit from LSB (Least Significant Bit).
		//
		// If total time exceeds 08 : 44 . 287 the game refuses to generate a code.
		
		TotalTime = (DecodedData[0] << 11) | (DecodedData[1] << 3) | (DecodedData[2] >> 5);
		
		// Time (best lap)
		//
		// For the same reason of the precedent calculation, you must replace
		// 16 and 8 left-shifts with 10 and 2 (decremented by 6).
		// In this case the always-zero gap is 6 bits long and starts
		// from the 2nd bit from LSB (Least Significant Bit).
		//
		// Also here, if best lap time exceeds 04 : 22 . 143 the game refuses
		// to generate a code.
		
		BestLapTime = (DecodedData[4] << 10) | (DecodedData[5] << 2) | (DecodedData[6] >> 6);
		
		// Checksum (embedded)
		
		Checksum = DecodedData[3] & 0x1F;
		
		// Checksum (calculated)
		
		Temporary = (DecodedData[2] >> 2) & 0x3;
		Temporary += (DecodedData[2] >> 4) & 0x1;
		Temporary += RaceTrack;
		Temporary += Kart;
		Temporary += DriverX;
		Temporary += DriverY;
		Temporary += TotalTime;
		Temporary += BestLapTime;
		
		TestChecksum = Temporary & 0xFF;
		TestChecksum += (Temporary >> 8) & 0xFF;
		TestChecksum += (Temporary >> 16) & 0xFF;
		TestChecksum += (Temporary >> 24) & 0xFF;
		TestChecksum &= 0x1F;
		
		if (Checksum == TestChecksum) {
			// Race Track
			
			if (RaceTrack < RaceTrackMinimum || RaceTrack > RaceTrackMaximum) {
				_WriteError("Invalid Race Track");
				
				return;
			}
			
			RaceTrackName = RaceTracks[RaceTrack][0];
			RaceTrackLaps = RaceTracks[RaceTrack][1];
			
			document.getElementById("track-name").innerHTML = RaceTrackName;
			
			// Kart
			
			if (Kart < KartMinimum || Kart > KartMaximum) {
				_WriteError("Invalid Kart");
				
				return;
			}
			
			document.getElementById("kart").innerHTML = KartNames[Kart];
			
			// Driver #1
			
			if (DriverX < DriverMinimum || DriverX > DriverMaximum) {
				_WriteError("Invalid Driver #1");
				
				return;
			}
			
			document.getElementById("driverX").innerHTML = CharacterNames[DriverX];
			
			// Driver #2
			
			if (DriverY < DriverMinimum || DriverY > DriverMaximum) {
				_WriteError("Invalid Driver #2");
				
				return;
			}
			
			if (DriverX == DriverY) {
				// Nowhere in the game is possible to drive with the same character
				// twice on a kart without cheating.
				
				_WriteError("Driver #1 and Driver #2 cannot be the same");
				
				return;
			}
			
			document.getElementById("driverY").innerHTML = CharacterNames[DriverY];
			
			// Best/Total Lap Time
			
			if ((BestLapTime * RaceTrackLaps) > TotalTime) {
				// A very quick (relative) validity check can be done by checking if the best lap time
				// multiplied by the total number of laps is less or equal to the total time,
				// because if this is not true at least one is wrong for sure.
				//
				// This can be proved by using property #1 of https://en.wikipedia.org/wiki/Generalized_mean#Properties
				// by proving that BestLapTime <= TotalTime / RaceTrackLaps, as "TotalTime / RaceTrackLaps"
				// is the arithmetic mean of all lap times and "BestLapTime" is the smallest lap time.
				//
				// In the SWF decoder the total number of laps of each track is left unused,
				// I think it was meant to be used to perform a validity check like this one.
				//
				// This validity check is "relative" because checks if best/total lap time are compatible
				// by comparing them each other, doesn't check them against e.g. an absolute lower bound of
				// times obtainable without cheating.
				
				_WriteError("Invalid Best/Total Lap Time(s)");
				
				return;
			}
			
			document.getElementById("time-total").innerHTML = _FormatTime(TotalTime);
			
			document.getElementById("time-lap").innerHTML = _FormatTime(BestLapTime);
			
			// Show result
			
			_ShowResult();
			
			ValidPassword = true;
		} else
			_WriteError("Invalid checksum");
	} else
		_WriteError("Enter password",true);
}