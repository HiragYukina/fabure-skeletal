
const storage = require("electron-json-storage")

const data = {
    "name": "face",
    "src": "images/face.png",
    "position": {
        "x": 190,
        "y": 100
    },
    "rotate": 0,
    "scale": {
        "side": 1,
        "vertical": 1
    },
    "children": [{
        "name": "body",
        "src": "images/body.png",
        "position": {
            "x": 200,
            "y": 164
        },
        "rotate": 0,
        "scale": {
            "side": 1,
            "vertical": 1
        },
        "children": [{
                "name": "rightArm",
                "src": "images/arm.png",
                "position": {
                    "x": 168,
                    "y": 174
                },
                "rotate": 45,
                "scale": {
                    "side": 1,
                    "vertical": 1
                },
                "children": []
            },
            {
                "name": "rightLeg",
                "src": "images/arm.png",
                "position": {
                    "x": 200,
                    "y": 240
                },
                "rotate": 0,
                "scale": {
                    "side": 1,
                    "vertical": 1
                },
                "children": []
            },
            {
                "name": "leftArm",
                "src": "images/arm.png",
                "position": {
                    "x": 246,
                    "y": 174
                },
                "rotate": -45,
                "scale": {
                    "side": 1,
                    "vertical": 1
                },
                "children": []
            },
            {
                "name": "leftLeg",
                "src": "images/arm.png",
                "position": {
                    "x": 220,
                    "y": 244
                },
                "rotate": 0,
                "scale": {
                    "side": 1,
                    "vertical": 1
                },
                "children": []
            }
        ]
    }]

}

storage.set('./data/config.json', data, function (error) {
    if (error) throw error;
});
