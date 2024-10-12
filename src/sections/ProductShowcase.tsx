import productImage from "@/assets/ProductImage.webp";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag">AI Powered Resume Builder</div>
          </div>
          <h2 className="section-title mt-5">Chat. Create. Career</h2>
          <p className="section-description mt-5">
            Create a professional resume in minutes with our AI driven chat
            based resume builder.
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="Create a professional resume in minutes with our AI driven chat
            based resume builder."
            className="mt-10"
            placeholder="blur"
            blurDataURL="data:..."
            width={2505}
            height={1566}
            quality={75}
            priority={false}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
