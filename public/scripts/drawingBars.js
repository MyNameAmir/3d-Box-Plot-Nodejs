import { extract } from "./d3DataRetrieving.js";


function getColour(country) {
    if (country == "Sweden") {
        return "yellow";
    }
    else if (country == "Finland") {
        return "blue";
    }
    else if (country == "Norway") {
        return "red";
    }
    else {
        return "black"
    }
}



export function drawPlot(array, svg1) {
    let colourCounter = 0;
    let x = -150;
    let z = -3;

    for (let i = 0; i < array.length; i++) {
        array[i].GDP = array[i].GDP.replace(",", "");
        console.log(typeof (array[i].GDP))
    }



    //extract the data
    let threeDArray = extract(array);


    for (let i = 0; i < threeDArray.length; i++) {

        let colour = getColour(threeDArray[i][0]);

        //array = array.sort();
        //TODO: add text into on top of the box, done.

        //with a height of 100, the position needs to be at 47
        //with a height of 10, it needs to be -2
        svg1.append("a-box")
            .attr("id", `abox${i}`)
            .attr("position", `${x / 10} ${((threeDArray[i][2] / 10000) / 2) - 10} ${z}`)//the position has to be done this way because AFrame puts the position of the boxes at the half point on the height???
            .attr("height", `${threeDArray[i][2] / 10000}`)
            .attr("width", 2.5)
            .attr("depth", 2.5)
            .attr("rotation", `0 0 0`)
            .attr("color", `${colour}`);



        for (let y = 200000, z = 10; z >= -7.5 && y >= 0; z -= 2.5 , y -= 25000) {
            svg1.append("a-text")
                .attr(`id`, `s${i}`)
                .attr("value", `$${y}`)
                .attr("color", "black")
                .attr("position", `-24.5 ${z} 0.5`)
                .attr("width", 25)
                .attr("height", 10)
                .attr("text")
        }



       


        //countries labels
        svg1.append("a-text")
            .attr(`id`, `s${i}`)
            .attr("value", `Finland`)
            .attr("color", "black")
            .attr("position", `20.5 ${-9.7} -3`)
            .attr("width", 25)
            .attr("height", 10)
            .attr("text")


        svg1.append("a-text")
            .attr(`id`, `s${i}`)
            .attr("value", `Norway`)
            .attr("color", "black")
            .attr("position", `20.5 ${-9.7} -7`)
            .attr("width", 25)
            .attr("height", 10)
            .attr("text")

        svg1.append("a-text")
            .attr(`id`, `s${i}`)
            .attr("value", `Sweden`)
            .attr("color", "black")
            .attr("position", `20.5 ${-9.7} -11`)
            .attr("width", 25)
            .attr("height", 10)
            .attr("text")



        //quarters labels
        svg1.append("a-text")
            .attr(`id`, `s${i}`)
            .attr("value", `Q1`)
            .attr("color", "black")
            .attr("position", `-16 ${-9.7} 0.5`)
            .attr("width", 25)
            .attr("height", 10)
            .attr("text")


        svg1.append("a-text")
            .attr(`id`, `s${i}`)
            .attr("value", `Q2`)
            .attr("color", "black")
            .attr("position", `-7 ${-9.7} 0.5`)
            .attr("width", 25)
            .attr("height", 10)
            .attr("text")

        svg1.append("a-text")
            .attr(`id`, `s${i}`)
            .attr("value", `Q3`)
            .attr("color", "black")
            .attr("position", `2 ${-9.7} 0.5`)
            .attr("width", 25)
            .attr("height", 10)
            .attr("text")



        svg1.append("a-text")
            .attr(`id`, `s${i}`)
            .attr("value", `Q4`)
            .attr("color", "black")
            .attr("position", `11 ${-9.7} 0.5`)
            .attr("width", 25)
            .attr("height", 10)
            .attr("text")


        svg1.append("a-text")
            .attr(`id`, `s${i}`)
            .attr("value", `Quarterly GDP Sweden, Finland, Norway for 2014`)
            .attr("color", "black")
            .attr("position", `-8 ${-10.7} 3`)
            .attr("width", 20)
            .attr("height", 8)
            .attr("text")




        x += 90;
        colourCounter++;
        if ((i + 1) % 4 == 0) {
            colourCounter = 0;
            x = -150;
            z += -4;
        }
    }

    //does not work
    // for (let i = 0; i < array.length; i++) {
    //     document.getElementById(`abox${i}`).addEventListener("click", (e) => {
    //         console.log(array[i].GDP);
    //     })
    // }

}
