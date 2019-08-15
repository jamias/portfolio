package  {
	import flash.net.SharedObject;
	
	public class Score {

		private static const FILE:String = "PuzzleBest4";
		private static var file:SharedObject;
		

		public function Score() {
			// constructor code
		}


		public static function saveScore(image:String, dim:String, time:int, movs:int):void {
			file = SharedObject.getLocal(FILE);
			
			if ( !file.data.exist ) {
				trace("Undefined all - Scores");
				file.data.exist = true;
				file.data.scores = [];
				file.data.scores.push( [image, dim, time, movs] );
			} else {
				trace("Loading Scores");
				var bestScore:Array = loadScoresByImageDim(image, dim);
				if (bestScore == null) {
					bestScore = [image, dim, time, movs];
				}
				if (time <= bestScore[2]) {
					bestScore[2] = time;
				}
				if (movs <= bestScore[3]) {
					bestScore[3] = movs;
				}
				file.data.scores.push ( [image, dim, bestScore[2], bestScore[3]] );
			}
			file.close();
		}
		
		
		
		public static function loadScoresByImageDim(image:String, dim:String):Array {
			var scoresArray:Array;
			
			file = SharedObject.getLocal(FILE);
			if ( file.data.exist ) {
				scoresArray = file.data.scores;
			} else {
				trace("Not open Scores");
				return null;
			}
			file.close();
			
			// Filter by Image
			for (var i:int = 0; i < scoresArray.length; i++) {
				if (scoresArray[i][0] == image && scoresArray[i][1] == dim) {
					return scoresArray[i];
				}
			}
			//End of filter
			
			trace("Score's reached End of File without results - No Results saved for this image @" + dim);
			return null;
		}
		
		
	}	
	
}
