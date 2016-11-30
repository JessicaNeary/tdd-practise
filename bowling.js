module.exports = function scores(frame){
	var total = 0;

	for(var f=0; f<frame.length; f++){
		var round = frame[f]

		//if final frame
		if(f == frame.length-1){
			//adds score for first two balls
			total += roundScore(round)
			//checks if spare or strike
			if(roundScore(round) >= 10){
				//adds third ball
				total += round[2]
			}
		}

		//if strike
		else if(isStrike(round)){
			//if next ball is strike
			if(isStrike(frame[f+1])){
				total += 20 + frame[f+2][0]
			}
			else{
				total += 10 + roundScore(frame[f+1])
			}
		}

		//if spare
		else if(roundScore(round) == 10){
			total += 10 + frame[f+1][0]
		}

		//if open
		else{
			//adds score of both balls
			total += roundScore(round)
		}
	}

	return total
}

//calculates score for the round
function roundScore(round){
	return round[0]+round[1]
}

//returns true if round was strike
function isStrike(round){
	if(round[0] == 10 || round[1] == 10){
		return true;
	}
	return false;
}
