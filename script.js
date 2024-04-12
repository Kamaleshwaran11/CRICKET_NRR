function calculateNetRunRate() {
    var totalRunsScored = parseInt(document.getElementById("runs").value);
    var totalOversFaced = parseInt(document.getElementById("overs").value);
    var totalRunsConceded = parseInt(document.getElementById("conceded").value);
    var totalOversBowled = parseInt(document.getElementById("bowled").value);

    if (!isNaN(totalRunsScored) && !isNaN(totalOversFaced) && !isNaN(totalRunsConceded) && !isNaN(totalOversBowled) && totalOversFaced !== 0 && totalOversBowled !== 0) {
        var netRunRate = ((totalRunsScored / totalOversFaced) - (totalRunsConceded / totalOversBowled)).toFixed(2);
        document.getElementById("result").innerText = "Net Run Rate: " + netRunRate;
    } else {
        document.getElementById("result").innerText = "Please enter valid values for runs, overs faced, runs conceded, and overs bowled.";
    }
}