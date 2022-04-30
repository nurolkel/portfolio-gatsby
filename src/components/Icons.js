import React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../utils/breakpoints";
import { FaGitAlt, FaHtml5, FaCss3Alt, FaWordpress, FaWix, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiStyledcomponents, SiGatsby, SiNextdotjs, SiNetlify, SiVercel, SiFirebase, SiContentful } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const iconsData = [
    {
        Icon: FaGitAlt,
        name: "Git",
    },
    {
        Icon: FaHtml5,
        name: "HTML5",
    }
];
const iconsArray = [...iconsData]



