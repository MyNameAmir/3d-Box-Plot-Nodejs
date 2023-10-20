export function lines(svg1){
    //figuring out the height of the lines, DONE
    //refine this, make it a loop instead of this, make it more flexible
    for (let i = 10; i >= -5; i -= 2.5) {
        svg1.append("a-entity")
            .attr("line", `start: -20 ${i} -19.7; end: 20 ${i} -19.7; color: red`)
    }


    for (let i = 10; i >= -7.5; i -= 2.5) {
        svg1.append("a-entity")
            .attr("line__4", `start: -19.7 ${i} 0; end: -19.7 ${i} -19.7; color: red`)
    }

    for (let i = -3; i >= -11; i -= 4) {
        svg1.append("a-entity")
            .attr("line", `start: -20 -9.7 ${i}; end: 20 -9.7 ${i}}; color: red`)
    }
   

    for(let i = -15; i <= 12; i += 9){
        svg1.append("a-entity")
        .attr("line", `start: ${i} -9.7 0; end: ${i} -9.7 -20; color: red`)
    }
   
       

}