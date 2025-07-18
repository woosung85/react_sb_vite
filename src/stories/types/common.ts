// import React from "react";

export interface commonProps {
  className?: string;
  style?: React.CSSProperties;
  p?: string | number;
  px? : string  | number;
  py? : string  | number;
  pt? : string  | number;
  pb? : string  | number;
  pl? : string  | number;
  pr? : string  | number;
  m?: string | number;
  mx? : string | number;
  my? : string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;

  w?: string | number;
  h?: string | number;
  minW?: string | number;
  minH?: string | number;
  maxW?: string | number;
  maxH?: string | number;

  flex?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  gap?: string | number;
  display?: 'flex' | 'block' | 'inline-flex' | 'inline' | 'grid' | 'inline-grid' | 'none';


}
