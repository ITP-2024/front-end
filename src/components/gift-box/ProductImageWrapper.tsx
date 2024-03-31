import NextImage, { type ImageProps } from "next/image";

export const ProductImageWrapper = (props: ImageProps) => {
	return (
		<div>
			<NextImage {...props} className="h-auto w-full object-contain object-center mb-2" />
		</div>
	);
};
