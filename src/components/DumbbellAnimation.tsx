"use client";

import React from 'react';
import { useLottie } from 'lottie-react';

// Placeholder Lottie JSON for a dumbbell.
// You should replace this with the actual JSON data for your chosen dumbbell animation.
const dumbbellAnimationData = {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 60,
    "w": 100,
    "h": 100,
    "nm": "Dumbbell",
    "ddd": 0,
    "assets": [],
    "layers": [
        {
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "Dumbbell",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100, "ix": 11 },
                "r": { "a": 0, "k": 0, "ix": 10 },
                "p": { "a": 0, "k": [50, 50, 0], "ix": 2 },
                "a": { "a": 0, "k": [50, 50, 0], "ix": 1 },
                "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }
            },
            "ao": 0,
            "shapes": [
                {
                    "ty": "gr",
                    "it": [
                        {
                            "ind": 0,
                            "ty": "sh",
                            "ix": 1,
                            "ks": {
                                "k": {
                                    "i": [
                                        [0.75, 0.75],
                                        [0.75, -0.75],
                                        [-0.75, -0.75],
                                        [-0.75, 0.75]
                                    ],
                                    "o": [
                                        [-0.75, 0.75],
                                        [0.75, 0.75],
                                        [0.75, -0.75],
                                        [-0.75, -0.75]
                                    ],
                                    "v": [
                                        [20, -10],
                                        [20, 10],
                                        [-20, 10],
                                        [-20, -10]
                                    ]
                                },
                                "ix": 2
                            },
                            "nm": "Bar",
                            "mn": "ADBE Vector Shape - Group",
                            "hd": false
                        },
                        {
                            "ty": "fl",
                            "c": { "a": 0, "k": [0.8, 0.8, 0.8, 1], "ix": 3 },
                            "o": { "a": 0, "k": 100, "ix": 4 },
                            "r": 1,
                            "nm": "Fill",
                            "mn": "ADBE Vector Fill",
                            "hd": false
                        },
                        {
                            "ty": "st",
                            "c": { "a": 0, "k": [0.2, 0.2, 0.2, 1], "ix": 5 },
                            "o": { "a": 0, "k": 100, "ix": 6 },
                            "w": { "a": 0, "k": 2, "ix": 7 },
                            "lc": 1,
                            "lj": 1,
                            "ml": 4,
                            "nm": "Stroke",
                            "mn": "ADBE Vector Stroke",
                            "hd": false
                        },
                        {
                            "ty": "tr",
                            "p": { "a": 0, "k": [0, 0], "ix": 2 },
                            "a": { "a": 0, "k": [0, 0], "ix": 1 },
                            "s": { "a": 0, "k": [100, 100], "ix": 3 },
                            "r": { "a": 0, "k": 0, "ix": 6 },
                            "o": { "a": 0, "k": 100, "ix": 7 },
                            "sk": { "a": 0, "k": 0, "ix": 4 },
                            "sa": { "a": 0, "k": 0, "ix": 5 },
                            "nm": "Transform"
                        }
                    ],
                    "nm": "Bar Group",
                    "mn": "ADBE Vector Group",
                    "hd": false
                },
                {
                    "ty": "gr",
                    "it": [
                        {
                            "ind": 0,
                            "ty": "sh",
                            "ix": 1,
                            "ks": {
                                "k": {
                                    "i": [
                                        [0.552, 0],
                                        [0, 0.552],
                                        [-0.552, 0],
                                        [0, -0.552]
                                    ],
                                    "o": [
                                        [0, -0.552],
                                        [-0.552, 0],
                                        [0, 0.552],
                                        [0.552, 0]
                                    ],
                                    "v": [
                                        [15, 0],
                                        [0, 15],
                                        [-15, 0],
                                        [0, -15]
                                    ]
                                },
                                "ix": 2
                            },
                            "nm": "Weight Left",
                            "mn": "ADBE Vector Shape - Group",
                            "hd": false
                        },
                        {
                            "ty": "fl",
                            "c": { "a": 0, "k": [0.6, 0.6, 0.6, 1], "ix": 3 },
                            "o": { "a": 0, "k": 100, "ix": 4 },
                            "r": 1,
                            "nm": "Fill",
                            "mn": "ADBE Vector Fill",
                            "hd": false
                        },
                        {
                            "ty": "st",
                            "c": { "a": 0, "k": [0.2, 0.2, 0.2, 1], "ix": 5 },
                            "o": { "a": 0, "k": 100, "ix": 6 },
                            "w": { "a": 0, "k": 2, "ix": 7 },
                            "lc": 1,
                            "lj": 1,
                            "ml": 4,
                            "nm": "Stroke",
                            "mn": "ADBE Vector Stroke",
                            "hd": false
                        },
                        {
                            "ty": "tr",
                            "p": { "a": 0, "k": [-20, 0], "ix": 2 },
                            "a": { "a": 0, "k": [0, 0], "ix": 1 },
                            "s": { "a": 0, "k": [100, 100], "ix": 3 },
                            "r": { "a": 0, "k": 0, "ix": 6 },
                            "o": { "a": 0, "k": 100, "ix": 7 },
                            "sk": { "a": 0, "k": 0, "ix": 4 },
                            "sa": { "a": 0, "k": 0, "ix": 5 },
                            "nm": "Transform"
                        }
                    ],
                    "nm": "Weight Left Group",
                    "mn": "ADBE Vector Group",
                    "hd": false
                },
                {
                    "ty": "gr",
                    "it": [
                        {
                            "ind": 0,
                            "ty": "sh",
                            "ix": 1,
                            "ks": {
                                "k": {
                                    "i": [
                                        [0.552, 0],
                                        [0, 0.552],
                                        [-0.552, 0],
                                        [0, -0.552]
                                    ],
                                    "o": [
                                        [0, -0.552],
                                        [-0.552, 0],
                                        [0, 0.552],
                                        [0.552, 0]
                                    ],
                                    "v": [
                                        [15, 0],
                                        [0, 15],
                                        [-15, 0],
                                        [0, -15]
                                    ]
                                },
                                "ix": 2
                            },
                            "nm": "Weight Right",
                            "mn": "ADBE Vector Shape - Group",
                            "hd": false
                        },
                        {
                            "ty": "fl",
                            "c": { "a": 0, "k": [0.6, 0.6, 0.6, 1], "ix": 3 },
                            "o": { "a": 0, "k": 100, "ix": 4 },
                            "r": 1,
                            "nm": "Fill",
                            "mn": "ADBE Vector Fill",
                            "hd": false
                        },
                        {
                            "ty": "st",
                            "c": { "a": 0, "k": [0.2, 0.2, 0.2, 1], "ix": 5 },
                            "o": { "a": 0, "k": 100, "ix": 6 },
                            "w": { "a": 0, "k": 2, "ix": 7 },
                            "lc": 1,
                            "lj": 1,
                            "ml": 4,
                            "nm": "Stroke",
                            "mn": "ADBE Vector Stroke",
                            "hd": false
                        },
                        {
                            "ty": "tr",
                            "p": { "a": 0, "k": [20, 0], "ix": 2 },
                            "a": { "a": 0, "k": [0, 0], "ix": 1 },
                            "s": { "a": 0, "k": [100, 100], "ix": 3 },
                            "r": { "a": 0, "k": 0, "ix": 6 },
                            "o": { "a": 0, "k": 100, "ix": 7 },
                            "sk": { "a": 0, "k": 0, "ix": 4 },
                            "sa": { "a": 0, "k": 0, "ix": 5 },
                            "nm": "Transform"
                        }
                    ],
                    "nm": "Weight Right Group",
                    "mn": "ADBE Vector Group",
                    "hd": false
                }
            ],
            "ip": 0,
            "op": 60,
            "st": 0,
            "bm": 0
        }
    ]
};

interface DumbbellAnimationProps {
    width?: string;
    height?: string;
}

export default function DumbbellAnimation({ width = '40px', height = '40px' }: DumbbellAnimationProps) {
    const options = {
        animationData: dumbbellAnimationData,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return (
        <div style={{ width, height }}>
            {View}
        </div>
    );
}
