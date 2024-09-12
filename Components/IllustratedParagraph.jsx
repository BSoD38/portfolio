import React from "react";

export default function IllustratedParagraph({
                                               children,
                                               image,
                                               imageClass,
                                               imageHref,
                                               paragraphLeft = false,
                                               textColumnClasses = "",
                                               imageColumnClasses = "is-one-quarter"
                                             }) {
  let imageDom;
  if (imageHref) {
    imageDom = <a href={imageHref} target="_blank"><img src={image} className={imageClass}/></a>;
  } else {
    imageDom = <img src={image} className={imageClass}/>;
  }

  return (
    <section className="section columns is-centered">
      {
        paragraphLeft ?
          <>
            <div className={`column ${textColumnClasses}`}>
              {children}
            </div>
            <div className={`column v-centered ${imageColumnClasses}`}>
              {imageDom}
            </div>
          </> :
          <>
            <div className={`column v-centered ${imageColumnClasses}`}>
              {imageDom}
            </div>
            <div className={`column ${textColumnClasses}`}>
              {children}
            </div>
          </>
      }
    </section>
  );
}