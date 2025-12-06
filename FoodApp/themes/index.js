
const colorScheme = [
    {
        // orange
        text: "#f97316",
        bgcolor: opacity => `rgba(251,146,60,${opacity} )`
    },
    {
        // dark gray
        text: "#334155",
        bgcolor: opacity => `rgba(30,41,59,${opacity} )`
    },
    {
        //purple
        text: "#7c3aed",
        bgcolor: opacity => `rgba(167,139,250,${opacity} )`
    },
    {
        //green
        text: "#009950",
        bgcolor: opacity => `rgba(0,179,89,${opacity} )`
    },
    {
        //red
        text: "dc2626",
        bgcolor: opacity => `rgba(248,113,113,${opacity} )`
    },
    {
        //teal
        text: "#14b8a6",
        bgcolor: opacity => `rgba(45,212,191,${opacity} )`
    }
]



export const themeColor = {
    ...colorScheme[0]

}
export const themeColor1 = {
    // orange
    text: "#f97316",
    bgcolor: opacity => `rgba(251,146,60,${opacity} )`
}