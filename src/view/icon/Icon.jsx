import React from 'react'
import Icon from '@ant-design/icons'

const ProductSelectSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#ffffff'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
  </svg>
)
export const ProductSelectIcon = (props) => <Icon component={ProductSelectSvg} {...props} />
const ProductNextSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#ffffff'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z' />
  </svg>
)
export const ProductNextIcon = (props) => <Icon component={ProductNextSvg} {...props} />
const ProductExpandSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#ffffff'>
    <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
    <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
  </svg>
)
export const ProductExpandIcon = (props) => <Icon component={ProductExpandSvg} {...props} />

const CarouselNextSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z' />
  </svg>
)
export const CarouselNextIcon = (props) => <Icon component={CarouselNextSvg} {...props} />
const CarouselPrevSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' />
  </svg>
)
export const CarouselPrevIcon = (props) => <Icon component={CarouselPrevSvg} {...props} />
const PhotoUploadSvg = () => (
  <svg
    enableBackground='new 0 0 24 24'
    height='36px'
    viewBox='0 0 24 24'
    width='36px'
    fill='#000000'
  >
    <g>
      <rect fill='none' height='24' width='24' />
    </g>
    <g>
      <path d='M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z' />
    </g>
  </svg>
)
export const PhotoUploadIcon = (props) => <Icon component={PhotoUploadSvg} {...props} />
const PhotoViewSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z' />
  </svg>
)
export const PhotoViewIcon = (props) => <Icon component={PhotoViewSvg} {...props} />

const ListFeedbackSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z' />
  </svg>
)
export const ListFeedbackIcon = (props) => <Icon component={ListFeedbackSvg} {...props} />
const ListFlagSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z' />
  </svg>
)
export const ListFlagIcon = (props) => <Icon component={ListFlagSvg} {...props} />
const ListBlockSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z' />
  </svg>
)
export const ListBlockIcon = (props) => <Icon component={ListBlockSvg} {...props} />
const ListTickSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
  </svg>
)
export const ListTickIcon = (props) => <Icon component={ListTickSvg} {...props} />
const ListOpenSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z' />
  </svg>
)
export const ListOpenIcon = (props) => <Icon component={ListOpenSvg} {...props} />
const ListImageSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' />
  </svg>
)
export const ListImageIcon = (props) => <Icon component={ListImageSvg} {...props} />
const ListPrintSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#ffffff'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z' />
    <circle cx='18' cy='11.5' r='1' />
  </svg>
)
export const ListPrintIcon = (props) => <Icon component={ListPrintSvg} {...props} />
const ListDeleteSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#ffffff'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
  </svg>
)
export const ListDeleteIcon = (props) => <Icon component={ListDeleteSvg} {...props} />
const ListEditSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#ffffff'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
  </svg>
)
export const ListEditIcon = (props) => <Icon component={ListEditSvg} {...props} />
const ListSearchSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#ffffff'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
  </svg>
)
export const ListSearchIcon = (props) => <Icon component={ListSearchSvg} {...props} />
const ListAddSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#ffffff'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
  </svg>
)
export const ListAddIcon = (props) => <Icon component={ListAddSvg} {...props} />

const MainProductSvg = () => (
  <svg
    enableBackground='new 0 0 24 24'
    height='36px'
    viewBox='0 0 24 24'
    width='36px'
    fill='#000000'
  >
    <rect fill='none' height='24' width='24' />
    <path d='M9.5,6.5v3h-3v-3H9.5 M11,5H5v6h6V5L11,5z M9.5,14.5v3h-3v-3H9.5 M11,13H5v6h6V13L11,13z M17.5,6.5v3h-3v-3H17.5 M19,5h-6v6 h6V5L19,5z M13,13h1.5v1.5H13V13z M14.5,14.5H16V16h-1.5V14.5z M16,13h1.5v1.5H16V13z M13,16h1.5v1.5H13V16z M14.5,17.5H16V19h-1.5 V17.5z M16,16h1.5v1.5H16V16z M17.5,14.5H19V16h-1.5V14.5z M17.5,17.5H19V19h-1.5V17.5z M22,7h-2V4h-3V2h5V7z M22,22v-5h-2v3h-3v2 H22z M2,22h5v-2H4v-3H2V22z M2,2v5h2V4h3V2H2z' />
  </svg>
)
export const MainProductIcon = (props) => <Icon component={MainProductSvg} {...props} />
const MainSaleSvg = () => (
  <svg
    enableBackground='new 0 0 24 24'
    height='36px'
    viewBox='0 0 24 24'
    width='36px'
    fill='#000000'
  >
    <path d='M0,0h24v24H0V0z' fill='none' />
    <g>
      <path d='M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z' />
      <rect height='2' width='6' x='9' y='7' />
      <rect height='2' width='2' x='16' y='7' />
      <rect height='2' width='6' x='9' y='10' />
      <rect height='2' width='2' x='16' y='10' />
    </g>
  </svg>
)
export const MainSaleIcon = (props) => <Icon component={MainSaleSvg} {...props} />
const MainReceiveSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M18.41 5.8L17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z' />
  </svg>
)
export const MainReceiveIcon = (props) => <Icon component={MainReceiveSvg} {...props} />
const MainDeliverySvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' />
  </svg>
)
export const MainDeliveryIcon = (props) => <Icon component={MainDeliverySvg} {...props} />

const HeaderLogoutSvg = () => (
  <svg
    enableBackground='new 0 0 24 24'
    height='36px'
    viewBox='0 0 24 24'
    width='36px'
    fill='#ffffff'
  >
    <g>
      <path d='M0,0h24v24H0V0z' fill='none' />
    </g>
    <g>
      <path d='M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z' />
    </g>
  </svg>
)
export const HeaderLogoutIcon = (props) => <Icon component={HeaderLogoutSvg} {...props} />
const HeaderAccountSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#ffffff'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z' />
  </svg>
)
export const HeaderAccountIcon = (props) => <Icon component={HeaderAccountSvg} {...props} />

const LoginPasswordOffSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z' fill='none' />
    <path d='M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z' />
  </svg>
)
export const LoginPasswordOffIcon = (props) => <Icon component={LoginPasswordOffSvg} {...props} />
const LoginPasswordOnSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z' />
  </svg>
)
export const LoginPasswordOnIcon = (props) => <Icon component={LoginPasswordOnSvg} {...props} />
const LoginPasswordSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z' />
  </svg>
)
export const LoginPasswordIcon = (props) => <Icon component={LoginPasswordSvg} {...props} />
const LoginAccountSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
  </svg>
)
export const LoginAccountIcon = (props) => <Icon component={LoginAccountSvg} {...props} />

const UtilCloseSvg = () => (
  <svg height='36px' viewBox='0 0 24 24' width='36px' fill='#000000'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
  </svg>
)
export const UtilCloseIcon = (props) => <Icon component={UtilCloseSvg} {...props} />
