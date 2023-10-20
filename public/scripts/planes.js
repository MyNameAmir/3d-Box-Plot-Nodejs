
// Declare the chart dimensions and margins.

export function planes(svg1) {
    svg1.append("a-box").attr("class", "aplane").attr("position", "0 -10 -10").attr("rotation", `90 0 0`).attr("depth", "0.5").attr("width", "40").attr("height", "20").attr("color", "#7BC8A4")
    //change the position (the -20) based on the number of rows you are going to get
    svg1.append("a-box").attr("class", "aplane").attr("position", "0 0 -20").attr("rotation", `0 0 0`).attr("width", "40").attr("depth", "0.5").attr("height", "20").attr("color", "#888888")
    //svg1.append("a-plane").attr("id", "aplane").attr("position", "-20 0 -20").attr("rotation", `0 -90 0`).attr("width", "40").attr("depth", "1").attr("height", "20").attr("color", "#7BC8A4").attr("visible", "true")
    svg1.append("a-box").attr("class", "aplane").attr("position", "-20 0 -10").attr("rotation", `0 -90 0`).attr("width", "20").attr("depth", "0.5").attr("height", "20").attr("color", "#7BC8A4").attr("visible", "true")
}

