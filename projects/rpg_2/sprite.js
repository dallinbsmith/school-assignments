var Sprite = function(fn) {
    
    
    this.TO_RADIANS = Math.PI/180;
    this.image = null;
    this.is_pattern = null;
    this.pattern_x_times = 0;
    this.load = function(fileName) {this.image = new Image(); this.image.src = fileName}
    this.to_pattern = function(x_times) {this.pattern_x_times = x_times; this.pattern}
    
    
    this.animationDelay = 0;
    this.animationIndexCounter = 0;
    this.animationCurrentFrame = 0;
    
    
    if (fn != undefined && fn != "" && fn != null)
        {
            this.load(fn);
            console.log("loaded Sprite" + fn);
        }
        else
        {
            console.log("unalbe to load sprite. Filename " + fn + " is undefined or null");        
        }
    
    
    
    
}