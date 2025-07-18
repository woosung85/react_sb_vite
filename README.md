# react_sb_vite


node.js 설치
react vite 기반 설정
vite 기반 스토리북 설정

1.현재 터미널 폴더에서 실행
npm create vite@latest . -- --template react-ts
2. npm install
3. npx storybook@latest init --builder vite -> 스토리북 설치



npm run dev 터미널 실행


------------------------------------
svg 아이콘 추가시 
src/stories/Atoms/UIIcon/icons -> 폴더에 파일 추가 
파일 추가후 

터미널에서 npm run generate:icons; 실행
실행후 src/stories/Atoms/UIIcon/icons 의 icon.ts에 추가한 파일 import 



