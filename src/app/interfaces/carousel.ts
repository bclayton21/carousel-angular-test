
export interface CallToActionInterface {
    label: string,
    url: string
}

export interface SlideInterface {
    title: string,
    heading?: string,
    subhead: string,
    media: {
        desktop: string,
        mobile: string
    },
    cta: Array<CallToActionInterface>,
    ctaPosition: 'left' | 'center' | 'right'
}

export interface CarouselXhrResponseInterface {
    data: Array<SlideInterface>,
    version: string
}