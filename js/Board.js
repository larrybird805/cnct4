class Board { 
    constructor(row, columns, spaces){
        this.row = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }
    
    /** 
     * Generates 2D array of spaces.
     * @return {array} an array of space objects 
     */ 
    createSpaces(){
        const spaces = [];
        for(let x=0; i < this.columns; x++){
            const column =[];

            for(let y=0; y < this.rows; y++){
                const space = new Space(x,y);
                column.push(space);
            }  
            spaces.push(column);
        }
        return spaces;
    }
}                                 