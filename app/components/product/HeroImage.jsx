import {Image} from '@shopify/hydrogen-react';

export default function HeroImage({metafield, ...extraProps}) {
  if (metafield !== null) {
    return (
      <div>
        <Image src={metafield.reference.image.originalSrc} {...extraProps} />
      </div>
    );
  }
}
