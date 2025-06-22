import Image from "next/image"; 

export function Languages({ path, imgClassName, label, size = "w-14 h-14", textSize = "text-xs", labelMargin = "mt-1", forceColumn }) {
  return (
    <Logo
      path={path}
      className={`${size} rounded-full border-4 border-blue-500 overflow-hidden flex items-center justify-center bg-white`}
      imgClassName={imgClassName}
      label={label}
      textSize={textSize}
      labelMargin={labelMargin}
      forceColumn={forceColumn}
    />
  );
}

export function Platforms({ path, label, size = "w-12 h-12", imgClassName, textSize = "text-xs", labelMargin = "mt-1", forceColumn }) {
  return (
    <Logo
      path={path}
      className={`${size} rounded border-4 border-purple-500 overflow-hidden flex items-center justify-center bg-white rotate-45`}
      imgClassName={imgClassName || "-rotate-45 w-8 h-8"}
      label={label}
      labelClassName="mt-3 sm:mt-0 sm:ml-4"
      textSize={textSize}
      labelMargin={labelMargin}
      forceColumn={forceColumn}
    />
  );
}

export function Frameworks({ path, label, size = "w-14 h-14", imgClassName, textSize = "text-xs", labelMargin = "mt-1", forceColumn }) {
  return (
    <Logo
      path={path}
      className={`${size} rounded border-4 border-green-600 overflow-hidden flex items-center justify-center bg-white`}
      imgClassName={imgClassName}
      label={label}
      textSize={textSize}
      labelMargin={labelMargin}
      forceColumn={forceColumn}
    />
  );
}

export function Logo({
  path,
  className,
  imgClassName,
  label,
  labelClassName,
  textSize = "text-xs",
  labelMargin = "mt-1",
  forceColumn = false,
  width = "w-14",
}) {
  return (
    <div className={`flex flex-col items-center ${width}`}>
      <div className={className}>
        <img src={path} alt={label || "Logo"} className={`object-contain ${imgClassName || "w-10 h-10"}`} />
      </div>
      <p className={`${labelMargin} text-gray-400 uppercase tracking-wide font-semibold ${labelClassName || ""} ${textSize}`}>{label}</p>
    </div>
  );
}