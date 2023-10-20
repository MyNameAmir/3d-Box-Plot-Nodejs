
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

//data sourced from https://www.kaggle.com/datasets/aliasgherman/tsp-jan2022-gdp-per-quarter?resource=download
export async function extractCSVData(file) {
    const x = await d3.csv(file, function (d) { return d })
    return x;
}

export function extract(array) {
    let tempArray = [];
    for (let i = 0, count = 1; i < array.length; i++) {
        if (array[i].Country == "Finland") {
            if (array[i].YearQuarter == `2014Q${count}`) {
                tempArray.push(["Finland", array[i].YearQuarter, array[i].GDP.replace(",", "")]);
                count++;
            }
        }
        else if (array[i].Country == "Sweden") {
            if (array[i].YearQuarter == `2014Q${count}`) {
                tempArray.push(["Sweden", array[i].YearQuarter, array[i].GDP.replace(",", "")]);
                count++;
            }
        }
        else if (array[i].Country == "Norway") {
            if (array[i].YearQuarter == `2014Q${count}`) {
                tempArray.push(["Norway", array[i].YearQuarter, array[i].GDP.replace(",", "")]);
                count++;
            }
        }
        if (count == 5)
            count = 1;
    }
    return tempArray;
}
