import React from "react";

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({
  src = "/images/default-img.png",
  alt = "default",
  className = "",
  size,
  style,
}) => {
  const getClass = () => {
    const sizes: any = {
      sm: "img-sm",
      md: "img-md",
      lg: "img-lg",
    };
    return sizes[size ?? ""] ?? "";
  };

  return (
    <img
      style={style}
      className={`img ${getClass()} ${className}`}
      src={src}
      alt={alt}
    />
  );
};

export default Image;
