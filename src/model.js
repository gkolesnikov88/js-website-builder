import image from './assets/descr_image.png';
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
  new TitleBlock('Website builder on pure Javascript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Picture'
  }),
  new ColumnsBlock([
    'First',
    'Second',
    'Third',
    'Fourth',
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock('Some text', {
    styles: {
      background: 'linear-gradient(to right, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),
]
