import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #f00;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px #ddd solid;

  & > * {
    margin: 0 1rem;
  }
`;

const LinkStyled = styled(Link)`
  display: flex;
`;

const SvgStyled = styled.svg`
  height: 1.2rem;
`;

const Header = () => {
  return <ContainerStyled>
    <LinkStyled to="/">
      <SvgStyled viewBox="0 0 215 70" version="1.1">
        <defs>
          <linearGradient x1="-213.617434%" y1="50.0143293%" x2="100.003663%" y2="50.0143293%" id="linearGradient-1">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="-210.040322%" y1="49.9856707%" x2="100.117195%" y2="49.9856707%" id="linearGradient-2">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="306.154054%" y1="50.0143731%" x2="-256.248649%" y2="50.0143731%" id="linearGradient-3">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="-382.77%" y1="49.9856269%" x2="1103.58%" y2="49.9856269%" id="linearGradient-4">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="-844.047619%" y1="49.71%" x2="611.928571%" y2="49.71%" id="linearGradient-5">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="-1386.92143%" y1="50.29%" x2="99.4285714%" y2="50.29%" id="linearGradient-6">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="-14.9128571%" y1="49.9856269%" x2="1471.43714%" y2="49.9856269%" id="linearGradient-7">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="-385%" y1="50%" x2="1110.00857%" y2="50%" id="linearGradient-8">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="2.58677949%" y1="50%" x2="518.59192%" y2="50%" id="linearGradient-9">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="-64.628968%" y1="50%" x2="440.107337%" y2="50%" id="linearGradient-10">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="-203.141081%" y1="50.0143731%" x2="359.261622%" y2="50.0143731%" id="linearGradient-11">
            <stop stopColor="#FF4E00" offset="0%"></stop>
            <stop stopColor="#FF1791" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Apple-TV" transform="translate(-620.000000, -267.000000)" fillRule="nonzero">
            <g id="Mux_Logo_Pixels_Medium" transform="translate(620.000000, 267.000000)">
              <path d="M201.943724,67.069223 C204.891915,70.0191554 209.524787,70.0191554 212.262394,67.069223 C215.210585,64.1192905 215.210585,59.4836824 212.262394,56.7444595 L157.931437,2.38141892 C154.983246,-0.568513514 150.350374,-0.568513514 147.612767,2.38141892 C144.875161,5.33135135 144.664576,9.96695946 147.612767,12.7061824 L201.943724,67.069223 Z" id="Path" fill="url(#linearGradient-1)" opacity="0.7"></path>
              <path d="M157.931437,67.7013514 C154.983246,70.6512838 150.350374,70.6512838 147.612767,67.7013514 C144.875161,64.7514189 144.664576,60.1158108 147.612767,57.3765878 L201.943724,3.0135473 C204.891915,0.0636148649 209.524787,0.0636148649 212.262394,3.0135473 C215,5.96347973 215.210585,10.5990878 212.262394,13.3383108 L157.931437,67.7013514 Z" id="Path" fill="url(#linearGradient-2)"></path>
              <path d="M107.601598,54.6373649 C116.867343,54.6373649 124.448406,47.0518243 124.448406,37.7806081 L124.448406,7.85986486 C124.448406,3.64567568 127.607183,0.274324324 131.818885,0.274324324 C136.030587,0.274324324 139.189363,3.64567568 139.189363,7.85986486 L139.189363,37.5698986 C139.189363,55.0587838 125.080162,69.1763176 107.601598,69.1763176 C103.600481,69.1763176 100.23112,65.8049662 100.23112,61.8014865 C100.441705,57.7980068 103.600481,54.6373649 107.601598,54.6373649 Z" id="Path" fill="url(#linearGradient-3)" opacity="0.7"></path>
              <path d="M62.3258012,0.906452703 C58.1140991,0.906452703 54.9553226,4.27780405 54.9553226,8.49199324 L54.9553226,62.2229054 C54.9553226,66.4370946 58.1140991,69.8084459 62.3258012,69.8084459 C66.5375032,69.8084459 69.6962797,66.4370946 69.6962797,62.2229054 L69.6962797,8.49199324 C69.6962797,4.27780405 66.5375032,0.906452703 62.3258012,0.906452703 Z" id="Path" fill="url(#linearGradient-4)" opacity="0.7"></path>
              <ellipse id="Oval" fill="url(#linearGradient-5)" cx="131.818885" cy="7.64915541" rx="7.37047856" ry="7.37483108"></ellipse>
              <ellipse id="Oval" fill="url(#linearGradient-6)" cx="207.629521" cy="62.4336149" rx="7.37047856" ry="7.37483108"></ellipse>
              <path d="M7.57367471,0.683445946 C3.36197268,0.683445946 0.203196151,4.06570894 0.203196151,8.29353769 L0.203196151,62.1983542 C0.203196151,66.4261829 3.36197268,69.8084459 7.57367471,69.8084459 C11.7853768,69.8084459 14.9441533,66.4261829 14.9441533,62.1983542 L14.9441533,8.29353769 C14.9441533,4.06570894 11.7853768,0.683445946 7.57367471,0.683445946 Z" id="Path" fill="url(#linearGradient-7)"></path>
              <ellipse id="Oval" fill="url(#linearGradient-8)" cx="62.3258012" cy="62.4336149" rx="7.37047856" ry="7.37483108"></ellipse>
              <path d="M29.4745253,40.0984122 C32.4227167,43.0483446 37.055589,43.0483446 39.7931953,40.0984122 C42.5308016,37.1484797 42.7413867,32.5128716 39.7931953,29.7736486 L12.6277172,2.59212838 C9.89011083,-0.357804054 5.25723859,-0.357804054 2.30904717,2.59212838 C-0.639144256,5.54206081 -0.428559155,10.1776689 2.30904717,12.9168919 L29.4745253,40.0984122 Z" id="Path" fill="url(#linearGradient-9)" opacity="0.7"></path>
              <path d="M40.2143655,40.0984122 C37.2661741,43.0483446 32.6333018,43.0483446 29.8956955,40.0984122 C27.1580892,37.1484797 26.9475041,32.5128716 29.8956955,29.7736486 L57.0611736,2.59212838 C60.0093651,-0.357804054 64.6422373,-0.357804054 67.3798436,2.59212838 C70.3280351,5.54206081 70.3280351,10.1776689 67.3798436,12.9168919 L40.2143655,40.0984122 Z" id="Path" fill="url(#linearGradient-10)"></path>
              <path d="M107.601598,54.6373649 C98.3358536,54.6373649 90.7547899,47.0518243 90.7547899,37.7806081 L90.7547899,7.85986486 C90.7547899,3.64567568 87.5960134,0.274324324 83.3843114,0.274324324 C79.1726093,0.274324324 76.0138328,3.64567568 76.0138328,7.85986486 L76.0138328,37.5698986 C76.0138328,55.0587838 90.1230346,69.1763176 107.601598,69.1763176 C111.602715,69.1763176 114.972077,65.8049662 114.972077,61.8014865 C114.761492,57.7980068 111.602715,54.6373649 107.601598,54.6373649 Z" id="Path" fill="url(#linearGradient-11)"></path>
            </g>
          </g>
        </g>
      </SvgStyled>
    </LinkStyled>
    <div>
      <span>Webhook Payload Explorer</span>
    </div>
  </ContainerStyled>;
};

export default Header;
