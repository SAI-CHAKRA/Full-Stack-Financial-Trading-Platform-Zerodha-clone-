import React from 'react';
import { render, screen } from '@testing-library/react'; // 1. Correct source for render/screen
import '@testing-library/jest-dom'; // 2. Correct and current import for matchers

import Hero from "../home/Hero"

describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png")
    })
})