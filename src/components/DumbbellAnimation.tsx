"use client";

import React from 'react';
import { useLottie } from 'lottie-react';

// Nuevo JSON de Lottie para una pesa animada.
// Este JSON es un ejemplo más complejo y animado.
const dumbbellAnimationData = {
    "v": "5.7.4",
    "fr": 60,
    "ip": 0,
    "op": 120,
    "w": 100,
    "h": 100,
    "nm": "Dumbbell Animation",
    "ddd": 0,
    "assets": [],
    "layers": [
        {
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "Dumbbell Bar",
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
                                        [20, -5],
                                        [20, 5],
                                        [-20, 5],
                                        [-20, -5]
                                    ]
                                },
                                "ix": 2
                            },
                            "nm": "Bar Shape",
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
                        }
                    ],
                    "nm": "Bar Group",
                    "mn": "ADBE Vector Group",
                    "hd": false
                }
            ],
            "ip": 0,
            "op": 120,
            "st": 0,
            "bm": 0
        },
        {
            "ddd": 0,
            "ind": 2,
            "ty": 4,
            "nm": "Weight Left",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100, "ix": 11 },
                "r": { "a": 1, "k": [{ "t": 0, "s": [0] }, { "t": 60, "s": [360] }, { "t": 120, "s": [0] }], "ix": 10 },
                "p": { "a": 0, "k": [25, 50, 0], "ix": 2 },
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
                                        [10, 0],
                                        [0, 10],
                                        [-10, 0],
                                        [0, -10]
                                    ]
                                },
                                "ix": 2
                            },
                            "nm": "Weight Left Shape",
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
                        }
                    ],
                    "nm": "Weight Left Group",
                    "mn": "ADBE Vector Group",
                    "hd": false
                }
            ],
            "ip": 0,
            "op": 120,
            "st": 0,
            "bm": 0
        },
        {
            "ddd": 0,
            "ind": 3,
            "ty": 4,
            "nm": "Weight Right",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100, "ix": 11 },
                "r": { "a": 1, "k": [{ "t": 0, "s": [0] }, { "t": 60, "s": [-360] }, { "t": 120, "s": [0] }], "ix": 10 },
                "p": { "a": 0, "k": [75, 50, 0], "ix": 2 },
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
                                        [10, 0],
                                        [0, 10],
                                        [-10, 0],
                                        [0, -10]
                                    ]
                                },
                                "ix": 2
                            },
                            "nm": "Weight Right Shape",
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
                        }
                    ],
                    "nm": "Weight Right Group",
                    "mn": "ADBE Vector Group",
                    "hd": false
                }
            ],
            "ip": 0,
            "op": 120,
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
