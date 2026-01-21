"use client";

import React from 'react';
import { useLottie } from 'lottie-react';

// Nuevo JSON de Lottie para una pesa animada.
// Este JSON es un ejemplo más complejo y animado.
import dumbbellAnimationData from "../../public/dumbbell.json";

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
