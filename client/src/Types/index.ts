type HeadphonesCategoryImage = {
  desktop: string;
  mobile: string;
  tablet: string;
};

type HeadphonesGallery = {
  first: HeadphonesGalleryFirst;
  second: HeadphonesGallerySecond;
  third: HeadphonesGalleryThird;
};

type HeadphonesGalleryFirst = {
  desktop: string;
  mobile: string;
  tablet: string;
};

type HeadphonesGallerySecond = {
  desktop: string;
  mobile: string;
  tablet: string;
};

type HeadphonesGalleryThird = {
  desktop: string;
  mobile: string;
  tablet: string;
};

type HeadphonesImage = {
  desktop: string;
  mobile: string;
  tablet: string;
};

type HeadphonesIncludes = {
  item: string;
  quantity: number;
};

type HeadphonesOthers = {
  image: HeadphonesOthersImage;
  name: string;
  slug: string;
};

type HeadphonesOthersImage = {
  desktop: string;
  mobile: string;
  tablet: string;
};

export interface headPhoneEarPhoneSpeakerInterface {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet?: string;
    desktop?: string;
  };
  new: boolean;
  category: string;
  categoryImage: {
    mobile: string;
    tablet?: string;
    desktop?: string;
  };
  description: string;
}

export interface headPhoneEarPhoneSpeakerInterfaceDetail {
  id: string;
  category: string;
  categoryImage: HeadphonesCategoryImage;
  description: string;
  features: string;
  gallery: HeadphonesGallery;
  image: HeadphonesImage;
  includes: HeadphonesIncludes[];
  name: string;
  new: boolean;
  others: HeadphonesOthers[];
  price: number;
  slug: string;
}

export interface CardWithImageSpeakersPropsType {
  title: string;
  description: string;
  srcMobile: string;
  srcTablet?: string;
  srcDesktop?: string;
  HomePage: boolean;
  New?: boolean;
  Reverse?: boolean;
  url?: string;
}

export interface CardWithOnlyImageAndButtonPropsType {
  imageMobile: string;
  imageTablet: string;
  ImageDesktop: string;
  altText: string;
  Title: string;
  url: string;
}
