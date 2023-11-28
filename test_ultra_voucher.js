function filter(arr) {
    let anagramGrouping = []

    for (let x = 0; x < arr.length; x++) {
        let val = true
        let check = 0

        for (let a = 0; a < anagramGrouping.length; a++) {
            for (let v = 0; v < anagramGrouping[a].length; v++) {

                if (arr[x] == anagramGrouping[a][v]) {
                    val = false;
                }

            }
        }
        
        if (val) {
            for (let i = x + 1; i < arr.length; i++) {
                let val2 = true

                let gv = 0;
                if (arr[x].length == arr[i].length) {

                    for (let y = 0; y < arr[x].length; y++) {

                        for (let z = 0; z < arr[i].length; z++) {

                            if (arr[x][y] == arr[i][z]) {
                                gv += 1
                            }

                        }

                        if (gv < 1) {
                            val2 = false
                        }

                    }


                    if (val2) {
                        if (check == 0) {
                            anagramGrouping.push([arr[i]])
                            check++
                        } else {
                            anagramGrouping[anagramGrouping.length - 1].push(arr[i])
                        }
                    }
                }

            }
            if (check == 0) {
                anagramGrouping.push([arr[x]])
            } else {
                anagramGrouping[anagramGrouping.length - 1].push(arr[x])
            }
        }
    }

    return anagramGrouping
}

function main() {
    const data = ["cook", "save", "taste", "aves", "state", "map", "vase","evas","pam"]
    let arr = filter(data)
    arr.map((v) => {
        console.log(v);
    })
}

main()