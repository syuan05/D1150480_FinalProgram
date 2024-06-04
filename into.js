var clickCounts = [0, 0, 0, 0, 0, 0];

function photoClicked(index) {
    clickCounts[index]++;
    document.getElementById("clickCount" + index).innerText = "投票: " + clickCounts[index];
}

function resetVotes() {
    clickCounts = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 6; i++) {
        document.getElementById("clickCount" + i).innerText = "投票: 0";
    }
}

for (var i = 0; i < 6; i++) {
    document.getElementById("photo" + (i + 1)).innerHTML += "<br><div class='click-count' id='clickCount" + i + "'>票數: 0</div>";
    var imgElement = document.querySelector("#photo" + (i + 1) + " img");
    imgElement.addEventListener("click", (function (index) {
        return function () {
            photoClicked(index);
        };
    })(i));
}
